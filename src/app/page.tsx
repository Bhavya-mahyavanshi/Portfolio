"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROJECTS } from "@/lib/data";

export default function HomePage() {
  useScrollReveal();

  useEffect(() => {
    // Parallax on brush SVGs
    const onScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0");
        el.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featured = PROJECTS.slice(0, 3);

  return (
    <div data-section="painting" className="page-enter">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 15% 50%, rgba(196,75,43,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(74,107,138,0.05) 0%, transparent 50%), #0A0603",
        }}
      >
        {/* Brush stroke SVGs */}
        <svg
          data-parallax="-0.07"
          className="absolute top-16 left-0 pointer-events-none"
          style={{ opacity: 0.055, width: "min(700px,80vw)" }}
          viewBox="0 0 700 180" fill="none"
        >
          <path className="brush-path" d="M10 90 Q150 15 310 90 Q470 165 620 60 Q660 45 695 75"
            stroke="#C44B2B" strokeWidth="44" strokeLinecap="round" fill="none" />
        </svg>
        <svg
          data-parallax="-0.04"
          className="absolute bottom-32 right-0 pointer-events-none"
          style={{ opacity: 0.04, width: "min(500px,60vw)" }}
          viewBox="0 0 500 150" fill="none"
        >
          <path className="brush-path" style={{ animationDelay: "0.9s" }}
            d="M10 80 Q100 15 210 85 Q330 155 460 55"
            stroke="#4A6B8A" strokeWidth="34" strokeLinecap="round" fill="none" />
        </svg>

        {/* Floating paint dots */}
        {[
          { l:"8%",  t:"22%", c:"#C44B2B", s:11, d:"0s"   },
          { l:"92%", t:"36%", c:"#4A6B8A", s:15, d:"1.1s" },
          { l:"16%", t:"74%", c:"#B8953A", s:8,  d:"2.3s" },
          { l:"84%", t:"63%", c:"#4A6741", s:12, d:"0.5s" },
          { l:"50%", t:"8%",  c:"#C44B2B", s:6,  d:"1.7s" },
        ].map((d, i) => (
          <div key={i} className="float-1 absolute rounded-full pointer-events-none"
            style={{ left:d.l, top:d.t, width:d.s, height:d.s, background:d.c, opacity:0.35, animationDelay:d.d, filter:"blur(1px)" }} />
        ))}

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-5"
            style={{ animation: "slideUp 0.7s ease-out 0.1s both" }}>
            Introduction &amp; Painting
          </p>

          <div style={{ animation: "slideUp 0.8s ease-out 0.2s both" }}>
            <h1 className="font-display font-black leading-[0.9] text-cream-DEFAULT"
              style={{ fontSize: "clamp(3.5rem,9vw,9.5rem)" }}>
              CRAFTING
            </h1>
            <h1 className="font-display font-black leading-[0.9] text-cream-DEFAULT"
              style={{ fontSize: "clamp(3.5rem,9vw,9.5rem)" }}>
              SYSTEMS
            </h1>
            <div className="flex flex-wrap items-baseline gap-4">
              <h1 className="font-display font-black leading-[0.9]"
                style={{ fontSize: "clamp(3.5rem,9vw,9.5rem)", color:"transparent", WebkitTextStroke:"2px rgba(245,237,216,0.28)" }}>
                LIKE
              </h1>
              <h1 className="font-display font-black italic leading-[0.9] text-paint-red"
                style={{ fontSize: "clamp(3.5rem,9vw,9.5rem)" }}>
                CANVAS.
              </h1>
            </div>
          </div>

          <p className="font-body italic text-cream-muted/60 mt-7 max-w-md leading-relaxed"
            style={{ fontSize:"1.15rem", animation:"slideUp 0.8s ease-out 0.4s both" }}>
            I am an artist at the core, a backend developer by trade. Every line of code is a brushstroke on the canvas of computation.
          </p>

          <div className="flex flex-wrap gap-4 mt-10"
            style={{ animation:"slideUp 0.8s ease-out 0.55s both" }}>
            <Link href="/projects" className="btn-accent">View Projects →</Link>
            <Link href="/about" className="btn-ghost">About Me</Link>
            <a href="https://github.com/Bhavya-mahyavanshi" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <span className="font-mono text-xs">⌘</span> GitHub
            </a>
          </div>

          {/* Signature line */}
          <div className="flex items-center gap-5 mt-16" style={{ animation:"slideUp 0.8s ease-out 0.8s both" }}>
            <div className="w-10 h-px bg-cream-muted/25" />
            <span className="font-display italic text-cream-muted/40 text-sm">Bhavya Mahyavanshi</span>
            <div className="flex-1 h-px bg-cream-muted/10 max-w-xs" />
            <span className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/25">Scarborough, ON</span>
          </div>
        </div>

        <div className="fade-bottom" />
      </section>

      {/* ── Featured Projects ───────────────────────── */}
      <section className="relative py-24 px-6"
        style={{ background:"radial-gradient(ellipse at 80% 50%, rgba(196,75,43,0.05) 0%,transparent 55%), #0A0603" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 sr">
            <div>
              <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-2">From the Studio</p>
              <h2 className="font-display font-black text-cream-DEFAULT" style={{ fontSize:"clamp(2rem,4vw,3.5rem)" }}>
                Selected Works
              </h2>
            </div>
            <Link href="/projects" className="btn-ghost hidden md:inline-flex">View All →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((proj, i) => (
              <Link
                href={`/projects#${proj.id}`}
                key={proj.id}
                className="card-parchment group block p-6 sr"
                style={{ transitionDelay:`${i*100}ms` }}
              >
                <div className="h-0.5 w-full mb-5 rounded-full opacity-70"
                  style={{ background:`linear-gradient(90deg, ${proj.color}, transparent)` }} />
                <div className="text-2xl mb-3">{proj.emoji}</div>
                <p className="font-mono text-[9px] tracking-widest uppercase text-cream-muted/35 mb-1">{proj.year}</p>
                <h3 className="font-display text-lg text-cream-DEFAULT mb-2 leading-tight">{proj.title}</h3>
                <p className="font-body text-sm text-cream-muted/55 leading-relaxed mb-4 line-clamp-2">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.slice(0,3).map(t => (
                    <span key={t} className="tag" style={{ background:`${proj.color}15`, border:`1px solid ${proj.color}30`, color:proj.color }}>{t}</span>
                  ))}
                </div>
                <div className="mt-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background:`linear-gradient(90deg,${proj.color}55,transparent)` }} />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/projects" className="btn-ghost">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── Quick links section ──────────────────────── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="divider-h mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href:"/about",    label:"Read My Story",  glyph:"◈", color:"#B8953A", sub:"About me" },
              { href:"/skills",   label:"The Volumes",    glyph:"📖", color:"#4A6B8A", sub:"Skills" },
              { href:"/hobbies",  label:"Beyond Code",    glyph:"✦",  color:"#4A6741", sub:"Hobbies" },
              { href:"/contact",  label:"Say Hello",      glyph:"→",  color:"#C44B2B", sub:"Contact" },
            ].map(({ href, label, glyph, color, sub }, i) => (
              <Link
                key={href}
                href={href}
                className="card-parchment sr group p-6 text-center block"
                style={{ transitionDelay:`${i*80}ms` }}
              >
                <div className="text-2xl mb-3">{glyph}</div>
                <p className="font-ui text-[9px] tracking-widest uppercase mb-1" style={{ color:`${color}99` }}>{sub}</p>
                <p className="font-display text-sm font-bold text-cream-DEFAULT/80 group-hover:text-cream-DEFAULT transition-colors">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
