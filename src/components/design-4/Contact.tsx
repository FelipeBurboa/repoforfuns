"use client";

import { motion } from "motion/react";
import { CONTACT, WHATSAPP_LINK } from "@/lib/content";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <footer id="contacto" className="relative pt-32 pb-16 px-6 overflow-hidden">
      <style jsx>{`
        @keyframes mesh-footer-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -15px) scale(1.05); }
          66% { transform: translate(-15px, 10px) scale(0.95); }
        }
        @keyframes mesh-footer-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 20px) scale(1.08); }
        }
      `}</style>

      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f8f7ff 0%, #edf5ff 30%, #f0fdf8 60%, #fdf2ff 100%)",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)",
            top: "-15%",
            left: "-10%",
            animation: "mesh-footer-1 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "-10%",
            right: "-5%",
            animation: "mesh-footer-2 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, transparent 65%)",
            top: "30%",
            right: "20%",
            animation: "mesh-footer-1 30s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 0L0 40C240 70 480 30 720 50C960 70 1200 30 1440 45L1440 0L0 0Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Gradient brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-[var(--font-bricolage-grotesque)] text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #450693 0%, #08c8a7 45%, #8c00ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ventaplay
          </h2>
          <p className="font-[var(--font-dm-sans)] text-negro/40 text-lg">
            Agenda, Vende y Cobra por WhatsApp
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* WhatsApp */}
          <motion.a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group block"
          >
            <div
              className="relative rounded-[20px] p-[1px] overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:shadow-turquesa-100/15"
              style={{
                background: "linear-gradient(135deg, rgba(8,200,167,0.3), rgba(159,93,235,0.3))",
              }}
            >
              <div
                className="rounded-[19px] p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #08c8a7, #9f5deb)" }}
                >
                  <MessageCircle size={22} className="text-white" />
                </div>
                <p className="font-[var(--font-dm-sans)] text-sm text-negro/40 mb-1">
                  {CONTACT.whatsapp.label}
                </p>
                <p className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                  {CONTACT.whatsapp.number}
                </p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block"
          >
            <div
              className="relative rounded-[20px] p-[1px] overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:shadow-violeta-60/15"
              style={{
                background: "linear-gradient(135deg, rgba(159,93,235,0.3), rgba(236,72,153,0.3))",
              }}
            >
              <div
                className="rounded-[19px] p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #9f5deb, #ec4899)" }}
                >
                  <Mail size={22} className="text-white" />
                </div>
                <p className="font-[var(--font-dm-sans)] text-sm text-negro/40 mb-1">
                  Email
                </p>
                <p className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                  {CONTACT.email}
                </p>
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${CONTACT.phone.number.replace(/\s/g, "")}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group block"
          >
            <div
              className="relative rounded-[20px] p-[1px] overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:shadow-magenta-100/15"
              style={{
                background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(245,158,11,0.3))",
              }}
            >
              <div
                className="rounded-[19px] p-6 text-center"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #ec4899, #f59e0b)" }}
                >
                  <Phone size={22} className="text-white" />
                </div>
                <p className="font-[var(--font-dm-sans)] text-sm text-negro/40 mb-1">
                  {CONTACT.phone.label}
                </p>
                <p className="font-[var(--font-bricolage-grotesque)] text-lg font-bold text-negro">
                  {CONTACT.phone.number}
                </p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-negro/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-dm-sans)] text-negro/30 text-sm">
            &copy; {new Date().getFullYear()} Ventaplay. Todos los derechos reservados.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-[var(--font-dm-sans)] font-medium transition-colors"
            style={{
              background: "linear-gradient(135deg, #9f5deb, #08c8a7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Habla con nosotros
            <ArrowRight size={14} className="text-violeta-60 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
