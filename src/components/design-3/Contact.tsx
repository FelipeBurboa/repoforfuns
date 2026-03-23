"use client";

import { CONTACT, WHATSAPP_LINK } from "@/lib/content";

export function Contact() {
  return (
    <footer id="contacto" className="px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Thin top border */}
        <div className="w-full h-px bg-negro/10" />

        <div className="py-16 grid md:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Contact info */}
          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-[var(--font-jost)] text-sm text-negro/50 hover:text-negro transition-colors duration-300 block"
            >
              {CONTACT.email}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-jost)] text-sm text-negro/50 hover:text-negro transition-colors duration-300 block"
            >
              WhatsApp {CONTACT.whatsapp.number}
            </a>
            <p className="font-[var(--font-jost)] text-sm text-negro/50">
              {CONTACT.phone.label}: {CONTACT.phone.number}
            </p>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-jost)] text-sm text-violeta-100 hover:opacity-70 transition-opacity duration-300"
          >
            {CONTACT.whatsapp.label} &rarr;
          </a>
        </div>

        {/* Faded brand name */}
        <div className="mt-8">
          <span className="font-[var(--font-bodoni-moda)] text-[clamp(3rem,10vw,8rem)] leading-none text-negro/[0.08] select-none block">
            Ventaplay
          </span>
        </div>
      </div>
    </footer>
  );
}
