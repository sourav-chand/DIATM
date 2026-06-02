"use client";

import { Mail, Phone, MapPin, Globe2, ArrowUpRight } from "lucide-react";
import { footerLinks, contactInfo } from "@/lib/data";

const socialIcons = [
  { icon: Globe2, href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-navy">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#hero" className="mb-4 inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                DI<span className="gradient-text">A</span>TM
              </span>
            </a>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Durgapur Institute of Advanced Technology &amp; Management &
mdash; shaping the engineers and leaders of tomorrow through academic
              excellence, industry partnerships, and holistic development.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted transition-all hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Important Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.important.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {contactInfo.phone}
                </a>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/5">
              <iframe
                src={contactInfo.mapSrc}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DIATM Location"
                className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} DIATM. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span>AICTE Approved</span>
            <span className="h-1 w-1 rounded-full bg-muted/30" />
            <span>NAAC Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
