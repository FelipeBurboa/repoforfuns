"use client";

import { motion } from "motion/react";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <section id="funcionalidades" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-negro mb-20"
        >
          {FEATURES.headline}
        </motion.h2>

        <div className="space-y-0">
          {FEATURES.sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              {/* 4px rule */}
              <div className="w-full h-[4px] bg-negro" />

              <div className="py-16 md:py-20">
                <h3 className="font-[var(--font-bodoni-moda)] text-2xl md:text-3xl text-negro mb-4">
                  {section.title}
                </h3>
                <p className="font-[var(--font-jost)] text-base text-negro/50 leading-relaxed max-w-2xl mb-8">
                  {section.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="font-[var(--font-jost)] text-sm text-negro/70 flex items-start gap-3"
                    >
                      <span className="text-negro/30 mt-0.5">&mdash;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-[var(--font-jost)] text-sm italic text-violeta-100">
                  {section.benefit}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final rule */}
          <div className="w-full h-[4px] bg-negro" />
        </div>
      </div>
    </section>
  );
}
