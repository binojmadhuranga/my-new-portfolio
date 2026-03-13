"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 16);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      const currentSection = sections.find((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;
        return scrollY >= top && scrollY < bottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (scrollY < 120) {
        setActiveSection("home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseClass =
    "relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-all duration-300";

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-3 sm:px-4 lg:px-6">
      <div
        className={[
          "relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(226,232,240,0.62),rgba(212,212,216,0.72))] shadow-[0_16px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(39,39,42,0.82),rgba(24,24,27,0.75),rgba(63,63,70,0.78))]",
          isScrolled ? "shadow-[0_22px_60px_rgba(15,23,42,0.18)]" : "",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_32%),radial-gradient(circle_at_75%_30%,rgba(161,161,170,0.3),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(212,212,216,0.45),transparent_28%)] opacity-90" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/30 blur-3xl animate-[liquidDrift_16s_ease-in-out_infinite] dark:bg-white/10" />
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-zinc-400/20 blur-3xl animate-[liquidPulse_10s_ease-in-out_infinite] dark:bg-zinc-200/10" />

        <div className="relative flex min-h-[78px] items-center justify-between gap-4 px-5 py-3 sm:px-7">
          <Link
            href="#home"
            className="shrink-0 rounded-full px-3 py-2 text-2xl font-black tracking-tight text-black transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
          >
            BM
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-black/8 bg-white/35 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:border-white/8 dark:bg-white/5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={[
                      linkBaseClass,
                      isActive
                        ? "bg-white/80 text-black shadow-[0_8px_20px_rgba(15,23,42,0.1)] dark:bg-white/12 dark:text-white"
                        : "text-zinc-600 hover:bg-white/55 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/8 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              aria-label="Blogs"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.2)] transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white dark:text-black"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h9A2.75 2.75 0 0 1 19.25 6.75v10.5A2.75 2.75 0 0 1 16.5 20h-9a2.75 2.75 0 0 1-2.75-2.75V6.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.75h3.75a1 1 0 0 1 1 1v10.5m-4.75-11.5v8.75m10.5-8.75h-4.75" />
              </svg>
              Blogs
            </a>

            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/80 bg-zinc-200 shadow-[0_0_0_2px_rgba(255,255,255,0.55),0_10px_24px_rgba(15,23,42,0.16)] dark:border-zinc-700 dark:bg-zinc-900">
              <Image
                src="/profile.png"
                alt="Binoj Madhuranga"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/50 text-zinc-900 transition-colors hover:bg-white/70 md:hidden dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="relative border-t border-black/8 px-5 pb-5 pt-3 md:hidden dark:border-white/8">
            <div className="flex flex-col gap-2 rounded-[1.75rem] bg-white/45 p-3 backdrop-blur-xl dark:bg-white/6">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white text-black shadow-[0_8px_20px_rgba(15,23,42,0.08)] dark:bg-white/12 dark:text-white"
                        : "text-zinc-700 hover:bg-white/70 dark:text-zinc-200 dark:hover:bg-white/8",
                    ].join(" ")}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-2 text-sm font-semibold">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h9A2.75 2.75 0 0 1 19.25 6.75v10.5A2.75 2.75 0 0 1 16.5 20h-9a2.75 2.75 0 0 1-2.75-2.75V6.75Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.75h3.75a1 1 0 0 1 1 1v10.5m-4.75-11.5v8.75m10.5-8.75h-4.75" />
                  </svg>
                  Blogs
                </a>

                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/60 dark:border-zinc-400">
                  <Image
                    src="/profile.png"
                    alt="Binoj Madhuranga"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
