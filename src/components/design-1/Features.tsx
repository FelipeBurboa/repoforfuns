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
      className="py-32 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d16 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white text-center mb-6"
        >
          {FEATURES.headline}
        </motion.h2>

        <div className="mt-16 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {FEATURES.sections.map((section, i) => {
              const Icon = sectionIcons[i];
              return (
                <button
                  key={section.id}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 font-[var(--font-outfit)] text-sm ${
                    active === i
                      ? "bg-white/[0.06] text-white border border-white/[0.1]"
                      : "text-white/40 hover:text-white/60 border border-transparent"
                  }`}
                >
                  <Icon size={18} className={active === i ? "text-turquesa-100" : "text-white/30"} />
                  {section.title}
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl border border-white/[0.06]"
              style={{ background: "rgba(255, 255, 255, 0.02)" }}
            >
              <h3 className="font-[var(--font-cormorant-garamond)] text-3xl font-bold text-white mb-3">
                {FEATURES.sections[active].title}
              </h3>
              <p className="font-[var(--font-outfit)] text-white/40 mb-8 leading-relaxed">
                {FEATURES.sections[active].description}
              </p>

              <ul className="space-y-3 mb-8">
                {FEATURES.sections[active].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-turquesa-100 shrink-0" />
                    <span className="font-[var(--font-outfit)] text-white/70 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="p-4 rounded-xl border border-turquesa-100/20"
                style={{ background: "rgba(8, 200, 167, 0.04)" }}
              >
                <p className="font-[var(--font-outfit)] text-turquesa-100 text-sm font-medium">
                  {FEATURES.sections[active].benefit}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
