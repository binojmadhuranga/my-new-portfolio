"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ProjectsBackground  from "@/components/projects/ProjectsBackground";
import ProjectsHeader      from "@/components/projects/ProjectsHeader";
import { FeaturedProjectCard, ProjectCard, type Project } from "@/components/projects/ProjectCards";
import ProjectsGithubCTA   from "@/components/projects/ProjectsGithubCTA";

/* ─── Project data ───────────────────────────────────────────── */
const projects: Project[] = [
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
      {/* Background decoration */}
      <ProjectsBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label + heading + subtitle */}
        <ProjectsHeader inView={inView} />

        {/* Featured hero card */}
        <div className="mb-8">
          <FeaturedProjectCard project={featured} index={0} />
        </div>

        {/* Remaining cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>

        {/* GitHub CTA */}
        <ProjectsGithubCTA />
      </div>
    </section>
  );
}
