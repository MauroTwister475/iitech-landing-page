"use client";
import { motion } from "framer-motion";
import { StatItem } from "./Stat-Item";
import { STATS } from "@/constants/stats";

export function Stats() {
  return (
    <div
      className="w-full divide-x-[0.1rem] divide-slate-700 mt-6 flex items-center justify-center lg:space-x-4 flex-row lg:px-24 "
    >
      {STATS.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ y: 100, scale: 0 }}
          whileInView={{ y: 0, scale: 1 }}
          exit={{ y: 100, scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.4 }}
        >
          <StatItem key={stat.id} number={stat.number} stats={stat.stats} />
        </motion.div>
      ))}
    </div>
  );
}
