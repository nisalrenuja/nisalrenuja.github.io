"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Database, Filter, Zap, Layers, Shuffle, Shield, Activity } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Query Hydration",
    icon: Database,
    color: "#6366f1",
    summary: "Load everything about you before fetching a single post.",
    details: [
      "Your engagement history: likes, replies, reposts, dwell time",
      "Accounts you follow, mute, and block",
      "Topics you subscribe to",
      "Your IP address for geo-aware ranking",
      "A Bloom filter of posts you have already seen",
      "Previously served post IDs from this session",
    ],
    code: `let hydrate_futures = hydrators.iter().map(|h| h.run(&query));
let results = join_all(hydrate_futures).await; // parallel fetch
for (hydrator, result) in hydrators.iter().zip(results) {
    if let Ok(hydrated) = result {
        hydrator.update(&mut hydrated_query, hydrated);
    }
}`,
    note: "All hydrators run in parallel and merge into a single ScoredPostsQuery.",
  },
  {
    num: 2,
    title: "Candidate Sourcing",
    icon: Layers,
    color: "#8b5cf6",
    summary: "Collect raw candidates from two parallel sources simultaneously.",
    details: [
      "Thunder: in-memory store, returns posts from accounts you follow with sub-millisecond latency",
      "Phoenix: two-tower neural network finds posts from the global corpus you might engage with",
      "Both sources run in parallel and together produce hundreds of candidates",
      "Thunder reads from Kafka in real time, so no database hit is required",
    ],
    code: `pub struct ThunderServiceImpl {
    post_store: Arc<PostStore>,        // in-memory store
    request_semaphore: Arc<Semaphore>, // backpressure guard
}`,
    note: "Thunder is purely in-network. Phoenix retrieves out-of-network content via ML similarity search.",
  },
  {
    num: 3,
    title: "Candidate Hydration",
    icon: Database,
    color: "#06b6d4",
    summary: "Enrich every candidate with additional metadata in parallel.",
    details: [
      "Core post content (text, media, entities)",
      "Author metadata (username, verification status, follower count)",
      "Engagement counts (likes, replies, reposts)",
      "Video duration and media properties",
      "Brand safety and language signals",
      "Quote post expansion and mutual follow scores",
    ],
    code: `async fn run_hydrators(...) -> Vec<C> {
    let hydrate_futures = hydrators.iter()
        .map(|h| h.run(query, &candidates));
    let results = join_all(hydrate_futures).await; // parallel
    for (hydrator, result) in hydrators.iter().zip(results) {
        hydrator.update_all(&mut candidates, result);
    }
    candidates
}`,
    note: "All candidate hydrators also run in parallel to minimize latency.",
  },
  {
    num: 4,
    title: "Pre-Scoring Filters",
    icon: Filter,
    color: "#f59e0b",
    summary: "Sequential filters narrow the candidate set; anything removed never reaches scoring.",
    details: [
      "DropDuplicatesFilter: same post ID seen more than once",
      "CoreDataHydrationFilter: posts that failed to load metadata",
      "AgeFilter: posts older than MAX_POST_AGE threshold",
      "SelfTweetFilter: your own posts (struct name, source uses 'tweet' internally)",
      "RetweetDeduplicationFilter: keeps only the first occurrence of a tweet ID whether original or retweet",
      "IneligibleSubscriptionFilter: paywalled content you can't access",
      "PreviouslySeenPostsFilter: Bloom filter check against your impression history",
      "PreviouslySeenPostsBackupFilter: secondary seen-post check for resilience",
      "PreviouslyServedPostsFilter: posts already served in this session",
      "MutedKeywordFilter: posts containing your muted words or phrases",
      "AuthorSocialgraphFilter: posts from blocked/muted authors (also catches quote/retweet chains involving blocked users)",
      "VideoFilter: removes video posts that don't meet eligibility criteria",
      "TopicIdsFilter: removes posts that conflict with your topic preferences",
      "NewUserTopicIdsFilter: additional topic filtering for new accounts",
    ],
    code: `// phoenix_candidate_pipeline.rs, actual filter vec in order:
let filters: Vec<Box<dyn Filter<...>>> = vec![
    Box::new(DropDuplicatesFilter),
    Box::new(CoreDataHydrationFilter),
    Box::new(AgeFilter::new(Duration::from_secs(MAX_POST_AGE))),
    Box::new(SelfTweetFilter),
    Box::new(RetweetDeduplicationFilter),
    Box::new(IneligibleSubscriptionFilter),
    Box::new(PreviouslySeenPostsFilter),
    Box::new(PreviouslySeenPostsBackupFilter),
    Box::new(PreviouslyServedPostsFilter),
    Box::new(MutedKeywordFilter::new()),
    Box::new(AuthorSocialgraphFilter),
    Box::new(VideoFilter),
    Box::new(TopicIdsFilter),
    Box::new(NewUserTopicIdsFilter),
];`,
    note: "Filters run sequentially in the order above. A candidate removed at any stage never reaches the scorer.",
  },
  {
    num: 5,
    title: "Scoring & Ranking",
    icon: Zap,
    color: "#10b981",
    summary: "Three scorers run sequentially. RankingScorer is a consolidated scorer that handles weighting, author diversity, and OON adjustment all in one pass.",
    details: [
      "PhoenixScorer: calls the Grok-based transformer via gRPC to get per-action engagement probabilities for each candidate",
      "RankingScorer: consolidated scorer: computes weighted score from 22 action terms, applies author diversity decay, then applies OON weight factor",
      "VMRanker: optional value model ranker (gated by EnableVMRanker flag) that calls an external DPP-based reranking service for final score adjustment",
    ],
    code: `// phoenix_candidate_pipeline.rs
let scorers: Vec<Box<dyn Scorer<...>>> = vec![
    Box::new(PhoenixScorer { phoenix_client, egress_client }),
    Box::new(RankingScorer),   // weighted + diversity + OON
    Box::new(VMRanker { client: vm_ranker_client }), // optional
];

// RankingScorer internally does all three in one pass:
// 1. weighted_score  = Σ (weight_i × P(action_i))   [22 terms]
// 2. diversity_score = weighted × decay^author_count
// 3. final_score     = diversity × oon_weight (if out-of-network)`,
    note: "VMRanker is gated by the EnableVMRanker feature flag. RankingScorer replaced the old separate WeightedScorer + AuthorDiversityScorer + OONScorer pattern.",
  },
  {
    num: 6,
    title: "Selection & Blending",
    icon: Shuffle,
    color: "#ec4899",
    summary: "BlenderSelector partitions candidates and weaves together posts, ads, and modules.",
    details: [
      "Candidates are partitioned by type: posts, ads, WTF modules, prompts",
      "Ads are blended using safe_gap or partition_organic strategy",
      "'Who to Follow' suggestions are inserted at fixed positions",
      "Notification prompts are injected at positions defined in params.rs",
    ],
    code: `let PartitionedFeedItems { posts, ads, wtf_modules,
    prompts, push_to_home } = partition_feed_items(candidates);

let blender = match blender_type.as_str() {
    "safe_gap" => &self.safe_gap_blender,
    _          => &self.partition_organic_blender,
};

let mut blended = blender.blend(posts, ads);
insert_prompts(&mut blended, prompts);
insert_who_to_follow(&mut blended, wtf_modules);`,
    note: "The final ordering of your feed is determined here.",
  },
  {
    num: 7,
    title: "Post-Selection Filters",
    icon: Shield,
    color: "#ef4444",
    summary: "Three final safety filters run after the post-selection hydration pass before the feed is returned.",
    details: [
      "VFFilter: removes posts flagged by the visibility filtering service (deleted, spam, violence, gore) at serve time",
      "AncillaryVFFilter: applies brand-safety visibility filtering to ancillary content (quoted posts, linked media)",
      "DedupConversationFilter: prevents multiple branches of the same conversation thread from all appearing together",
    ],
    code: `// phoenix_candidate_pipeline.rs, actual post-selection filter vec:
let post_selection_filters: Vec<Box<dyn Filter<...>>> = vec![
    Box::new(VFFilter),
    Box::new(AncillaryVFFilter),
    Box::new(DedupConversationFilter),
];

// These run AFTER post-selection hydration
// (VFCandidateHydrator, AdsBrandSafetyHydrator,
//  MutualFollowJaccardHydrator, etc.) has completed`,
    note: "VFFilter and AncillaryVFFilter catch safety signals that arrive after candidate retrieval; the hydrators run first, then these filters act on the hydrated signals.",
  },
  {
    num: 8,
    title: "Side Effects",
    icon: Activity,
    color: "#64748b",
    summary: "Async fire-and-forget tasks run after the response is sent, affecting future feeds, not this one.",
    details: [
      "Publish seen post IDs to Kafka so future requests skip them",
      "Cache the request state in Redis",
      "Log reranking events for analysis",
      "Update the served history store",
      "Report experiment telemetry to Phoenix for model training",
    ],
    code: `fn run_side_effects(&self, input: Arc<SideEffectInput<Q, C>>) {
    tokio::spawn(async move { // non-blocking
        let futures = side_effects.iter()
            .map(|se| se.run(input.clone()));
        let _ = join_all(futures).await;
    });
}`,
    note: "Side effects are non-blocking; they do not delay the current response.",
  },
];

export default function StepExplorer() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  return (
    <div className="my-8 rounded-xl border border-border overflow-hidden">
      <div className="flex overflow-x-auto bg-muted/30 border-b border-border scrollbar-none">
        {steps.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 px-4 py-3 text-xs font-semibold transition-all border-b-2 ${
              active === i
                ? "border-accent text-accent bg-background"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="font-mono mr-1.5 opacity-60">0{s.num}</span>
            {s.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-6"
        >
          <div className="flex items-start gap-4 mb-5">
            <div
              className="p-2.5 rounded-lg flex-shrink-0"
              style={{ backgroundColor: `${step.color}20` }}
            >
              <Icon size={20} style={{ color: step.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-muted-foreground">Step {step.num} of 8</span>
                <ChevronRight size={12} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.summary}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">What happens</p>
              <ul className="space-y-2">
                {step.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-lg bg-muted/40 border border-border/50 px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Note: </span>
                  {step.note}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Source (Rust)</p>
              <pre className="rounded-lg bg-[#0d0d0d] border border-border/50 p-4 overflow-x-auto text-xs leading-relaxed">
                <code className="text-[#a5b4fc] font-mono whitespace-pre">{step.code}</code>
              </pre>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="text-xs font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              ← Previous step
            </button>
            <button
              onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
              disabled={active === steps.length - 1}
              className="text-xs font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              Next step →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
