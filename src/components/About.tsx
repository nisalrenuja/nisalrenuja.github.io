"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { PROFILE } from "@/lib/data";

interface AboutProps {
  /** "teaser" shows the opening paragraphs and links to /about; "full" shows everything. */
  variant?: "teaser" | "full";
}

export default function About({ variant = "full" }: AboutProps) {
  const paragraphs = PROFILE.about.split("\n\n");
  const shown = variant === "teaser" ? paragraphs.slice(0, 2) : paragraphs;

  return (
    <Section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        <div className="md:col-span-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {variant === "teaser" ? "Who you'd be working with" : "About me"}
          </h2>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            {shown.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {variant === "teaser" && (
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-lg font-medium text-accent hover:underline decoration-2 underline-offset-4"
            >
              Full background, experience, and credentials
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
