"use client";
import { Logo } from "@/components/Logo";
import { MenuMobile } from "./Menu-Mobile";
import { MenuDesktop } from "./Menu-Desktop";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className=" sticky z-40 w-full top-0 bg-white border-b py-4 px-6 lg:px-24 flex items-center justify-between"
    >
      <Logo size={40} />
      <MenuMobile />
      <MenuDesktop />
    </motion.header>
  );
}
