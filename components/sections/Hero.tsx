"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi";

/* ─── Typewriter ────────────────────────────────────────────── */
const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI & IoT Builder",
  "Mobile App Architect",
  "Open-Source Creator",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      }
      setPaused(true);
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          38
        );
        return () => clearTimeout(t);
      }
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-teal-300">
      {displayed}
      <span className="animate-pulse text-sky-400">|</span>
    </span>
  );
}

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-sky-400/30 hover:bg-white/8 transition-all duration-300"
    >
      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">
        {value}
      </span>
      <span className="text-xs font-medium text-zinc-400 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

/* ─── Social link ───────────────────────────────────────────── */
const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/binojmadhuranga", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/binoj-madhuranga/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/labugamage", label: "Twitter/X" },
  { icon: HiOutlineBookOpen, href: "https://medium.com/@binojmadhuranga", label: "Medium" },
];

/* ─── Floating Orbs ─────────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* large blue orb – top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.55) 0%, transparent 70%)",
          animation: "orbDrift1 18s ease-in-out infinite",
        }}
      />
      {/* teal orb – bottom-right */}
      <div
        className="absolute -bottom-40 -right-24 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)",
          animation: "orbDrift2 22s ease-in-out infinite",
        }}
      />
      {/* purple accent – center-right */}
      <div
        className="absolute top-1/3 right-[10%] w-[280px] h-[280px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          animation: "orbDrift3 14s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─── Corner sparkles around profile image ──────────────────── */
function Sparkle({
  style,
  delay,
}: {
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-sky-300"
      style={style}
      animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Main Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(40px, 30px) scale(1.12); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-35px, -25px) scale(1.1); }
        }
        @keyframes orbDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(20px, -40px) scale(1.18); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%       { opacity: 0.42; transform: scale(1.04); }
        }
        @keyframes imageEntrance {
          0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Background orbs */}
        <FloatingOrbs />

        {/* Grid noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 40px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text content ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              {/* Eyebrow badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-zinc-50 leading-[1.08] tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-teal-300">
                    Binoj
                  </span>
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-300 h-12 flex items-center">
                  <Typewriter />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
              >
                I design and ship scalable, production-ready products across{" "}
                <span className="text-zinc-200 font-medium">Web</span>,{" "}
                <span className="text-zinc-200 font-medium">Mobile</span>,{" "}
                <span className="text-zinc-200 font-medium">AI</span>, and{" "}
                <span className="text-zinc-200 font-medium">IoT</span> — turning
                complex ideas into elegant, real-world solutions.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-[0_0_32px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(59,130,246,0.5)]"
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
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300 hover:shadow-[0_4px_20px_rgba(56,189,248,0.2)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-3 pt-2 max-w-sm"
              >
                <StatCard value="3+" label="Years Exp." delay={0.8} />
                <StatCard value="20+" label="Projects" delay={0.9} />
                <StatCard value="15+" label="Technologies" delay={1.0} />
              </motion.div>
            </motion.div>

            {/* ── Right: Profile image ── */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block"
              >
                {/* Outer glow ring */}
                <div
                  className="absolute inset-[-28px] rounded-full border border-sky-400/20"
                  style={{ animation: "ringPulse 4s ease-in-out infinite" }}
                />
                <div
                  className="absolute inset-[-52px] rounded-full border border-blue-400/10"
                  style={{ animation: "ringPulse 4s ease-in-out infinite 1s" }}
                />

                {/* Sparkle dots */}
                <Sparkle style={{ top: "8%", left: "-6%" }} delay={0} />
                <Sparkle style={{ top: "-4%", right: "15%" }} delay={0.8} />
                <Sparkle style={{ bottom: "12%", right: "-5%" }} delay={1.6} />
                <Sparkle style={{ bottom: "2%", left: "10%" }} delay={2.4} />
                <Sparkle style={{ top: "45%", left: "-8%" }} delay={1.2} />

                {/* Gradient blob behind image */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 via-sky-500/10 to-teal-500/20 blur-3xl scale-110" />

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
                    style={{
                      filter:
                        "drop-shadow(0 0 12px rgba(56,189,248,0.25)) drop-shadow(0 0 48px rgba(30,58,138,0.35))",
                    }}
                  />
                </div>

                {/* Floating tech badge – top right */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-4 -right-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                  <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Full-Stack Dev</span>
                </motion.div>

                {/* Floating badge – bottom left */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  <span className="text-base">🚀</span>
                  <span className="text-xs font-semibold text-zinc-200 whitespace-nowrap">Open to Work</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Scroll
          </span>
          <div
            className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1"
            style={{ animation: "scrollBounce 1.8s ease-in-out infinite" }}
          >
            <div className="w-1 h-2 rounded-full bg-sky-400" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
