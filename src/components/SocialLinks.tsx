"use client";

import { Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { motion } from "framer-motion";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
}

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const iconSize = size === "sm" ? 16 : size === "md" ? 20 : 24;
  // Padding alone left the "sm" variant at 32x32, under the 44px touch target
  // guidance, so the box is floored regardless of which size is requested.
  const padding = size === "sm" ? "p-2" : size === "md" ? "p-3" : "p-4";
  const touch = "min-h-[44px] min-w-[44px] inline-flex items-center justify-center";

  const socials = [
    { name: "GitHub", icon: Github, url: PROFILE.socials.github },
    { name: "LinkedIn", icon: Linkedin, url: PROFILE.socials.linkedin },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map(({ name, icon: Icon, url }) => (
        <motion.a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${touch} ${padding} rounded-full bg-muted hover:bg-accent hover:text-white transition-all`}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={name}
        >
          <Icon size={iconSize} />
        </motion.a>
      ))}
    </div>
  );
}
