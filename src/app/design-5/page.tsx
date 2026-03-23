"use client";

import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/design-5/Navbar";
import { Hero } from "@/components/design-5/Hero";
import { ScrollSection } from "@/components/design-5/ScrollSection";
import { ValueProps } from "@/components/design-5/ValueProps";
import { Features } from "@/components/design-5/Features";
import { Industries } from "@/components/design-5/Industries";
import { Pricing } from "@/components/design-5/Pricing";
import { FAQ } from "@/components/design-5/FAQ";
import { Contact } from "@/components/design-5/Contact";

export default function Design5Page() {
  const [frames, setFrames] = useState<HTMLImageElement[] | null>(null);

  const handleLoadComplete = useCallback(
    (loadedFrames: HTMLImageElement[]) => {
      setFrames(loadedFrames);
    },
    []
  );

  if (!frames) {
    return (
      <LoadingScreen
        onComplete={handleLoadComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        barClassName="h-[2px] bg-[#02a080] transition-all duration-200 ease-linear"
        textClassName="text-[#1a1a1a]/25 text-[13px] mt-6 font-[var(--font-barlow-condensed)] uppercase tracking-[0.3em]"
        brandName="VENTAPLAY"
      />
    );
  }

  return (
    <main style={{ background: "#ffffff", color: "#1a1a1a" }}>
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
