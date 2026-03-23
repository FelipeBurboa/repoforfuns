"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PRICING, WHATSAPP_LINK } from "@/lib/content";
import { Check, Sparkles, ArrowRight, Bot } from "lucide-react";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-32 px-6 bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes border-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)",
            top: "-5%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "10%",
            right: "-5%",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-bricolage-grotesque)] text-4xl md:text-5xl font-bold text-negro text-center mb-6"
        >
          {PRICING.headline}
        </motion.h2>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-sm font-[var(--font-dm-sans)] transition-colors ${!annual ? "text-negro" : "text-negro/40"}`}>
            Mensual
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              background: annual
                ? "linear-gradient(135deg, #9f5deb, #08c8a7)"
                : "#e5e7eb",
            }}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                annual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-[var(--font-dm-sans)] transition-colors ${annual ? "text-negro" : "text-negro/40"}`}>
            Anual
          </span>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative ${plan.recommended ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Animated gradient border for recommended */}
              {plan.recommended && (
                <div
                  className="absolute -inset-[2px] rounded-[22px] z-0"
                  style={{
                    background: "linear-gradient(135deg, #9f5deb, #08c8a7, #ec4899, #9f5deb)",
                    backgroundSize: "300% 300%",
                    animation: "border-rotate 4s ease-in-out infinite",
                  }}
                />
              )}

              <div
                className={`relative z-10 rounded-[20px] p-7 h-full flex flex-col ${
                  plan.recommended ? "bg-white" : ""
                }`}
                style={
                  !plan.recommended
                    ? {
                        background: "rgba(255,255,255,0.70)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                      }
                    : {
                        boxShadow: "0 8px 40px rgba(159,93,235,0.15)",
                      }
                }
              >
                {plan.recommended && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Sparkles size={14} style={{ color: "#9f5deb" }} />
                    <span
                      className="text-xs font-bold font-[var(--font-dm-sans)] uppercase tracking-wider"
                      style={{
                        background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Recomendado
                    </span>
                  </div>
                )}

                <h3 className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                  {plan.name}
                </h3>

                <p className="font-[var(--font-bricolage-grotesque)] text-3xl font-bold text-negro mt-3 mb-1">
                  {annual ? plan.annualPrice : plan.monthlyPrice}
                </p>

                {annual && (
                  <p
                    className="text-xs font-[var(--font-dm-sans)] font-medium mb-4"
                    style={{ color: "#08c8a7" }}
                  >
                    {plan.savings}
                  </p>
                )}
                {!annual && <div className="mb-4" />}

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm font-[var(--font-dm-sans)] text-negro/65"
                    >
                      <Check size={16} className="mt-0.5 shrink-0" style={{ color: "#08c8a7" }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl text-sm font-semibold font-[var(--font-dm-sans)] transition-all duration-300 ${
                    plan.recommended
                      ? "text-white hover:shadow-lg hover:shadow-violeta-60/25"
                      : "text-negro/70 bg-gray-50 hover:bg-gray-100"
                  }`}
                  style={
                    plan.recommended
                      ? { background: "linear-gradient(135deg, #9f5deb, #08c8a7)" }
                      : undefined
                  }
                >
                  Contratar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Addons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="font-[var(--font-bricolage-grotesque)] text-2xl font-bold text-negro text-center mb-10">
            {PRICING.addons.headline}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {PRICING.addons.items.map((addon, i) => (
              <div
                key={addon.name}
                className="relative group rounded-[20px] p-[1px] transition-all duration-500"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, rgba(159,93,235,0.3), rgba(8,200,167,0.3))"
                    : "linear-gradient(135deg, rgba(140,0,255,0.3), rgba(236,72,153,0.3))",
                }}
              >
                <div
                  className="rounded-[19px] p-7 h-full"
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: i === 0
                          ? "linear-gradient(135deg, #9f5deb, #08c8a7)"
                          : "linear-gradient(135deg, #8c00ff, #ec4899)",
                      }}
                    >
                      <Bot size={18} className="text-white" />
                    </div>
                    <h4 className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                      {addon.name}
                    </h4>
                  </div>

                  <p className="font-[var(--font-bricolage-grotesque)] text-2xl font-bold text-negro mb-1">
                    {annual ? addon.annualPrice : addon.price}
                  </p>
                  {annual && (
                    <p className="text-xs font-[var(--font-dm-sans)] font-medium mb-3" style={{ color: "#08c8a7" }}>
                      {addon.savings}
                    </p>
                  )}
                  {!annual && <div className="mb-3" />}

                  <p className="font-[var(--font-dm-sans)] text-negro/50 text-sm leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={PRICING.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold font-[var(--font-dm-sans)] transition-all duration-300 hover:shadow-xl hover:shadow-violeta-60/25"
            style={{ background: "linear-gradient(135deg, #9f5deb, #08c8a7)" }}
          >
            {PRICING.cta.label}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="font-[var(--font-dm-sans)] text-negro/40 text-sm mt-4">
            {PRICING.cta.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
