"use client";

import { motion } from "motion/react";
import { VALUE_PROPS } from "@/lib/content";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const icons = [TrendingUp, Clock, DollarSign];

export function ValueProps() {
  return (
    <section className="bg-white py-16 md:py-24">
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
                {VALUE_PROPS.headline}
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-12 h-[3px] bg-[#02a080]" />
                <div className="w-4 h-[3px] bg-[#ffe529]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-column strict grid — no rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: i * 0.08,
                }}
                className={`border-t-4 bg-white p-6 md:p-8 group hover:bg-[#1a1a1a] transition-colors duration-200 ${
                  i === 1 ? "border-[#7236be]" : "border-[#02a080]"
                }`}
              >
                {/* Geometric icon block */}
                <div className={`w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-200 ${
                  i === 1 ? "bg-[#7236be]/8 group-hover:bg-[#7236be]/20" : "bg-[#02a080]/8 group-hover:bg-[#02a080]/20"
                }`}>
                  <Icon size={22} className={i === 1 ? "text-[#7236be]" : "text-[#02a080]"} strokeWidth={2} />
                </div>

                <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] group-hover:text-white text-2xl mb-4 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-[var(--font-barlow)] text-[#1a1a1a]/55 group-hover:text-white/60 text-base leading-relaxed transition-colors duration-200">
                  {item.description}
                </p>

                {/* Bottom geometric accent */}
                <div className="flex gap-1 mt-6">
                  <div className="w-8 h-[2px] bg-[#ffe529]" />
                  <div className="w-2 h-[2px] bg-[#02a080]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
