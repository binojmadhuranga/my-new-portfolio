import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-[12%] lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen lg:min-h-[calc(100vh+10rem)]">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-900 to-slate-800 dark:from-slate-200 dark:via-blue-400 dark:to-slate-300">Binoj Madhuranga</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Software Engineer designing scalable solutions across Web, Mobile, AI, and IoT using modern technologies.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <a
                href="#contact"
                className="px-3 py-2 sm:px-8 sm:py-4 rounded-full bg-zinc-900 text-white text-xs sm:text-base font-medium hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-3 py-2 sm:px-8 sm:py-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs sm:text-base font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors whitespace-nowrap"
              >
                View Projects
              </a>
              <a
                href="/Binoj_Madhuranga.pdf"
                download="Binoj_Madhuranga.pdf"
                className="px-3 py-2 sm:px-8 sm:py-4 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs sm:text-base font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors whitespace-nowrap"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image with Corner Animations */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative inline-block group animate-[popup_1.5s_ease-out]">
              {/* Animated corner decorations */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-slate-700 dark:border-slate-400 rounded-tl-3xl transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:-top-6 group-hover:-left-6"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-blue-900 dark:border-blue-500 rounded-tr-3xl transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:-top-6 group-hover:-right-6"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-zinc-600 dark:border-zinc-500 rounded-bl-3xl transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:-bottom-6 group-hover:-left-6"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-slate-800 dark:border-slate-300 rounded-br-3xl transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:-bottom-6 group-hover:-right-6"></div>
              
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-blue-900 to-zinc-800 rounded-3xl blur-3xl opacity-15 animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="/profile.png" 
                  alt="Binoj Madhuranga" 
                  className="max-w-md w-full h-auto object-contain transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
