"use client";

import { motion } from "framer-motion";

const CATEGORIES = ["All", "Languages", "Frontend", "Backend", "Database", "AI / ML", "DevOps & Tools"];

const CATEGORY_STYLE: Record<string, { dot: string; pill: string; active: string }> = {
  All:              { dot: "bg-zinc-300",   pill: "border-zinc-700 text-zinc-400", active: "bg-zinc-800 border-zinc-500 text-zinc-100" },
  Languages:        { dot: "bg-yellow-300", pill: "border-zinc-700 text-zinc-400", active: "bg-yellow-500/15 border-yellow-400/50 text-yellow-200" },
  Frontend:         { dot: "bg-cyan-300",   pill: "border-zinc-700 text-zinc-400", active: "bg-cyan-500/15 border-cyan-400/50 text-cyan-200" },
  Backend:          { dot: "bg-lime-400",   pill: "border-zinc-700 text-zinc-400", active: "bg-lime-500/15 border-lime-400/50 text-lime-200" },
  Database:         { dot: "bg-sky-400",    pill: "border-zinc-700 text-zinc-400", active: "bg-sky-500/15 border-sky-400/50 text-sky-200" },
  "AI / ML":        { dot: "bg-orange-400", pill: "border-zinc-700 text-zinc-400", active: "bg-orange-500/15 border-orange-400/50 text-orange-200" },
  "DevOps & Tools": { dot: "bg-violet-400", pill: "border-zinc-700 text-zinc-400", active: "bg-violet-500/15 border-violet-400/50 text-violet-200" },
};

interface SkillsFilterTabsProps {
  inView: boolean;
  activeCategory: string;
  filteredCount: number;
  onSelect: (cat: string) => void;
}

export { CATEGORIES, CATEGORY_STYLE };

export default function SkillsFilterTabs({ inView, activeCategory, filteredCount, onSelect }: SkillsFilterTabsProps) {
  return (
    <>
      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {CATEGORIES.map((cat) => {
          const style = CATEGORY_STYLE[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-250 backdrop-blur-sm ${
                isActive ? style.active : style.pill + " hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${isActive ? "opacity-100" : "opacity-50"}`} />
              {cat}
            </button>
          );
        })}
      </motion.div>

      {/* Count badge */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-6"
      >
        <span className="text-xs text-zinc-600 font-medium">
          Showing{" "}
          <span className="text-zinc-400 font-semibold">{filteredCount}</span>{" "}
          {filteredCount === 1 ? "technology" : "technologies"}
          {activeCategory !== "All" && (
            <> in <span className="text-zinc-300">{activeCategory}</span></>
          )}
        </span>
      </motion.div>
    </>
  );
}
