import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Gemora – Digital Gemstone Trading & Auction Platform",
      description: "Gemora is a secure digital gemstone marketplace using AI models for verification, pricing insights, fraud detection, and transparent real-time auctions.",
      image: "/projects/gemora.png",
      tags: ["Spring Boot", "Node.js", "MySQL", "Expo", "React", "TensorFlow", "Zustand"],
      demoLink: "https://www.linkedin.com/posts/binoj-madhuranga_gemora-capstoneproject-ai-activity-7407052268069584896-yolB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEtcVf4BGJkmZE9RHJogysB5Bys_uJKhYVU",
      githubLink: "https://github.com/stars/binojmadhuranga/lists/gemora",
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
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking application with workout plans, calorie tracking, and progress visualization.",
      image: "/project6.jpg",
      tags: ["React", "Firebase", "Tailwind", "Chart.js"],
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
