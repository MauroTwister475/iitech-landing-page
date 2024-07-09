"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import aboutImage from "@/assets/team.svg";

export function AboutImage() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden w-full h-full lg:flex items-center justify-center"
    >
      <Image src={aboutImage as StaticImageData} alt="hero image" />
    </motion.div>
  );
}
