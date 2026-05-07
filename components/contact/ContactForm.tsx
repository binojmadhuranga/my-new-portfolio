"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "./contactData";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 backdrop-blur-sm outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/[0.07] focus:ring-1 focus:ring-white/10";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
          ? String((err as { text: unknown }).text)
          : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4"
          >
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-300">Message sent successfully!</p>
              <p className="text-xs text-emerald-500 mt-0.5">I&apos;ll get back to you within 24 hours.</p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-xs text-emerald-500 hover:text-emerald-300 transition-colors underline flex-shrink-0"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <>
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 px-5 py-4"
              >
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-red-300">Failed to send message</p>
                  {errorMsg && <p className="text-xs text-red-500 mt-0.5">{errorMsg}</p>}
                  <p className="text-xs text-red-500 mt-0.5">Please try again or email me directly.</p>
                </div>
              </motion.div>
            )}

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
                  {status === "error" ? "Try Again" : "Send Message"}
                </>
              )}
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </form>
  );
}
