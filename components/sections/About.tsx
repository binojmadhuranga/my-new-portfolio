export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            About Me
          </h2>
          <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto space-y-4">
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
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="flex justify-center mb-3">
              <img
                src="/uni_logo.png"
                alt="Sabaragamuwa University"
                className="w-16 h-16 object-contain shadow-lg rounded-full"
              />
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium text-sm leading-relaxed">
              BSc Honours Software Engineering undergraduate at Sabaragamuwa University
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium">
              Academic & Personal Projects
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              3.0+ GPA
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium">
              Strong Academic Background
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
