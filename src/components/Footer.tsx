"use client";

import { PROFILE } from "@/lib/data";
import { CVDownloadButton } from "./CVDownloadButton";
import { SocialLinks } from "./SocialLinks";
import BookCallButton from "./BookCallButton";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Writing", href: "/blog" },
  { name: "Research", href: "/research" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left - Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
              {PROFILE.name}
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              {PROFILE.tagline}
            </p>
            <p className="text-muted-foreground mt-1 text-sm">{PROFILE.base}</p>
          </div>

          {/* Center - Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4">Work with me</h3>
            <div className="space-y-4">
              <BookCallButton variant="nav" />
              <SocialLinks size="sm" />
              <CVDownloadButton variant="secondary" />
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
