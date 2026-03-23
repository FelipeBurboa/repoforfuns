"use client";

import { motion } from "motion/react";
import { PRICING } from "@/lib/content";
import { Check, Sparkles, Cpu } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="precios"
      className="py-28 px-6"
      style={{ background: "#f7f7f7" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-negro text-center mb-20"
        >
          {PRICING.headline}
        </motion.h2>

        {/* 4-column pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative bg-white rounded-3xl p-6 border transition-all duration-500 hover:-translate-y-1 ${
                plan.recommended
                  ? "border-turquesa-100/40 shadow-[0_4px_20px_rgba(8,200,167,0.1),0_8px_40px_rgba(8,200,167,0.06)] hover:shadow-[0_8px_30px_rgba(8,200,167,0.15),0_12px_50px_rgba(8,200,167,0.08)]"
                  : "border-negro/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07),0_8px_30px_rgba(0,0,0,0.04)]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-turquesa-100 text-white text-xs font-bold font-[var(--font-figtree)] flex items-center gap-1.5 shadow-[0_2px_8px_rgba(8,200,167,0.3)]">
                  <Sparkles size={12} />
                  RECOMENDADO
                </div>
              )}

              <h3 className="font-[var(--font-sora)] text-lg font-bold text-negro mt-2">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="font-[var(--font-sora)] text-3xl font-bold text-negro">
                  {plan.monthlyPrice.split("/")[0]}
                </span>
                <span className="font-[var(--font-figtree)] text-negro/40 text-sm">/mes</span>
              </div>
              <p className="font-[var(--font-figtree)] text-xs text-negro/30 mt-1">
                {plan.annualPrice} · {plan.savings}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={14} className="mt-0.5 text-turquesa-100 shrink-0" />
                    <span className="font-[var(--font-figtree)] text-negro/55 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* AI Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-[var(--font-sora)] text-2xl font-bold text-negro text-center mb-8 flex items-center justify-center gap-3">
            <Cpu size={22} className="text-violeta-80" />
            {PRICING.addons.headline}
          </h3>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {PRICING.addons.items.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-violeta-80/15 shadow-[0_2px_10px_rgba(114,54,190,0.04)] hover:shadow-[0_4px_20px_rgba(114,54,190,0.08)] hover:-translate-y-1 transition-all duration-500"
              >
                <h4 className="font-[var(--font-sora)] text-negro font-semibold">
                  {addon.name}
                </h4>
                <p className="font-[var(--font-sora)] text-violeta-80 text-xl font-bold mt-2">
                  {addon.price}
                </p>
                <p className="font-[var(--font-figtree)] text-negro/30 text-xs mt-1">
                  {addon.annualPrice} · {addon.savings}
                </p>
                <p className="font-[var(--font-figtree)] text-negro/45 text-sm mt-3 leading-relaxed">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-[var(--font-figtree)] text-negro/40 text-sm mb-4">
            {PRICING.cta.note}
          </p>
          <a
            href={PRICING.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full bg-turquesa-100 text-white font-semibold font-[var(--font-figtree)] hover:bg-turquesa-120 transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(8,200,167,0.3)] hover:shadow-[0_6px_20px_rgba(8,200,167,0.4)]"
          >
            {PRICING.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
