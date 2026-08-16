"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PROFILE } from "@/lib/data";
import BookCallButton from "./BookCallButton";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/blog" },
];

/** Sections the scroll-spy watches, derived from the hash-based nav items. */
const spySections = ["home", ...navItems
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1))];

export default function Navigation() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlights whichever section is crossing the middle of the
  // viewport. Only runs on the home page, where the hash targets exist.
  // A stale value left over from the home page is harmless: `isActive` only
  // consults it while we're on "/".
  useEffect(() => {
    if (pathname !== "/") return;

    const elements = spySections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Each callback only reports the sections that *changed*, so we accumulate
    // the ratios: without this, scrolling past the last watched section leaves
    // its nav item stuck highlighted all the way down through the footer.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }

        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActiveSection(best);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Lock the page behind the sheet while it's open, and wire up its dismissals.
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => desktop.matches && setIsOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [isOpen]);

  const isActive = useMemo(
    () => (href: string) =>
      href.startsWith("#")
        ? pathname === "/" && activeSection === href.slice(1)
        : pathname === href || pathname.startsWith(`${href}/`),
    [pathname, activeSection]
  );

  /** Hash links only resolve on the home page, so prefix them elsewhere. */
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const spring = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32 };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "site-header fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-out",
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center gap-3 rounded-2xl border transition-all duration-500 ease-out sm:rounded-full",
            scrolled
              ? "border-border bg-background/80 px-3 py-2 shadow-lg shadow-foreground/[0.06] backdrop-blur-xl sm:px-4 sm:py-2.5"
              : "border-transparent bg-transparent px-2 py-2 sm:px-3"
          )}
        >
          {/* Brand */}
          <Link
            href={pathname === "/" ? "#home" : "/"}
            aria-label={`${PROFILE.name} — home`}
            onClick={() => setIsOpen(false)}
            className="group flex min-h-[44px] flex-1 items-center gap-2.5 rounded-full outline-none"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 ring-1 ring-border/70 transition-all duration-300 group-hover:bg-accent/10 group-hover:ring-accent/40 sm:h-10 sm:w-10">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                width={40}
                height={40}
                className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                priority
              />
            </span>
            <span className="hidden min-w-0 flex-col leading-tight lg:flex">
              <span className="truncate text-sm font-semibold tracking-tight text-foreground">
                {PROFILE.name}
              </span>
              <span className="truncate text-[11px] text-muted-foreground">
                {PROFILE.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav — segmented pill with an animated active indicator */}
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-border/60 bg-muted/40 p-1 backdrop-blur-sm">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.name} className="relative">
                    <Link
                      href={resolveHref(item.href)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 lg:px-4",
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={spring}
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-background shadow-sm ring-1 ring-border/80"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="hidden md:block">
              <BookCallButton variant="nav" />
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-muted/40 text-foreground transition-colors hover:border-accent/50 hover:text-accent md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden="true" className="relative block h-4 w-5">
                <motion.span
                  className="absolute left-0 block h-[2px] w-5 rounded-full bg-current"
                  animate={
                    isOpen ? { top: 7, rotate: 45 } : { top: 2, rotate: 0 }
                  }
                  transition={spring}
                />
                <motion.span
                  className="absolute left-0 top-[7px] block h-[2px] w-5 rounded-full bg-current"
                  animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0.4 : 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                />
                <motion.span
                  className="absolute left-0 block h-[2px] w-5 rounded-full bg-current"
                  animate={
                    isOpen ? { top: 7, rotate: -45 } : { top: 12, rotate: 0 }
                  }
                  transition={spring}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className={cn(
            "absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent via-accent to-accent/30 transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 30 }
              }
              className={cn(
                "site-header fixed inset-x-0 z-50 transition-[top] duration-500 ease-out md:hidden",
                scrolled ? "top-[4.25rem]" : "top-[4.75rem]"
              )}
            >
              <nav
                aria-label="Mobile"
                className="mx-auto max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-3xl border border-border bg-background/95 p-3 shadow-2xl shadow-foreground/10 backdrop-blur-xl"
              >
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, idx) => {
                    const active = isActive(item.href);
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : 0.04 + idx * 0.05,
                        }}
                      >
                        <Link
                          href={resolveHref(item.href)}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex min-h-[52px] items-center justify-between rounded-2xl px-4 text-base font-medium transition-colors",
                            active
                              ? "bg-accent/10 text-accent"
                              : "text-foreground hover:bg-muted/70"
                          )}
                        >
                          {item.name}
                          <ArrowUpRight
                            size={18}
                            className="text-muted-foreground"
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.04 + navItems.length * 0.05,
                  }}
                  className="mt-3 border-t border-border/70 pt-3"
                  onClick={() => setIsOpen(false)}
                >
                  <BookCallButton variant="primary" className="w-full py-3.5" />
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
