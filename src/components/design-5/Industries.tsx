"use client";

import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section id="industrias" className="bg-white py-16 md:py-24 border-t-[2px] border-[#1a1a1a]/8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-3xl md:text-5xl lg:text-6xl">
                {INDUSTRIES.headline}
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-12 h-[3px] bg-[#02a080]" />
                <div className="w-4 h-[3px] bg-[#ffe529]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strict 3-col grid — sharp corners, thin negro borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1a1a1a]/15">
          {INDUSTRIES.items.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.04,
              }}
              className="relative p-6 md:p-8 border-b border-r border-[#1a1a1a]/8 group hover:bg-[#1a1a1a]/[0.02] transition-colors duration-150"
            >
              {/* Accent line — alternating turquesa/violeta */}
              <div className={`absolute top-0 left-0 w-12 h-[3px] group-hover:w-full transition-all duration-300 ${
                i % 2 === 0 ? "bg-[#02a080]" : "bg-[#7236be]"
              }`} />

              {/* Number */}
              <span className={`font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] ${
                i % 2 === 0 ? "text-[#02a080]" : "text-[#7236be]"
              }`}>
                {(i + 1).toString().padStart(2, "0")}
              </span>

              <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-xl md:text-2xl mt-4 mb-4">
                {industry.title}
              </h3>

              <p className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-sm leading-relaxed mb-4">
                {industry.description}
              </p>

              <p className="font-[var(--font-barlow)] text-[#1a1a1a]/30 text-[11px] uppercase tracking-[0.1em] leading-relaxed">
                {industry.examples}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block — negro bg, turquesa accent, sharp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-0 border-t-4 border-[#02a080] bg-[#1a1a1a] p-8 md:p-12 grid grid-cols-12 gap-8 items-center"
        >
          <div className="col-span-12 md:col-span-8">
            <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-white text-2xl md:text-3xl">
              {INDUSTRIES.cta.headline}
            </h3>
            <p className="font-[var(--font-barlow)] text-white/50 text-base mt-4 max-w-xl leading-relaxed">
              {INDUSTRIES.cta.description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <a
              href={INDUSTRIES.cta.href}
              className="inline-flex items-center gap-2 bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-base tracking-[0.04em] px-8 py-3.5 rounded-sm hover:bg-[#028a6e] transition-colors duration-150"
            >
              {INDUSTRIES.cta.label}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
