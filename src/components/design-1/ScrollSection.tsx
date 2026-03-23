"use client";

import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { SCROLL_PHASES } from "@/lib/content";

interface ScrollSectionProps {
  frames: HTMLImageElement[];
}

export function ScrollSection({ frames }: ScrollSectionProps) {
  return (
    <section
      className="relative"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #08081a 50%, #0a0a0f 100%)" }}
    >
      <ScrollAnimation
        frames={frames}
        className="relative"
        canvasClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[65vw] lg:w-[55vw] max-w-[900px] h-auto rounded-2xl"
        canvasMask="radial-gradient(ellipse 70% 65% at 50% 50%, black 45%, transparent 80%)"
        renderBackground={(progress) => (
          <>
            {/* Glow halo behind canvas */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(159, 93, 235, ${0.06 + progress * 0.06}) 0%, rgba(8, 200, 167, ${0.03 + progress * 0.03}) 40%, transparent 70%)`,
                filter: "blur(60px)",
              }}
            />
            {/* Subtle rotation on canvas container */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `rotate(${-2 + progress * 6}deg)`,
                transition: "transform 0.1s linear",
              }}
            />
          </>
        )}
        renderCard={(phase, isActive) => {
          const isLeft = phase.number % 2 === 1;
          const positions: Record<string, string> = {
            chatea: "top-[15%]",
            conecta: "top-[35%]",
            agenda: "top-[55%]",
            cobra: "top-[75%]",
          };

          return (
            <div
              className={`absolute ${positions[phase.id]} ${
                isLeft ? "left-4 md:left-[6%]" : "right-4 md:right-[6%]"
              } max-w-[280px] transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : isLeft
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div
                className="p-5 rounded-xl border border-white/[0.08]"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-turquesa-100/10 flex items-center justify-center text-turquesa-100 text-sm font-bold font-[var(--font-outfit)]">
                    {phase.number}
                  </span>
                  <h3 className="text-white font-[var(--font-cormorant-garamond)] text-2xl font-bold">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-white/50 text-sm font-[var(--font-outfit)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          );
        }}
      />
    </section>
  );
}
