"use client";

import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { SCROLL_PHASES } from "@/lib/content";

interface ScrollSectionProps {
  frames: HTMLImageElement[];
}

export function ScrollSection({ frames }: ScrollSectionProps) {
  return (
    <section className="relative" style={{ background: "#fefefd" }}>
      {/* Top curved divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 0L0 40C360 80 720 60 1080 40C1260 30 1380 20 1440 30L1440 0L0 0Z" fill="white" />
        </svg>
      </div>

      <ScrollAnimation
        frames={frames}
        className="relative"
        canvasClassName="absolute top-1/2 left-[5%] -translate-y-1/2 w-[85%] lg:w-[55%] max-h-[80vh] h-auto object-contain"
        canvasMask="radial-gradient(ellipse 75% 70% at 30% 40%, black 35%, transparent 75%)"
        containerHeight="400vh"
        renderCard={(phase, isActive) => {
          return (
            <div
              key={phase.id}
              className="absolute right-0 top-0 w-full lg:w-[40%] h-full pointer-events-none"
            >
              {/* Right-side info card — sharp, structured */}
              <div
                className={`absolute px-6 lg:px-8 transition-all duration-200 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  top: `${22 + (phase.number - 1) * 14}%`,
                }}
              >
                {/* Card with left border accent */}
                <div className="border-l-[3px] border-[#02a080] pl-4 lg:pl-6">
                  <span className="font-[var(--font-barlow-condensed)] text-[#02a080] text-sm font-bold uppercase tracking-[0.2em]">
                    Paso {phase.number.toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-[var(--font-barlow-condensed)] text-[#1a1a1a] text-4xl lg:text-5xl font-bold uppercase tracking-tight mt-2">
                    {phase.title}
                  </h3>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/50 text-base mt-3 max-w-[320px] leading-relaxed">
                    {phase.description}
                  </p>
                  {/* Geometric accent below description */}
                  <div className="flex gap-1 mt-4">
                    <div className="w-6 h-[2px] bg-[#02a080]" />
                    <div className="w-3 h-[2px] bg-[#ffe529]" />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
        renderBackground={(progress) => (
          <>
            {/* Full background gradient — white left, warm right */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #fefefd 0%, #fefefd 25%, #fefbef 60%, #fffbf5 100%)",
              }}
            />

            {/* Vertical progress indicator on far right */}
            <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 h-[60%] w-[2px] bg-[#1a1a1a]/6">
              <div
                className="w-full bg-[#02a080] transition-all duration-100"
                style={{
                  height: `${progress * 100}%`,
                }}
              />
              {/* Current position — square dot (Swiss precision) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#02a080] transition-all duration-100"
                style={{
                  top: `${progress * 100}%`,
                  transform: "translate(-50%, -50%) rotate(45deg)",
                }}
              />
            </div>

            {/* Phase number indicators on progress bar */}
            {SCROLL_PHASES.map((phase) => (
              <div
                key={phase.id}
                className="absolute right-4 lg:right-8 w-[2px]"
                style={{
                  top: `${22 + (phase.number - 1) * 14}%`,
                }}
              >
                <span className="absolute right-4 -top-2 font-[var(--font-barlow-condensed)] text-[#1a1a1a]/20 text-[10px] font-bold uppercase tracking-[0.15em]">
                  {phase.number.toString().padStart(2, "0")}
                </span>
              </div>
            ))}

          </>
        )}
      />

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 80L0 30C360 0 720 20 1080 40C1260 50 1380 60 1440 50L1440 80L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
