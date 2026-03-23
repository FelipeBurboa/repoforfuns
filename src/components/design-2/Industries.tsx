"use client";

import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/content";
import { Heart, Scissors, Dumbbell, PawPrint, GraduationCap, Briefcase } from "lucide-react";

const industryIcons = [Heart, Scissors, Dumbbell, PawPrint, GraduationCap, Briefcase];

export function Industries() {
  return (
    <section
      id="industrias"
      className="py-28 px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-negro text-center mb-20"
        >
          {INDUSTRIES.headline}
        </motion.h2>

        {/* Bento-style asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.items.map((item, i) => {
            const Icon = industryIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-blanco rounded-3xl p-7 border border-negro/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07),0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-turquesa-100/10 flex items-center justify-center mb-5 group-hover:bg-turquesa-100/15 transition-colors duration-300">
                  <Icon size={22} className="text-turquesa-100" />
                </div>

                <h3 className="font-[var(--font-sora)] text-lg font-bold text-negro mb-2">
                  {item.title}
                </h3>
                <p className="font-[var(--font-figtree)] text-negro/50 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="font-[var(--font-figtree)] text-negro/30 text-xs">
                  {item.examples}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-[var(--font-sora)] text-2xl font-bold text-negro mb-3">
            {INDUSTRIES.cta.headline}
          </h3>
          <p className="font-[var(--font-figtree)] text-negro/45 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            {INDUSTRIES.cta.description}
          </p>
          <a
            href={INDUSTRIES.cta.href}
            className="inline-block px-6 py-3 rounded-full border-2 border-negro/10 text-negro/60 font-[var(--font-figtree)] text-sm font-medium hover:border-turquesa-100/40 hover:text-turquesa-100 transition-all duration-300 cursor-pointer"
          >
            {INDUSTRIES.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
