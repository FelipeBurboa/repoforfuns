"use client";

import { motion } from "motion/react";
import { INDUSTRIES } from "@/lib/content";
import {
  Heart,
  Scissors,
  Dumbbell,
  PawPrint,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const industryIcons = [Heart, Scissors, Dumbbell, PawPrint, GraduationCap, Briefcase];

const cardGradients = [
  "linear-gradient(135deg, rgba(159,93,235,0.06), rgba(8,200,167,0.03))",
  "linear-gradient(135deg, rgba(8,200,167,0.06), rgba(99,102,241,0.03))",
  "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(236,72,153,0.03))",
  "linear-gradient(135deg, rgba(236,72,153,0.06), rgba(245,158,11,0.03))",
  "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(159,93,235,0.03))",
  "linear-gradient(135deg, rgba(140,0,255,0.06), rgba(8,200,167,0.03))",
];

const iconGradients = [
  "linear-gradient(135deg, #9f5deb, #08c8a7)",
  "linear-gradient(135deg, #08c8a7, #6366f1)",
  "linear-gradient(135deg, #6366f1, #ec4899)",
  "linear-gradient(135deg, #ec4899, #f59e0b)",
  "linear-gradient(135deg, #f59e0b, #9f5deb)",
  "linear-gradient(135deg, #8c00ff, #08c8a7)",
];

export function Industries() {
  return (
    <section id="industrias" className="py-32 px-6 relative overflow-hidden" style={{ background: "#faf9fe" }}>
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Mesh bg elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, transparent 65%)",
            top: "10%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 65%)",
            bottom: "5%",
            left: "-5%",
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
          {INDUSTRIES.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-16"
        >
          <div
            className="h-1 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, #9f5deb, #08c8a7, #ec4899)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.items.map((item, i) => {
            const Icon = industryIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-[20px] p-7 transition-all duration-500 hover:shadow-lg hover:shadow-violeta-60/8"
                style={{ background: cardGradients[i] }}
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-[20px] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: iconGradients[i] }}
                >
                  <div className="w-full h-full rounded-[19px]" style={{ background: "#faf9fe" }} />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: iconGradients[i] }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro mb-2">
                    {item.title}
                  </h3>
                  <p className="font-[var(--font-dm-sans)] text-negro/55 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="font-[var(--font-dm-sans)] text-negro/35 text-xs">
                    {item.examples}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div
            className="max-w-xl mx-auto rounded-[20px] p-8 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.70)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)" }}
            />
            <h3 className="font-[var(--font-bricolage-grotesque)] text-xl font-bold text-negro mb-3">
              {INDUSTRIES.cta.headline}
            </h3>
            <p className="font-[var(--font-dm-sans)] text-negro/50 text-sm mb-6 leading-relaxed">
              {INDUSTRIES.cta.description}
            </p>
            <a
              href={INDUSTRIES.cta.href}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold font-[var(--font-dm-sans)] transition-all duration-300 hover:shadow-lg hover:shadow-violeta-60/25"
              style={{ background: "linear-gradient(135deg, #9f5deb, #08c8a7)" }}
            >
              {INDUSTRIES.cta.label}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 80L0 40C360 70 720 10 1080 40C1260 55 1380 45 1440 50L1440 80L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
