"use client";

import { motion } from "motion/react";
import { VALUE_PROPS } from "@/lib/content";
import { TrendingUp, Clock, PiggyBank } from "lucide-react";

const icons = [TrendingUp, Clock, PiggyBank];

export function ValueProps() {
  return (
    <section className="py-28 px-6" style={{ background: "#f7f7f7" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-negro text-center mb-16"
        >
          {VALUE_PROPS.headline}
        </motion.h2>

        {/* 3-column bento grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {VALUE_PROPS.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 cursor-default"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-2xl bg-turquesa-100/10 flex items-center justify-center mb-6 group-hover:bg-turquesa-100/15 transition-colors duration-300">
                  <Icon size={24} className="text-turquesa-100" />
                </div>

                <h3 className="font-[var(--font-sora)] text-xl font-bold text-negro mb-3">
                  {item.title}
                </h3>
                <p className="font-[var(--font-figtree)] text-negro/50 text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-turquesa-100/0 group-hover:bg-turquesa-100/20 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
