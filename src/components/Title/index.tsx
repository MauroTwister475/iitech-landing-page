"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  size: "sm" | "md" | "lg";
}

export function Title({ size = "md", title }: TitleProps) {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ x: -100, opacity: 0 }}
      className={clsx(
        "w-full font-semibold text-2xl text-slate-700 text-center lg:text-start",
        {
          "text-xl": size === "sm",
          "text-3xl leading-10": size === "md",
          "text-4xl": size === "lg",
        }
      )}
    >
      <span>{title}</span>
    </motion.h1>
  );
}
