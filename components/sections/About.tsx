"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/70 relative overflow-hidden">
      <div 
        className={`absolute left-0 top-0 bottom-0 w-full md:w-1/2 opacity-40 pointer-events-none brightness-50 transition-all duration-2000 ease-out ${
          isVisible 
            ? 'scale-100 opacity-40' 
            : 'scale-75 opacity-0'
        }`}
      >
        <Image
          src="/about.png"
          alt=""
          fill
          aria-hidden="true"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[70%_top] md:object-[30%_30%]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            About Me
          </h2>
          <div className="text-lg text-zinc-300 max-w-3xl mx-auto space-y-4">
            <p className="leading-relaxed">
              I am a passionate Full Stack Engineer with hands-on experience in building scalable web and mobile applications. I enjoy working across the full development lifecycle, from designing system architecture to delivering reliable, user-focused solutions.
            </p>
            <p className="leading-relaxed">
              I enjoy designing clean system architectures, developing secure RESTful APIs, and creating intuitive user experiences. I have worked on real-world projects such as SmartBiz (an AI-powered ERP-lite platform) and Gemora (a digital gemstone trading platform), with a strong focus on automation, security, and intelligent insights.
            </p>
            <p className="leading-relaxed">
              Currently expanding my skills in AI engineering, backend optimization, and cloud-based deployments, with a strong interest in building impactful, production-ready systems.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/12 to-pink-500/12 shadow-[0_18px_45px_-35px_rgba(168,85,247,0.45)]">
            <div className="flex justify-center mb-3">
              <Image
                src="/uni_logo.png"
                alt="Sabaragamuwa University"
                width={64}
                height={64}
                className="w-16 h-16 object-contain shadow-lg rounded-full"
              />
            </div>
            <div className="text-zinc-300 font-medium text-sm leading-relaxed">
              BSc (Hons) Software Engineering undergraduate with a current GPA of <span className="text-emerald-400 font-semibold text-base">3.0+</span> at Sabaragamuwa University.
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/12 to-cyan-500/12 shadow-[0_18px_45px_-35px_rgba(59,130,246,0.45)]">
            <div className="text-4xl font-bold text-blue-300 mb-2">
              10+
            </div>
            <div className="text-zinc-300 font-medium">
              Academic & Personal Projects Including Web, Mobile, AI, and IoT Base.
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/12 to-teal-500/12 shadow-[0_18px_45px_-35px_rgba(16,185,129,0.45)]">
            <div className="text-2xl font-bold text-emerald-300 mb-2">
              Volunteer Experience
            </div>
            <div className="text-zinc-300 font-medium">
             Participated in volunteer activities, supporting academic and community initiatives while developing teamwork and leadership skills.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
