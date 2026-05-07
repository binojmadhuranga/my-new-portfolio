"use client";

import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        Scroll
      </span>
      <div
        className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1"
        style={{ animation: "scrollBounce 1.8s ease-in-out infinite" }}
      >
        <div className="w-1 h-2 rounded-full bg-zinc-200" />
      </div>
    </motion.div>
  );
}
