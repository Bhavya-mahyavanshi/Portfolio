import type { Metadata } from "next";
import {
  Playfair_Display,
  Crimson_Pro,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import CursorSystem from "@/components/layout/CursorSystem";
import PageTransition from "@/components/layout/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavya Mahyavanshi — Backend Developer",
  description:
    "Portfolio of Bhavya Mahyavanshi. Artist at the core, backend developer by trade — crafting systems like canvas, building logic like chapters, exploring architecture like continents.",
  keywords: ["backend developer", "Node.js", "Java", "Python", "Seneca", "portfolio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimson.variable} ${dm.variable} ${mono.variable}`}
    >
      <body className="noise bg-canvas text-cream-DEFAULT">
        <CursorSystem />
        <PageTransition />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
