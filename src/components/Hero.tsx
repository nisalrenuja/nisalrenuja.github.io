"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/data";
import BookCallButton from "./BookCallButton";
import { CVDownloadButton } from "./CVDownloadButton";
import { SocialLinks } from "./SocialLinks";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl 2xl:max-w-[1600px] mx-auto pt-28 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6 order-2 md:order-1"
        >
          {/* Availability Badge */}
          <motion.div variants={fadeInUpVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              {PROFILE.badge}
            </span>
          </motion.div>

          {/* Positioning headline */}
          <motion.h1
            variants={fadeInUpVariants}
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
          >
            {PROFILE.headline}
          </motion.h1>

          <motion.p
            variants={fadeInUpVariants}
            className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {PROFILE.pitch}
          </motion.p>

          {/* Credibility strip */}
          <motion.p
            variants={fadeInUpVariants}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="font-medium text-foreground">{PROFILE.name}</span>
            <span aria-hidden="true">·</span>
            <span>4+ years building</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              {PROFILE.base}
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            className="pt-2 flex flex-col sm:flex-row gap-4"
          >
            <BookCallButton variant="primary" />
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all"
            >
              See what I do
              <ArrowDown size={18} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Social links + CV as a quiet tertiary action */}
          <motion.div
            variants={fadeInUpVariants}
            className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <SocialLinks size="md" />
            <CVDownloadButton variant="secondary" />
          </motion.div>
        </motion.div>

        {/* Right Column - Portrait */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl rotate-6"></div>
            <div className="relative w-full h-full bg-transparent rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={PROFILE.image}
                alt={`${PROFILE.name}, ${PROFILE.title}`}
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <figcaption className="sr-only">
            {PROFILE.name} — {PROFILE.title}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
