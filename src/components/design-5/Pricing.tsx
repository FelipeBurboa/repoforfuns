"use client";

import { motion } from "motion/react";
import { PRICING, WHATSAPP_LINK } from "@/lib/content";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="precios" className="bg-white py-16 md:py-24 border-t-[2px] border-[#1a1a1a]/8">
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
                {PRICING.headline}
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-12 h-[3px] bg-[#02a080]" />
                <div className="w-4 h-[3px] bg-[#ffe529]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing cards — 4-col grid, sharp corners, bold borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1a1a1a]/10">
          {PRICING.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.06,
              }}
              className={`relative flex flex-col border-r border-b border-[#1a1a1a]/8 ${
                plan.recommended
                  ? "border-[3px] border-[#02a080] -m-[1px] z-10"
                  : ""
              }`}
            >
              {/* Recommended badge — amarillo-100 */}
              {plan.recommended && (
                <div className="absolute -top-4 left-6 bg-[#ffe529] text-[#1a1a1a] font-[var(--font-barlow-condensed)] font-bold uppercase text-[11px] tracking-[0.12em] px-4 py-1.5">
                  Recomendado
                </div>
              )}

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Plan name */}
                <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-xl mb-6">
                  {plan.name}
                </h3>

                {/* Large condensed price */}
                <div className="mb-6">
                  <p className="font-[var(--font-barlow-condensed)] font-bold text-[#1a1a1a] text-3xl md:text-4xl tracking-tight leading-none">
                    {plan.monthlyPrice}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/35 text-[13px] mt-2">
                    {plan.annualPrice}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[#02a080] text-[13px] font-semibold mt-1">
                    {plan.savings}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#1a1a1a]/8 mb-6" />

                {/* Feature list — square checkmarks */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-4 h-4 bg-[#02a080]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-[#02a080]" strokeWidth={3} />
                      </span>
                      <span className="font-[var(--font-barlow)] text-[#1a1a1a]/65 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 font-[var(--font-barlow-condensed)] font-bold uppercase text-[13px] tracking-[0.06em] px-6 py-3 rounded-sm transition-colors duration-150 ${
                    plan.recommended
                      ? "bg-[#02a080] text-white hover:bg-[#028a6e]"
                      : "border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  {PRICING.cta.label}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Addons section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16"
        >
          <div className="border-t-4 border-[#ffe529] pt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-[#ffe529] flex items-center justify-center">
                <Sparkles size={14} className="text-[#1a1a1a]" />
              </div>
              <h3 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-2xl md:text-3xl">
                {PRICING.addons.headline}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1a1a1a]/10">
              {PRICING.addons.items.map((addon, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 border-r border-b border-[#1a1a1a]/8 hover:bg-[#ffe529]/5 transition-colors duration-150"
                >
                  <h4 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-xl mb-2">
                    {addon.name}
                  </h4>
                  <p className="font-[var(--font-barlow-condensed)] font-bold text-[#02a080] text-2xl tracking-tight">
                    {addon.price}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/35 text-[13px] mt-1">
                    {addon.annualPrice} — <span className="text-[#02a080]">{addon.savings}</span>
                  </p>
                  <div className="w-full h-[1px] bg-[#1a1a1a]/8 my-4" />
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-sm leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <p className="font-[var(--font-barlow)] text-[#1a1a1a]/30 text-[13px] text-center mt-12 tracking-wide">
          {PRICING.cta.note}
        </p>
      </div>
    </section>
  );
}
