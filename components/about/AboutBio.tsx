"use client";

import { motion, type Variants } from "framer-motion";
import {
  HiOutlineBeaker,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineGlobe,
} from "react-icons/hi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const expertise = [
  { icon: HiOutlineGlobe, label: "Full-Stack Engineering" },
  { icon: HiOutlineLightningBolt, label: "AI & Intelligent Systems" },
  { icon: HiOutlineBeaker, label: "Mobile Application Development" },
  { icon: HiOutlineCode, label: "Cloud & Backend Architecture" },
];

interface AboutBioProps {
  inView: boolean;
}

export default function AboutBio({ inView }: AboutBioProps) {
  return (
    <motion.div
      variants={fadeRight}
      custom={0.3}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="flex flex-col gap-8"
    >
      {/* Bio paragraphs */}
      <div className="space-y-4">
        <motion.p
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-base sm:text-lg text-zinc-300 leading-relaxed"
        >
          I&apos;m a passionate{" "}
          <span className="text-zinc-100 font-semibold">
            Full Stack Engineer
          </span>{" "}
          with hands on experience building scalable web and mobile applications
          from designing system architecture to delivering reliable, user
          focused solutions.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-sm sm:text-base text-zinc-400 leading-relaxed"
        >
          I&apos;ve worked on real world platforms like{" "}
          <span className="text-zinc-200 font-medium">SmartBiz</span>{" "}
          (AI-powered ERP lite) and{" "}
          <span className="text-zinc-200 font-medium">Gemora</span>{" "}
          (digital gemstone trading), with a strong focus on automation,
          security, and intelligent insights.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-sm text-zinc-500 leading-relaxed"
        >
          Currently deepening expertise in{" "}
          <span className="text-zinc-300">AI Engineering</span>,{" "}
          <span className="text-zinc-300">Backend Optimization</span>, and{" "}
          <span className="text-zinc-300">Cloud Deployments</span> with a
          vision to build impactful, production ready systems at scale.
        </motion.p>
      </div>

      {/* What I Do */}
      <motion.div
        variants={fadeUp}
        custom={0.65}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
          What I do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {expertise.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 backdrop-blur-sm hover:border-white/18 hover:bg-white/7 transition-all duration-300 group"
            >
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-sm text-zinc-300 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp}
        custom={0.75}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-3"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_32px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(255,255,255,0.22)] hover:bg-zinc-100"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Get in Touch
        </a>
        <a
          href="/Binoj_MadhurangaCV.pdf"
          download="Binoj_Madhuranga.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
            />
          </svg>
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
}
