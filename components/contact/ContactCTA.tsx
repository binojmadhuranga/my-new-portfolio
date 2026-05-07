"use client";

import { motion } from "framer-motion";

/* Bottom CTA banner — "Let's Build Something Amazing Together" */
export default function ContactCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-16 relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(28,28,36,0.9),rgba(10,10,14,0.95))] p-10 text-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl"
    >
      {/* Top highlight line */}
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Background orb */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
          Ready to collaborate?
        </p>
        <h3 className="text-2xl sm:text-3xl font-black text-zinc-50 mb-3 tracking-tight">
          Let&apos;s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            Amazing Together
          </span>
        </h3>
        <p className="text-sm text-zinc-400 mb-7 max-w-md mx-auto">
          Whether it&apos;s a startup idea, an enterprise product, or a personal project — I&apos;m always excited
          to collaborate.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:binojmadhuranga2002.04.04@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_32px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(255,255,255,0.22)] hover:bg-zinc-100"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me Directly
          </a>
          <a
            href="https://www.linkedin.com/in/binoj-madhuranga/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}
