"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "painting", "reading", "travelling"] as const;
type Filter = typeof FILTERS[number];

const FILTER_LABELS: Record<Filter, string> = {
  All: "All Projects",
  painting: "Node.js / APIs",
  reading: "Desktop / Python",
  travelling: "Open Source",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  useScrollReveal([active]);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.theme === active);

  return (
    <div data-section="travelling" className="page-enter min-h-screen">
      {/* Map background hint */}
      <div className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(139,115,85,0.012) 40px,rgba(139,115,85,0.012) 41px),repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(139,115,85,0.012) 40px,rgba(139,115,85,0.012) 41px)"
        }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-4 sr">
            Exploration &amp; Travelling
          </p>
          <h1 className="font-display font-black leading-[0.92] text-cream-DEFAULT sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            CHARTED
          </h1>
          <div className="flex flex-wrap items-baseline gap-4 sr">
            <h1 className="font-display font-black italic leading-[0.92] text-paint-sage"
              style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
              TERRITORIES.
            </h1>
          </div>
          <p className="font-body italic text-cream-muted/50 mt-4 max-w-md sr" style={{ fontSize:"1.1rem" }}>
            Every project is a journey. Here are the destinations I&apos;ve mapped.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12 sr">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-ui text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-300"
              style={{
                border: `1px solid ${active === f ? "rgba(245,237,216,0.4)" : "rgba(245,237,216,0.1)"}`,
                background: active === f ? "rgba(245,237,216,0.08)" : "transparent",
                color: active === f ? "var(--cream)" : "rgba(245,237,216,0.38)",
              }}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj, i) => (
            <div
              key={proj.id}
              id={proj.id}
              className="card-parchment sr group p-7"
              style={{ transitionDelay:`${i*80}ms` }}
            >
              {/* Top accent */}
              <div className="h-0.5 w-full mb-6 rounded-full"
                style={{ background:`linear-gradient(90deg,${proj.color},transparent)` }} />

              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{proj.emoji}</span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-cream-muted/35">{proj.year}</span>
                    <span className="font-ui text-[9px] px-2 py-0.5 rounded"
                      style={{ background:`${proj.color}15`, border:`1px solid ${proj.color}30`, color:proj.color }}>
                      {proj.status}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-cream-DEFAULT leading-tight">{proj.title}</h2>
                  <p className="font-mono text-[10px] text-cream-muted/40 mt-1">{proj.subtitle}</p>
                </div>
              </div>

              <p className="font-body text-sm text-cream-muted/60 leading-relaxed mb-5">{proj.description}</p>

              {/* Detail bullets */}
              <ul className="space-y-2 mb-5">
                {proj.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 font-ui text-xs text-cream-muted/55">
                    <span style={{ color:proj.color }} className="mt-0.5 shrink-0 text-[10px]">▸</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map(t => (
                  <span key={t} className="tag"
                    style={{ background:`${proj.color}15`, border:`1px solid ${proj.color}28`, color:proj.color }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-cream-muted/5">
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="font-ui text-[10px] tracking-wider uppercase text-cream-muted/40 hover:text-cream-muted/80 transition-colors flex items-center gap-1.5">
                  <span className="font-mono text-xs">⌘</span> View on GitHub
                </a>
                <div className="h-px flex-1 mx-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background:`linear-gradient(90deg,transparent,${proj.color}40,transparent)` }} />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-4xl font-black text-cream-muted/20 mb-3">No results</p>
            <p className="font-body text-cream-muted/40">Try selecting a different filter.</p>
          </div>
        )}

        {/* Map-style conclusion */}
        <div className="mt-20 sr">
          <div className="divider-h mb-12" />
          <div className="text-center">
            <p className="font-ui text-[9px] tracking-[0.35em] uppercase text-cream-muted/35 mb-4">More on the horizon</p>
            <h3 className="font-display font-black text-cream-DEFAULT mb-2"
              style={{ fontSize:"clamp(1.5rem,3vw,3rem)" }}>
              The map is still being drawn.
            </h3>
            <p className="font-body italic text-cream-muted/45 text-lg mb-8">
              New projects always in progress. Check GitHub for latest commits.
            </p>
            <a href="https://github.com/Bhavya-mahyavanshi" target="_blank" rel="noopener noreferrer"
              className="btn-accent">
              Follow the Journey ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
