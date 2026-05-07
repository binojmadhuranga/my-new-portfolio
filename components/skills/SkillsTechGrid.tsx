"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

export type TechItem = {
  name: string;
  icon: IconType;
  iconClassName: string;
  category: string;
};

/* ─── Individual card ────────────────────────────────────────── */
function TechCard({ tech, delay }: { tech: TechItem; delay: number }) {
  const Icon = tech.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-default"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap px-2.5 py-1 rounded-lg bg-zinc-800 border border-white/12 text-[11px] font-semibold text-zinc-200 shadow-lg pointer-events-none"
          >
            {tech.name}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-800/80 bg-[linear-gradient(155deg,rgba(39,39,42,0.65),rgba(18,18,22,0.9))] p-4 sm:p-5 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_16px_40px_-18px_rgba(255,255,255,0.12)]">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]">
            <Icon className={`h-10 w-10 ${tech.iconClassName}`} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold text-zinc-400 text-center leading-tight group-hover:text-zinc-200 transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Animated grid ──────────────────────────────────────────── */
interface SkillsTechGridProps {
  filtered: TechItem[];
  activeCategory: string;
}

export default function SkillsTechGrid({ filtered, activeCategory }: SkillsTechGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4"
      >
        {filtered.map((tech, i) => (
          <TechCard key={tech.name + activeCategory} tech={tech} delay={i * 0.03} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
