"use client";

import { useCallback, useRef } from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { BOOKING } from "@/lib/data";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "nav" | "large";

interface BookCallButtonProps {
  variant?: Variant;
  label?: string;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl",
  large:
    "inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-white text-lg font-semibold rounded-full hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl",
  secondary:
    "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all",
  nav: "inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-all",
};

/** The site renders light-only, so the embed is pinned to match rather than following the OS. */
const calConfig = { theme: "light", layout: "month_view" } as const;

/** Pulls in the Cal.com embed, configures it, and warms the modal iframe. */
async function loadCalEmbed() {
  const { getCalApi } = await import("@calcom/embed-react");
  const cal = await getCalApi();
  cal("ui", { ...calConfig, hideEventTypeDetails: false });
  cal("preload", { calLink: BOOKING.calLink, type: "modal" });
  return cal;
}

/**
 * The single booking entry point for the whole site.
 *
 * Cal.com's usual integration is a `data-cal-link` attribute plus a global
 * script, which loads their embed on every page whether or not anyone books.
 * Driving the API by hand instead means no third-party JS until the visitor
 * shows intent: we preload on hover/focus, then open the modal on click.
 */
export default function BookCallButton({
  variant = "primary",
  label = BOOKING.ctaLabel,
  className,
}: BookCallButtonProps) {
  // Holds the in-flight (or settled) embed load, so hovering many times, or
  // clicking before the hover-triggered load resolves, still only loads once.
  const embedRef = useRef<ReturnType<typeof loadCalEmbed> | null>(null);

  const loadEmbed = useCallback(() => (embedRef.current ??= loadCalEmbed()), []);

  const openModal = useCallback(async () => {
    const cal = await loadEmbed();
    cal("modal", { calLink: BOOKING.calLink, config: calConfig });
  }, [loadEmbed]);

  return (
    <motion.button
      type="button"
      onPointerEnter={loadEmbed}
      onFocus={loadEmbed}
      onClick={openModal}
      aria-label={`${label} with ${BOOKING.calLink} on Cal.com`}
      className={cn(variantStyles[variant], className)}
      whileHover={{ scale: variant === "nav" ? 1.03 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Calendar size={variant === "nav" ? 16 : variant === "large" ? 22 : 20} />
      {label}
    </motion.button>
  );
}
