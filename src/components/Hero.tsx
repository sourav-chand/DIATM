"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { wordReveal } from "@/lib/animations";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctxOrNull = canvas.getContext("2d");
    if (!ctxOrNull) return;
    const ctx = ctxOrNull;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const count = Math.min(80, Math.floor((w * h) / 15000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.a})`;
        ctx.fill();
      }

      ctx.strokeStyle = "rgba(37, 99, 235, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const cleanup = draw();
    return () => cleanup?.();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}

const titleWords = ["Engineer", "The", "Future"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="mesh-bg absolute inset-0 z-0" />
      <div className="animate-mesh absolute inset-0 z-0 opacity-30">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-highlight/8 blur-[140px]" />
      </div>
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold"
        >
          <Star size="14" className="fill-gold text-gold" />
          5th Ranked in West Bengal
        </motion.div>

        <h1 className="mb-4 overflow-hidden text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordReveal}
              initial="hidden"
              animate="visible"
              className={`inline-block mr-4 ${
                word === "Future" ? "gradient-text" : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted"
        >
          NAAC Accredited &middot; AICTE Approved &middot; 100% Placement Record
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#courses"
            className="shimmer group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark"
          >
            Explore Programs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#admission"
            className="pulse-ring rounded-full border border-accent/50 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent/10"
          >
            Admission 2026
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown
          size={24}
          className="animate-scroll text-muted"
        />
      </motion.div>
    </section>
  );
}
