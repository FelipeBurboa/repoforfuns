"use client";

import { motion } from "motion/react";
import { FAQ as FAQData, WHATSAPP_LINK } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section
      className="py-32 px-6"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-cormorant-garamond)] text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          {FAQData.headline}
        </motion.h2>

        <Accordion className="space-y-3">
          {FAQData.items.map((item, i) => (
            <AccordionItem
              key={i}
              className="border border-white/[0.06] rounded-xl px-6 overflow-hidden data-[open]:border-white/[0.12]"
              style={{ background: "rgba(255, 255, 255, 0.02)" }}
            >
              <AccordionTrigger className="font-[var(--font-outfit)] text-white/80 text-left text-sm font-medium py-5 hover:text-white hover:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-[var(--font-outfit)] text-white/40 text-sm leading-relaxed pb-5 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-[var(--font-outfit)] text-white/40 text-sm mb-4">
            {FAQData.cta.headline}
          </p>
          <a
            href={FAQData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-white/15 text-white/70 font-[var(--font-outfit)] text-sm hover:border-turquesa-100/50 hover:text-turquesa-100 transition-all duration-300 cursor-pointer"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
