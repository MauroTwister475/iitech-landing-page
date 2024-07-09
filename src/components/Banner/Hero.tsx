"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.svg";

export function HeroImage({ urlImage = heroImage }: { urlImage?: StaticImageData }) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      className="hidden w-full h-full lg:flex items-center justify-center"
    >
      <Image src={urlImage} alt="hero image" />
    </motion.div>
  );
}
