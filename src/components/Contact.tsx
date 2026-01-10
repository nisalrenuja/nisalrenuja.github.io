"use client";

import Section from "./Section";
import { PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="py-16 md:py-24 bg-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all group"
          >
            <div className="p-3 rounded-full bg-muted group-hover:bg-accent group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
              <p className="font-semibold text-foreground">{PROFILE.contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${PROFILE.contact.phone}`}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all group"
          >
            <div className="p-3 rounded-full bg-muted group-hover:bg-accent group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
              <p className="font-semibold text-foreground">{PROFILE.contact.phone}</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border">
            <div className="p-3 rounded-full bg-muted">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
              <p className="font-semibold text-foreground">{PROFILE.location}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
