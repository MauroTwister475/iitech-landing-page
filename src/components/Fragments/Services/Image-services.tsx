"use client";
import Image from "next/image";
import servicesImage from "@/assets/services.svg";
import { motion } from "framer-motion";

export function ImageServices() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Image
        src={servicesImage}
        className="hidden lg:flex w-[300px] md:w-[500px] lg:w-[600px] object-contain"
        alt="About services"
      />
    </motion.div>
  );
}
