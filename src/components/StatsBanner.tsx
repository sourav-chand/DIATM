"use client";

import { Marquee } from "@/components/ui/Marquee";
import { recruiters } from "@/lib/data";

const marqueeItems = [
  "100% Placement",
  "5th Rank WB",
  "2000+ Alumni",
  "NAAC Accredited",
  "25+ Years",
  "4 Departments",
  ...recruiters,
];

export function StatsBanner() {
  return (
    <section className="relative border-y border-white/5 bg-navy">
      <div className="py-4">
        <Marquee
          items={marqueeItems}
          direction="left"
          className="text-sm"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy to-transparent" />
    </section>
  );
}
