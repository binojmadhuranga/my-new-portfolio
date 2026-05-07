"use client";

import type { TechItem } from "./SkillsTechGrid";

interface SkillsMarqueeProps {
  techStack: TechItem[];
}

export default function SkillsMarquee({ techStack }: SkillsMarqueeProps) {
  const doubled = [...techStack, ...techStack];
  return (
    <div className="relative overflow-hidden mt-16 py-2">
      {/* Fade edges */}
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
