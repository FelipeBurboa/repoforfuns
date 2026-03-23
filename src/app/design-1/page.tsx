"use client";

import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/design-1/Navbar";
import { Hero } from "@/components/design-1/Hero";
import { ScrollSection } from "@/components/design-1/ScrollSection";
import { ValueProps } from "@/components/design-1/ValueProps";
import { Features } from "@/components/design-1/Features";
import { Industries } from "@/components/design-1/Industries";
import { Pricing } from "@/components/design-1/Pricing";
import { FAQ } from "@/components/design-1/FAQ";
import { Contact } from "@/components/design-1/Contact";

export default function Design1Page() {
  const [frames, setFrames] = useState<HTMLImageElement[] | null>(null);

  const handleLoadComplete = useCallback((loadedFrames: HTMLImageElement[]) => {
    setFrames(loadedFrames);
  }, []);

  if (!frames) {
    return (
      <LoadingScreen
        onComplete={handleLoadComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        barClassName="h-1 bg-turquesa-100 transition-all duration-300 ease-out rounded-full"
        textClassName="text-white/40 text-sm mt-4 font-[var(--font-outfit)] tracking-widest"
        brandName="VENTAPLAY"
      />
    );
  }

  return (
    <main style={{ background: "#0a0a0f", color: "#ffffff" }}>
      <Navbar />
      <Hero />
      <ValueProps />
      <ScrollSection frames={frames} />
      <Features />
      <Industries />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
