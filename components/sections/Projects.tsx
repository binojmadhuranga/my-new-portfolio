import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      image: "/project1.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking features.",
      image: "/project2.jpg",
      tags: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform using GPT models for creating blog posts, social media content, and more.",
      image: "/project3.jpg",
      tags: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with scheduling and performance metrics.",
      image: "/project4.jpg",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with 7-day forecasts, interactive maps, and location-based weather alerts.",
      image: "/project5.jpg",
      tags: ["Next.js", "TypeScript", "OpenWeather API", "Mapbox"],
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
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
