"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({
  items,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 gap-8 whitespace-nowrap px-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-highlight">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-highlight/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
