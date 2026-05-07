"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

/* ─── Corner sparkles ────────────────────────────────────────── */
function Sparkle({ style, delay }: { style: CSSProperties; delay: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-zinc-200"
      style={style}
      animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function HeroProfileImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-block"
      >
        {/* Outer glow rings */}
        <div
          className="absolute inset-[-28px] rounded-full border border-white/20"
          style={{ animation: "ringPulse 4s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-[-52px] rounded-full border border-white/10"
          style={{ animation: "ringPulse 4s ease-in-out infinite 1s" }}
        />

        {/* Sparkle dots */}
        <Sparkle style={{ top: "8%",    left: "-6%" }}  delay={0}   />
        <Sparkle style={{ top: "-4%",   right: "15%" }} delay={0.8} />
        <Sparkle style={{ bottom: "12%",right: "-5%" }} delay={1.6} />
        <Sparkle style={{ bottom: "2%", left: "10%" }}  delay={2.4} />
        <Sparkle style={{ top: "45%",   left: "-8%" }}  delay={1.2} />

        {/* Gradient blob behind image */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/12 via-zinc-300/10 to-zinc-700/8 blur-3xl scale-110" />

        {/* Image container */}
        <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-zinc-900 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] transition-transform duration-700 hover:scale-[1.02]">
          {/* Shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none z-10" />

          <Image
            src="/profile.png"
            alt="Binoj Madhuranga – Software Engineer"
            width={560}
            height={560}
            priority
            sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 85vw"
            className="max-w-sm lg:max-w-md xl:max-w-lg w-full h-auto object-contain relative z-0"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.16)) drop-shadow(0 0 48px rgba(0,0,0,0.4))" }}
          />
        </div>

        {/* Floating badge – top right */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          className="absolute -top-4 -right-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-500 shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
          <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Full-Stack Dev</span>
        </motion.div>

        {/* Floating badge – bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
          className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <span className="text-base">🎯</span>
          <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Open to Work</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
