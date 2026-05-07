"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAndroidstudio, SiC, SiCss, SiDocker, SiDotnet, SiExpo, SiExpress,
  SiFigma, SiFlask, SiGit, SiGithub, SiGo, SiHibernate, SiHtml5,
  SiIntellijidea, SiJavascript, SiJenkins, SiKaggle, SiLinux, SiMongodb,
  SiMysql, SiNextdotjs, SiNodedotjs, SiPandas, SiPhp, SiPostgresql,
  SiPostman, SiPython, SiReact, SiRedux, SiSequelize, SiSpring,
  SiTailwindcss, SiTensorflow, SiTypescript, SiUbuntu,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

import SkillsBackground  from "@/components/skills/SkillsBackground";
import SkillsHeader      from "@/components/skills/SkillsHeader";
import SkillsFilterTabs  from "@/components/skills/SkillsFilterTabs";
import SkillsTechGrid, { type TechItem } from "@/components/skills/SkillsTechGrid";
import SkillsMarquee     from "@/components/skills/SkillsMarquee";
import SkillsStatsBar    from "@/components/skills/SkillsStatsBar";

/* ─── Tech stack data ────────────────────────────────────────── */
const techStack: TechItem[] = [
  // Languages
  { name: "HTML5",       icon: SiHtml5,         iconClassName: "text-orange-500", category: "Languages" },
  { name: "CSS3",        icon: SiCss,           iconClassName: "text-sky-500",    category: "Languages" },
  { name: "JavaScript",  icon: SiJavascript,    iconClassName: "text-yellow-300", category: "Languages" },
  { name: "TypeScript",  icon: SiTypescript,    iconClassName: "text-blue-500",   category: "Languages" },
  { name: "C",           icon: SiC,             iconClassName: "text-blue-400",   category: "Languages" },
  { name: "Java",        icon: FaJava,          iconClassName: "text-orange-400", category: "Languages" },
  { name: "C#",          icon: TbBrandCSharp,   iconClassName: "text-violet-400", category: "Languages" },
  { name: "Go",          icon: SiGo,            iconClassName: "text-cyan-400",   category: "Languages" },
  { name: "PHP",         icon: SiPhp,           iconClassName: "text-indigo-300", category: "Languages" },
  { name: "Python",      icon: SiPython,        iconClassName: "text-yellow-400", category: "Languages" },
  // Frontend
  { name: "React",        icon: SiReact,        iconClassName: "text-cyan-300",   category: "Frontend" },
  { name: "Next.js",      icon: SiNextdotjs,    iconClassName: "text-zinc-200",   category: "Frontend" },
  { name: "React Native", icon: SiReact,        iconClassName: "text-cyan-300",   category: "Frontend" },
  { name: "Expo",         icon: SiExpo,         iconClassName: "text-zinc-200",   category: "Frontend" },
  { name: "Redux",        icon: SiRedux,        iconClassName: "text-violet-400", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss,  iconClassName: "text-sky-400",    category: "Frontend" },
  // Backend
  { name: "Node.js",   icon: SiNodedotjs, iconClassName: "text-lime-400",   category: "Backend" },
  { name: "Express",   icon: SiExpress,   iconClassName: "text-zinc-200",   category: "Backend" },
  { name: "Flask",     icon: SiFlask,     iconClassName: "text-zinc-200",   category: "Backend" },
  { name: "Spring",    icon: SiSpring,    iconClassName: "text-lime-400",   category: "Backend" },
  { name: ".NET Core", icon: SiDotnet,    iconClassName: "text-violet-400", category: "Backend" },
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
  { name: "Git",            icon: SiGit,           iconClassName: "text-orange-500",  category: "DevOps & Tools" },
  { name: "GitHub",         icon: SiGithub,        iconClassName: "text-zinc-200",    category: "DevOps & Tools" },
  { name: "Docker",         icon: SiDocker,        iconClassName: "text-sky-400",     category: "DevOps & Tools" },
  { name: "AWS",            icon: FaAws,           iconClassName: "text-amber-300",   category: "DevOps & Tools" },
  { name: "Jenkins",        icon: SiJenkins,       iconClassName: "text-red-300",     category: "DevOps & Tools" },
  { name: "Linux",          icon: SiLinux,         iconClassName: "text-yellow-200",  category: "DevOps & Tools" },
  { name: "Ubuntu",         icon: SiUbuntu,        iconClassName: "text-orange-500",  category: "DevOps & Tools" },
  { name: "Postman",        icon: SiPostman,       iconClassName: "text-orange-400",  category: "DevOps & Tools" },
  { name: "Android Studio", icon: SiAndroidstudio, iconClassName: "text-emerald-400", category: "DevOps & Tools" },
  { name: "IntelliJ IDEA",  icon: SiIntellijidea,  iconClassName: "text-pink-400",    category: "DevOps & Tools" },
  { name: "VS Code",        icon: VscVscode,       iconClassName: "text-blue-400",    category: "DevOps & Tools" },
  { name: "Figma",          icon: SiFigma,         iconClassName: "text-pink-400",    category: "DevOps & Tools" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filtered =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <SkillsBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label + heading + subtitle */}
        <SkillsHeader inView={inView} />

        {/* Category filter tabs + count badge */}
        <SkillsFilterTabs
          inView={inView}
          activeCategory={activeCategory}
          filteredCount={filtered.length}
          onSelect={setActiveCategory}
        />

        {/* Animated tech grid */}
        <SkillsTechGrid filtered={filtered} activeCategory={activeCategory} />

        {/* Marquee strip (visible only on "All") */}
        {activeCategory === "All" && <SkillsMarquee techStack={techStack} />}

        {/* Stats bar */}
        <SkillsStatsBar inView={inView} />
      </div>
    </section>
  );
}
