import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import PipelineDiagram from "./PipelineDiagram";
import StepExplorer from "./StepExplorer";
import ScoringSimulator from "./ScoringSimulator";
import TableOfContents from "./TableOfContents";
import type { Metadata } from "next";
import { breadcrumbJsonLd, jsonLdProps, url } from "@/lib/seo";

export const metadata: Metadata = {
  title: "X For You Feed Algorithm: Deep Dive",
  description:
    "A from-scratch interactive breakdown of how X decides what appears in your For You feed, based on the open-sourced algorithm code.",
  alternates: { canonical: url("/research/x-algorithm") },
};

function CodeBlock({ children, lang = "rust" }: { children: string; lang?: string }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-border/60">
      <div className="flex items-center justify-between bg-code-header px-4 py-2 border-b border-border/60">
        <span className="text-xs font-mono text-muted-foreground">{lang}</span>
      </div>
      <pre className="bg-code-background p-4 overflow-x-auto">
        <code className="text-code-foreground font-mono text-xs leading-relaxed whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

function Callout({ type = "note", children }: { type?: "note" | "warning" | "info"; children: React.ReactNode }) {
  const styles = {
    note: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", label: "Note", color: "text-indigo-700" },
    warning: { bg: "bg-amber-500/10", border: "border-amber-500/30", label: "Warning", color: "text-amber-700" },
    info: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", label: "Info", color: "text-cyan-700" },
  };
  const s = styles[type];
  return (
    <div className={`my-4 rounded-xl border ${s.border} ${s.bg} px-5 py-4`}>
      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${s.color}`}>{s.label}</p>
      <div className="text-sm text-foreground/80">{children}</div>
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 scroll-mt-24 group flex items-center gap-2"
    >
      {children}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-40 text-accent transition-opacity text-lg">#</a>
    </h2>
  );
}

function SubHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="text-lg sm:text-xl font-semibold text-foreground mt-10 mb-4 scroll-mt-24 group flex items-center gap-2"
    >
      {children}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-40 text-accent transition-opacity text-base">#</a>
    </h3>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-foreground/80">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function XAlgorithmPage() {
  return (
    <main id="main" className="min-h-screen bg-background">
      <script
        {...jsonLdProps(
          breadcrumbJsonLd([
            ["Research", "/research"],
            ["X For You Feed Algorithm", "/research/x-algorithm"],
          ])
        )}
      />
      <div className="pt-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/research" className="inline-flex min-h-[44px] items-center hover:text-foreground transition-colors">Research</Link>
            <span>/</span>
            <span className="text-foreground">X Algorithm Deep Dive</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12 xl:gap-16">

          {/* Left sidebar: doc nav */}
          <aside className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
            <nav className="sticky top-24" aria-label="Research navigation">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Research</p>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    href="/research"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition-colors"
                  >
                    <ArrowLeft size={14} />
                    All Research
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-3">Algorithm Series</p>
                <ul className="space-y-0.5">
                  <li>
                    <span className="flex text-sm text-accent font-medium px-3 py-2 rounded-lg bg-accent/10">
                      X For You Algorithm
                    </span>
                  </li>
                  {/* <li>
                    <span className="flex text-sm text-muted-foreground/50 px-3 py-2 rounded-lg cursor-default">
                      YouTube Ranking <span className="ml-auto text-[10px] bg-muted rounded px-1.5 py-0.5">Soon</span>
                    </span>
                  </li>
                  <li>
                    <span className="flex text-sm text-muted-foreground/50 px-3 py-2 rounded-lg cursor-default">
                      TikTok FYP <span className="ml-auto text-[10px] bg-muted rounded px-1.5 py-0.5">Soon</span>
                    </span>
                  </li> */}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">

            {/* Article header */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Algorithm", "ML", "Open Source", "Recommendation Systems"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
                X For You Feed Algorithm
                <br />
                <span className="text-muted-foreground font-normal text-2xl sm:text-3xl">A Deep Dive from Scratch</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-6 pb-6 border-b border-border">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  May 16, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  ~20 min read
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium">xai-org/x-algorithm · May 15, 2026</span>
              </div>

              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Every time you open X, a complex multi-stage pipeline runs to decide what appears in your For You feed.
                On January 20, 2026 xAI first open-sourced the algorithm at <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">github.com/xai-org/x-algorithm</code>,
                then published a major update on May 15, 2026, announced by Elon Musk with 30M+ views.
                This article walks through every component of that latest release: architecture,
                ML models, and filtering logic, with interactive visualizations and real source code.
              </p>
            </div>

            {/* Big Picture */}
            <SectionHeading id="big-picture">Big Picture</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your For You feed is built by three co-operating services, all orchestrated by a central <strong>Home Mixer</strong>.
              The pipeline runs entirely in <strong>Rust</strong> (core pipeline + Thunder) and <strong>Python/JAX</strong> (Phoenix ML models),
              with gRPC connecting each service. The diagram below shows the real-time data flow on every feed request.
            </p>

            <PipelineDiagram />

            <Callout type="info">
              The entire pipeline executes on <strong>every single feed request</strong>, typically in under 150ms.
              Parallelism is used aggressively at every stage where dependencies allow.
            </Callout>

            {/* Four Components */}
            <SectionHeading id="four-components">The Four Core Components</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Before diving into each pipeline stage, here is a quick map of which service does what:
            </p>

            <Table
              headers={["Component", "Language", "Job"]}
              rows={[
                ["Home Mixer", "Rust", "Orchestrates every pipeline stage (the conductor)"],
                ["Thunder", "Rust", "In-memory real-time store of posts from accounts you follow"],
                ["Phoenix", "Python / JAX", "ML retrieval + transformer ranking (Grok-based)"],
                ["Grox", "Python", "Content understanding: spam, safety, topic classification"],
              ]}
            />

            {/* Pipeline Walkthrough */}
            <SectionHeading id="pipeline">Pipeline Walkthrough</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The <code className="text-accent bg-muted px-1.5 py-0.5 rounded text-sm">CandidatePipeline</code> trait
              in Rust defines the exact execution order across eight distinct stages. Use the interactive explorer below
              to walk through each step; you will see the source code, the logic, and why each stage exists.
            </p>

            <CodeBlock lang="rust">{`// candidate-pipeline/candidate_pipeline.rs
async fn execute(&self, query: Q) -> PipelineResult<Q, C> {
    let hydrated_query = self.hydrate_query(query).await;
    let candidates    = self.fetch_candidates(&hydrated_query).await;
    let hydrated      = self.hydrate(&hydrated_query, candidates).await;
    let (kept, _)     = self.filter(&hydrated_query, hydrated);
    let scored        = self.score(&hydrated_query, kept).await;
    let selected      = self.select(&hydrated_query, scored);
    // ... post-selection hydration, filters, side effects
}`}</CodeBlock>

            <StepExplorer />

            {/* Phoenix ML */}
            <SectionHeading id="phoenix-ml">The Phoenix ML Model</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Phoenix is the recommendation engine responsible for discovering out-of-network content.
              It has two components: a <strong>retrieval model</strong> to find candidates, and a
              <strong> ranking model</strong> (a full transformer) to score them.
            </p>

            <SubHeading id="two-tower">Retrieval: Two-Tower Architecture</SubHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The retrieval model uses a classic <strong>two-tower neural network</strong>:
            </p>
            <ul className="space-y-2 mb-4 text-foreground/80">
              <li className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span><strong>User Tower</strong>: encodes your engagement history (post hashes + action types + product surface + dwell time) into a single dense vector.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span><strong>Candidate Tower</strong>: encodes each post in the global corpus into a vector, normalized to the unit sphere for stable dot products.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span><strong>Similarity Search</strong>: dot product between your user vector and all candidate vectors; top-K are returned to the ranking model.</span>
              </li>
            </ul>

            <CodeBlock lang="python">{`# phoenix/recsys_retrieval_model.py
class CandidateTower(hk.Module):
    """Two modes: MLP projection (default) or mean-pool → L2 norm."""

    def __call__(self, post_author_embedding: jax.Array) -> jax.Array:
        # Mean-pool across hash embeddings, then L2-normalize to unit sphere
        candidate_representation = jnp.mean(post_author_embedding, axis=-2)
        candidate_norm_sq = jnp.sum(candidate_representation**2,
                                    axis=-1, keepdims=True)
        # EPS clamp prevents division-by-zero for zero embeddings
        candidate_norm = jnp.sqrt(jnp.maximum(candidate_norm_sq, EPS))
        candidate_representation = candidate_representation / candidate_norm
        return candidate_representation.astype(post_author_embedding.dtype)`}</CodeBlock>

            <SubHeading id="transformer">Ranking: Grok-Based Transformer</SubHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The ranking model is a <strong>Grok-based transformer</strong> (ported from the Grok-1 open-source release).
              It takes three types of input tokens, concatenated into a single sequence:
            </p>
            <ul className="space-y-2 mb-4 text-foreground/80">
              <li className="flex gap-3"><span className="text-accent font-bold">1.</span> Your user embedding (1 token)</li>
              <li className="flex gap-3"><span className="text-accent font-bold">2.</span> Your engagement history (up to 128 tokens)</li>
              <li className="flex gap-3"><span className="text-accent font-bold">3.</span> Candidate posts (up to 32 tokens each)</li>
            </ul>

            <CodeBlock lang="python">{`# phoenix/recsys_model.py
embeddings = jnp.concatenate(
    [user_embeddings, history_embeddings, candidate_embeddings], axis=1
)

# Candidates CANNOT attend to each other, only to user context.
# This makes scores consistent regardless of what else is in the batch.
model_output = self.model(
    embeddings,
    padding_mask,
    candidate_start_offset=candidate_start_offset,
)`}</CodeBlock>

            <Callout type="note">
              A key design choice: <strong>candidates cannot attend to each other</strong>, only to the user context.
              This means a post&apos;s score does not change depending on which other posts are in the same batch,
              making scores deterministic and cache-friendly.
            </Callout>

            <SubHeading id="scoring-formula">Scoring Formula</SubHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The <strong>RankingScorer</strong> computes the weighted score from <strong>22 predicted signals</strong> (20 discrete action probabilities + 2 continuous predictions).
              These are weighted and summed, then author diversity and OON adjustment are applied in the same scorer pass:
            </p>

            <div className="my-4 rounded-xl bg-muted/40 border border-border px-6 py-5 font-mono text-center">
              <p className="text-lg text-foreground">
                weighted = Σ (w<sub className="text-muted-foreground">i</sub> × P(action<sub className="text-muted-foreground">i</sub>))
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                diversity_score = weighted × decay<sup>author_position</sup> &nbsp;·&nbsp; final = diversity × oon_factor
              </p>
            </div>

            <Callout type="info">
              Actual weight values are <strong>runtime feature-switch parameters</strong>, not hardcoded constants; they can be tuned in production without redeploying. The simulator below uses illustrative relative weights to show directionality.
            </Callout>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Drag the sliders to see how adjusting each predicted signal moves the final score. Key additions vs. earlier descriptions: <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">retweet</code> (not &quot;repost&quot;), <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">vqv</code> (video quality view), <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">share_via_dm</code>, <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">quoted_vqv</code>, and <code className="text-accent text-sm bg-muted px-1.5 py-0.5 rounded">not_dwelled</code> as a negative signal.
            </p>

            <ScoringSimulator />

            <p className="text-foreground/80 leading-relaxed mb-4">
              Post age is also a factor, bucketed into 1-hour bins up to 80 hours, giving fresher posts an advantage:
            </p>

            <CodeBlock lang="python">{`# phoenix/recsys_model.py
POST_AGE_MAX_MINUTES = 4800  # 80 hours

def compute_post_age_bucket(impr_ts_sec, post_creation_ts_sec,
                             granularity_mins=60):
    post_age_minutes = (impr_ts_sec - post_creation_ts_sec) // 60
    bucket = (post_age_minutes // granularity_mins) + 1
    return jnp.clip(bucket, 0, overflow_bucket)`}</CodeBlock>

            {/* Grox */}
            <SectionHeading id="grox">The Grox Content Pipeline</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Grox is a separate content-understanding service that runs classifiers against posts
              <em> before</em> they enter the main ranking pipeline. It uses Grok (the LLM) to make decisions.
            </p>

            <Table
              headers={["Classifier", "Purpose"]}
              rows={[
                ["SpamEapiLowFollowerClassifier", "Detects spam from low-follower accounts using Grok"],
                ["Safety / PTOS", "Flags content policy violations"],
                ["Post Category", "Tags posts with topic categories for better matching"],
                ["Media Processing", "Analyses images and video via ASR and vision models"],
              ]}
            />

            <CodeBlock lang="python">{`# grox/classifiers/content/spam.py
class SpamEapiLowFollowerClassifier(ContentClassifier):
    async def _classify(self, post: Post) -> list[ContentCategoryResult]:
        convo = await self._to_convo(post)
        result = await self._sample(convo)   # calls Grok
        return await self._parse(post, result)

# grox/engine.py: processes tasks from an async queue
async def _run(self, started_event: Event):
    await self._init_run()
    while not self._is_shutdown() or not self._task_queue.empty():
        task = await self._poll_task()
        asyncio.create_task(self._run_task(task))`}</CodeBlock>

            {/* Do's */}
            <SectionHeading id="dos">What the Algorithm Rewards</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Based on the scoring formula and pipeline structure, here is what genuinely moves posts higher in feeds:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Strong Engagement Signals",
                  items: ["Likes, retweets, and quote posts are the strongest positive signals", "Replies are weighted positively: a post that sparks conversation rises", "Long dwell time: if people stop scrolling, the RankingScorer rewards it via both dwell_score (discrete) and dwell_time (continuous)"],
                },
                {
                  title: "Account Health",
                  items: ["Mutual follows with your audience improves in-network retrieval", "Consistent recency: Thunder trims old posts, AgeFilter removes stale ones", "Video engagement (vqv_score) and photo expand are dedicated scorer signals; rich media matters"],
                },
                {
                  title: "Discoverability",
                  items: ["Out-of-network retrieval is purely ML-driven via the two-tower model", "Writing content that matches the embedding profile of engaged users is the only reliable lever", "Profile clicks from a post signal the author is discovery-worthy"],
                },
                {
                  title: "Content Integrity",
                  items: ["Posts that pass Grox safety checks get to compete in ranking", "Content that attracts engagement without prompting negative feedback is ideal", "Brand safety signals are hydrated at the candidate level"],
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <p className="text-sm font-bold text-emerald-700 mb-3">{card.title}</p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-emerald-700 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Don'ts */}
            <SectionHeading id="donts">What the Algorithm Penalizes</SectionHeading>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: "Hard Filters (Instant Removal)",
                  items: ["Posts from blocked/muted accounts removed before scoring (AuthorSocialgraphFilter)", "Posts containing muted keywords removed entirely (MutedKeywordFilter)", "Posts flagged by Grox as spam, violence, or PTOS (VFFilter)", "Posts older than the retention threshold (AgeFilter)"],
                },
                {
                  title: "Soft Penalties (Score Reduction)",
                  items: ["'Not Interested': negative weight in RankingScorer pulls down similar content", "Block author and mute author carry the strongest negative weights in the formula", "Report is a dedicated negative signal", "not_dwelled is a negative signal; posts people scroll past fast are penalised", "RankingScorer's author diversity decay attenuates repeated authors; flooding the feed backfires"],
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                  <p className="text-sm font-bold text-red-700 mb-3">{card.title}</p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-red-700 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Design Decisions */}
            <SectionHeading id="design">Key Design Decisions</SectionHeading>

            {[
              {
                num: "01",
                title: "No Hand-Engineered Features",
                body: 'The transformer learns everything from your engagement sequence. There are no manually crafted relevance signals: "We have eliminated every single hand-engineered feature and most heuristics from the system." Keyword stuffing, hashtag farming, and posting at specific times do not directly influence model predictions.',
                code: null,
              },
              {
                num: "02",
                title: "Candidate Isolation in Ranking",
                body: "During transformer inference, candidates only attend to the user context, not to each other. This means scores are deterministic per (user, post) pair regardless of which other posts are being scored in the same batch.",
                code: `model_output = self.model(
    embeddings,
    padding_mask,
    candidate_start_offset=candidate_start_offset,
)`,
                codeLang: "python",
              },
              {
                num: "03",
                title: "Hash-Based Embeddings",
                body: "Both retrieval and ranking use multiple hash functions to look up embeddings. Hash 0 is reserved for padding/missing values. This avoids maintaining a vocabulary and handles rare or unseen IDs gracefully.",
                code: `@dataclass
class HashConfig:
    num_user_hashes:   int = 2
    num_item_hashes:   int = 2
    num_author_hashes: int = 2
    num_ip_hashes:     int = 0`,
                codeLang: "python",
              },
              {
                num: "04",
                title: "Multi-Action Prediction (22 signals)",
                body: "The RankingScorer combines 22 predicted signals (20 discrete action probabilities + 2 continuous predictions like dwell_time and click_dwell_time). Predicting this many distinct engagement types, rather than a single 'relevance' score, lets the feed's character be tuned post-training just by adjusting runtime weight parameters, without retraining. The model outputs discrete logits via an unembedding matrix and continuous predictions via a separate sigmoid head.",
                code: null,
              },
              {
                num: "05",
                title: "Composable Pipeline Architecture",
                body: "Every stage is a pluggable trait. Adding a new filter, scorer, or data source does not require touching the pipeline executor. This is the core pattern that makes the system extensible.",
                code: `pub trait CandidatePipeline<Q, C> {
    fn query_hydrators(&self)        -> &[Box<dyn QueryHydrator<Q>>];
    fn sources(&self)                -> &[Box<dyn Source<Q, C>>];
    fn hydrators(&self)              -> &[Box<dyn Hydrator<Q, C>>];
    fn filters(&self)                -> &[Box<dyn Filter<Q, C>>];
    fn scorers(&self)                -> &[Box<dyn Scorer<Q, C>>];
    fn selector(&self)               -> &dyn Selector<Q, C>;
    fn post_selection_filters(&self) -> &[Box<dyn Filter<Q, C>>];
    fn side_effects(&self)           -> Arc<Vec<Box<dyn SideEffect<Q, C>>>>;
}`,
                codeLang: "rust",
              },
              {
                num: "06",
                title: "In-Memory Real-Time Serving (Thunder)",
                body: "Thunder avoids database reads for in-network content by maintaining post data entirely in memory, updated live from Kafka. This gives sub-millisecond retrieval latency for followed accounts, a crucial performance optimization at X's scale.",
                code: null,
              },
            ].map((d) => (
              <div key={d.num} className="mt-8 border-l-2 border-accent/30 pl-6">
                <p className="text-xs font-mono text-muted-foreground mb-1">{d.num}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-2">{d.body}</p>
                {d.code && <CodeBlock lang={d.codeLang}>{d.code}</CodeBlock>}
              </div>
            ))}

            {/* Misconceptions */}
            <SectionHeading id="misconceptions">Common Misconceptions</SectionHeading>
            <p className="text-foreground/80 leading-relaxed mb-6">
              These myths persist because the algorithm is opaque by default. The open-source code corrects them:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  myth: "More hashtags = more reach",
                  reality: "Hashtags are not in the scoring formula. Engagement patterns drive reach, not metadata.",
                },
                {
                  myth: "Posting at peak hours is the trick",
                  reality: "The age bucket normalizes recency across all hours. There is no peak-hour boost in the model.",
                },
                {
                  myth: "High follower count guarantees visibility",
                  reality: "RankingScorer applies an author diversity decay multiplier. A smaller account with better engagement can outrank a large one with worse engagement.",
                },
                {
                  myth: "The algorithm only shows you people you follow",
                  reality: "Phoenix retrieval (out-of-network) content from accounts you have never seen can fill a large portion of your feed.",
                },
                {
                  myth: "Negative feedback only hurts that one post",
                  reality: "The transformer is trained on your full engagement sequence. Consistent negative signals reshape what the model predicts you will like across future sessions.",
                },
                {
                  myth: "Going viral once permanently boosts your account",
                  reality: "Scores are computed per (user, post) pair. Past virality carries no persistent account-level boost; each post is scored independently against each viewer's history.",
                },
              ].map(({ myth, reality }) => (
                <div key={myth} className="rounded-xl border border-border overflow-hidden">
                  <div className="px-5 py-3 bg-red-500/5 border-b border-border/50 flex items-start gap-3">
                    <span className="text-red-700 font-bold text-sm flex-shrink-0 mt-0.5">Myth</span>
                    <p className="text-sm text-foreground/70 line-through">{myth}</p>
                  </div>
                  <div className="px-5 py-3 bg-emerald-500/5 flex items-start gap-3">
                    <span className="text-emerald-700 font-bold text-sm flex-shrink-0 mt-0.5">Reality</span>
                    <p className="text-sm text-foreground/80">{reality}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer nav */}
            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <Link
                href="/research"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} />
                All Research
              </Link>
              <p className="text-xs text-muted-foreground">Based on xai-org/x-algorithm · Released Jan 20, 2026 · Updated May 15, 2026</p>
            </div>
          </div>

          {/* Right sidebar: on this page */}
          <aside className="hidden xl:block w-52 flex-shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
