import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Deep Dives",
  description:
    "Deep technical explorations of algorithms, systems, and ML models — built to be read, not just referenced.",
};

const articles = [
  {
    slug: "x-algorithm",
    title: "X For You Feed Algorithm — Deep Dive",
    description:
      "A from-scratch interactive breakdown of how X decides what appears in your For You feed, based on the open-sourced algorithm code. Covers the full 8-stage pipeline, Phoenix ML model, Grox safety system, and scoring formula.",
    date: "May 2026",
    readTime: "~20 min",
    tags: ["Algorithm", "ML", "Open Source", "Recommendation Systems"],
    featured: true,
  },
];

const upcoming = [
  { title: "YouTube Ranking Algorithm", tags: ["Algorithm", "ML", "Video"] },
  { title: "TikTok For You Page — How It Actually Works", tags: ["Algorithm", "ML", "Recommendations"] },
  { title: "How LinkedIn Decides Your Feed", tags: ["Algorithm", "Social", "ML"] },
];

export default function ResearchPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      <div className="pt-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Research</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">

        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Research & Deep Dives
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Technical explorations of real systems — algorithms, ML models, and architectures
            that power the products we use every day. Built to be read, not just referenced.
          </p>
        </div>

        {/* Featured */}
        {articles.filter((a) => a.featured).map((article) => (
          <Link key={article.slug} href={`/research/${article.slug}`} className="group block mb-8">
            <article className="rounded-2xl border border-border bg-card p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-accent text-white">Featured</span>
                {article.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                {article.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} />{article.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </article>
          </Link>
        ))}

        {/* All articles */}
        {articles.filter((a) => !a.featured).length > 0 && (
          <>
            <h2 className="text-xl font-bold text-foreground mb-6 mt-12">All Research</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.filter((a) => !a.featured).map((article) => (
                <Link key={article.slug} href={`/research/${article.slug}`} className="group block">
                  <article className="h-full rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.date} · {article.readTime}</span>
                      <ArrowRight size={14} className="group-hover:text-accent transition-colors" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Upcoming */}
        {/* <div className="mt-16">
          <h2 className="text-xl font-bold text-foreground mb-2">Coming Soon</h2>
          <p className="text-sm text-muted-foreground mb-6">More deep dives in the pipeline.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {upcoming.map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-muted/20 p-5 opacity-60">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <Footer />
    </main>
  );
}
