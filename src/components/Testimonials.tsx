"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Student <span className="gradient-text">Speaks</span>
          </h3>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`shrink-0 grow-0 basis-full px-4 sm:basis-1/2 lg:basis-1/3 ${
                    i === selectedIndex ? "opacity-100" : "opacity-40"
                  } transition-opacity duration-300`}
                >
                  <div className="glass-hover rounded-2xl p-6 sm:p-8">
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.color} p-[2px]`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {t.name}
                        </div>
                        <div className="text-sm text-accent">{t.company}</div>
                      </div>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed italic text-muted">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className="fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-white/10 bg-navy/80 p-2 text-white backdrop-blur transition-all hover:border-accent/50 hover:text-accent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full border border-white/10 bg-navy/80 p-2 text-white backdrop-blur transition-all hover:border-accent/50 hover:text-accent"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
