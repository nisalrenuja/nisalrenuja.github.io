"use client";

import { Download } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { motion } from "framer-motion";

interface CVDownloadButtonProps {
  variant?: "primary" | "secondary";
}

export function CVDownloadButton({ variant = "primary" }: CVDownloadButtonProps) {
  if (variant === "secondary") {
    return (
      <a
        href={PROFILE.cvUrl}
        download="Nisal_Palliyaguru_CV.pdf"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
      >
        <Download size={16} />
        Download CV
      </a>
    );
  }

  return (
    <motion.a
      href={PROFILE.cvUrl}
      download="Nisal_Palliyaguru_CV.pdf"
      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={20} />
      Download CV
    </motion.a>
  );
}
