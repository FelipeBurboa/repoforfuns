"use client";

import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

interface ScrollSectionProps {
  frames: HTMLImageElement[];
}

export function ScrollSection({ frames }: ScrollSectionProps) {
  return (
    <section className="relative bg-white">
      <style jsx>{`
        @keyframes card-glow {
          0%, 100% { box-shadow: 0 8px 32px rgba(159, 93, 235, 0.1); }
          50% { box-shadow: 0 8px 32px rgba(8, 200, 167, 0.15); }
        }
      `}</style>

      {/* Top curved divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 0L0 40C360 80 720 60 1080 40C1260 30 1380 20 1440 30L1440 0L0 0Z" fill="white" />
        </svg>
      </div>

      <ScrollAnimation
        frames={frames}
        className="relative"
        canvasClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[65vw] lg:w-[55vw] max-w-[900px] h-auto rounded-[20px]"
        canvasMask="radial-gradient(ellipse 70% 65% at 50% 50%, black 45%, transparent 100%)"
        renderBackground={(progress) => {
          const hue1 = 270 + progress * 120;
          const hue2 = 170 + progress * 60;
          return (
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{
                background: `linear-gradient(135deg,
                  hsl(${hue1}, 60%, 95%) 0%,
                  hsl(${hue2}, 50%, 92%) 35%,
                  hsl(${(hue1 + 40) % 360}, 45%, 94%) 65%,
                  hsl(${(hue2 + 60) % 360}, 55%, 96%) 100%)`,
              }}
            />
          );
        }}
        renderCard={(phase, isActive) => {
          const positions: Record<string, string> = {
            chatea: "top-[15%] left-[5%] md:left-[8%]",
            conecta: "top-[15%] right-[5%] md:right-[8%]",
            agenda: "bottom-[18%] left-[5%] md:left-[8%]",
            cobra: "bottom-[18%] right-[5%] md:right-[8%]",
          };
          const gradients: Record<string, string> = {
            chatea: "linear-gradient(135deg, #9f5deb, #08c8a7)",
            conecta: "linear-gradient(135deg, #08c8a7, #8c00ff)",
            agenda: "linear-gradient(135deg, #8c00ff, #ffe529)",
            cobra: "linear-gradient(135deg, #ffe529, #9f5deb)",
          };
          return (
            <div
              className={`absolute ${positions[phase.id]} max-w-[220px] md:max-w-[260px] transition-all duration-700 ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                animation: isActive ? "card-glow 4s ease-in-out infinite" : "none",
              }}
            >
              <div
                className="relative rounded-[16px] p-[1px] overflow-hidden"
                style={{ background: gradients[phase.id] }}
              >
                <div
                  className="rounded-[15px] p-5"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold font-[var(--font-dm-sans)] px-2 py-0.5 rounded-full text-white"
                      style={{ background: gradients[phase.id] }}
                    >
                      {phase.number.toString().padStart(2, "0")}
                    </span>
                    <h3 className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="font-[var(--font-dm-sans)] text-negro/50 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
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
