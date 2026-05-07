"use client";

import { motion, type Variants } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineCode,
} from "react-icons/hi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const highlights = [
  {
    icon: HiOutlineAcademicCap,
    title: "Education",
    value: "BSc (Hons) Software Engineering",
    sub: "GPA 3.0+ · Sabaragamuwa University of Sri Lanka",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-400/25",
    iconColor: "text-violet-300",
    glow: "rgba(139,92,246,0.35)",
  },
  {
    icon: HiOutlineCode,
    title: "Projects",
    value: "20+",
    sub: "Web · Mobile · AI . ML· IoT . Desktop . Open Source",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-400/25",
    iconColor: "text-blue-300",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    icon: HiOutlineUsers,
    title: "Volunteer",
    value: "Active",
    sub: "Community & Academic Initiatives",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-400/25",
    iconColor: "text-emerald-300",
    glow: "rgba(16,185,129,0.35)",
  },
];

type HighlightItem = (typeof highlights)[0];

function HighlightCard({
  icon: Icon,
  title,
  value,
  sub,
  accent,
  border,
  iconColor,
  glow,
  delay,
}: HighlightItem & { delay: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative rounded-2xl border ${border} bg-gradient-to-br ${accent} p-6 backdrop-blur-sm overflow-hidden group cursor-default`}
      style={{ boxShadow: `0 18px 48px -20px ${glow}` }}
    >
      {/* Animated glow blob */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"
        style={{ background: glow }}
      />
      <div className="relative z-10 flex flex-col gap-3">
        <div
          className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 ${iconColor}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            {title}
          </p>
          <p className="text-2xl font-black text-zinc-50 leading-none mb-1">
            {value}
          </p>
          <p className="text-xs text-zinc-400">{sub}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20">
      {highlights.map((card, i) => (
        <HighlightCard key={card.title} {...card} delay={0.2 + i * 0.12} />
      ))}
    </div>
  );
}
