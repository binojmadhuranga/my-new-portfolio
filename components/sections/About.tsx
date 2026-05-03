"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineUsers,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineGlobe,
} from "react-icons/hi";

/* ─── Animation variants ─────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
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

/* ─── Highlight cards data ───────────────────────────────────── */
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

/* ─── What I do ──────────────────────────────────────────────── */
const expertise = [
  { icon: HiOutlineGlobe, label: "Full-Stack Engineering" },
  { icon: HiOutlineLightningBolt, label: "AI & Intelligent Systems" },
  { icon: HiOutlineBeaker, label: "Mobile Application Development" },
  { icon: HiOutlineCode, label: "Cloud & Backend Architecture" },
];

/* ─── HighlightCard ──────────────────────────────────────────── */
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
}: (typeof highlights)[0] & { delay: number }) {
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
      style={{
        boxShadow: `0 18px 48px -20px ${glow}`,
      }}
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

/* ─── Main About ─────────────────────────────────────────────── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px)",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
            animation: "orbDrift1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
            animation: "orbDrift2 24s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
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

        {/* ── Heading ── */}
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

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-zinc-400 text-center text-sm sm:text-base max-w-xl mx-auto mb-20 leading-relaxed"
        >
          Passionate about turning complex problems into elegant, production ready digital Solutions.
        </motion.p>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* ── LEFT: Image + floating badges ── */}
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

              {/* Image as atmospheric background */}
              <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] h-[480px] sm:h-[540px] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-zinc-900 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] group transition-transform duration-700 hover:scale-[1.015]">
                {/* Background photo — fills the container */}
                <Image
                  src="/about.png"
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="(min-width:1024px) 38vw,(min-width:640px) 60vw, 90vw"
                  className="object-cover object-[70%_top] opacity-80 brightness-75"
                />
                {/* shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                {/* bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none z-10" />
                {/* left-edge fade so it blends into the section bg */}
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
                <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Full-Stack Dev</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20"
              >
                <span className="text-base">🚀</span>
                <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Open to Work</span>
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
                <span className="text-[11px] font-semibold text-zinc-300 whitespace-nowrap">SUSL · GPA 3.0+</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Bio + expertise + highlights ── */}
          <motion.div
            variants={fadeRight}
            custom={0.3}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <motion.p
                variants={fadeUp}
                custom={0.4}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-base sm:text-lg text-zinc-300 leading-relaxed"
              >
                I&apos;m a passionate{" "}
                <span className="text-zinc-100 font-semibold">Full Stack Engineer</span>{" "}
                with hands on experience building scalable web and mobile applications from designing system architecture to delivering reliable, user focused solutions.
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
                (digital gemstone trading), with a strong focus on automation, security, and intelligent insights.
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
                <span className="text-zinc-300">Cloud Deployments</span>  with a vision to build impactful, production ready systems at scale.
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

            {/* CTA */}
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a
                href="/Binoj_MadhurangaCV.pdf"
                download="Binoj_Madhuranga.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Highlight cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20">
          {highlights.map((card, i) => (
            <HighlightCard key={card.title} {...card} delay={0.2 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
