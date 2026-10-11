import type { Metadata, Viewport } from "next";
import StructuredData from "@/components/StructuredData";
// import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binoj.me";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Binoj Madhuranga | Software Engineer & Full-Stack Developer",
    template: "%s | Binoj Madhuranga",
  },
  description:
    "Portfolio of Binoj Madhuranga - Software Engineer, AI & ML Developer, and Full-Stack Software Engineer at Xigenix. Specializing in React, Next.js, Spring Boot,Asp .NET, Node.js, Mobile Apps, and Cloud Solutions.",
  keywords: [
    "Binoj Madhuranga",
    "Binoj Madhuranga Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "ML Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Spring Boot Developer",
    "Mobile App Developer",
    "Xigenix",
    "Sri Lanka Software Engineer",
    "Gemora",
    "FinanceMind",
    "SmartBiz",
  ],
  authors: [{ name: "Binoj Madhuranga", url: "https://github.com/binojmadhuranga" }],
  creator: "Binoj Madhuranga",
  publisher: "Binoj Madhuranga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Binoj Madhuranga | Software Engineer & Full-Stack Developer",
    description:
      "Explore the portfolio of Binoj Madhuranga - Software Engineer, AI & ML Engineer, and Full-Stack Architect building scalable web, mobile, and AI solutions.",
    url: siteUrl,
    siteName: "Binoj Madhuranga Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Binoj Madhuranga - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binoj Madhuranga | Software Engineer & Full-Stack Developer",
    description:
      "Explore the portfolio of Binoj Madhuranga - Software Engineer, AI & ML Engineer, and Full-Stack Architect building scalable web, mobile, and AI solutions.",
    creator: "@labugamage",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
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

