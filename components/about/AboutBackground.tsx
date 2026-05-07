export default function AboutBackground() {
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
      {/* Glow orb — top-left */}
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
          animation: "orbDrift1 20s ease-in-out infinite",
        }}
      />
      {/* Glow orb — bottom-right */}
      <div
        className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
          animation: "orbDrift2 24s ease-in-out infinite",
        }}
      />
    </div>
  );
}
