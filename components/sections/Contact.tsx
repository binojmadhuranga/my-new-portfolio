"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm    from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactCTA     from "@/components/contact/ContactCTA";

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

        {/* ── Main grid: form left | sidebar right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          {/* LEFT: Form panel */}
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

          {/* RIGHT: Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactSidebar />
          </motion.div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <ContactCTA />
      </div>
    </section>
  );
}
