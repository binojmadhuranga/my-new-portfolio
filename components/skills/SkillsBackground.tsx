export default function SkillsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 48px)",
        }}
      />
      {/* Glow orb — top-right */}
      <div
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)",
          animation: "orbDrift2 22s ease-in-out infinite",
        }}
      />
      {/* Glow orb — bottom-left */}
      <div
        className="absolute bottom-0 left-[-8%] w-[450px] h-[450px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          animation: "orbDrift1 26s ease-in-out infinite",
        }}
      />
    </div>
  );
}
