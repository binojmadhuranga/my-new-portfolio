"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface AboutHeaderProps {
  inView: boolean;
}

export default function AboutHeader({ inView }: AboutHeaderProps) {
  return (
    <>
      {/* Section label */}
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <div className="h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-zinc-700" />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          About Me
        </span>
        <div className="h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-zinc-700" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-4xl sm:text-5xl font-black text-zinc-50 text-center mb-4 tracking-tight leading-tight"
      >
        Crafting{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
          Experiences,
        </span>
        <br className="hidden sm:block" /> Shipping{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
          Solutions.
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        custom={0.2}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-zinc-400 text-center text-sm sm:text-base max-w-xl mx-auto mb-20 leading-relaxed"
      >
        Passionate about turning complex problems into elegant, production ready
        digital Solutions.
      </motion.p>
    </>
  );
}
