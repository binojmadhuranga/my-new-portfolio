"use client";

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Gemora – Digital Gemstone Trading & Auction Platform",
      description: "Gemora is a secure digital gemstone marketplace using AI models for verification, pricing insights, fraud detection, and transparent real-time auctions.",
      image: "/projects/gemora.webp",
      tags: ["Spring Boot", "Node.js", "MySQL", "Expo", "React", "TensorFlow", "Zustand", "Gemini-flash 2.5", "Socket"],
      demoLink: "https://www.linkedin.com/posts/binoj-madhuranga_gemora-capstoneproject-ai-activity-7407052268069584896-yolB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/gemora",
    },
    {
      title: "FinanceMind - AI Powered Finance Tracer",
      description: "A personal finance management application that helps users track income and expenses and gain AI-powered financial insights.",
      image: "/projects/financemind.webp",
      tags: ["Node.js", "Express.js", "Next.js", "PostgreSQL", "Redux", "Sequelize", "Tailwind", "Gemini-flash 2.5"],
      demoLink: "nance-mind-web.vercel.app",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/financemind",
    },
    {
      title: "SmartBiz - AI Powered ERP Software ",
      description: "A modern business management platform that helps small and medium businesses manage sales, customers, inventory, and operations efficiently.",
      image: "/projects/smartbiz.webp",
      tags: ["Spring Boot", "Hibernate", "Node.js", "React.js", "OpenAI", "Tailwind"],
      demoLink: "https://www.linkedin.com/posts/binoj-madhuranga_smartbiz-saas-productupdate-ugcPost-7424020335223693312-nSYZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/smart-biz",
    },
    {
      title: " SkySense Dryer - IoT Based Smart Home Appliance (Ongoing)",
      description: "SkySense is an IoT-based smart cloth rack system that automatically adapts to rain, sunlight, and wind, with mobile app control.",
      image: "/projects/skysense.webp",
      tags: ["IOT", "React", "Node.js", "MongoDB", "Express", "React Native"],
      demoLink: "",
      githubLink: "https://github.com/binojmadhuranga/SkySense-app",
    },
    {
      title: "AI Powered Laptop Price  Prediction Application ",
      description: "An AI-powered application that predicts laptop prices based on specifications using machine learning models and data-driven analysis.",
      image: "/projects/laptop.webp",
      tags: ["Spring Boot", "Node.js", "Flask", "React.js", "Numpy", "Tensorflow", "Tailwind",],
      demoLink: "",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/laptop-price-predictor",
    },
    {
      title: "PSMS – University Project Management System",
      description: "PSMS is a university project management system that streamlines proposal submission, supervisor coordination, progress tracking, and academic feedback.",
      image: "/projects/psms.webp",
      tags: ["Node.js", "Express.js", "Tailwind", "React.js", "MongoDB"],
      demoLink: "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-mern-react-activity-7377023132680847360-ZjOm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/email-ms",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-[linear-gradient(180deg,#09090b_0%,#06070a_44%,#09090b_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_68%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
