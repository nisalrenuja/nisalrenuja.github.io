
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BookCallButton from "./BookCallButton";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4 border-b border-border"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">
        <Link
          href={pathname === '/' ? '#home' : '/'}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo-pic.svg"
            alt="NP."
            width={40}
            height={40}
            className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
          <BookCallButton variant="nav" />
        </div>

        {/* Mobile Nav - Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onKeyDown={handleMenuKeyDown}
            role="navigation"
            aria-label="Mobile navigation"
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 max-h-[calc(100dvh-5rem)] supports-[height:100svh]:max-h-[calc(100svh-5rem)] landscape:max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href}
                    className="text-base sm:text-lg font-medium text-foreground hover:text-accent transition-colors block py-2 px-1 min-h-[44px] flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2"
                onClick={() => setIsOpen(false)}
              >
                <BookCallButton variant="primary" className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

}
