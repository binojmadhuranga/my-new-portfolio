import type { Metadata } from "next";
import NotFoundClient from "@/components/NotFoundClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on Binoj Madhuranga's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
