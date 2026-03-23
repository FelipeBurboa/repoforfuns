"use client";

import { motion } from "motion/react";
import { PRICING, WHATSAPP_LINK } from "@/lib/content";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="precios"
      className="py-32 px-6"
      style={{ background: "linear-gradient(180deg, #0d0d16 0%, #0a0a0f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          {PRICING.headline}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                plan.recommended
                  ? "border-turquesa-100/40 shadow-[0_0_40px_rgba(8,200,167,0.08)]"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              }`}
              style={{
                background: plan.recommended
                  ? "rgba(8, 200, 167, 0.04)"
                  : "rgba(255, 255, 255, 0.02)",
              }}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-turquesa-100 text-negro text-xs font-bold font-[var(--font-outfit)] flex items-center gap-1">
                  <Sparkles size={12} />
                  RECOMENDADO
                </div>
              )}

              <h3 className="font-[var(--font-cormorant-garamond)] text-xl font-bold text-white mt-2">
                {plan.name}
              </h3>
              <div className="mt-3">
                <span className="font-[var(--font-outfit)] text-2xl font-bold text-white">
                  {plan.monthlyPrice.split("/")[0]}
                </span>
                <span className="font-[var(--font-outfit)] text-white/40 text-sm">/mes</span>
              </div>
              <p className="font-[var(--font-outfit)] text-xs text-white/30 mt-1">
                {plan.annualPrice} · {plan.savings}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-turquesa-100 shrink-0" />
                    <span className="font-[var(--font-outfit)] text-white/60 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* AI Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-[var(--font-cormorant-garamond)] text-2xl font-bold text-white text-center mb-8">
            {PRICING.addons.headline}
          </h3>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {PRICING.addons.items.map((addon) => (
              <div
                key={addon.name}
                className="p-6 rounded-2xl border border-magenta-100/20"
                style={{ background: "rgba(140, 0, 255, 0.03)" }}
              >
                <h4 className="font-[var(--font-outfit)] text-white font-semibold">
                  {addon.name}
                </h4>
                <p className="font-[var(--font-outfit)] text-magenta-40 text-lg font-bold mt-2">
                  {addon.price}
                </p>
                <p className="font-[var(--font-outfit)] text-white/30 text-xs mt-1">
                  {addon.annualPrice} · {addon.savings}
                </p>
                <p className="font-[var(--font-outfit)] text-white/40 text-sm mt-3 leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-[var(--font-outfit)] text-white/40 text-sm mb-4">
            {PRICING.cta.note}
          </p>
          <a
            href={PRICING.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full bg-turquesa-100 text-negro font-semibold font-[var(--font-outfit)] hover:bg-turquesa-120 transition-colors duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(8,200,167,0.3)]"
          >
            {PRICING.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
