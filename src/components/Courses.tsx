"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cog, Zap, Briefcase, Monitor } from "lucide-react";
import { courses } from "@/lib/data";
import { TiltCard } from "@/components/ui/TiltCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  gear: Cog,
  bolt: Zap,
  briefcase: Briefcase,
  monitor: Monitor,
};

export function Courses() {
  return (
    <section id="courses" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Programs
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Programs Designed for{" "}
            <span className="gradient-text">Tomorrow</span>
          </h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {courses.map((course) => {
            const Icon = iconMap[course.icon] || Code2;
            return (
              <motion.div
                key={course.slug}
                variants={staggerItem}
                className="min-w-[280px] shrink-0 md:min-w-0"
              >
                <TiltCard className="h-full">
                  <div className="glass-hover group flex h-full flex-col rounded-2xl p-6 transition-all hover:border-accent/40">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-highlight text-white shadow-lg shadow-accent/20">
                      <Icon size={28} />
                    </div>
                    <h4 className="mb-1 text-xl font-bold text-white">
                      {course.title}
                    </h4>
                    <p className="mb-4 text-sm text-muted">{course.desc}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
