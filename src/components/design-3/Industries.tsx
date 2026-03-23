"use client";

import { motion } from "motion/react";
import { INDUSTRIES, WHATSAPP_LINK } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section id="industrias" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-negro mb-20"
        >
          {INDUSTRIES.headline}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {INDUSTRIES.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="font-[var(--font-bodoni-moda)] text-xl font-bold text-negro mb-3">
                {item.title}
              </h3>
              <p className="font-[var(--font-jost)] text-sm text-negro/60 leading-relaxed mb-2">
                {item.description}
              </p>
              <p className="font-[var(--font-jost)] text-xs text-negro/35">
                {item.examples}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="w-full h-[4px] bg-negro" />
          <div className="py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="font-[var(--font-bodoni-moda)] text-2xl text-negro mb-2">
                {INDUSTRIES.cta.headline}
              </h3>
              <p className="font-[var(--font-jost)] text-sm text-negro/50 max-w-lg">
                {INDUSTRIES.cta.description}
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violeta-100 text-white font-[var(--font-jost)] text-sm font-medium hover:opacity-90 transition-opacity duration-300"
            >
              {INDUSTRIES.cta.label}
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="w-full h-[4px] bg-negro" />
        </motion.div>
      </div>
    </section>
  );
}
