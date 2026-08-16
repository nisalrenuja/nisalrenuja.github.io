import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ResearchSection from "@/components/ResearchSection";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faqJsonLd, jsonLdProps } from "@/lib/seo";

export default function Home() {
  return (
    <main id="main" className="flex flex-col min-h-screen">
      <script {...jsonLdProps(faqJsonLd)} />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Projects />
      <About variant="teaser" />
      <ResearchSection />
      <BlogSection />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
