"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import ProfileCard from "@/components/ui/profileCard";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  const profileCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

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

  useEffect(() => {
    if (!isProfileCardOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!profileCardRef.current?.contains(event.target as Node)) {
        setIsProfileCardOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileCardOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileCardOpen]);

  const linkBaseClass =
    "relative rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] transition-all duration-300";

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-3 sm:px-4 lg:px-6">
      <div
        className={[
          "relative mx-auto max-w-7xl overflow-hidden md:overflow-visible bg-[linear-gradient(135deg,rgba(24,24,27,0.88),rgba(9,9,11,0.9),rgba(39,39,42,0.84))] shadow-[0_18px_52px_rgba(2,6,23,0.5)] ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500",
          isMenuOpen ? "rounded-[2rem]" : "rounded-[999px]",
          isScrolled ? "shadow-[0_22px_60px_rgba(2,6,23,0.68)]" : "",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_30%),radial-gradient(circle_at_78%_26%,rgba(45,212,191,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(165,180,252,0.18),transparent_30%)] opacity-90" />
        <div className="pointer-events-none absolute -left-16 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-blue-300/10 blur-3xl animate-[liquidDrift_16s_ease-in-out_infinite] md:block" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-24 w-24 rounded-full bg-teal-300/10 blur-3xl animate-[liquidPulse_10s_ease-in-out_infinite] md:block" />

        <div className="relative flex min-h-[78px] items-center justify-between gap-4 px-5 py-3 sm:px-7">
          <Link
            href="#home"
            className="shrink-0 rounded-full px-3 py-2 text-2xl font-black tracking-tight text-white transition-colors hover:text-blue-300"
          >
            BM
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/12 bg-white/5 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
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
                        ? "bg-white/12 text-white shadow-[0_8px_20px_rgba(15,23,42,0.32)]"
                        : "text-zinc-300 hover:bg-white/8 hover:text-white",
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
              href="https://medium.com/@binojmadhuranga"
              target="_blank"
              rel="noreferrer"
              aria-label="Blogs"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300/35 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_12px_24px_rgba(63,63,70,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h9A2.75 2.75 0 0 1 19.25 6.75v10.5A2.75 2.75 0 0 1 16.5 20h-9a2.75 2.75 0 0 1-2.75-2.75V6.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.75h3.75a1 1 0 0 1 1 1v10.5m-4.75-11.5v8.75m10.5-8.75h-4.75" />
              </svg>
              Blogs
            </a>

            <div ref={profileCardRef} className="relative">
              <button
                type="button"
                onClick={() => setIsProfileCardOpen((current) => !current)}
                aria-label="Open profile card"
                aria-expanded={isProfileCardOpen}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-900 shadow-[0_0_0_2px_rgba(24,24,27,0.95),0_10px_24px_rgba(2,6,23,0.6)] transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/profile.png"
                  alt="Binoj Madhuranga"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </button>

              <ProfileCard
                isOpen={isProfileCardOpen}
                onClose={() => setIsProfileCardOpen(false)}
              />
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
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
          <div
            id="mobile-nav-menu"
            className="relative z-10 border-t border-white/8 px-5 pb-5 pt-3 md:hidden"
          >
            <div className="flex flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-3 backdrop-blur-xl">
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
                        ? "bg-white/12 text-white shadow-[0_8px_20px_rgba(2,6,23,0.35)]"
                        : "text-zinc-200 hover:bg-white/8",
                    ].join(" ")}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-zinc-950 px-4 py-3 text-white">
                <a
                  href="https://medium.com/@binojmadhuranga"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h9A2.75 2.75 0 0 1 19.25 6.75v10.5A2.75 2.75 0 0 1 16.5 20h-9a2.75 2.75 0 0 1-2.75-2.75V6.75Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.75h3.75a1 1 0 0 1 1 1v10.5m-4.75-11.5v8.75m10.5-8.75h-4.75" />
                  </svg>
                  Blogs
                </a>

                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-600">
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
