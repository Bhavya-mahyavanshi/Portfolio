"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SECTION_COLORS: Record<string, string> = {
  painting: "rgba(196,75,43,0.55)",
  reading: "rgba(184,149,58,0.55)",
  travelling: "rgba(74,103,65,0.55)",
  hobbies: "rgba(74,107,138,0.55)",
};

const PATH_SECTION: Record<string, string> = {
  "/": "painting",
  "/about": "reading",
  "/projects": "travelling",
  "/skills": "reading",
  "/hobbies": "hobbies",
  "/contact": "painting",
};

export default function CursorSystem() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      // Section detection
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const sec = (el?.closest("[data-section]") as HTMLElement)?.dataset.section ?? "";
      ring.className = `cursor-ring ${sec}`;

      // Trail
      if (Math.random() > 0.65) spawnTrail(e.clientX, e.clientY, sec);
    };

    const onDown = () => dot.classList.add("clicked");
    const onUp = () => dot.classList.remove("clicked");

    const onEnterLink = () => ring.classList.add("hovering");
    const onLeaveLink = () => ring.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const attachHover = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };
    attachHover();
    const obs = new MutationObserver(attachHover);
    obs.observe(document.body, { childList: true, subtree: true });

    let raf: number;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.115;
      ry.current += (my.current - ry.current) * 0.115;
      ring.style.left = `${rx.current}px`;
      ring.style.top = `${ry.current}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  useEffect(() => {
    // Update ring default color per route
    const ring = ringRef.current;
    if (!ring) return;
    const base = PATH_SECTION[pathname] ?? "";
    ring.className = `cursor-ring ${base}`;
  }, [pathname]);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}

function spawnTrail(x: number, y: number, section: string) {
  const t = document.createElement("div");
  t.className = "cursor-trail";
  const color = SECTION_COLORS[section] ?? "rgba(245,237,216,0.18)";
  const size = section ? 5 : 3;
  t.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${color};opacity:0;transition:opacity 0.5s ease,transform 0.6s ease;`;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = "1";
    setTimeout(() => {
      t.style.opacity = "0";
      t.style.transform = "translate(-50%,-50%) scale(0)";
      setTimeout(() => t.remove(), 600);
    }, 50);
  });
}
