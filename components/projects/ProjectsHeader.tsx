"use client";

import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  inView: boolean;
}

export default function ProjectsHeader({ inView }: ProjectsHeaderProps) {
  return (
    <>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <div className="h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-zinc-700" />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          Projects
        </span>
        <div className="h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-zinc-700" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="text-4xl sm:text-5xl font-black text-zinc-50 text-center mb-3 tracking-tight"
      >
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
          Work
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-zinc-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-14"
      >
        Real-world products I have designed, engineered, and shipped.
      </motion.p>
    </>
  );
}
