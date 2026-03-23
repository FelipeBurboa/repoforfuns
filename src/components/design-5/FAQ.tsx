"use client";

import { motion } from "motion/react";
import { FAQ as FAQData } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24 border-t-[2px] border-[#1a1a1a]/8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column — headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="col-span-12 lg:col-span-4"
          >
            <h2 className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-3xl md:text-5xl lg:text-6xl">
              {FAQData.headline}
            </h2>
            <div className="flex gap-2 mt-6">
              <div className="w-12 h-[3px] bg-[#02a080]" />
              <div className="w-4 h-[3px] bg-[#ffe529]" />
            </div>

            {/* CTA below headline on desktop */}
            <div className="hidden lg:block mt-12">
              <p className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-xl mb-4">
                {FAQData.cta.headline}
              </p>
              <a
                href={FAQData.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-[13px] tracking-[0.06em] px-6 py-3 rounded-sm hover:bg-[#028a6e] transition-colors duration-150"
              >
                Escríbenos
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Right column — accordion, sharp corners, thin borders */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="col-span-12 lg:col-span-8"
          >
            <Accordion className="flex flex-col gap-0">
              {FAQData.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  className="border-b border-[#1a1a1a]/8"
                >
                  <AccordionTrigger className="py-6 font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-base md:text-lg rounded-none hover:no-underline hover:text-[#02a080] transition-colors duration-150">
                    <span className="flex items-center gap-4">
                      <span className="text-[#02a080] font-[var(--font-barlow-condensed)] text-[11px] tracking-[0.2em] font-bold">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-[var(--font-barlow)] text-[#1a1a1a]/55 text-[15px] leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Mobile CTA */}
          <div className="col-span-12 lg:hidden mt-8">
            <div className="border-t-4 border-[#02a080] pt-8">
              <p className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-tight text-[#1a1a1a] text-xl mb-4">
                {FAQData.cta.headline}
              </p>
              <a
                href={FAQData.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#02a080] text-white font-[var(--font-barlow-condensed)] font-bold uppercase text-[13px] tracking-[0.06em] px-6 py-3 rounded-sm"
              >
                Escríbenos
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
