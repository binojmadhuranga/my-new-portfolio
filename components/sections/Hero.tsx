"use client";

import { type Variants } from "framer-motion";
import HeroKeyframes       from "@/components/hero/HeroKeyframes";
import HeroBackground      from "@/components/hero/HeroBackground";
import HeroTextContent     from "@/components/hero/HeroTextContent";
import HeroProfileImage    from "@/components/hero/HeroProfileImage";
import HeroScrollIndicator from "@/components/hero/HeroScrollIndicator";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      {/* Keyframe styles injected once */}
      <HeroKeyframes />

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Background orbs + grid */}
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Text content */}
            <HeroTextContent
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />

            {/* RIGHT: Profile image */}
            <HeroProfileImage />
          </div>
        </div>

        {/* Scroll indicator */}
        <HeroScrollIndicator />
      </section>
    </>
  );
}
