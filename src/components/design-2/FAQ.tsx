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
    <section className="py-28 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-[var(--font-sora)] text-3xl md:text-4xl lg:text-5xl font-bold text-negro text-center mb-16"
        >
          {FAQData.headline}
        </motion.h2>

        <Accordion className="space-y-3">
          {FAQData.items.map((item, i) => (
            <AccordionItem
              key={i}
              className="bg-blanco border border-negro/[0.06] rounded-2xl px-6 overflow-hidden data-[open]:border-turquesa-100/20 data-[open]:shadow-[0_2px_12px_rgba(8,200,167,0.06)] transition-all duration-300"
            >
              <AccordionTrigger className="font-[var(--font-figtree)] text-negro/75 text-left text-sm font-medium py-5 hover:text-negro hover:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-[var(--font-figtree)] text-negro/45 text-sm leading-relaxed pb-5 whitespace-pre-line">
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
          <p className="font-[var(--font-figtree)] text-negro/40 text-sm mb-4">
            {FAQData.cta.headline}
          </p>
          <a
            href={FAQData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border-2 border-negro/10 text-negro/60 font-[var(--font-figtree)] text-sm font-medium hover:border-turquesa-100/40 hover:text-turquesa-100 transition-all duration-300 cursor-pointer"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
