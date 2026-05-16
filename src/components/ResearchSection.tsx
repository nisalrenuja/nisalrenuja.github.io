"use client";

import Link from "next/link";
import { ArrowRight, Tag, Clock, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";

const highlights = [
  {
    slug: "/research/x-algorithm",
    label: "Algorithm",
    color: "#6366f1",
    title: "X For You Feed Algorithm",
    subtitle: "Deep Dive",
    description:
      "How X decides what appears in your For You feed — the full 8-stage pipeline, Phoenix ML model, Grox safety system, and interactive scoring simulator.",
    tags: ["Rust", "Python/JAX", "Transformer", "Recommendation"],
    readTime: "~20 min",
    featured: true,
  },
];

export default function ResearchSection() {
  return (
    <Section id="research" className="py-16 md:py-24">
      <div className="flex flex-col gap-12">
        <div className="grid md:grid-cols-3 gap-12 items-end">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Microscope size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              Deep Dives & Findings
            </h2>
          </div>
          <div className="md:text-right hidden md:block">
            <Link
              href="/research"
              className="inline-flex items-center text-lg font-medium text-accent hover:underline decoration-2 underline-offset-4"
            >
              View all research <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl -mt-6">
          Technical explorations of algorithms, ML models, and systems powering the products we use every day —
          with interactive visualizations and real source code.
        </p>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {highlights.map((item) => (
            <motion.div key={item.slug} variants={fadeInUpVariants}>
              <Link href={item.slug} className="group block h-full">
                <article className="h-full rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="p-7">
                    {item.featured && (
                      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-accent text-white mb-4">
                        Featured
                      </span>
                    )}

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                        <span className="text-muted-foreground font-normal"> — {item.subtitle}</span>
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                        >
                          <Tag size={9} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {item.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}

          {/* Teaser card */}
          <motion.div variants={fadeInUpVariants}>
            <div className="h-full rounded-2xl border border-dashed border-border bg-muted/10 p-7 flex flex-col items-start justify-between opacity-60">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Coming Soon</p>
                <h3 className="text-xl font-bold text-foreground mb-2">YouTube Ranking Algorithm</h3>
                <p className="text-sm text-muted-foreground">
                  How YouTube decides which videos to surface — candidate generation, ranking, and post-processing filters.
                </p>
              </div>
              <span className="mt-6 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">In Progress</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="md:hidden text-center mt-4">
          <Link
            href="/research"
            className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
          >
            View All Research <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
