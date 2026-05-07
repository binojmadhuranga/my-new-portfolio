/* ─── Static contact data & EmailJS credentials ──────────────── */

export const EMAILJS_SERVICE_ID  = "service_q48sami";
export const EMAILJS_TEMPLATE_ID = "template_03a9762";
export const EMAILJS_PUBLIC_KEY  = "mTfiEGynXBKtKsQWt";

export const CONTACTS = [
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
  },
];

export type ContactItem = (typeof CONTACTS)[0];
