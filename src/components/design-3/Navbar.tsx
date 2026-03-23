"use client";

import { NAV_ITEMS } from "@/lib/content";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-negro/10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-[var(--font-bodoni-moda)] text-xl tracking-wide text-negro"
        >
          Ventaplay
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-[var(--font-jost)] text-sm text-negro/60 hover:text-negro transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
