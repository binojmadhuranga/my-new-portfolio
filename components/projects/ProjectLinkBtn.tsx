import React from "react";

interface LinkBtnProps {
  href: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}

export default function ProjectLinkBtn({ href, variant, children }: LinkBtnProps) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "primary"
          ? "flex items-center gap-1.5 rounded-xl border border-sky-300/40 bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-xs font-bold text-zinc-950 shadow-[0_8px_24px_-10px_rgba(14,116,144,0.7)] transition-all duration-300 hover:from-sky-400 hover:to-cyan-300 hover:shadow-[0_8px_28px_-10px_rgba(14,116,144,0.9)]"
          : "flex items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-zinc-100"
      }
    >
      {children}
    </a>
  );
}
