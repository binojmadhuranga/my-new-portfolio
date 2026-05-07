export default function ProjectsBackground() {
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
      {/* Glow orb — top-center */}
      <div
        className="absolute top-[-10%] left-[30%] w-[560px] h-[560px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.6) 0%, transparent 70%)",
          animation: "orbDrift1 22s ease-in-out infinite",
        }}
      />
      {/* Glow orb — bottom-right */}
      <div
        className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          animation: "orbDrift2 28s ease-in-out infinite",
        }}
      />
    </div>
  );
}
