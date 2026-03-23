"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { HERO, WHATSAPP_LINK } from "@/lib/content";
import { ArrowRight } from "lucide-react";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el || isNaN(numeric)) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(numeric * eased);
      if (el) el.textContent = `${start.toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric, suffix]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-[var(--font-sora)] text-4xl md:text-5xl font-bold text-negro"
      >
        0{suffix}
      </span>
      <span className="block font-[var(--font-figtree)] text-sm text-negro/50 mt-2">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "#f7f7f7" }}
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 70%)",
            top: "-15%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7236be 0%, transparent 70%)",
            bottom: "-10%",
            left: "-5%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-sora)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-negro"
        >
          {HERO.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-figtree)] text-lg md:text-xl text-negro/50 mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href={HERO.cta1.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-turquesa-100 text-white font-semibold font-[var(--font-figtree)] text-base hover:bg-turquesa-120 transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(8,200,167,0.3)] hover:shadow-[0_6px_20px_rgba(8,200,167,0.4)]"
          >
            {HERO.cta1.label}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={HERO.cta2.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border-2 border-negro/15 text-negro/70 font-medium font-[var(--font-figtree)] text-base hover:border-negro/30 hover:text-negro transition-all duration-300 cursor-pointer"
          >
            {HERO.cta2.label}
          </a>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 md:gap-16 mt-20"
        >
          {HERO.stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
