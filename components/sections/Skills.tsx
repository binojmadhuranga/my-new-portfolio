"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiC,
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiHibernate,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJenkins,
  SiKaggle,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSequelize,
  SiSpring,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

/* ─── Types ──────────────────────────────────────────────────── */
type TechItem = {
  name: string;
  icon: IconType;
  iconClassName: string;
  category: string;
};

/* ─── All tech items (same 40, now with category) ────────────── */
const techStack: TechItem[] = [
  // Languages
  { name: "HTML5",       icon: SiHtml5,        iconClassName: "text-orange-500", category: "Languages" },
  { name: "CSS3",        icon: SiCss,          iconClassName: "text-sky-500",    category: "Languages" },
  { name: "JavaScript",  icon: SiJavascript,   iconClassName: "text-yellow-300", category: "Languages" },
  { name: "TypeScript",  icon: SiTypescript,   iconClassName: "text-blue-500",   category: "Languages" },
  { name: "C",           icon: SiC,            iconClassName: "text-blue-400",   category: "Languages" },
  { name: "Java",        icon: FaJava,         iconClassName: "text-orange-400", category: "Languages" },
  { name: "C#",          icon: TbBrandCSharp,  iconClassName: "text-violet-400", category: "Languages" },
  { name: "Go",          icon: SiGo,           iconClassName: "text-cyan-400",   category: "Languages" },
  { name: "PHP",         icon: SiPhp,          iconClassName: "text-indigo-300", category: "Languages" },
  { name: "Python",      icon: SiPython,       iconClassName: "text-yellow-400", category: "Languages" },
  // Frontend
  { name: "React",        icon: SiReact,        iconClassName: "text-cyan-300",   category: "Frontend" },
  { name: "Next.js",      icon: SiNextdotjs,    iconClassName: "text-zinc-200",   category: "Frontend" },
  { name: "React Native", icon: SiReact,        iconClassName: "text-cyan-300",   category: "Frontend" },
  { name: "Expo",         icon: SiExpo,         iconClassName: "text-zinc-200",   category: "Frontend" },
  { name: "Redux",        icon: SiRedux,        iconClassName: "text-violet-400", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss,  iconClassName: "text-sky-400",    category: "Frontend" },
  // Backend
  { name: "Node.js",    icon: SiNodedotjs, iconClassName: "text-lime-400",   category: "Backend" },
  { name: "Express",    icon: SiExpress,   iconClassName: "text-zinc-200",   category: "Backend" },
  { name: "Flask",      icon: SiFlask,     iconClassName: "text-zinc-200",   category: "Backend" },
  { name: "Spring",     icon: SiSpring,    iconClassName: "text-lime-400",   category: "Backend" },
  { name: ".NET Core",  icon: SiDotnet,    iconClassName: "text-violet-400", category: "Backend" },
  // Database
  { name: "MongoDB",    icon: SiMongodb,    iconClassName: "text-green-500",  category: "Database" },
  { name: "MySQL",      icon: SiMysql,      iconClassName: "text-sky-500",    category: "Database" },
  { name: "Hibernate",  icon: SiHibernate,  iconClassName: "text-amber-200",  category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, iconClassName: "text-blue-300",   category: "Database" },
  { name: "Sequelize",  icon: SiSequelize,  iconClassName: "text-sky-400",    category: "Database" },
  // AI / ML
  { name: "Pandas",     icon: SiPandas,     iconClassName: "text-indigo-400", category: "AI / ML" },
  { name: "TensorFlow", icon: SiTensorflow, iconClassName: "text-orange-400", category: "AI / ML" },
  { name: "Kaggle",     icon: SiKaggle,     iconClassName: "text-sky-400",    category: "AI / ML" },
  // DevOps & Tools
  { name: "Git",            icon: SiGit,          iconClassName: "text-orange-500",  category: "DevOps & Tools" },
  { name: "GitHub",         icon: SiGithub,       iconClassName: "text-zinc-200",    category: "DevOps & Tools" },
  { name: "Docker",         icon: SiDocker,       iconClassName: "text-sky-400",     category: "DevOps & Tools" },
  { name: "AWS",            icon: FaAws,          iconClassName: "text-amber-300",   category: "DevOps & Tools" },
  { name: "Jenkins",        icon: SiJenkins,      iconClassName: "text-red-300",     category: "DevOps & Tools" },
  { name: "Linux",          icon: SiLinux,        iconClassName: "text-yellow-200",  category: "DevOps & Tools" },
  { name: "Ubuntu",         icon: SiUbuntu,       iconClassName: "text-orange-500",  category: "DevOps & Tools" },
  { name: "Postman",        icon: SiPostman,      iconClassName: "text-orange-400",  category: "DevOps & Tools" },
  { name: "Android Studio", icon: SiAndroidstudio,iconClassName: "text-emerald-400", category: "DevOps & Tools" },
  { name: "IntelliJ IDEA",  icon: SiIntellijidea, iconClassName: "text-pink-400",    category: "DevOps & Tools" },
  { name: "VS Code",        icon: VscVscode,      iconClassName: "text-blue-400",    category: "DevOps & Tools" },
  { name: "Figma",          icon: SiFigma,        iconClassName: "text-pink-400",    category: "DevOps & Tools" },
];

const CATEGORIES = ["All", "Languages", "Frontend", "Backend", "Database", "AI / ML", "DevOps & Tools"];

/* ─── Category accent colours ────────────────────────────────── */
const CATEGORY_STYLE: Record<string, { dot: string; pill: string; active: string }> = {
  All:            { dot: "bg-zinc-300",   pill: "border-zinc-700 text-zinc-400",   active: "bg-zinc-800 border-zinc-500 text-zinc-100" },
  Languages:      { dot: "bg-yellow-300", pill: "border-zinc-700 text-zinc-400",   active: "bg-yellow-500/15 border-yellow-400/50 text-yellow-200" },
  Frontend:       { dot: "bg-cyan-300",   pill: "border-zinc-700 text-zinc-400",   active: "bg-cyan-500/15 border-cyan-400/50 text-cyan-200" },
  Backend:        { dot: "bg-lime-400",   pill: "border-zinc-700 text-zinc-400",   active: "bg-lime-500/15 border-lime-400/50 text-lime-200" },
  Database:       { dot: "bg-sky-400",    pill: "border-zinc-700 text-zinc-400",   active: "bg-sky-500/15 border-sky-400/50 text-sky-200" },
  "AI / ML":      { dot: "bg-orange-400", pill: "border-zinc-700 text-zinc-400",   active: "bg-orange-500/15 border-orange-400/50 text-orange-200" },
  "DevOps & Tools":{ dot:"bg-violet-400", pill: "border-zinc-700 text-zinc-400",   active: "bg-violet-500/15 border-violet-400/50 text-violet-200" },
};

/* ─── Marquee strip (all techs, looping) ─────────────────────── */
function MarqueeStrip() {
  const doubled = [...techStack, ...techStack];
  return (
    <div className="relative overflow-hidden mt-16 py-2">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10" />
      <div
        className="flex gap-5 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {doubled.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/4 backdrop-blur-sm shrink-0 hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
            >
              <Icon className={`w-4 h-4 ${tech.iconClassName} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── Tech Card ──────────────────────────────────────────────── */
function TechCard({ tech, delay }: { tech: TechItem; delay: number }) {
  const Icon = tech.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-default"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap px-2.5 py-1 rounded-lg bg-zinc-800 border border-white/12 text-[11px] font-semibold text-zinc-200 shadow-lg pointer-events-none"
          >
            {tech.name}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-800/80 bg-[linear-gradient(155deg,rgba(39,39,42,0.65),rgba(18,18,22,0.9))] p-4 sm:p-5 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_16px_40px_-18px_rgba(255,255,255,0.12)]">
        {/* Glow from icon color on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]">
            <Icon className={`h-10 w-10 ${tech.iconClassName}`} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold text-zinc-400 text-center leading-tight group-hover:text-zinc-200 transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Skills ─────────────────────────────────────────────── */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filtered = activeCategory === "All"
    ? techStack
    : techStack.filter((t) => t.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px)",
          }}
        />
        <div
          className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)",
            animation: "orbDrift2 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-[-8%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
            animation: "orbDrift1 26s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-zinc-700" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Tech Stack
          </span>
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-zinc-700" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-black text-zinc-50 text-center mb-3 tracking-tight"
        >
          Tools I{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            Work With
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-10"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        {/* ── Category filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => {
            const style = CATEGORY_STYLE[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-250 backdrop-blur-sm ${
                  isActive ? style.active : style.pill + " hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${isActive ? "opacity-100" : "opacity-50"}`} />
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Count badge ── */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <span className="text-xs text-zinc-600 font-medium">
            Showing{" "}
            <span className="text-zinc-400 font-semibold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "technology" : "technologies"}
            {activeCategory !== "All" && (
              <> in <span className="text-zinc-300">{activeCategory}</span></>
            )}
          </span>
        </motion.div>

        {/* ── Tech grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4"
          >
            {filtered.map((tech, i) => (
              <TechCard key={tech.name + activeCategory} tech={tech} delay={i * 0.03} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Marquee strip ── */}
        {activeCategory === "All" && <MarqueeStrip />}

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "10", label: "Languages" },
            { value: "6", label: "Frameworks" },
            { value: "5", label: "Databases" },
            { value: "12+", label: "Dev Tools" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-white/8 bg-white/4 py-5 px-4 backdrop-blur-sm hover:border-white/16 hover:bg-white/6 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
                {value}
              </span>
              <span className="text-xs text-zinc-500 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
