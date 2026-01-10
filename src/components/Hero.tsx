"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { CVDownloadButton } from "./CVDownloadButton";
import { SocialLinks } from "./SocialLinks";
import { ScrollIndicator } from "./ScrollIndicator";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 order-2 md:order-1"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              {PROFILE.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          >
            {PROFILE.name}
          </motion.h1>

          {/* Title/Tagline */}
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
          >
            {PROFILE.tagline.split(" | ")[0]}
          </motion.h2>

          {/* About */}
          <motion.p
            variants={item}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {PROFILE.about.split("\n\n")[0]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="pt-4 flex flex-col sm:flex-row gap-4">
            <CVDownloadButton variant="primary" />
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="pt-2">
            <SocialLinks size="md" />
          </motion.div>
        </motion.div>

        {/* Right Column - Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hover/20 rounded-3xl rotate-6"></div>
            <div className="relative w-full h-full bg-transparent rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={PROFILE.image}
                alt={PROFILE.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
