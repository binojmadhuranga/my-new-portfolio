"use client";

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

type TechItem = {
  name: string;
  icon: IconType;
  iconClassName: string;
};

export default function Skills() {
  const techStack: TechItem[] = [
    { name: "HTML5", icon: SiHtml5, iconClassName: "text-orange-500" },
    { name: "CSS3", icon: SiCss, iconClassName: "text-sky-500" },
    { name: "JavaScript", icon: SiJavascript, iconClassName: "text-yellow-300" },
    { name: "TypeScript", icon: SiTypescript, iconClassName: "text-blue-500" },
    { name: "C", icon: SiC, iconClassName: "text-blue-400" },
    { name: "Java", icon: FaJava, iconClassName: "text-orange-400" },
    { name: "C#", icon: TbBrandCSharp, iconClassName: "text-violet-400" },
    { name: "Go", icon: SiGo, iconClassName: "text-cyan-400" },
    { name: "PHP", icon: SiPhp, iconClassName: "text-indigo-300" },
    { name: "Python", icon: SiPython, iconClassName: "text-yellow-400" },
    { name: "React", icon: SiReact, iconClassName: "text-cyan-300" },
    { name: "Next.js", icon: SiNextdotjs, iconClassName: "text-zinc-200" },
    { name: "React Native", icon: SiReact, iconClassName: "text-cyan-300" },
    { name: "Expo", icon: SiExpo, iconClassName: "text-zinc-200" },
    { name: "Redux", icon: SiRedux, iconClassName: "text-violet-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, iconClassName: "text-sky-400" },
    { name: "Node.js", icon: SiNodedotjs, iconClassName: "text-lime-400" },
    { name: "Express", icon: SiExpress, iconClassName: "text-zinc-200" },
    { name: "Flask", icon: SiFlask, iconClassName: "text-zinc-200" },
    { name: "Spring", icon: SiSpring, iconClassName: "text-lime-400" },
    { name: ".NET Core", icon: SiDotnet, iconClassName: "text-violet-400" },
    { name: "MongoDB", icon: SiMongodb, iconClassName: "text-green-500" },
    { name: "MySQL", icon: SiMysql, iconClassName: "text-sky-500" },
    { name: "Hibernate", icon: SiHibernate, iconClassName: "text-amber-200" },
    { name: "PostgreSQL", icon: SiPostgresql, iconClassName: "text-blue-300" },
    { name: "Sequelize", icon: SiSequelize, iconClassName: "text-sky-400" },
    { name: "Pandas", icon: SiPandas, iconClassName: "text-indigo-400" },
    { name: "TensorFlow", icon: SiTensorflow, iconClassName: "text-orange-400" },
    { name: "Kaggle", icon: SiKaggle, iconClassName: "text-sky-400" },
    { name: "Git", icon: SiGit, iconClassName: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, iconClassName: "text-zinc-200" },
    { name: "Docker", icon: SiDocker, iconClassName: "text-sky-400" },
    { name: "AWS", icon: FaAws, iconClassName: "text-amber-300" },
    { name: "Jenkins", icon: SiJenkins, iconClassName: "text-red-300" },
    { name: "Linux", icon: SiLinux, iconClassName: "text-yellow-200" },
    { name: "Ubuntu", icon: SiUbuntu, iconClassName: "text-orange-500" },
    { name: "Postman", icon: SiPostman, iconClassName: "text-orange-400" },
    { name: "Android Studio", icon: SiAndroidstudio, iconClassName: "text-emerald-400" },
    { name: "IntelliJ IDEA", icon: SiIntellijidea, iconClassName: "text-pink-400" },
    { name: "VS Code", icon: VscVscode, iconClassName: "text-blue-400" },
    { name: "Figma", icon: SiFigma, iconClassName: "text-pink-400" },
  ];


  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/80"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-2xl bg-[linear-gradient(160deg,rgba(39,39,42,0.7),rgba(24,24,27,0.92))] border border-zinc-800 hover:border-sky-400/60 transition-all hover:shadow-[0_18px_45px_-30px_rgba(56,189,248,0.55)] hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110">
                  <tech.icon className={`h-12 w-12 ${tech.iconClassName}`} aria-hidden="true" />
                </div>
                <h4 className="text-xs font-semibold text-zinc-100 text-center">
                  {tech.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
