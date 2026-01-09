import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Binoj</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Full-Stack Developer passionate about building beautiful, scalable web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-4 border-white dark:border-zinc-800 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for your image - replace with your actual image */}
                <div className="text-9xl">👨‍💻</div>
                {/* Uncomment and use this when you have your profile image */}
                {/* <Image
                  src="/profile.jpg"
                  alt="Binoj"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
