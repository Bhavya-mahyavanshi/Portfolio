"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";
    el.style.pointerEvents = "all";
    const t = setTimeout(() => {
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
    }, 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      ref={ref}
      id="page-transition"
      style={{ transition: "opacity 0.45s ease", position: "fixed", inset: 0, zIndex: 8888, background: "var(--bg)", pointerEvents: "none", opacity: 0 }}
    />
  );
}
