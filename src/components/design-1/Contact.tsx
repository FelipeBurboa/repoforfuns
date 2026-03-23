"use client";

import { CONTACT, WHATSAPP_LINK } from "@/lib/content";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  return (
    <footer
      id="contacto"
      className="py-20 px-6 border-t border-white/[0.06]"
      style={{ background: "#07070c" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-turquesa-100/30 transition-colors">
              <Mail size={20} className="text-white/40 group-hover:text-turquesa-100 transition-colors" />
            </div>
            <p className="font-[var(--font-outfit)] text-white/60 text-sm group-hover:text-white transition-colors">
              {CONTACT.email}
            </p>
          </a>

          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-turquesa-100/30 transition-colors">
              <MessageCircle size={20} className="text-white/40 group-hover:text-turquesa-100 transition-colors" />
            </div>
            <p className="font-[var(--font-outfit)] text-white/70 text-sm font-medium group-hover:text-white transition-colors">
              WhatsApp — {CONTACT.whatsapp.label}
            </p>
            <p className="font-[var(--font-outfit)] text-white/40 text-xs">
              {CONTACT.whatsapp.number}
            </p>
          </a>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <Phone size={20} className="text-white/40" />
            </div>
            <p className="font-[var(--font-outfit)] text-white/70 text-sm font-medium">
              Teléfono
            </p>
            <p className="font-[var(--font-outfit)] text-white/40 text-xs">
              {CONTACT.phone.label} — {CONTACT.phone.number}
            </p>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/[0.04]">
          <p className="font-[var(--font-cormorant-garamond)] text-lg font-bold text-white/20 tracking-wider">
            VENTAPLAY
          </p>
        </div>
      </div>
    </footer>
  );
}
