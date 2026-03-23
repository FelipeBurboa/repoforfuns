"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PRICING, WHATSAPP_LINK } from "@/lib/content";
import { ArrowRight, Check } from "lucide-react";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-negro mb-8"
        >
          {PRICING.headline}
        </motion.h2>

        {/* Billing toggle */}
        <div className="flex items-center gap-4 mb-16">
          <button
            onClick={() => setAnnual(false)}
            className={`font-[var(--font-jost)] text-sm transition-colors duration-300 ${
              !annual ? "text-negro" : "text-negro/30"
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-12 h-6 rounded-full bg-negro/10 transition-colors duration-300"
          >
            <div
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-negro transition-transform duration-300 ${
                annual ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`font-[var(--font-jost)] text-sm transition-colors duration-300 ${
              annual ? "text-negro" : "text-negro/30"
            }`}
          >
            Anual
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6">
          {PRICING.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-8 border transition-colors duration-300 ${
                plan.recommended
                  ? "border-violeta-100"
                  : "border-negro/15"
              }`}
            >
              {plan.recommended && (
                <span className="font-[var(--font-jost)] text-[10px] uppercase tracking-[0.2em] text-violeta-100 mb-4 block">
                  Recomendado
                </span>
              )}

              <h3 className="font-[var(--font-bodoni-moda)] text-2xl text-negro mb-2">
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="font-[var(--font-bodoni-moda)] text-3xl md:text-4xl font-bold text-negro">
                  {annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                {annual && (
                  <span className="font-[var(--font-jost)] text-xs text-violeta-100 ml-2">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-[var(--font-jost)] text-sm text-negro/60 flex items-start gap-2"
                  >
                    <Check size={14} className="text-negro/30 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* AI Addons */}
        <div className="mt-20">
          <div className="w-full h-[4px] bg-negro" />

          <div className="py-16">
            <h3 className="font-[var(--font-bodoni-moda)] text-2xl md:text-3xl text-negro mb-12">
              {PRICING.addons.headline}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {PRICING.addons.items.map((addon) => (
                <div
                  key={addon.name}
                  className="p-8 border border-negro/15"
                >
                  <h4 className="font-[var(--font-bodoni-moda)] text-xl text-negro mb-2">
                    {addon.name}
                  </h4>
                  <div className="font-[var(--font-bodoni-moda)] text-2xl font-bold text-negro mb-4">
                    {annual ? addon.annualPrice : addon.price}
                    {annual && (
                      <span className="font-[var(--font-jost)] text-xs text-violeta-100 ml-2">
                        {addon.savings}
                      </span>
                    )}
                  </div>
                  <p className="font-[var(--font-jost)] text-sm text-negro/50 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[4px] bg-negro" />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-violeta-100 text-white font-[var(--font-jost)] text-sm font-medium hover:opacity-90 transition-opacity duration-300"
          >
            {PRICING.cta.label}
            <ArrowRight size={14} />
          </a>
          <p className="font-[var(--font-jost)] text-xs text-negro/35 mt-4">
            {PRICING.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
}
