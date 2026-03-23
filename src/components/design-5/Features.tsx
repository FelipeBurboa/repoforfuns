"use client";

import { motion } from "motion/react";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-16 md:py-24">
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
                {FEATURES.headline}
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-12 h-[3px] bg-[#02a080]" />
                <div className="w-4 h-[3px] bg-[#ffe529]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature sections as rows in 12-col grid */}
        <div className="flex flex-col gap-0">
          {FEATURES.sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-12 gap-4 md:gap-8 border-t border-[#1a1a1a]/8 py-8 md:py-12"
            >
              {/* Section number + title — left col */}
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-start gap-3">
                  <span className="font-[var(--font-barlow-condensed)] text-[#02a080] text-[11px] font-bold tracking-[0.2em] mt-1">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-2xl md:text-3xl">
                      {section.title}
                    </h3>
                    <p className="font-[var(--font-barlow)] text-[#1a1a1a]/45 text-sm mt-3 leading-relaxed max-w-[280px]">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature list with turquesa square bullets */}
              <div className="col-span-12 md:col-span-5">
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {/* Square bullet — sharp, turquesa */}
                      <span className="w-[6px] h-[6px] bg-[#02a080] mt-[7px] flex-shrink-0" />
                      <span className="font-[var(--font-barlow)] text-[#1a1a1a] text-[15px] font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amarillo-100 benefit highlight block */}
              <div className="col-span-12 md:col-span-4">
                <div className="bg-[#ffe529] p-6 h-full flex items-center relative">
                  {/* Small geometric corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#1a1a1a]/10" />
                  <p className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-lg leading-snug">
                    {section.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
