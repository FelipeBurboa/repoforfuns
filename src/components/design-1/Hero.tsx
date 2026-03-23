"use client";

import { motion } from "motion/react";
import { HERO } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)" }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
            animation: "float-slow 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
            animation: "float-slow 25s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8c00ff 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "float-slow 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-cormorant-garamond)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          style={{
            background: "linear-gradient(135deg, #e7dcf7 0%, #9f5deb 40%, #08c8a7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-outfit)] text-lg md:text-xl text-white/50 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href={HERO.cta1.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-turquesa-100 text-negro font-semibold font-[var(--font-outfit)] text-base hover:bg-turquesa-120 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(8,200,167,0.3)]"
          >
            {HERO.cta1.label}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={HERO.cta2.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/15 text-white/70 font-medium font-[var(--font-outfit)] text-base hover:border-white/30 hover:text-white transition-all duration-300 cursor-pointer"
          >
            {HERO.cta2.label}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mt-20"
        >
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="font-[var(--font-outfit)] text-sm text-white/40 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
      `}</style>
    </section>
  );
}
