"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const bgColors = [
  "from-blue-600/10 to-cyan-600/10",
  "from-cyan-600/10 to-blue-700/10",
  "from-blue-500/10 to-cyan-500/10",
];

export function News() {
  return (
    <section id="news" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Notices
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Latest from <span className="gradient-text">DIATM</span>
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="glass-hover group overflow-hidden rounded-2xl transition-all hover:border-accent/40"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${bgColors[i]}`}
              >
                <Calendar size={48} className="text-accent/30" />
              </div>
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {item.category}
                </div>
                <div className="mb-1 text-xs text-muted">{item.date}</div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
