"use client";

import { motion } from "motion/react";
import { HERO } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16">
      <style jsx>{`
        @keyframes mesh-shift-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(5%, -8%) scale(1.1); }
          50% { transform: translate(-3%, 5%) scale(0.95); }
          75% { transform: translate(8%, 3%) scale(1.05); }
        }
        @keyframes mesh-shift-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(-8%, 5%) scale(1.05); }
          50% { transform: translate(6%, -3%) scale(1.1); }
          75% { transform: translate(-4%, -6%) scale(0.95); }
        }
        @keyframes mesh-shift-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1.05); }
          33% { transform: translate(10%, 5%) scale(0.95); }
          66% { transform: translate(-5%, -8%) scale(1.1); }
        }
        @keyframes blob-drift-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -40px) rotate(5deg); }
          50% { transform: translate(-20px, 20px) rotate(-3deg); }
          75% { transform: translate(15px, -10px) rotate(2deg); }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-40px, 20px) rotate(-4deg); }
          50% { transform: translate(25px, -30px) rotate(6deg); }
          75% { transform: translate(-15px, 40px) rotate(-2deg); }
        }
        @keyframes blob-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, 30px) scale(1.15); }
          66% { transform: translate(-35px, -20px) scale(0.9); }
        }
        @keyframes gradient-breathe {
          0%, 100% { background-size: 200% 200%; background-position: 0% 50%; }
          50% { background-size: 200% 200%; background-position: 100% 50%; }
        }
      `}</style>

      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f7f7f7 0%, #e7dcf7 25%, #d7f7f1 50%, #f4e6ff 75%, #fff8e2 100%)",
          }}
        />
        {/* Mesh layer 1 - violeta */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #cc87ff 0%, transparent 65%)",
            top: "-15%",
            left: "-10%",
            animation: "mesh-shift-1 20s ease-in-out infinite",
          }}
        />
        {/* Mesh layer 2 - turquesa */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "-10%",
            right: "-5%",
            animation: "mesh-shift-2 25s ease-in-out infinite",
          }}
        />
        {/* Mesh layer 3 - magenta */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #cc8eff 0%, transparent 60%)",
            top: "40%",
            left: "50%",
            animation: "mesh-shift-3 18s ease-in-out infinite",
          }}
        />
        {/* Mesh layer 4 - amarillo warm */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #ffe529 0%, transparent 60%)",
            top: "10%",
            right: "20%",
            animation: "mesh-shift-1 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Floating blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[300px] h-[300px] opacity-[0.12]"
          style={{
            background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            top: "15%",
            left: "8%",
            filter: "blur(40px)",
            animation: "blob-drift-1 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[250px] h-[250px] opacity-[0.10]"
          style={{
            background: "linear-gradient(135deg, #8c00ff, #ffe529)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            bottom: "20%",
            right: "10%",
            filter: "blur(35px)",
            animation: "blob-drift-2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] opacity-[0.08]"
          style={{
            background: "linear-gradient(135deg, #08c8a7, #cc87ff)",
            borderRadius: "40% 60% 60% 40% / 50% 60% 40% 50%",
            top: "60%",
            left: "30%",
            filter: "blur(30px)",
            animation: "blob-drift-3 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-bricolage-grotesque)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          style={{
            background: "linear-gradient(135deg, #450693 0%, #08c8a7 45%, #8c00ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-breathe 8s ease-in-out infinite",
          }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-dm-sans)] text-lg md:text-xl text-negro/60 mt-8 max-w-2xl mx-auto leading-relaxed"
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
            className="group px-8 py-3.5 rounded-full text-white font-semibold font-[var(--font-dm-sans)] hover:shadow-xl hover:shadow-violeta-60/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
            }}
          >
            {HERO.cta1.label}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={HERO.cta2.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-violeta-60/30 text-violeta-100 font-medium font-[var(--font-dm-sans)] hover:border-violeta-60/60 hover:bg-violeta-10/50 transition-all duration-300 cursor-pointer"
          >
            {HERO.cta2.label}
          </a>
        </motion.div>

        {/* Stats with gradient underlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-12 mt-16 flex-wrap"
        >
          {HERO.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-[var(--font-bricolage-grotesque)] text-3xl md:text-4xl font-bold text-negro">
                {stat.value}
              </p>
              <div
                className="h-0.5 w-12 mx-auto mt-2 mb-2 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${
                    i === 0 ? "#9f5deb, #08c8a7" : i === 1 ? "#08c8a7, #8c00ff" : "#8c00ff, #ffe529"
                  })`,
                }}
              />
              <p className="font-[var(--font-dm-sans)] text-sm text-negro/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
          <path d="M0 120L0 60C240 20 480 0 720 10C960 20 1200 60 1440 40L1440 120L0 120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
