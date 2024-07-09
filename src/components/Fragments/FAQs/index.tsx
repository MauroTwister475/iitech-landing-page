"use client";
import { SectionContent } from "@/components/Section-Content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQList } from "./data";
import { Title } from "@/components/Title";
import { motion } from "framer-motion";

export function FAQS() {
  return (
    <SectionContent id="faqs" className="bg-blue-600/5 space-y-6">
      <div className="w-full flex flex-col items-center space-y-6">
        <Title size="md" title="Perguntas frequentes" />
        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map((FAQ, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <AccordionItem key={FAQ.value} value={FAQ.value}>
                <AccordionTrigger className="text-lg text-left">
                  {FAQ.question}
                </AccordionTrigger>

                <AccordionContent className="text-lg">{FAQ.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <h3 className="font-medium mt-8">
          Ainda tem Perguntas?{" "}
          <a
            rel="noreferrer noopener"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contacte-nos
          </a>
        </h3>
      </div>
    </SectionContent>
  );
}
