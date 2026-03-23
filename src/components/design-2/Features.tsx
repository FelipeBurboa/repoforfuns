"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FEATURES } from "@/lib/content";
import { MessageSquare, Calendar, Users, CreditCard, Star } from "lucide-react";

const sectionIcons = [MessageSquare, Calendar, Users, Star, CreditCard];

export function Features() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="funcionalidades"
      className="py-28 px-6"
      style={{ background: "#f7f7f7" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-negro text-center mb-4"
        >
          {FEATURES.headline}
        </motion.h2>

        {/* Asymmetric Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-min">
          {/* Feature navigation tiles - left column as bento cards */}
          {FEATURES.sections.map((section, i) => {
            const Icon = sectionIcons[i];
            const isActive = active === i;
            // Bento sizing: first card spans 2 cols, others are 1 col
            const colSpan =
              i === 0
                ? "lg:col-span-4 lg:row-span-1"
                : i === 1
                ? "lg:col-span-4 lg:row-span-1"
                : i === 2
                ? "lg:col-span-4 lg:row-span-1"
                : i === 3
                ? "lg:col-span-6 lg:row-span-1"
                : "lg:col-span-6 lg:row-span-1";

            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setActive(i)}
                className={`cursor-pointer text-left p-5 rounded-2xl border transition-all duration-300 ${colSpan} ${
                  isActive
                    ? "bg-white border-turquesa-100/30 shadow-[0_4px_20px_rgba(8,200,167,0.08)]"
                    : "bg-white/60 border-negro/[0.04] hover:bg-white hover:border-negro/[0.08] hover:shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-turquesa-100/15"
                        : "bg-negro/[0.04]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors duration-300 ${
                        isActive ? "text-turquesa-100" : "text-negro/30"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-[var(--font-sora)] text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-negro" : "text-negro/50"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>
              </motion.button>
            );
          })}

          {/* Feature detail panel - full-width below */}
          <div className="lg:col-span-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] border border-negro/[0.04]"
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-[var(--font-sora)] text-2xl md:text-3xl font-bold text-negro mb-3">
                      {FEATURES.sections[active].title}
                    </h3>
                    <p className="font-[var(--font-figtree)] text-negro/50 leading-relaxed mb-6">
                      {FEATURES.sections[active].description}
                    </p>

                    {/* Benefit badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquesa-100/8 border border-turquesa-100/15">
                      <div className="w-2 h-2 rounded-full bg-turquesa-100" />
                      <span className="font-[var(--font-figtree)] text-sm text-turquesa-120 font-medium">
                        {FEATURES.sections[active].benefit}
                      </span>
                    </div>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {FEATURES.sections[active].items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-turquesa-100 shrink-0" />
                          <span className="font-[var(--font-figtree)] text-negro/65 text-sm leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
