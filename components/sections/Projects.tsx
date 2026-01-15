"use client";

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Gemora – Digital Gemstone Trading & Auction Platform",
      description: "Gemora is a secure digital gemstone marketplace using AI models for verification, pricing insights, fraud detection, and transparent real-time auctions.",
      image: "/projects/gemora.png",
      tags: ["Spring Boot", "Node.js", "MySQL", "Expo", "React", "TensorFlow", "Zustand", "Gemini-flash 2.5", "Socket"],
      demoLink: "https://www.linkedin.com/posts/binoj-madhuranga_gemora-capstoneproject-ai-activity-7407052268069584896-yolB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/gemora",
    },
    {
      title: "FinanceMind - AI Powered Finance Tracer",
      description: "A personal finance management application that helps users track income and expenses and gain AI-powered financial insights.",
      image: "/projects/financemind.png",
      tags: ["Node.js", "Express.js", "Next.js", "PostgreSQL", "Redux", "Sequelize", "Tailwind", "Gemini-flash 2.5"],
      demoLink: "nance-mind-web.vercel.app",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/financemind",
    },
    {
      title: "SmartBiz - AI Powered ERP Software ",
      description: "A modern business management platform that helps small and medium businesses manage sales, customers, inventory, and operations efficiently.",
      image: "/projects/smartbiz.png",
      tags: ["Spring Boot", "Hibernate", "Node.js", "React.js", "OpenAI", "Tailwind"],
      demoLink: "",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/smart-biz",
    },
    {
      title: " SkySense Dryer - IoT Based Smart Home Appliance (Ongoing)",
      description: "SkySense is an IoT-based smart cloth rack system that automatically adapts to rain, sunlight, and wind, with mobile app control.",
      image: "/projects/skysense.png",
      tags: ["IOT", "React", "Node.js", "MongoDB", "Express", "React Native"],
      demoLink: "",
      githubLink: "https://github.com/binojmadhuranga/SkySense-app",
    },
    {
      title: "AI Powered Laptop Price  Prediction Application ",
      description: "An AI-powered application that predicts laptop prices based on specifications using machine learning models and data-driven analysis.",
      image: "/projects/laptop.png",
      tags: ["Spring Boot", "Node.js", "Flask", "React.js", "Numpy", "Tensorflow", "Tailwind",],
      demoLink: "",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/laptop-price-predictor",
    },
    {
      title: "PSMS – University Project Management System",
      description: "PSMS is a university project management system that streamlines proposal submission, supervisor coordination, progress tracking, and academic feedback.",
      image: "/projects/psms.png",
      tags: ["Node.js", "Express.js", "Tailwind", "React.js", "MongoDB"],
      demoLink: "https://www.linkedin.com/posts/imasha-kumarasinghe-8413b72b4_webdevelopment-mern-react-activity-7377023132680847360-ZjOm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/email-ms",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
