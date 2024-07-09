"use client";
import { Phone, ArrowRight } from "lucide-react";
import { ButtonPrimary } from "../Buttons/primary";
import { motion } from "framer-motion";

export function BannerContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center gap-10"
    >
      <motion.h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-justify">
        Serviços personalizados? A{" "}
        <span className="text-blue-600 ">IItech</span> é a sua solução nesse e
        muitos outros casos!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center lg:text-justify text-gray-700"
      >
        Na IItech oferecemos serviços completos de programação, redes e design.
        Nosso objetivo é ajudar-te a alcançar seus objetivos através de soluções
        tecnológicas inovadoras e personalizadas.
      </motion.p>
      <motion.div className="w-full flex items-center justify-center lg:justify-start gap-3">
        <ButtonPrimary title="Começar" />
        <motion.div
          initial={{ x: 4 }}
          whileInView={{ x: 0 }}
          translate="yes"
          transition={{ delay: 2,  duration: 1.5, type: "spring", repeat: Infinity }}
        >
          <ButtonPrimary
            Icon={ArrowRight}
            title="Solicitar Serviço"
            variant="outline"
            className="w-max"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/*

<span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              IITECH
            </span>{" "}

*/
