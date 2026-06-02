"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "cyan" | "none";
  as?: "div" | "motion";
}

export function GlassCard({
  children,
  className = "",
  glow = "none",
  as = "div",
}: GlassCardProps) {
  const glowClass =
    glow === "blue"
      ? "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
      : glow === "cyan"
        ? "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        : "";

  if (as === "motion") {
    return (
      <motion.div
        variants={staggerItem}
        className={`glass-hover rounded-2xl p-6 ${glowClass} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`glass-hover rounded-2xl p-6 ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
