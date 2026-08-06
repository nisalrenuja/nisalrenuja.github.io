"use client";

import Section from "./Section";
import { PROCESS } from "@/lib/data";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";

export default function Process() {
  return (
    <Section id="process" className="py-16 md:py-24 bg-muted/30">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            How I work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Rigorous, not mysterious
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No discovery phase that produces only slides. Every stage ends with
            something you can read, run, or ship.
          </p>
        </div>

        <motion.ol
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-2 space-y-6"
        >
          {PROCESS.map((stage) => (
            <motion.li
              key={stage.step}
              variants={fadeInUpVariants}
              className="flex gap-5 sm:gap-7 p-6 sm:p-7 rounded-2xl bg-background border border-border hover:border-accent transition-all"
            >
              <span
                className="text-2xl sm:text-3xl font-bold text-accent/40 tabular-nums shrink-0"
                aria-hidden="true"
              >
                {stage.step}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
