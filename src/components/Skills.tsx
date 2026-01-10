"use client";

import Section from "./Section";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground md:col-span-1">
          Skills
        </h2>

        <div className="md:col-span-2 space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, skills]) => {
              const shouldSpanColumns = skills.length > 6;
              return (
              <div key={category} className={shouldSpanColumns ? "sm:col-span-2" : ""}>
                <h3 className="font-semibold text-foreground mb-4 text-lg">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
