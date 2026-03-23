"use client";

import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { SCROLL_PHASES } from "@/lib/content";

interface ScrollSectionProps {
  frames: HTMLImageElement[];
}

export function ScrollSection({ frames }: ScrollSectionProps) {
  return (
    <section className="relative" style={{ background: "#f0f0f0" }}>
      <ScrollAnimation
        frames={frames}
        className="relative"
        canvasClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[60vw] lg:w-[50vw] max-w-[850px] h-auto rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        canvasMask="radial-gradient(ellipse 70% 65% at 50% 50%, black 45%, transparent 100%)"
        renderCard={(phase, isActive) => (
          <div
            className={`absolute transition-all duration-700 ease-out ${
              isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
            style={{
              // Position cards around the canvas in bento-style tiles
              ...(phase.number === 1
                ? { top: "12%", left: "4%", maxWidth: "260px" }
                : phase.number === 2
                ? { top: "12%", right: "4%", maxWidth: "260px" }
                : phase.number === 3
                ? { bottom: "16%", left: "4%", maxWidth: "260px" }
                : { bottom: "16%", right: "4%", maxWidth: "260px" }),
            }}
          >
            <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-negro/[0.04] pointer-events-auto">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-xl bg-turquesa-100/10 flex items-center justify-center font-[var(--font-sora)] text-sm font-bold text-turquesa-100">
                  {phase.number}
                </span>
                <h3 className="font-[var(--font-sora)] text-lg font-bold text-negro">
                  {phase.title}
                </h3>
              </div>
              <p className="font-[var(--font-figtree)] text-negro/50 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>
        )}
        renderBackground={(progress) => (
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(8,200,167,${
                0.03 + progress * 0.04
              }), transparent)`,
            }}
          />
        )}
      />

      {/* Phase indicators (bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {SCROLL_PHASES.map((phase) => (
          <div
            key={phase.id}
            className="w-2 h-2 rounded-full bg-negro/10 transition-colors duration-300"
          />
        ))}
      </div>
    </section>
  );
}
