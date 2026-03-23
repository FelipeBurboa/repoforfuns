"use client";

import { CONTACT } from "@/lib/content";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <footer
      id="contacto"
      className="py-20 px-6 border-t border-negro/[0.06]"
      style={{ background: "#f7f7f7" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-negro/[0.06] flex items-center justify-center group-hover:border-turquesa-100/30 group-hover:shadow-[0_4px_14px_rgba(8,200,167,0.08)] transition-all duration-300">
              <Mail size={22} className="text-negro/30 group-hover:text-turquesa-100 transition-colors duration-300" />
            </div>
            <p className="font-[var(--font-figtree)] text-negro/55 text-sm group-hover:text-negro transition-colors duration-300">
              {CONTACT.email}
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-negro/[0.06] flex items-center justify-center group-hover:border-turquesa-100/30 group-hover:shadow-[0_4px_14px_rgba(8,200,167,0.08)] transition-all duration-300">
              <MessageCircle size={22} className="text-negro/30 group-hover:text-turquesa-100 transition-colors duration-300" />
            </div>
            <p className="font-[var(--font-figtree)] text-negro/65 text-sm font-medium group-hover:text-negro transition-colors duration-300">
              WhatsApp — {CONTACT.whatsapp.label}
            </p>
            <p className="font-[var(--font-figtree)] text-negro/35 text-xs">
              {CONTACT.whatsapp.number}
            </p>
          </a>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white border border-negro/[0.06] flex items-center justify-center">
              <Phone size={22} className="text-negro/30" />
            </div>
            <p className="font-[var(--font-figtree)] text-negro/65 text-sm font-medium">
              Telefono
            </p>
            <p className="font-[var(--font-figtree)] text-negro/35 text-xs">
              {CONTACT.phone.label} — {CONTACT.phone.number}
            </p>
          </div>
        </div>

        {/* Brand footer */}
        <div className="text-center mt-16 pt-8 border-t border-negro/[0.04]">
          <p className="font-[var(--font-sora)] text-lg font-bold text-negro/15 tracking-wider">
            VENTAPLAY
          </p>
        </div>
      </div>
    </footer>
  );
}
