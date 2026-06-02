"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { navItemVariants, mobileLinkVariants } from "@/lib/animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      setScrolled(curr > 20);
      setVisible(curr < prevScroll || curr < 80);
      setPrevScroll(curr);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-bg/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              DI<span className="gradient-text">A</span>TM
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className="group relative px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-4/5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#admission"
              className="pulse-ring hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-dark md:flex"
            >
              Apply 2026
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-bg/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white transition-colors hover:gradient-text"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#admission"
                custom={navLinks.length}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white"
              >
                Apply 2026
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
