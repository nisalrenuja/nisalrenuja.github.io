"use client";

import Section from "./Section";
import { FAQS } from "@/lib/data";
import { ChevronDown } from "lucide-react";

/**
 * Built on native <details>/<summary> rather than a JS accordion so the answers
 * are in the DOM for crawlers and work with JS disabled — this section is also
 * the source of the FAQPage structured data in the layout.
 */
export default function FAQ() {
  return (
    <Section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Questions people usually ask first
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-left">
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 pr-8 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
