"use client";

import Section from "./Section";
import { SERVICES } from "@/lib/data";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";
import { Sparkles, Boxes, GitBranch, Compass, Check } from "lucide-react";

/** Keeps the icon choice as plain data in data.ts rather than a component import. */
const icons = { Sparkles, Boxes, GitBranch, Compass } as const;

export default function Services() {
  return (
    <Section id="services" className="py-16 md:py-24">
      <div className="space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            What I do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Four ways I can help
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most engagements are some mix of these. If you&apos;re not sure which one
            your problem is, that&apos;s usually what the first call is for.
          </p>
        </div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article
                key={service.title}
                variants={fadeInUpVariants}
                whileHover={{ y: -4 }}
                className="group p-7 sm:p-8 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.promise}
                </p>

                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
