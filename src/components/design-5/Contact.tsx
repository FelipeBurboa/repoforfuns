"use client";

import { motion } from "motion/react";
import { CONTACT, NAV_ITEMS, WHATSAPP_LINK } from "@/lib/content";
import { Mail, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <footer
      id="contacto"
      className="bg-white border-t-4 border-[#02a080] py-16 md:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand column — giant faded condensed name */}
          <div className="col-span-12 lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tighter text-[#1a1a1a]/[0.04] text-[clamp(4rem,12vw,9rem)] leading-none select-none"
            >
              VENTAPLAY
            </motion.h2>
          </div>

          {/* Navigation column */}
          <div className="col-span-6 lg:col-span-2">
            <h4 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-[0.12em] text-[#1a1a1a] text-[13px] mb-6">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-[var(--font-barlow)] text-[#1a1a1a]/45 text-sm hover:text-[#02a080] transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info column — grid layout */}
          <div className="col-span-6 lg:col-span-3">
            <h4 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-[0.12em] text-[#1a1a1a] text-[13px] mb-6">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#02a080]/8 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#02a080]" strokeWidth={2} />
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-sm hover:text-[#02a080] transition-colors duration-150"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#02a080]/8 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-[#02a080]" strokeWidth={2} />
                </span>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-sm hover:text-[#02a080] transition-colors duration-150"
                >
                  {CONTACT.whatsapp.number}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#02a080]/8 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#02a080]" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/30 text-[11px] uppercase tracking-[0.1em]">
                    {CONTACT.phone.label}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-sm">
                    {CONTACT.phone.number}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA column */}
          <div className="col-span-12 lg:col-span-3">
            <h4 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-[0.12em] text-[#1a1a1a] text-[13px] mb-6">
              Empieza hoy
            </h4>
            <p className="font-[var(--font-barlow)] text-[#1a1a1a]/45 text-sm mb-6 leading-relaxed">
              Agenda una demo y descubre cómo Ventaplay puede transformar tu negocio.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-[13px] tracking-[0.06em] px-6 py-3 rounded-sm hover:bg-[#028a6e] transition-colors duration-150 w-full"
            >
              Contratar Ventaplay
            </a>
          </div>
        </div>

        {/* Bottom bar — minimal */}
        <div className="border-t border-[#1a1a1a]/6 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-barlow)] text-[#1a1a1a]/25 text-[11px] uppercase tracking-[0.1em]">
            &copy; {new Date().getFullYear()} Ventaplay. Todos los derechos reservados.
          </p>
          <div className="flex gap-1">
            <div className="w-6 h-[2px] bg-[#02a080]" />
            <div className="w-3 h-[2px] bg-[#ffe529]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
