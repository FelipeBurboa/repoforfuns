"use client";

import { motion } from "motion/react";
import { VALUE_PROPS } from "@/lib/content";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const icons = [TrendingUp, Clock, DollarSign];

const gradients = [
  "linear-gradient(135deg, #9f5deb, #08c8a7)",
  "linear-gradient(135deg, #08c8a7, #8c00ff)",
  "linear-gradient(135deg, #8c00ff, #ffe529)",
];

export function ValueProps() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #cc87ff 0%, transparent 65%)",
            top: "-10%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "-10%",
            left: "-5%",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-bricolage-grotesque)] text-4xl md:text-5xl font-bold text-negro text-center mb-20"
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
                className="group relative"
              >
                {/* Gradient border wrapper */}
                <div
                  className="absolute inset-0 rounded-[20px] p-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: gradients[i] }}
                >
                  <div className="w-full h-full rounded-[19px] bg-white" />
                </div>

                <div
                  className="relative p-8 rounded-[20px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.70)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 8px 40px ${i === 0 ? "rgba(159,93,235,0.12)" : i === 1 ? "rgba(8,200,167,0.12)" : "rgba(140,0,255,0.12)"}`,
                    }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: gradients[i] }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-[var(--font-bricolage-grotesque)] text-2xl font-bold text-negro mb-3">
                    {item.title}
                  </h3>
                  <p className="font-[var(--font-dm-sans)] text-negro/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
