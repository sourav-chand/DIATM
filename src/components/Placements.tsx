"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, IndianRupee } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { GlassCard } from "@/components/ui/GlassCard";
import { recruiters, placementHighlights } from "@/lib/data";
import { staggerContainer } from "@/lib/animations";

const highlightIcons = [Briefcase, Building2, IndianRupee];

export function Placements() {
  return (
    <section id="placements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Placements
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Students Work at the{" "}
            <span className="gradient-text">World&apos;s Best</span>
          </h3>
        </motion.div>

        <div className="mb-12 overflow-hidden rounded-2xl border border-white/5 bg-navy/50 py-6">
          <Marquee items={recruiters} direction="left" />
          <div className="mt-4">
            <Marquee items={recruiters} direction="right" />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 grid gap-6 md:grid-cols-3"
        >
          {placementHighlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <GlassCard key={item.label} glow="blue" as="motion">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-medium text-accent">
                  {item.label}
                </div>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </GlassCard>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition-all hover:border-accent hover:bg-accent/10"
          >
            View Placement Report
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
