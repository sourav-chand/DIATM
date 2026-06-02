"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Microscope,
  Building2,
  Leaf,
  HeartPulse,
  Music,
} from "lucide-react";
import { whyFeatures } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const featureIcons: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  microscope: Microscope,
  building: Building2,
  leaf: Leaf,
  "heart-pulse": HeartPulse,
  music: Music,
};

export function WhyDIATM() {
  return (
    <section id="why-diatm" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Why DIATM
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="gradient-text">Excellence</span>
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyFeatures.map((feature, i) => {
            const Icon = featureIcons[feature.icon] || Sparkles;
            const colSpan =
              i === 0 ? "lg:col-span-2 lg:row-span-2" : "";
            const rowSpan =
              i === 0 ? "row-span-2" : "";

            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className={`glass-hover group rounded-2xl p-6 transition-all hover:border-accent/40 sm:p-8 ${colSpan} ${rowSpan} ${
                  i === 0 ? "min-h-[320px]" : ""
                }`}
              >
                <div
                  className={`mb-4 flex ${
                    i === 0 ? "h-16 w-16" : "h-12 w-12"
                  } items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-white shadow-lg shadow-accent/20`}
                >
                  <Icon size={i === 0 ? 32 : 24} />
                </div>
                <h4
                  className={`mb-2 font-bold text-white ${
                    i === 0 ? "text-2xl" : "text-lg"
                  }`}
                >
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
