"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "./ProjectCards";

export default function ProjectsGithubCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-14 text-center"
    >
      <a
        href="https://github.com/binojmadhuranga"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
      >
        <GithubIcon size="w-4 h-4" />
        View All Projects on GitHub
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.div>
  );
}
