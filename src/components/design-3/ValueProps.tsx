"use client";

import { motion } from "motion/react";
import { VALUE_PROPS } from "@/lib/content";

export function ValueProps() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-negro mb-20"
        >
          {VALUE_PROPS.headline}
        </motion.h2>

        <div className="space-y-0">
          {VALUE_PROPS.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* 4px rule */}
              <div className="w-full h-[4px] bg-negro" />

              <div className="py-16 md:py-24 grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12 items-start">
                <h3 className="font-[var(--font-bodoni-moda)] text-3xl md:text-4xl text-negro">
                  {item.title}
                </h3>
                <p className="font-[var(--font-jost)] text-lg text-negro/60 leading-relaxed">
                  {item.description}
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
