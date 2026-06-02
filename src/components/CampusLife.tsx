"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Home,
  FlaskRound,
  Trophy,
  Music,
  Leaf,
} from "lucide-react";
import { campusItems } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const campusIcons: Record<string, typeof BookOpen> = {
  "book-open": BookOpen,
  home: Home,
  flask: FlaskRound,
  trophy: Trophy,
  music: Music,
  leaf: Leaf,
};

const gradients = [
  "from-blue-600/20 to-cyan-600/20",
  "from-cyan-600/20 to-blue-700/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-cyan-500/20 to-blue-600/20",
  "from-blue-700/20 to-cyan-600/20",
  "from-cyan-600/20 to-blue-500/20",
];

const heights = ["h-64", "h-48", "h-56", "h-72", "h-52", "h-60"];

export function CampusLife() {
  return (
    <section id="campus" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Campus Life
          </h2>
          <h3 className="relative inline-block text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Life at DIATM
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent to-highlight" />
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {campusItems.map((item, i) => {
            const Icon = campusIcons[item.icon] || BookOpen;
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-2xl ${heights[i]} bg-gradient-to-br ${gradients[i]} border border-white/5`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-bg/80 via-bg/20 to-transparent p-6 text-center transition-all duration-500 group-hover:from-bg/95">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.label}</h4>
                  <p className="mt-1 text-sm text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    Discover {item.label.toLowerCase()} at DIATM
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition-all hover:border-accent hover:bg-accent/10"
          >
            View Gallery
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
