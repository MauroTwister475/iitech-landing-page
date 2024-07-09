"use client";
import { Title } from "@/components/Title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { FAQList } from "./data";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <motion.div
      className="w-full flex flex-col items-center space-y-6"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title size="md" title="Perguntas frequentes" />
      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
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
    </motion.div>
  );
}