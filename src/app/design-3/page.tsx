"use client";

import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/design-3/Navbar";
import { Hero } from "@/components/design-3/Hero";
import { ScrollSection } from "@/components/design-3/ScrollSection";
import { ValueProps } from "@/components/design-3/ValueProps";
import { Features } from "@/components/design-3/Features";
import { Industries } from "@/components/design-3/Industries";
import { Pricing } from "@/components/design-3/Pricing";
import { FAQ } from "@/components/design-3/FAQ";
import { Contact } from "@/components/design-3/Contact";

export default function Design3Page() {
  const [frames, setFrames] = useState<HTMLImageElement[] | null>(null);

  const handleLoadComplete = useCallback((loadedFrames: HTMLImageElement[]) => {
    setFrames(loadedFrames);
  }, []);

  if (!frames) {
    return (
      <LoadingScreen
        onComplete={handleLoadComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        barClassName="h-0.5 bg-violeta-100 transition-all duration-300 ease-out"
        textClassName="text-negro/30 text-sm mt-4 font-[var(--font-jost)] tracking-widest"
        brandName="VENTAPLAY"
      />
    );
  }

  return (
    <main style={{ background: "#fafafa", color: "#1a1a1a" }}>
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
