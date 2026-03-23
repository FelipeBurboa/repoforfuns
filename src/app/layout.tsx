import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Outfit,
  Sora,
  Figtree,
  Bodoni_Moda,
  Jost,
  Bricolage_Grotesque,
  DM_Sans,
  Barlow_Condensed,
  Barlow, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Design 1: Obsidian
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Design 2: Superficie
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Design 3: Manifiesto
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Design 4: Aurora
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Design 5: Contraste
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontVariables = [
  cormorant.variable,
  outfit.variable,
  sora.variable,
  figtree.variable,
  bodoni.variable,
  jost.variable,
  bricolage.variable,
  dmSans.variable,
  barlowCondensed.variable,
  barlow.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Ventaplay — Agenda, Vende y Cobra por WhatsApp",
  description:
    "WhatsApp oficial + Agenda + CRM + pagos/POS + automatizaciones con IA. Todo en un solo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("antialiased", fontVariables, "font-sans", geist.variable)}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
