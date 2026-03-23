"use client";

import { useState } from "react";
import { NAV_ITEMS, WHATSAPP_LINK } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
      style={{
        background: "rgba(10, 10, 15, 0.7)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-[var(--font-cormorant-garamond)] text-xl font-bold tracking-wider text-white">
          VENTAPLAY
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 hover:text-turquesa-100 transition-colors duration-200 font-[var(--font-outfit)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 rounded-full bg-turquesa-100 text-negro font-medium font-[var(--font-outfit)] hover:bg-turquesa-120 transition-colors duration-200 cursor-pointer"
          >
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 hover:text-white cursor-pointer"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06] px-6 py-4 space-y-3"
          style={{ background: "rgba(10, 10, 15, 0.95)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-white/60 hover:text-turquesa-100 transition-colors font-[var(--font-outfit)] py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-center px-5 py-2.5 rounded-full bg-turquesa-100 text-negro font-medium font-[var(--font-outfit)] mt-2"
          >
            Contratar
          </a>
        </div>
      )}
    </nav>
  );
}
