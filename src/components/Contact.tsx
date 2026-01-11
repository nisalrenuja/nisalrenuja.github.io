"use client";

import Section from "./Section";
import { PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="py-16 md:py-24 bg-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all group min-h-[140px]"
          >
            <div className="p-3 rounded-full bg-muted group-hover:bg-accent group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
              <p className="font-semibold text-foreground text-sm sm:text-base break-all">{PROFILE.contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${PROFILE.contact.phone}`}
            className="flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all group min-h-[140px]"
          >
            <div className="p-3 rounded-full bg-muted group-hover:bg-accent group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
              <p className="font-semibold text-foreground text-sm sm:text-base">{PROFILE.contact.phone}</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-background border border-border min-h-[140px] sm:col-span-2 md:col-span-1">
            <div className="p-3 rounded-full bg-muted">
              <MapPin size={24} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
              <p className="font-semibold text-foreground text-sm sm:text-base">{PROFILE.location}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
