
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// `w-full` matters: sections are direct children of a flex-col <main>, where
// auto inline margins suppress stretch and would otherwise shrink-wrap the
// section (and any background it carries) down to its content width.
const sectionStyles =
  "w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl 2xl:max-w-[1600px] mx-auto";

export default function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(sectionStyles, className)}
    >
      {children}
    </motion.section>
  );
}
