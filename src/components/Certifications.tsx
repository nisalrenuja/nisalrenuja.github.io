"use client";

import Section from "./Section";
import { CERTIFICATIONS } from "@/lib/data";
import { Award, Calendar } from "lucide-react";

export default function Certifications() {
  return (
    <Section id="certifications" className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground md:col-span-1">
          Certifications
        </h2>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={`cert-${cert.issuer.replace(/\s/g, '-')}-${cert.date}-${cert.title.slice(0, 20).replace(/\s/g, '-')}`}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                    {cert.skills && (
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {cert.skills}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
