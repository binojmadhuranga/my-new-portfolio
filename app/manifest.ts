import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Binoj Madhuranga | Software Engineer Portfolio",
    short_name: "Binoj Portfolio",
    description: "Official portfolio of Binoj Madhuranga - Software Engineer, AI & ML Developer, and Full-Stack Architect.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/tittle.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/tittle.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
