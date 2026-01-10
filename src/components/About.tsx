"use client";

import Section from "./Section";
import { PROFILE } from "@/lib/data";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "MSc Student", value: "Data Science & AI" },
    { label: "AWS Certified", value: "3 Certifications" },
  ];

  return (
    <Section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground md:col-span-1">
          About Me
        </h2>

        <div className="md:col-span-2 space-y-8">
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            {PROFILE.about.split("\n\n").map((paragraph, idx) => (
              <p key={`about-para-${idx}-${paragraph.slice(0, 20).replace(/\s/g, '-')}`}>{paragraph}</p>
            ))}
          </div>

          {/* Highlight Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {stats.map((stat) => (
              <div
                key={`stat-${stat.label.replace(/\s/g, '-')}`}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-all"
              >
                <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
