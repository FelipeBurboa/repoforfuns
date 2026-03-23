"use client";

import { motion } from "motion/react";
import { FAQ as FAQData, WHATSAPP_LINK } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export function FAQ() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ background: "#faf9fe" }}>
      <style jsx>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #9f5deb 0%, transparent 65%)",
            top: "-5%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #08c8a7 0%, transparent 65%)",
            bottom: "5%",
            left: "-5%",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-bricolage-grotesque)] text-4xl md:text-5xl font-bold text-negro text-center mb-6"
        >
          {FAQData.headline}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-16"
        >
          <div
            className="h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #9f5deb, #08c8a7)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion className="space-y-4">
            {FAQData.items.map((item, i) => (
              <AccordionItem
                key={i}
                className="group rounded-[16px] border-none overflow-hidden transition-all duration-300 data-[open]:shadow-lg data-[open]:shadow-violeta-60/8"
                style={{
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Gradient border on open */}
                <div
                  className="absolute inset-0 rounded-[16px] p-[1px] opacity-0 group-data-[open]:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(159,93,235,0.3), rgba(8,200,167,0.3))",
                  }}
                >
                  <div className="w-full h-full rounded-[15px] bg-white/90" />
                </div>

                <AccordionTrigger className="px-6 py-5 text-left font-[var(--font-bricolage-grotesque)] text-base font-semibold text-negro hover:no-underline relative z-10">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 relative z-10">
                  <p className="font-[var(--font-dm-sans)] text-negro/55 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="font-[var(--font-bricolage-grotesque)] text-xl font-semibold text-negro mb-6">
            {FAQData.cta.headline}
          </p>
          <a
            href={FAQData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold font-[var(--font-dm-sans)] transition-all duration-300 hover:shadow-lg hover:shadow-violeta-60/25"
            style={{ background: "linear-gradient(135deg, #9f5deb, #08c8a7)" }}
          >
            Escríbenos por WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px]">
          <path d="M0 80L0 50C240 20 480 50 720 35C960 20 1200 40 1440 30L1440 80L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
