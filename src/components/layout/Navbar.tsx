"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/",          label: "Studio",    glyph: "⬟" },
  { href: "/about",     label: "About",     glyph: "◈" },
  { href: "/projects",  label: "Projects",  glyph: "◎" },
  { href: "/skills",    label: "Skills",    glyph: "◆" },
  { href: "/hobbies",   label: "Hobbies",   glyph: "✦" },
  { href: "/contact",   label: "Contact",   glyph: "→" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "scale-[0.97]" : "scale-100"
        }`}
      >
        <div className="nav-container rounded-full px-5 py-2.5 flex items-center gap-1 sm:gap-5">
          {/* Logo */}
          <Link href="/" className="font-display font-black text-cream-DEFAULT text-sm tracking-widest mr-2 shrink-0">
            BM
          </Link>

          <div className="w-px h-4 bg-cream-muted/20 shrink-0" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map(({ href, label, glyph }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-ui text-[10px] tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 ${
                    active ? "text-cream-DEFAULT" : "text-cream-muted/40 hover:text-cream-muted/80"
                  }`}
                >
                  <span className={`text-[8px] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}>
                    {glyph}
                  </span>
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 text-cream-DEFAULT/60 hover:text-cream-DEFAULT transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,6,3,0.96)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_LINKS.map(({ href, label, glyph }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-display text-4xl font-black flex items-center gap-3 transition-colors duration-200 ${
                  active ? "text-cream-DEFAULT" : "text-cream-muted/40 hover:text-cream-muted/70"
                }`}
              >
                <span className="text-lg">{glyph}</span>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
