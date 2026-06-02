import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binoj's Portfolio",
  description: "Binoj's personal portfolio showcasing full-stack development projects, React, Next.js, Spring Boot, and modern web & mobile solutions.",
  icons: {
    icon: [
      {
        url: "/tittle.png",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/tittle.png" }],
    apple: [{ url: "/tittle.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
