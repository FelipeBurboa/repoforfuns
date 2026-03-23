"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FRAME_CONFIG, SCROLL_PHASES } from "@/lib/content";

interface ScrollAnimationState {
  progress: number;
  frameIndex: number;
  activePhase: string | null;
}

export function useScrollAnimation(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [state, setState] = useState<ScrollAnimationState>({
    progress: 0,
    frameIndex: 0,
    activePhase: null,
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const updateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollRange = rect.height - window.innerHeight;

    if (scrollRange <= 0) return;

    const rawProgress = -rect.top / scrollRange;
    const progress = Math.max(0, Math.min(1, rawProgress));
    const frameIndex = Math.min(
      Math.floor(progress * FRAME_CONFIG.totalFrames),
      FRAME_CONFIG.totalFrames - 1
    );

    let activePhase: string | null = null;
    for (const phase of SCROLL_PHASES) {
      if (progress >= phase.start && progress <= phase.end) {
        activePhase = phase.id;
        break;
      }
    }

    const prev = stateRef.current;
    if (
      prev.frameIndex !== frameIndex ||
      prev.activePhase !== activePhase
    ) {
      setState({ progress, frameIndex, activePhase });
    }
  }, [containerRef]);

  useEffect(() => {
    const handler = () => updateScroll();
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // initial calc
    return () => window.removeEventListener("scroll", handler);
  }, [updateScroll]);

  return state;
}
