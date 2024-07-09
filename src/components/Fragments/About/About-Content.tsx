"use client";
import { Title } from "@/components/Title";
import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1.6 }}
      className="w-full h-full flex flex-col space-y-4"
    >
      <Title size="md" title="Sobre Nós" />
      <p className="text-justify">
        A Iitech é uma empresa dedicada a fornecer soluções inovadoras em
        tecnologia da informação e informática. Nossa missão é ajudar nossos
        clientes a alcançar seus objetivos através do uso inteligente e
        estratégico da tecnologia. Com uma equipe de especialistas qualificados,
        estamos comprometidos em entregar serviços de alta qualidade que atendam
        às necessidades específicas de cada cliente.
      </p>
      <p className="text-justify">
        Fundada com o propósito de transformar desafios tecnológicos em
        oportunidades de crescimento, a Iitech se destaca pela excelência em
        desenvolvimento de software, consultoria em TI, e suporte técnico.
        Nossos profissionais são apaixonados pelo que fazem e estão sempre
        atualizados com as últimas tendências e inovações do mercado.
      </p>
      <p className="text-justify">
        Na Iitech, acreditamos que cada cliente é único e merece soluções
        personalizadas.
      </p>
    </motion.div>
  );
}


