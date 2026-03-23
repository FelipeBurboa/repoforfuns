"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SCROLL_PHASES } from "@/lib/content";

interface ScrollAnimationProps {
  frames: HTMLImageElement[];
  className?: string;
  canvasClassName?: string;
  cardClassName?: string;
  activeCardClassName?: string;
  renderCard?: (phase: (typeof SCROLL_PHASES)[number], isActive: boolean) => React.ReactNode;
  containerHeight?: string;
  canvasMask?: string;
  renderBackground?: (progress: number) => React.ReactNode;
}

export function ScrollAnimation({
  frames,
  className = "",
  canvasClassName = "",
  cardClassName = "",
  activeCardClassName = "",
  renderCard,
  containerHeight = "400vh",
  canvasMask,
  renderBackground,
}: ScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawnFrameRef = useRef(-1);
  const { frameIndex, activePhase, progress } = useScrollAnimation(containerRef);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !frames.length) return;

    if (drawnFrameRef.current === frameIndex) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frame = frames[frameIndex];
    if (!frame) return;

    // Set canvas size to match frame on first draw
    if (drawnFrameRef.current === -1) {
      canvas.width = frame.naturalWidth;
      canvas.height = frame.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    drawnFrameRef.current = frameIndex;
  }, [frames, frameIndex]);

  // rAF render loop
  useEffect(() => {
    let rafId: number;
    function tick() {
      drawFrame();
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [drawFrame]);

  // Draw first frame immediately
  useEffect(() => {
    if (frames.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx && frames[0]) {
        canvas.width = frames[0].naturalWidth;
        canvas.height = frames[0].naturalHeight;
        ctx.drawImage(frames[0], 0, 0, canvas.width, canvas.height);
        drawnFrameRef.current = 0;
      }
    }
  }, [frames]);

  return (
    <div
      ref={containerRef}
      className={`scroll-container ${className}`}
      style={{ height: containerHeight }}
    >
      <div className="sticky-wrapper">
        {renderBackground?.(progress)}

        <canvas
          ref={canvasRef}
          className={canvasClassName}
          style={canvasMask ? { maskImage: canvasMask, WebkitMaskImage: canvasMask } : undefined}
        />

        {/* Phase overlay cards */}
        <div className="absolute inset-0 pointer-events-none">
          {SCROLL_PHASES.map((phase) => {
            const isActive = activePhase === phase.id;

            if (renderCard) {
              return (
                <div key={phase.id}>{renderCard(phase, isActive)}</div>
              );
            }

            return (
              <div
                key={phase.id}
                className={`transition-all duration-500 ${cardClassName} ${
                  isActive ? activeCardClassName : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-sm font-medium opacity-60">
                  {phase.number.toString().padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold mt-1">{phase.title}</h3>
                <p className="mt-2 opacity-80">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
