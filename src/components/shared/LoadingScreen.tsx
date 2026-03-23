"use client";

import { useState, useEffect, useCallback } from "react";
import { preloadFrames } from "@/lib/frames";

interface LoadingScreenProps {
  onComplete: (frames: HTMLImageElement[]) => void;
  className?: string;
  barClassName?: string;
  textClassName?: string;
  brandName?: string;
}

export function LoadingScreen({
  onComplete,
  className = "fixed inset-0 z-50 flex flex-col items-center justify-center bg-negro",
  barClassName = "h-1 bg-turquesa-100 transition-all duration-300 ease-out",
  textClassName = "text-blanco/60 text-sm mt-4 font-mono",
  brandName = "VENTAPLAY",
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const handleProgress = useCallback((loaded: number, total: number) => {
    setProgress(Math.round((loaded / total) * 100));
  }, []);

  useEffect(() => {
    let cancelled = false;

    preloadFrames(handleProgress).then((frames) => {
      if (!cancelled) {
        setDone(true);
        // Small delay for exit animation
        setTimeout(() => {
          if (!cancelled) onComplete(frames);
        }, 600);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [onComplete, handleProgress]);

  return (
    <div
      className={className}
      style={{
        opacity: done ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div className="text-center">
        <h2
          className="text-2xl font-bold tracking-[0.3em] mb-8"
          style={{ color: "inherit" }}
        >
          {brandName}
        </h2>

        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className={barClassName}
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className={textClassName}>{progress}%</p>
      </div>
    </div>
  );
}
