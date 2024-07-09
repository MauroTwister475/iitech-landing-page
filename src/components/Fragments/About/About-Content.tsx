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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        cupiditate fuga alias quod earum non quam? Eaque amet, est culpa ipsum
        nihil praesentium consequatur velit sint accusantium aperiam, nisi
        voluptatibus.
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        cupiditate fuga alias quod earum non quam? Eaque amet, est culpa ipsum
        nihil praesentium consequatur velit sint accusantium aperiam, nisi
        voluptatibus.
      </p>
    </motion.div>
  );
}
