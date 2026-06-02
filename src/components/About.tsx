"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Award, Building2, GraduationCap, Users } from "lucide-react";
import { stats } from "@/lib/data";
import { fadeLeft, fadeRight } from "@/lib/animations";

const statIcons = [GraduationCap, Award, Users, Building2];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              About DIATM
            </h2>
            <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Redefining Engineering
              <span className="gradient-text"> Education </span>
              in West Bengal
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Durgapur Institute of Advanced Technology & Management has been a
              beacon of academic excellence for over 25 years. With NAAC
              accreditation, AICTE approval, and a 100% placement record, DIATM
      stands as the premier choice for engineering education in Eastern India.
              Our industry-aligned curriculum, world-class faculty, and
              state-of-the-art infrastructure create an environment where
              students don&apos;t just learn — they innovate.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            ref={ref}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.label}
                  className="glass-hover group rounded-2xl p-6 text-center transition-all hover:border-accent/40"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                        easingFn={(t, b, c, d) => {
                          const ts = (t /= d) * t;
                          const tc = ts * t;
                          return b + c * (tc + -3 * ts + 3 * t);
                        }}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
