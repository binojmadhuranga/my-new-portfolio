"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi";

/* ─── Typewriter ────────────────────────────────────────────── */
const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI & ML Engineer",
  "Mobile App Developer",
  "Smart Contract Developer",
  "Software Architect",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      }
      setPaused(true);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
        return () => clearTimeout(t);
      }
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
      {displayed}
      <span className="animate-pulse text-zinc-300">|</span>
    </span>
  );
}

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-white/30 hover:bg-white/8 transition-all duration-300"
    >
      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
        {value}
      </span>
      <span className="text-xs font-medium text-zinc-400 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

/* ─── Socials ────────────────────────────────────────────────── */
const SOCIALS = [
  { icon: FaGithub,       href: "https://github.com/binojmadhuranga",                   label: "GitHub" },
  { icon: FaLinkedinIn,   href: "https://www.linkedin.com/in/binoj-madhuranga/",         label: "LinkedIn" },
  { icon: FaXTwitter,     href: "https://x.com/labugamage",                              label: "Twitter/X" },
  { icon: HiOutlineBookOpen, href: "https://medium.com/@binojmadhuranga",               label: "Medium" },
];

/* ─── Component ──────────────────────────────────────────────── */
interface HeroTextContentProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function HeroTextContent({ containerVariants, itemVariants }: HeroTextContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      {/* Eyebrow badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-zinc-100 animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-zinc-50 leading-[1.08] tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            Binoj
          </span>
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 h-12 flex items-center">
          <Typewriter />
        </div>
      </motion.div>

      {/* Description */}
      <motion.p variants={itemVariants} className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
        I design and ship scalable, production ready products across{" "}
        <span className="text-zinc-200 font-medium">Web</span>,{" "}
        <span className="text-zinc-200 font-medium">Mobile</span>,{" "}
        <span className="text-zinc-200 font-medium">AI</span>, and{" "}
        <span className="text-zinc-200 font-medium">IoT</span> turning complex ideas into elegant, real world solutions.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-[0_0_32px_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_0_48px_rgba(255,255,255,0.24)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get in Touch
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          View Projects
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/Binoj_MadhurangaCV.pdf"
          download="Binoj_Madhuranga.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
          </svg>
          Download CV
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Find me on</span>
        <div className="h-px flex-1 bg-zinc-800 max-w-[3rem]" />
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 hover:text-zinc-100 hover:shadow-[0_4px_20px_rgba(255,255,255,0.16)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-2 max-w-sm">
        <StatCard value="3+" label="Years Exp." delay={0.8} />
        <StatCard value="20+" label="Projects"   delay={0.9} />
        <StatCard value="15+" label="Technologies" delay={1.0} />
      </motion.div>
    </motion.div>
  );
}
