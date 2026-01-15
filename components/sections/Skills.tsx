import Image from "next/image";

export default function Skills() {
  const techStack = [
    // 🟦 Programming Languages (Basics → Advanced)
    { name: "HTML5", logo: "/techstack/HTML5.png" },
    { name: "CSS3", logo: "/techstack/CSS3.png" },
    { name: "JavaScript", logo: "/techstack/JavaScript.png" },
    { name: "TypeScript", logo: "/techstack/TypeScript.png" },
    { name: "C", logo: "/techstack/C.png" },
    { name: "Java", logo: "/techstack/Java.png" },
    { name: "C#", logo: "/techstack/Csharp.png" },
    { name: "PHP", logo: "/techstack/PHP.png" },
    { name: "Python", logo: "/techstack/Python.png" },

    // 🟩 Frontend Frameworks & Libraries
    { name: "React", logo: "/techstack/React.png" },
    { name: "Next.js", logo: "/techstack/Next.js.png" },
    { name: "React Native", logo: "/techstack/React.png" },
    { name: "Expo", logo: "/techstack/Expo.png" },
    { name: "Redux", logo: "/techstack/Redux.png" },
    { name: "Tailwind CSS", logo: "/techstack/Tailwind CSS.png" },

    // 🟨 Backend Frameworks & Technologies
    { name: "Node.js", logo: "/techstack/Node.js.png" },
    { name: "Express", logo: "/techstack/Express.png" },
    { name: "Flask", logo: "/techstack/Flask.png" },
    { name: "Spring", logo: "/techstack/Spring.png" },
    { name: "Hibernate", logo: "/techstack/Hibernate.png" },
    { name: ".NET Core", logo: "/techstack/NET core.png" },

    // 🟪 Databases & ORM
    { name: "MongoDB", logo: "/techstack/MongoDB.png" },
    { name: "MySQL", logo: "/techstack/MySQL.png" },
    { name: "PostgreSQL", logo: "/techstack/PostgresSQL.png" },
    { name: "Sequelize", logo: "/techstack/Sequelize.png" },

    // 🟧 AI / Data Science
    { name: "Numpy", logo: "/techstack/Numpy.png" },
    { name: "Pandas", logo: "/techstack/Pandas.png" },
    { name: "TensorFlow", logo: "/techstack/TensorFlow.png" },
    { name: "Kaggle", logo: "/techstack/Kaggle.png" },

    // 🟥 Tools, DevOps & Platforms
    { name: "Git", logo: "/techstack/Git.png" },
    { name: "GitHub", logo: "/techstack/GitHub.png" },
    { name: "Docker", logo: "/techstack/Docker.png" },
    { name: "AWS", logo: "/techstack/AWS.png" },
    { name: "Jenkins", logo: "/techstack/Jenkins.png" },
    { name: "Linux", logo: "/techstack/Linux.png" },
    { name: "Ubuntu", logo: "/techstack/Ubuntu.png" },
    { name: "Postman", logo: "/techstack/Postman.png" },
    { name: "Android Studio", logo: "/techstack/Android Studio.png" },
    { name: "IntelliJ IDEA", logo: "/techstack/IntelliJ IDEA.png" },
    { name: "VS Code", logo: "/techstack/Visual Studio Code (VS Code).png" },
    { name: "Figma", logo: "/techstack/Figma.png" },
  ];


  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-50 text-center">
                  {tech.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
