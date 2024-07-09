"use client";
import { motion } from "framer-motion";
import { StatItem } from "./Stat-Item";
import { STATS } from "@/constants/stats";

export function Stats() {
  return (
    <motion.div
      initial={{ y: "100vw" }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="w-full divide-x-[0.1rem] divide-slate-700 mt-6 flex items-center justify-center lg:space-x-4 flex-row lg:px-24 "
    >
      {STATS.map((stat) => (
        <StatItem key={stat.id} number={stat.number} stats={stat.stats} />
      ))}
    </motion.div>
  );
}
