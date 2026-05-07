"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface AboutImageProps {
  inView: boolean;
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  } as any),
};

export default function AboutImage({ inView }: AboutImageProps) {
  return (
    <motion.div
      variants={fadeLeft}
      custom={0.3}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative flex justify-center lg:justify-start"
    >
      <div className="relative inline-block">
        {/* Glow blob behind image */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500/20 via-zinc-500/10 to-blue-500/15 blur-3xl scale-110 pointer-events-none" />

        {/* Pulse rings */}
        <div
          className="absolute inset-[-20px] rounded-[3rem] border border-white/10 pointer-events-none"
          style={{ animation: "ringPulse 5s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-[-42px] rounded-[3.5rem] border border-white/06 pointer-events-none"
          style={{ animation: "ringPulse 5s ease-in-out infinite 1.2s" }}
        />

        {/* Profile image */}
        <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] h-[480px] sm:h-[540px] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-zinc-900 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] group transition-transform duration-700 hover:scale-[1.015]">
          <Image
            src="/about.png"
            alt=""
            fill
            aria-hidden="true"
            sizes="(min-width:1024px) 38vw,(min-width:640px) 60vw, 90vw"
            className="object-cover object-[70%_top] opacity-80 brightness-75"
          />
          {/* Shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none z-10" />
          {/* Left-edge fade */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-950/40 to-transparent pointer-events-none z-10" />
        </div>

        {/* Floating badge — top right */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="absolute -top-4 -right-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
        >
          <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.7)] animate-pulse" />
          <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">
            Full-Stack Dev
          </span>
        </motion.div>

        {/* Floating badge — bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
        >
          <span className="text-base">🚀</span>
          <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">
            Open to Work
          </span>
        </motion.div>

        {/* University logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-10 -right-7 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
        >
          <Image
            src="/uni_logo.png"
            alt="SUSL"
            width={24}
            height={24}
            className="rounded-full object-contain"
          />
          <span className="text-[11px] font-semibold text-zinc-300 whitespace-nowrap">
            SUSL · GPA 3.0+
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
