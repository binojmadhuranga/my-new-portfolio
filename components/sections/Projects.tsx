"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Project data ───────────────────────────────────────────── */
const projects = [
  {
    title: "Gemora – Digital Gemstone Trading & Auction Platform",
    description:
      "Gemora is a secure digital gemstone marketplace using AI models for verification, pricing insights, fraud detection, and transparent real-time auctions.",
    image: "/projects/gemora.webp",
    tags: ["Spring Boot", "Node.js", "MySQL", "Expo", "React", "TensorFlow", "Zustand", "Gemini-flash 2.5", "Socket"],
    demoLink:
      "https://www.linkedin.com/posts/binoj-madhuranga_gemora-capstoneproject-ai-activity-7407052268069584896-yolB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
    githubLink: "https://github.com/stars/binojmadhuranga/lists/gemora",
    featured: true,
  },
  {
    title: "FinanceMind — AI Powered Finance Tracer",
    description:
      "A personal finance management app that helps users track income and expenses and gain AI-powered financial insights.",
    image: "/projects/financemind.webp",
    tags: ["Node.js", "Express.js", "Next.js", "PostgreSQL", "Redux", "Sequelize", "Tailwind", "Gemini-flash 2.5"],
    demoLink: "https://nance-mind-web.vercel.app",
    githubLink: "https://github.com/stars/binojmadhuranga/lists/financemind",
  },
  {
    title: "SmartBiz — AI Powered ERP Software",
    description:
      "A modern business management platform helping small and medium businesses manage sales, customers, inventory, and operations efficiently.",
    image: "/projects/smartbiz.webp",
    tags: ["Spring Boot", "Hibernate", "Node.js", "React.js", "OpenAI", "Tailwind"],
    demoLink:
      "https://www.linkedin.com/posts/binoj-madhuranga_smartbiz-saas-productupdate-ugcPost-7424020335223693312-nSYZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
    githubLink: "https://github.com/stars/binojmadhuranga/lists/smart-biz",
  },
  {
    title: "SkySense Dryer — IoT Smart Home Appliance",
    description:
      "An IoT-based smart cloth rack system that automatically adapts to rain, sunlight, and wind, with mobile app control.",
    image: "/projects/skysense.webp",
    tags: ["IoT", "React", "Node.js", "MongoDB", "Express", "React Native"],
    demoLink: "",
    githubLink: "https://github.com/binojmadhuranga/SkySense-app",
  },
  {
    title: "AI Laptop Price Prediction",
    description:
      "An AI-powered application that predicts laptop prices based on specifications using ML models and data-driven analysis.",
    image: "/projects/laptop.webp",
    tags: ["Spring Boot", "Node.js", "Flask", "React.js", "NumPy", "TensorFlow", "Tailwind"],
    demoLink: "",
    githubLink: "https://github.com/stars/binojmadhuranga/lists/laptop-price-predictor",
  },
  {
    title: "PSMS – University Project Management System",
    description:
      "A university project management system that streamlines proposal submission, supervisor coordination, progress tracking, and academic feedback.",
    image: "/projects/psms.webp",
    tags: ["Node.js", "Express.js", "Tailwind", "React.js", "MongoDB"],
    demoLink:
      "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-mern-react-activity-7377023132680847360-ZjOm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
    githubLink: "https://github.com/stars/binojmadhuranga/lists/email-ms",
  },
];

/* ─── Link button ────────────────────────────────────────────── */
function LinkBtn({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}) {
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

/* ─── Featured (hero) card ───────────────────────────────────── */
function FeaturedCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.demoLink && (
              <LinkBtn href={project.demoLink} variant="primary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </LinkBtn>
            )}
            {project.githubLink && (
              <LinkBtn href={project.githubLink} variant="ghost">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </LinkBtn>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Regular card ───────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
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
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400"
            >
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
            <LinkBtn href={project.demoLink} variant="primary">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </LinkBtn>
          )}
          {project.githubLink && (
            <LinkBtn href={project.githubLink} variant="ghost">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </LinkBtn>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Projects ───────────────────────────────────────────── */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [featured, ...rest] = projects;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px)",
          }}
        />
        <div
          className="absolute top-[-10%] left-[30%] w-[560px] h-[560px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.6) 0%, transparent 70%)", animation: "orbDrift1 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)", animation: "orbDrift2 28s ease-in-out infinite" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-zinc-700" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Projects
          </span>
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-zinc-700" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-black text-zinc-50 text-center mb-3 tracking-tight"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            Work
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-14"
        >
          Real-world products I have designed, engineered, and shipped.
        </motion.p>

        {/* ── Featured hero card ── */}
        <div className="mb-8">
          <FeaturedCard project={featured} index={0} />
        </div>

        {/* ── Remaining cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/binojmadhuranga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
