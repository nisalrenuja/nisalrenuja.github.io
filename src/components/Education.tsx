"use client";

import Section from "./Section";
import { EDUCATION } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground md:col-span-1">
          Education
        </h2>

        <div className="md:col-span-2 space-y-8">
          {EDUCATION.map((edu) => (
            <div
              key={`edu-${edu.institution.replace(/\s/g, '-')}-${edu.degree.slice(0, 30).replace(/\s/g, '-')}`}
              className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                <span className="text-sm font-medium text-muted-foreground shrink-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg font-semibold text-accent mb-2">
                {edu.institution}
              </p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
