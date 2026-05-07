"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProjectLinkBtn from "./ProjectLinkBtn";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  featured?: boolean;
};

/* ─── GitHub SVG shared between both card types ─────────────── */
export function GithubIcon({ size = "w-3.5 h-3.5" }: { size?: string }) {
  return (
    <svg className={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ─── Featured (hero) card ───────────────────────────────────── */
export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(155deg,rgba(30,30,36,0.9),rgba(14,14,18,0.95))] shadow-[0_32px_72px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl"
    >
      {/* Top highlight line */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0">
        {/* Image */}
        <div className="relative h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width:1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent lg:hidden" />
          {/* Featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Featured</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-between p-8 lg:p-10">
          {/* Index number */}
          <div className="absolute top-8 right-8 text-6xl font-black text-white/5 select-none leading-none">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h3 className="text-2xl font-black text-zinc-50 mb-3 leading-snug tracking-tight group-hover:text-sky-200 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.demoLink && (
              <ProjectLinkBtn href={project.demoLink} variant="primary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </ProjectLinkBtn>
            )}
            {project.githubLink && (
              <ProjectLinkBtn href={project.githubLink} variant="ghost">
                <GithubIcon />
                Source Code
              </ProjectLinkBtn>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Regular card ───────────────────────────────────────────── */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative isolate flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(155deg,rgba(30,30,36,0.85),rgba(12,12,16,0.92))] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:border-white/22 hover:shadow-[0_28px_64px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* Top line */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
        style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(56,189,248,0.06) 0%,transparent 65%)" }}
      />

      {/* Index number */}
      <div className="absolute top-4 right-5 text-5xl font-black text-white/[0.04] select-none leading-none z-0">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden border-b border-white/8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width:1024px) 30vw,(min-width:768px) 45vw, 100vw"
          className="object-cover transition-transform duration-600 group-hover:scale-108 group-hover:saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <h3 className="text-base font-bold text-zinc-50 mb-2 leading-snug tracking-tight group-hover:text-sky-200 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-3 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-[10px] font-medium text-zinc-500">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 mt-auto">
          {project.demoLink && (
            <ProjectLinkBtn href={project.demoLink} variant="primary">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </ProjectLinkBtn>
          )}
          {project.githubLink && (
            <ProjectLinkBtn href={project.githubLink} variant="ghost">
              <GithubIcon size="w-3 h-3" />
              Code
            </ProjectLinkBtn>
          )}
        </div>
      </div>
    </motion.article>
  );
}
