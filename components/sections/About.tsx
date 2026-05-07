"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AboutBackground  from "@/components/about/AboutBackground";
import AboutHeader      from "@/components/about/AboutHeader";
import AboutImage       from "@/components/about/AboutImage";
import AboutBio         from "@/components/about/AboutBio";
import AboutHighlights  from "@/components/about/AboutHighlights";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <AboutBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label + heading + subtitle */}
        <AboutHeader inView={inView} />

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT: Profile image + floating badges */}
          <AboutImage inView={inView} />

          {/* RIGHT: Bio + What I Do + CTA buttons */}
          <AboutBio inView={inView} />
        </div>

        {/* Highlight cards row */}
        <AboutHighlights />
      </div>
    </section>
  );
}
