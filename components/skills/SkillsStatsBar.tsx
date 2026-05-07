"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "10",  label: "Languages" },
  { value: "6",   label: "Frameworks" },
  { value: "5",   label: "Databases" },
  { value: "12+", label: "Dev Tools" },
];

interface SkillsStatsBarProps {
  inView: boolean;
}

export default function SkillsStatsBar({ inView }: SkillsStatsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
    >
      {STATS.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1 rounded-2xl border border-white/8 bg-white/4 py-5 px-4 backdrop-blur-sm hover:border-white/16 hover:bg-white/6 transition-all duration-300"
        >
          <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
            {value}
          </span>
          <span className="text-xs text-zinc-500 font-medium">{label}</span>
        </div>
      ))}
    </motion.div>
  );
}
