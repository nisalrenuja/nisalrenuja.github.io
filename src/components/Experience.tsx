"use client";

import Section from "./Section";
import { EXPERIENCE } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground md:col-span-1">
          Experience
        </h2>

        <div className="md:col-span-2 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
            >
              <span className="absolute left-[-6px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background border border-border" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {job.role}
                  </h3>
                  <p className="text-lg font-semibold text-accent">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    {job.period}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                      <MapPin size={12} />
                      {job.locationType}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-muted-foreground mb-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
