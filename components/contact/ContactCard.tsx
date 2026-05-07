"use client";

import { motion } from "framer-motion";
import { ContactItem } from "./contactData";
import { CONTACT_ICONS } from "./ContactIcons";

interface ContactCardProps {
  contact: ContactItem;
  index: number;
}

export default function ContactCard({ contact, index }: ContactCardProps) {
  const Icon = CONTACT_ICONS[contact.id];

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
        {Icon && <Icon />}
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
