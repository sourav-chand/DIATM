"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function AdmissionCTA() {
  return (
    <section id="admission" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-highlight/20" />
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full border border-white/10" />
        <div className="animate-float absolute right-20 bottom-20 h-24 w-24 rounded-full border border-white/10" />
        <div className="absolute left-1/4 top-1/3 h-16 w-16 rounded-full border border-accent/20" />
        <div className="animate-mesh absolute right-1/3 top-1/4 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <Sparkles size={14} />
            Limited Seats Available
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Pre-Admission{" "}
            <span className="gradient-text">2026&ndash;27</span> is Open!
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            Secure your seat in West Bengal&apos;s top-ranked engineering
            college. NAAC Accredited &middot; 100% Placement Record.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="shimmer group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark"
            >
              Apply Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
