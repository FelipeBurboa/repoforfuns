"use client";

import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/content";
import { Heart, Scissors, Dumbbell, PawPrint, GraduationCap, Briefcase } from "lucide-react";

const industryIcons = [Heart, Scissors, Dumbbell, PawPrint, GraduationCap, Briefcase];

export function Industries() {
  return (
    <section
      id="industrias"
      className="py-32 px-6"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          {INDUSTRIES.headline}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.items.map((item, i) => {
            const Icon = industryIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.06] hover:border-violeta-60/30 transition-all duration-500"
                style={{ background: "rgba(255, 255, 255, 0.02)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-violeta-60/10 flex items-center justify-center mb-4 group-hover:bg-violeta-60/20 transition-colors">
                  <Icon size={20} className="text-violeta-40" />
                </div>
                <h3 className="font-[var(--font-cormorant-garamond)] text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-[var(--font-outfit)] text-white/50 text-sm mb-2 leading-relaxed">
                  {item.description}
                </p>
                <p className="font-[var(--font-outfit)] text-white/30 text-xs">
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
          <h3 className="font-[var(--font-cormorant-garamond)] text-2xl font-bold text-white mb-3">
            {INDUSTRIES.cta.headline}
          </h3>
          <p className="font-[var(--font-outfit)] text-white/40 mb-6 max-w-xl mx-auto">
            {INDUSTRIES.cta.description}
          </p>
          <a
            href={INDUSTRIES.cta.href}
            className="inline-block px-6 py-3 rounded-full border border-white/15 text-white/70 font-[var(--font-outfit)] text-sm hover:border-turquesa-100/50 hover:text-turquesa-100 transition-all duration-300 cursor-pointer"
          >
            {INDUSTRIES.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
