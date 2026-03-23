"use client";

import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/design-2/Navbar";
import { Hero } from "@/components/design-2/Hero";
import { ScrollSection } from "@/components/design-2/ScrollSection";
import { ValueProps } from "@/components/design-2/ValueProps";
import { Features } from "@/components/design-2/Features";
import { Industries } from "@/components/design-2/Industries";
import { Pricing } from "@/components/design-2/Pricing";
import { FAQ } from "@/components/design-2/FAQ";
import { Contact } from "@/components/design-2/Contact";

export default function Design2Page() {
  const [frames, setFrames] = useState<HTMLImageElement[] | null>(null);

  const handleLoadComplete = useCallback((loadedFrames: HTMLImageElement[]) => {
    setFrames(loadedFrames);
  }, []);

  if (!frames) {
    return (
      <LoadingScreen
        onComplete={handleLoadComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blanco"
        barClassName="h-1 bg-turquesa-100 transition-all duration-300 ease-out rounded-full"
        textClassName="text-negro/30 text-sm mt-4 font-[var(--font-figtree)] tracking-widest"
        brandName="VENTAPLAY"
      />
    );
  }

  return (
    <main style={{ background: "#f7f7f7", color: "#1a1a1a" }}>
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
