"use client";
import Image from "next/image";
import cubeLeg from "@/assets/hero.svg";
import { motion } from "framer-motion";

export function ImageServices() {
  return (
    <motion.div
      initial={{ x: "100vw"}}
      animate={{ x: 0 }}
      transition={{ duration: 2}}
    >
      <Image
      src={cubeLeg}
      className="hidden lg:flex w-[300px] md:w-[500px] lg:w-[600px] object-contain"
      alt="About services"
    />
    </motion.div>
  );
}
