"use client";

import { motion } from "motion/react";
import { VALUE_PROPS } from "@/lib/content";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const icons = [TrendingUp, Clock, DollarSign];

export function ValueProps() {
  return (
    <section
      className="py-32 px-6"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          {VALUE_PROPS.headline}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPS.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-violeta-60/10 flex items-center justify-center mb-6 group-hover:bg-violeta-60/20 transition-colors duration-500">
                  <Icon size={22} className="text-violeta-40" />
                </div>
                <h3 className="font-[var(--font-cormorant-garamond)] text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-[var(--font-outfit)] text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
