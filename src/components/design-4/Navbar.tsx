"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS, WHATSAPP_LINK } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes shimmer-border {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-violeta-10/30"
        style={{
          background: "rgba(255, 255, 255, 0.80)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          backgroundImage:
            "linear-gradient(135deg, rgba(139,92,246,0.02), rgba(6,182,212,0.02), rgba(236,72,153,0.02))",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-[var(--font-bricolage-grotesque)] text-xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #450693, #08c8a7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VENTAPLAY
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-negro/60 hover:text-violeta-100 transition-colors duration-200 font-[var(--font-dm-sans)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2 rounded-full text-white font-medium font-[var(--font-dm-sans)] hover:shadow-lg hover:shadow-violeta-60/25 transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
              }}
            >
              Contratar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-negro/70 hover:text-negro cursor-pointer"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-violeta-10/30 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="px-6 py-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-negro/60 hover:text-violeta-100 transition-colors font-[var(--font-dm-sans)] py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-center px-5 py-2.5 rounded-full text-white font-medium font-[var(--font-dm-sans)] mt-2"
                  style={{
                    background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
                  }}
                >
                  Contratar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
