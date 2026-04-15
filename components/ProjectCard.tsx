"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(155deg,rgba(39,39,42,0.84),rgba(24,24,27,0.88)_45%,rgba(9,9,11,0.95))] shadow-[0_24px_60px_-28px_rgba(2,6,23,0.78)] ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-300/35 hover:shadow-[0_36px_80px_-30px_rgba(14,116,144,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_36%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {/* Project Image */}
      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-zinc-900/60">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:saturate-125"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_35%,rgba(5,5,8,0.5))]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/20 to-transparent mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative p-6 text-zinc-100">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-zinc-50 transition-colors duration-300 group-hover:text-sky-200">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-6 text-zinc-300/85 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-sky-300/35 bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_12px_24px_-16px_rgba(8,47,73,0.5)] transition-all duration-300 hover:from-sky-300 hover:to-cyan-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
