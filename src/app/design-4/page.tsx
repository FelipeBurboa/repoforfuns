"use client";

import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { Navbar } from "@/components/design-4/Navbar";
import { Hero } from "@/components/design-4/Hero";
import { ScrollSection } from "@/components/design-4/ScrollSection";
import { ValueProps } from "@/components/design-4/ValueProps";
import { Features } from "@/components/design-4/Features";
import { Industries } from "@/components/design-4/Industries";
import { Pricing } from "@/components/design-4/Pricing";
import { FAQ } from "@/components/design-4/FAQ";
import { Contact } from "@/components/design-4/Contact";

export default function Design4Page() {
  const [frames, setFrames] = useState<HTMLImageElement[] | null>(null);

  const handleLoadComplete = useCallback((loadedFrames: HTMLImageElement[]) => {
    setFrames(loadedFrames);
  }, []);

  if (!frames) {
    return (
      <LoadingScreen
        onComplete={handleLoadComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        barClassName="h-1.5 rounded-full transition-all duration-300 ease-out"
        textClassName="text-negro/30 text-sm mt-4 font-[var(--font-dm-sans)] tracking-widest"
        brandName="VENTAPLAY"
      />
    );
  }

  return (
    <main className="relative bg-white text-negro">
      {/* Global gradient mesh overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "-10%",
            right: "-10%",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ValueProps />
        <ScrollSection frames={frames} />
        <Features />
        <Industries />
        <Pricing />
        <FAQ />
        <Contact />
      </div>

      <style jsx>{`
        @keyframes loading-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}
