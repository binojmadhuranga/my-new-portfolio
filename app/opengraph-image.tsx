import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#27272a",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "20px",
              color: "#38bdf8",
            }}
          >
            BM
          </div>
          <span style={{ fontSize: "22px", color: "#a1a1aa", fontWeight: 600 }}>
            binojmadhuranga.com
          </span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#f4f4f5",
              lineHeight: 1.1,
            }}
          >
            Binoj Madhuranga
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#38bdf8",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Software Engineer & Full-Stack Architect
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#9ca3af",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Building high-performance Full-Stack Web, AI/ML models, Mobile Apps, and Cloud Solutions. Intern Software Engineer @ Xigenix.
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["React & Next.js", "Spring Boot", "AI & ML", "Mobile Apps"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#e4e4e7",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
