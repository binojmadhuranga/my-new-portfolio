"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/75">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-400">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info Cards */}
          <a
            href="mailto:binojmadhuranga2002.04.04@gmail.com"
            className="group p-6 rounded-2xl bg-[linear-gradient(160deg,rgba(39,39,42,0.7),rgba(24,24,27,0.92))] border border-zinc-800 hover:border-slate-400/70 transition-all hover:shadow-[0_18px_45px_-30px_rgba(100,116,139,0.45)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50 mb-1">Email</h3>
                <p className="text-sm text-zinc-400">binojmadhuranga2002.04.04@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/binoj-madhuranga/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[linear-gradient(160deg,rgba(39,39,42,0.7),rgba(24,24,27,0.92))] border border-zinc-800 hover:border-blue-400/70 transition-all hover:shadow-[0_18px_45px_-30px_rgba(59,130,246,0.45)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-900/50 to-blue-800/35 text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50 mb-1">LinkedIn</h3>
                <p className="text-sm text-zinc-400">Connect with me</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/binojmadhuranga"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[linear-gradient(160deg,rgba(39,39,42,0.7),rgba(24,24,27,0.92))] border border-zinc-800 hover:border-zinc-500/70 transition-all hover:shadow-[0_18px_45px_-30px_rgba(113,113,122,0.45)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 text-zinc-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50 mb-1">GitHub</h3>
                <p className="text-sm text-zinc-400">Check out my code</p>
              </div>
            </div>
          </a>

          <a
            href="https://x.com/labugamage"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[linear-gradient(160deg,rgba(39,39,42,0.7),rgba(24,24,27,0.92))] border border-zinc-800 hover:border-cyan-400/70 transition-all hover:shadow-[0_18px_45px_-30px_rgba(34,211,238,0.45)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-900/45 to-cyan-800/35 text-cyan-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50 mb-1">Twitter</h3>
                <p className="text-sm text-zinc-400">Follow me</p>
              </div>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 via-zinc-900 to-blue-950/70 border border-zinc-800 shadow-[0_18px_55px_-35px_rgba(59,130,246,0.45)]">
          <h3 className="text-3xl font-bold mb-4 text-zinc-50">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-lg mb-6 text-zinc-400">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="https://www.linkedin.com/in/binoj-madhuranga/"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-zinc-950 font-semibold hover:from-blue-400 hover:to-cyan-300 transition-colors"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}
