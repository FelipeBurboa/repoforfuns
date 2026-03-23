"use client";

import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

interface ScrollSectionProps {
  frames: HTMLImageElement[];
}

export function ScrollSection({ frames }: ScrollSectionProps) {
  return (
    <section className="relative" style={{ background: "#fafafa" }}>
      {/* 4px rule divider */}
      <div className="w-full h-[4px] bg-negro" />

      <ScrollAnimation
        frames={frames}
        className="relative"
        canvasClassName="absolute top-0 left-0 w-full h-full object-cover"
        renderCard={(phase, isActive) => (
          <div
            key={phase.id}
            className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center transition-all duration-700 ease-out ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="px-8 py-6 rounded-xl"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <span className="font-[var(--font-bodoni-moda)] text-7xl md:text-8xl font-bold text-white block">
                {phase.number.toString().padStart(2, "0")}
              </span>
              <h3 className="font-[var(--font-bodoni-moda)] text-3xl md:text-4xl text-white mt-2">
                {phase.title}
              </h3>
              <p className="font-[var(--font-jost)] text-sm text-white/80 mt-2 max-w-xs mx-auto">
                {phase.description}
              </p>
            </div>
          </div>
        )}
      />

      {/* 4px rule divider */}
      <div className="w-full h-[4px] bg-negro" />
    </section>
  );
}
