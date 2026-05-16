"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "big-picture", label: "Big Picture" },
  { id: "four-components", label: "Four Core Components" },
  { id: "pipeline", label: "Pipeline Walkthrough" },
  { id: "phoenix-ml", label: "Phoenix ML Model" },
  { id: "grox", label: "Grox Content Pipeline" },
  { id: "dos", label: "What the Algorithm Rewards" },
  { id: "donts", label: "What It Penalizes" },
  { id: "design", label: "Key Design Decisions" },
  { id: "misconceptions", label: "Common Misconceptions" },
];

export default function TableOfContents() {
  const [active, setActive] = useState<string>("big-picture");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        On this page
      </p>
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "block text-sm py-1 border-l-2 pl-3 transition-all duration-200",
                active === id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
