"use client";

import { motion } from "motion/react";
import { HERO, WHATSAPP_LINK } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Massive Bodoni headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-negro"
        >
          {HERO.headline}
        </motion.h1>

        {/* Single subhead line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[var(--font-jost)] text-lg md:text-xl text-negro/50 mt-8 max-w-2xl"
        >
          {HERO.subheadline}
        </motion.p>

        {/* Single CTA — the ONLY color */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-violeta-100 text-white font-[var(--font-jost)] text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            {HERO.cta1.label}
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats — oversized serif numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap gap-16 mt-24"
        >
          {HERO.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-[var(--font-bodoni-moda)] text-5xl md:text-6xl font-bold text-negro">
                {stat.value}
              </div>
              <div className="font-[var(--font-jost)] text-xs text-negro/40 mt-2 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
