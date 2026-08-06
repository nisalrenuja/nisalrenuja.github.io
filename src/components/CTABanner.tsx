"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";
import { BOOKING, PROFILE } from "@/lib/data";

interface CTABannerProps {
  heading?: string;
  body?: string;
}

export default function CTABanner({
  heading = "Have something you want built?",
  body = "Bring the problem, however vaguely defined. We'll spend half an hour working out whether it's worth building and what it would actually take.",
}: CTABannerProps) {
  return (
    <section aria-label="Book a call" className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center rounded-3xl border border-border bg-accent/5 px-6 sm:px-12 py-14 sm:py-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-9 leading-relaxed">
          {body}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BookCallButton variant="large" />
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all"
          >
            Or email me instead
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{BOOKING.blurb}</p>
      </motion.div>
    </section>
  );
}
