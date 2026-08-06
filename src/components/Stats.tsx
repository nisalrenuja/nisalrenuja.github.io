"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";

export default function Stats() {
  return (
    <section
      aria-label="Track record"
      className="border-y border-border bg-muted/30"
    >
      <motion.dl
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUpVariants} className="text-center lg:text-left">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">
                {stat.value}
              </span>
              <span className="block mt-2 text-sm text-muted-foreground leading-snug">
                {stat.label}
              </span>
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
