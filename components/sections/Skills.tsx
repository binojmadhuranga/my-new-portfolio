export default function Skills() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {tech.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
