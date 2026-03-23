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
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[var(--font-bodoni-moda)] text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-negro mb-20"
        >
          {FAQData.headline}
        </motion.h2>

        <Accordion className="space-y-0">
          {FAQData.items.map((item, i) => (
            <AccordionItem
              key={i}
              className="border-b border-negro/10"
            >
              <AccordionTrigger className="py-6 font-[var(--font-jost)] text-base text-negro hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-[var(--font-jost)] text-sm text-negro/50 leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="font-[var(--font-bodoni-moda)] text-2xl text-negro mb-6">
            {FAQData.cta.headline}
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-violeta-100 text-white font-[var(--font-jost)] text-sm font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Escríbenos
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
