"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Social / contact links ─────────────────────────────────── */
const CONTACTS = [
  {
    id: "email",
    label: "Email",
    value: "binojmadhuranga2002.04.04@gmail.com",
    shortValue: "Send an email",
    href: "mailto:binojmadhuranga2002.04.04@gmail.com",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-400/25",
    hoverBorder: "hover:border-violet-400/50",
    glow: "rgba(139,92,246,0.4)",
    dotColor: "bg-violet-400",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/binoj-madhuranga",
    shortValue: "Connect with me",
    href: "https://www.linkedin.com/in/binoj-madhuranga/",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-400/25",
    hoverBorder: "hover:border-blue-400/50",
    glow: "rgba(59,130,246,0.4)",
    dotColor: "bg-blue-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/binojmadhuranga",
    shortValue: "Check out my code",
    href: "https://github.com/binojmadhuranga",
    accent: "from-zinc-500/20 to-zinc-700/10",
    border: "border-zinc-600/30",
    hoverBorder: "hover:border-zinc-400/50",
    glow: "rgba(161,161,170,0.35)",
    dotColor: "bg-zinc-300",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "X / Twitter",
    value: "x.com/labugamage",
    shortValue: "Follow me",
    href: "https://x.com/labugamage",
    accent: "from-sky-500/15 to-cyan-500/10",
    border: "border-sky-500/25",
    hoverBorder: "hover:border-sky-400/50",
    glow: "rgba(14,165,233,0.35)",
    dotColor: "bg-sky-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─── Contact card ───────────────────────────────────────────── */
function ContactCard({
  contact,
  index,
}: {
  contact: (typeof CONTACTS)[0];
  index: number;
}) {
  return (
    <motion.a
      href={contact.href}
      target={contact.id !== "email" ? "_blank" : undefined}
      rel={contact.id !== "email" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative flex items-center gap-4 rounded-2xl border ${contact.border} ${contact.hoverBorder} bg-gradient-to-br ${contact.accent} p-5 backdrop-blur-sm overflow-hidden transition-all duration-300 cursor-pointer`}
      style={{ boxShadow: `0 16px 40px -20px transparent` }}
    >
      {/* Glow blob on hover */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: contact.glow }}
      />
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
        {contact.icon}
      </div>
      {/* Text */}
      <div className="relative z-10 min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">
          {contact.label}
        </p>
        <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300 truncate">
          {contact.shortValue}
        </p>
      </div>
      {/* Arrow */}
      <svg
        className="relative z-10 w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </motion.a>
  );
}

/* ─── Form ───────────────────────────────────────────────────── */
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate send (replace with actual API call)
    setTimeout(() => setStatus("sent"), 1600);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 backdrop-blur-sm outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/10";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={fields.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project, idea, or just say hi..."
          required
          className={inputClass + " resize-none"}
        />
      </div>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4"
          >
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-emerald-300">
              Message sent! I&apos;ll get back to you soon.
            </span>
          </motion.div>
        ) : (
          <motion.button
            key="submit"
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-[0_0_32px_rgba(255,255,255,0.14)] transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_48px_rgba(255,255,255,0.22)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </form>
  );
}

/* ─── Main Contact ────────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px)",
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)", animation: "orbDrift2 22s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)", animation: "orbDrift1 26s ease-in-out infinite" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-r from-transparent to-zinc-700" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Contact
          </span>
          <div className="h-px flex-1 max-w-[72px] bg-gradient-to-l from-transparent to-zinc-700" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl sm:text-5xl font-black text-zinc-50 text-center mb-3 tracking-tight"
        >
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            Work Together
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-zinc-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-16"
        >
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </motion.p>

        {/* ── Main grid: form left, info right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* ── LEFT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/10 bg-[linear-gradient(155deg,rgba(28,28,34,0.9),rgba(12,12,16,0.92))] p-8 backdrop-blur-xl shadow-[0_32px_72px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* Top highlight line */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            <div className="mb-6">
              <h3 className="text-xl font-bold text-zinc-50 mb-1">Send a Message</h3>
              <p className="text-sm text-zinc-500">I typically respond within 24 hours.</p>
            </div>

            <ContactForm />
          </motion.div>

          {/* ── RIGHT: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/8 px-5 py-3.5 backdrop-blur-sm mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <p className="text-xs font-semibold text-emerald-300">Available for opportunities</p>
                <p className="text-[11px] text-zinc-500">Open to full-time & freelance roles</p>
              </div>
            </div>

            {/* Contact cards */}
            {CONTACTS.map((contact, i) => (
              <ContactCard key={contact.id} contact={contact} index={i} />
            ))}

            {/* Quick response promise */}
            <div className="mt-2 rounded-2xl border border-white/8 bg-white/3 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-300 mb-0.5">Quick Response</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    I aim to respond to all messages within 24 hours during weekdays.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(28,28,36,0.9),rgba(10,10,14,0.95))] p-10 text-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        >
          {/* Top line */}
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {/* Background orb */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)" }}
            />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Ready to collaborate?</p>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-50 mb-3 tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Amazing Together</span>
            </h3>
            <p className="text-sm text-zinc-400 mb-7 max-w-md mx-auto">
              Whether it&apos;s a startup idea, an enterprise product, or a personal project — I&apos;m always excited to collaborate.
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
      </div>
    </section>
  );
}
