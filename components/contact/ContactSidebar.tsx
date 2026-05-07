"use client";

import { CONTACTS } from "./contactData";
import ContactCard from "./ContactCard";

/* Right-hand sidebar: availability badge + contact cards + quick response note */
export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* Availability badge */}
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/8 px-5 py-3.5 backdrop-blur-sm mb-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <div>
          <p className="text-xs font-semibold text-emerald-300">Available for opportunities</p>
          <p className="text-[11px] text-zinc-500">Open to full-time &amp; freelance roles</p>
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
    </div>
  );
}
