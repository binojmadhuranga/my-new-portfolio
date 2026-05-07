export default function HeroBackground() {
  return (
    <>
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large white orb - top-left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 70%)",
            animation: "orbDrift1 18s ease-in-out infinite",
          }}
        />
        {/* soft gray orb - bottom-right */}
        <div
          className="absolute -bottom-40 -right-24 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(220,220,220,0.16) 0%, transparent 70%)",
            animation: "orbDrift2 22s ease-in-out infinite",
          }}
        />
        {/* neutral accent - center-right */}
        <div
          className="absolute top-1/3 right-[10%] w-[280px] h-[280px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(170,170,170,0.18) 0%, transparent 70%)",
            animation: "orbDrift3 14s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 40px)",
        }}
      />
    </>
  );
}
