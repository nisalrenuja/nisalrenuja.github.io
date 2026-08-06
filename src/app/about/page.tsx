import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { COMPETITIONS, PROFILE } from "@/lib/data";
import { breadcrumbJsonLd, jsonLdProps, url } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: `${PROFILE.name} — ${PROFILE.title} based in Colombo, Sri Lanka. Background, engineering experience, skills, education, and certifications.`,
  alternates: { canonical: url("/about") },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script {...jsonLdProps(breadcrumbJsonLd([["About", "/about"]]))} />
      <div className="pt-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">About</span>
          </nav>
        </div>
      </div>

      {/* w-full: as a direct flex child, mx-auto would otherwise shrink-wrap this to the text. */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          {PROFILE.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{PROFILE.title}</p>
      </div>

      <About variant="full" />
      <Experience />
      <Skills />
      <Education />
      <Certifications />

      <Section id="competitions" className="py-16 md:py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground md:col-span-1">
            Competitions
          </h2>
          <ul className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COMPETITIONS.map((competition) => (
              <li
                key={competition.title}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Trophy size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground leading-snug mb-1">
                      {competition.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-1">
                      {competition.position} · {competition.date}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {competition.description} — team {competition.team}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABanner
        heading="Think we'd work well together?"
        body="If any of the above lines up with what you're trying to build, the fastest way to find out is a short call."
      />
      <Footer />
    </main>
  );
}
