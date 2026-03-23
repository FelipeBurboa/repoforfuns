"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FEATURES } from "@/lib/content";
import {
  MessageSquare,
  Calendar,
  Users,
  CreditCard,
  Crown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const sectionIcons = [MessageSquare, Calendar, Users, Crown, CreditCard];

const tabGradients = [
  "linear-gradient(135deg, #9f5deb, #08c8a7)",
  "linear-gradient(135deg, #08c8a7, #6366f1)",
  "linear-gradient(135deg, #6366f1, #ec4899)",
  "linear-gradient(135deg, #ec4899, #f59e0b)",
  "linear-gradient(135deg, #f59e0b, #9f5deb)",
];

export function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="funcionalidades" className="py-32 px-6 bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Subtle mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "-10%",
            right: "-10%",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-bricolage-grotesque)] text-4xl md:text-5xl font-bold text-negro text-center mb-16"
        >
          {FEATURES.headline}
        </motion.h2>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {FEATURES.sections.map((section, i) => {
            const Icon = sectionIcons[i];
            const isActive = activeTab === i;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-[var(--font-dm-sans)] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-negro/50 bg-gray-50 hover:bg-gray-100 hover:text-negro/70"
                }`}
                style={isActive ? { background: tabGradients[i] } : undefined}
              >
                <Icon size={16} />
                {section.title}
              </button>
            );
          })}
        </motion.div>

        {/* Active feature content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Feature card */}
            <div className="relative">
              {/* Gradient left border */}
              <div
                className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                style={{ background: tabGradients[activeTab] }}
              />
              <div
                className="ml-6 p-8 rounded-[20px]"
                style={{
                  background: "rgba(255, 255, 255, 0.70)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="font-[var(--font-bricolage-grotesque)] text-2xl font-bold text-negro mb-4">
                  {FEATURES.sections[activeTab].title}
                </h3>
                <p className="font-[var(--font-dm-sans)] text-negro/50 leading-relaxed mb-6">
                  {FEATURES.sections[activeTab].description}
                </p>

                <ul className="space-y-3">
                  {FEATURES.sections[activeTab].items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-start gap-3 font-[var(--font-dm-sans)] text-negro/70"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#08c8a7" }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefit callout */}
            <div className="flex items-center">
              <div
                className="w-full p-8 rounded-[20px] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(159,93,235,0.05), rgba(8,200,167,0.05))`,
                }}
              >
                {/* Decorative blob */}
                <div
                  className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full opacity-[0.08]"
                  style={{ background: tabGradients[activeTab] }}
                />

                <Sparkles
                  size={24}
                  className="mb-4"
                  style={{ color: "#9f5deb" }}
                />
                <p className="font-[var(--font-bricolage-grotesque)] text-xl font-semibold text-negro leading-relaxed">
                  {FEATURES.sections[activeTab].benefit}
                </p>

                <div
                  className="mt-6 h-1 w-16 rounded-full"
                  style={{ background: tabGradients[activeTab] }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[80px]"
        >
          <path
            d="M0 80L0 50C240 20 480 40 720 30C960 20 1200 50 1440 40L1440 80L0 80Z"
            fill="#faf9fe"
          />
        </svg>
      </div>
    </section>
  );
}
