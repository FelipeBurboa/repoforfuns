"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS, WHATSAPP_LINK } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#1a1a1a]/8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-4 items-center px-4 md:px-8 h-16">
        {/* Brand — col 1-2 */}
        <div className="col-span-3 lg:col-span-2">
          <a
            href="#"
            className="font-[var(--font-barlow-condensed)] text-[#1a1a1a] text-xl font-bold uppercase tracking-[0.08em] inline-flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-[#02a080] inline-block" />
            VENTAPLAY
          </a>
        </div>

        {/* Desktop Nav — centered */}
        <div className="hidden lg:flex col-span-7 items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-[var(--font-barlow)] text-[#1a1a1a]/60 text-[13px] font-medium uppercase tracking-[0.12em] hover:text-[#02a080] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA — right */}
        <div className="hidden lg:flex col-span-3 justify-end">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-[13px] tracking-[0.06em] px-6 py-2.5 rounded-sm hover:bg-[#028a6e] transition-colors duration-150"
          >
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="col-span-9 lg:hidden flex justify-end">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#1a1a1a] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-white border-b border-[#1a1a1a]/8 overflow-hidden"
          >
            <div className="px-4 pb-6 pt-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[var(--font-barlow)] text-[#1a1a1a] text-base font-medium uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-sm tracking-wide px-6 py-2.5 rounded-sm text-center mt-2"
              >
                Contratar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
