"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROFILE, EDUCATION, EXPERIENCE } from "@/lib/data";

export default function AboutPage() {
  useScrollReveal();

  return (
    <div data-section="reading" className="page-enter min-h-screen">
      {/* Quill decoration */}
      <svg className="fixed top-20 right-10 opacity-[0.055] float-2 pointer-events-none"
        width="80" height="240" viewBox="0 0 80 240" fill="none">
        <path d="M40 230 L40 50 Q60 38 78 5 Q62 38 48 78 Q60 62 74 48 Q55 76 44 118 Q56 102 70 88 Q53 120 43 158 Q55 142 66 126 Q52 162 41 230"
          stroke="#D4B896" strokeWidth="1.2" fill="rgba(212,184,150,0.025)" />
      </svg>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-20">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-4 sr">
            Knowledge &amp; Reading
          </p>
          <h1 className="font-display font-black leading-[0.92] text-cream-DEFAULT sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            MY STORY,
          </h1>
          <h1 className="font-display font-black italic leading-[0.92] text-paint-gold sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            CHAPTER BY CHAPTER.
          </h1>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-3 space-y-5">
            <p className="sr font-body text-cream-muted/80 leading-[1.8]" style={{ fontSize:"1.05rem" }}>
              {PROFILE.bio}
            </p>
            <p className="sr font-body text-cream-muted/65 leading-[1.8]">
              {PROFILE.bioExtra}
            </p>
            <div className="sr flex flex-wrap gap-3 pt-3">
              <Link href="/projects" className="btn-accent">See My Projects</Link>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Stats sidebar */}
          <div className="md:col-span-2 space-y-4 sr">
            {[
              { label:"Languages",       val:"6+",  desc:"Java, Python, JS, C, C++, SQL" },
              { label:"Projects Built",  val:"5+",  desc:"From APIs to desktop apps" },
              { label:"DSA Algorithms",  val:"30+", desc:"Documented open-source" },
              { label:"Currently",       val:"📚",  desc:"Seneca Polytechnic, 2024–2026" },
            ].map(s => (
              <div key={s.label} className="card-parchment p-5">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-display text-3xl font-black text-cream-DEFAULT">{s.val}</span>
                  <span className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/40">{s.label}</span>
                </div>
                <p className="font-body text-xs text-cream-muted/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-h mb-20" />

        {/* Education */}
        <div className="mb-20">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-8 sr">Chapter: Education</p>

          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="card-parchment p-7 sr" style={{ transitionDelay:`${i*100}ms` }}>
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded shrink-0 flex items-center justify-center text-xl"
                    style={{ background:"rgba(184,149,58,0.1)", border:"1px solid rgba(184,149,58,0.2)" }}>
                    🎓
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl text-cream-DEFAULT">{edu.school}</h3>
                      <span className="font-mono text-[9px] text-cream-muted/35 tracking-wider">{edu.period}</span>
                    </div>
                    <p className="font-body text-cream-muted/65 mb-1">{edu.program}</p>
                    <p className="font-mono text-[9px] text-cream-muted/35 mb-4">{edu.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span key={h} className="tag" style={{ background:"rgba(184,149,58,0.07)", border:"1px solid rgba(184,149,58,0.15)", color:"rgba(245,237,216,0.55)" }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-8 sr">Chapter: Experience</p>

          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="card-parchment p-7 sr">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-xl text-cream-DEFAULT">{exp.role}</h3>
                  <p className="font-body text-cream-muted/60">{exp.company} · {exp.location}</p>
                </div>
                <span className="font-mono text-[9px] text-cream-muted/35 tracking-wider px-3 py-1.5 rounded"
                  style={{ border:"1px solid rgba(212,184,150,0.1)" }}>
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="font-body text-sm text-cream-muted/60 flex items-start gap-2">
                    <span className="mt-1 text-paint-red text-xs shrink-0">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Personality / values */}
        <div>
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-8 sr">Chapter: Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon:"🎨", title:"Creative First", body:"I approach every problem as a design challenge. Code is a medium, not just a tool." },
              { icon:"📐", title:"System Thinker", body:"I see the whole architecture before writing a single line. Scalable from day one." },
              { icon:"🌱", title:"Always Learning", body:"Reading, building, breaking things. Curiosity is the engine behind everything I do." },
            ].map((v, i) => (
              <div key={i} className="card-parchment p-6 text-center sr" style={{ transitionDelay:`${i*100}ms` }}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-display text-base text-cream-DEFAULT mb-2">{v.title}</h4>
                <p className="font-body text-sm text-cream-muted/55 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
