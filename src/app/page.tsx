"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const designs = [
  {
    id: 1,
    name: "Obsidian",
    subtitle: "Dark Cinematic",
    description: "Premium dark UI with ambient light effects, glassmorphism, and floating gradient orbs. Linear.app meets Apple Pro.",
    headingFont: "var(--font-cormorant-garamond)",
    bg: "#0a0a0f",
    text: "#ffffff",
    accent: "#08c8a7",
    accentBg: "rgba(8, 200, 167, 0.15)",
    tags: ["Dark Mode", "Glassmorphism", "Ambient Glow"],
  },
  {
    id: 2,
    name: "Superficie",
    subtitle: "Bento Grid Premium",
    description: "Apple-style modular bento grid with soft shadows, hover lift effects, and structured information hierarchy.",
    headingFont: "var(--font-sora)",
    bg: "#f7f7f7",
    text: "#1a1a1a",
    accent: "#08c8a7",
    accentBg: "rgba(8, 200, 167, 0.1)",
    tags: ["Bento Grid", "Light Mode", "Apple-style"],
  },
  {
    id: 3,
    name: "Manifiesto",
    subtitle: "Editorial Minimalism",
    description: "Boldly restrained luxury editorial with oversized serif typography, extreme whitespace, and a single accent color.",
    headingFont: "var(--font-bodoni-moda)",
    bg: "#fafafa",
    text: "#1a1a1a",
    accent: "#450693",
    accentBg: "rgba(69, 6, 147, 0.08)",
    tags: ["Editorial", "Serif", "Minimalist"],
  },
  {
    id: 4,
    name: "Aurora",
    subtitle: "Gradient Mesh + Organic Flow",
    description: "Flowing gradient mesh backgrounds, iridescent glass cards, morphing organic shapes. The page feels alive.",
    headingFont: "var(--font-bricolage-grotesque)",
    bg: "#fefefe",
    text: "#1a1a1a",
    accent: "#9f5deb",
    accentBg: "rgba(159, 93, 235, 0.1)",
    tags: ["Gradient Mesh", "Organic", "Vibrant"],
  },
  {
    id: 5,
    name: "Contraste",
    subtitle: "Swiss Precision + Latin Energy",
    description: "International Typographic Style with strict grid, condensed uppercase headlines, and bold teal + yellow accents.",
    headingFont: "var(--font-barlow-condensed)",
    bg: "#ffffff",
    text: "#1a1a1a",
    accent: "#02a080",
    accentBg: "rgba(2, 160, 128, 0.1)",
    tags: ["Swiss Grid", "Condensed", "Bold Color"],
  },
];

export default function DesignGallery() {
  return (
    <main className="min-h-dvh bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-white/40 font-[var(--font-outfit)] tracking-[0.2em] uppercase mb-4"
        >
          Ventaplay Design Concepts
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-cormorant-garamond)] text-5xl md:text-7xl font-bold leading-[0.95]"
          style={{
            background: "linear-gradient(135deg, #e7dcf7 0%, #9f5deb 40%, #08c8a7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          5 Distinctive Designs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[var(--font-outfit)] text-lg text-white/40 mt-6 max-w-2xl"
        >
          Each design features the same content and scroll animation — with a completely unique visual identity.
          Click any card to experience it.
        </motion.p>
      </div>

      {/* Design cards */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid gap-6">
          {designs.map((design, i) => (
            <motion.a
              key={design.id}
              href={`/design-${design.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group grid md:grid-cols-[1fr_1fr] gap-6 p-6 md:p-8 rounded-2xl border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 cursor-pointer"
              style={{ background: "rgba(255, 255, 255, 0.02)" }}
            >
              {/* Preview swatch */}
              <div
                className="relative h-48 md:h-56 rounded-xl overflow-hidden flex items-center justify-center"
                style={{ background: design.bg }}
              >
                <span
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{
                    fontFamily: design.headingFont,
                    color: design.text,
                    opacity: 0.9,
                  }}
                >
                  {design.name === "Contraste" ? design.name.toUpperCase() : design.name}
                </span>

                <div
                  className="absolute bottom-4 right-4 w-4 h-4 rounded-full"
                  style={{ background: design.accent }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[var(--font-outfit)] text-white/30 text-sm">
                      0{design.id}
                    </span>
                    <h2 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                      {design.name}
                    </h2>
                  </div>
                  <p className="font-[var(--font-outfit)] text-sm text-white/50 mb-3">
                    {design.subtitle}
                  </p>
                  <p className="font-[var(--font-outfit)] text-sm text-white/30 leading-relaxed">
                    {design.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-wrap gap-2">
                    {design.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-[var(--font-outfit)]"
                        style={{
                          background: design.accentBg,
                          color: design.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors font-[var(--font-outfit)] text-sm shrink-0 ml-4">
                    View
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
