"use client";

import { motion } from "motion/react";
import { HERO, WHATSAPP_LINK } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Geometric turquesa accent block — large, bold */}
      <div className="absolute top-20 right-0 w-[140px] md:w-[240px] h-[320px] md:h-[560px] bg-[#02a080]/8" />
      <div className="absolute bottom-0 left-0 w-[100px] md:w-[160px] h-[100px] md:h-[160px] bg-[#ffe529]/15" />
      {/* Violeta geometric accent block */}
      <div className="absolute top-[40%] right-[60px] md:right-[100px] w-[80px] md:w-[120px] h-[180px] md:h-[300px] bg-[#7236be]/8 hidden md:block" />
      {/* Small geometric element */}
      <div className="absolute top-32 right-[240px] w-4 h-4 bg-[#02a080] hidden md:block" />
      <div className="absolute top-48 right-[200px] w-3 h-3 bg-[#7236be] hidden md:block" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-12 gap-4">
        {/* Headline area — 10 of 12 cols */}
        <div className="col-span-12 lg:col-span-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#02a080]" />
              <p className="font-[var(--font-barlow)] text-[#02a080] text-[13px] font-semibold uppercase tracking-[0.2em]">
                Plataforma todo-en-uno
              </p>
            </div>

            {/* GIANT headline — condensed, uppercase, max impact */}
            <h1 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] leading-[0.88] text-[clamp(3rem,10vw,8rem)]">
              <span className="text-[#02a080]">Agenda</span>{" "}<span className="text-[#7236be]">Vende</span> y <span className="text-[#8c00ff]">Cobra</span> por <span className="relative inline-block">WhatsApp<svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: "0.12em" }}><path d="M2 8C30 2 60 12 90 6C120 0 150 10 198 4" stroke="#02a080" strokeWidth="3" strokeLinecap="round" /></svg></span> sin perder leads
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs — sharp, geometric */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href={HERO.cta1.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-base tracking-[0.04em] px-8 py-3.5 rounded-sm hover:bg-[#028a6e] transition-colors duration-150"
            >
              {HERO.cta1.label}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a
              href={HERO.cta2.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-[var(--font-barlow-condensed)] font-bold uppercase text-base tracking-[0.04em] px-8 py-3.5 rounded-sm hover:bg-[#1a1a1a] hover:text-white transition-colors duration-150"
            >
              {HERO.cta2.label}
            </a>
          </motion.div>
        </div>

        {/* Stats horizontal strip — full width, border top */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="col-span-12 mt-16"
        >
          <div className="border-t-2 border-[#1a1a1a]/8 pt-8">
            <div className="grid grid-cols-3 gap-8">
              {HERO.stats.map((stat, i) => (
                <div key={i} className="relative pl-4">
                  {/* Left accent line for each stat */}
                  <div
                    className="absolute left-0 top-0 w-[3px] h-full"
                    style={{
                      backgroundColor: i === 0 ? "#02a080" : i === 1 ? "#ffe529" : "#7236be",
                      opacity: i === 1 ? 1 : 0.6 + i * 0.2,
                    }}
                  />
                  <p className="font-[var(--font-barlow-condensed)] font-bold text-[#1a1a1a] text-[clamp(2rem,5vw,4rem)] tracking-tight leading-none tabular-nums">
                    {stat.value}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/40 text-[11px] md:text-xs uppercase tracking-[0.15em] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
