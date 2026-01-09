export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            About Me
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web applications. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3+
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              30+
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 font-medium">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
