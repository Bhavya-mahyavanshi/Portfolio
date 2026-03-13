"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { HOBBIES } from "@/lib/data";

export default function HobbiesPage() {
  const [activeHobby, setActiveHobby] = useState(HOBBIES[0].id);
  useScrollReveal([activeHobby]);

  const current = HOBBIES.find(h => h.id === activeHobby) ?? HOBBIES[0];

  return (
    <div data-section="hobbies" className="page-enter min-h-screen">

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-4 sr">
            Beyond the Code
          </p>
          <h1 className="font-display font-black leading-[0.92] text-cream-DEFAULT sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            THE HUMAN
          </h1>
          <h1 className="font-display font-black italic leading-[0.92] text-paint-blue sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            BEHIND THE TERMINAL.
          </h1>
          <p className="font-body italic text-cream-muted/50 mt-5 max-w-xl sr" style={{ fontSize:"1.1rem" }}>
            A developer is not just their stack. Here&apos;s what shapes the way I think, create, and build.
          </p>
        </div>

        {/* Hobby selector + detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">

          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3 flex-wrap">
            {HOBBIES.map(h => (
              <button
                key={h.id}
                onClick={() => setActiveHobby(h.id)}
                className="card-parchment text-left p-5 flex items-center gap-4 transition-all duration-300 group w-full"
                style={{
                  borderColor: activeHobby === h.id ? `${h.color}55` : "",
                  background: activeHobby === h.id
                    ? `linear-gradient(135deg,${h.color}12,#1C1208)`
                    : "",
                }}
              >
                <span className="text-2xl shrink-0">{h.icon}</span>
                <div className="text-left">
                  <p className="font-ui text-[9px] tracking-widest uppercase mb-0.5"
                    style={{ color:`${h.color}99` }}>
                    {h.subtitle}
                  </p>
                  <h3 className="font-display text-base font-bold text-cream-DEFAULT/80 group-hover:text-cream-DEFAULT transition-colors">
                    {h.title}
                  </h3>
                </div>
                {activeHobby === h.id && (
                  <span className="ml-auto font-mono text-xs shrink-0" style={{ color: h.color }}>→</span>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <div
              key={current.id}
              className="card-parchment p-8 h-full"
              style={{ borderColor:`${current.color}30` }}
            >
              <div className="h-0.5 w-full mb-8 rounded-full"
                style={{ background:`linear-gradient(90deg,${current.color},transparent)` }} />

              <div className="flex items-start gap-4 mb-7">
                <span className="text-4xl">{current.icon}</span>
                <div>
                  <p className="font-ui text-[9px] tracking-widest uppercase mb-1"
                    style={{ color:`${current.color}88` }}>
                    {current.subtitle}
                  </p>
                  <h2 className="font-display text-3xl font-black text-cream-DEFAULT">{current.title}</h2>
                </div>
              </div>

              <p className="font-body text-cream-muted/75 leading-[1.85] mb-7" style={{ fontSize:"1.05rem" }}>
                {current.description}
              </p>

              {/* The "connection to code" callout */}
              <div className="rounded border-l-2 pl-5 py-4"
                style={{ borderColor: current.color, background:`${current.color}08` }}>
                <p className="font-ui text-[9px] tracking-widest uppercase mb-2"
                  style={{ color:`${current.color}88` }}>
                  How it shapes my code
                </p>
                <p className="font-body italic text-cream-muted/70 leading-relaxed">
                  &ldquo;{current.connection}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal manifesto section */}
        <div className="divider-h mb-16" />

        <div className="max-w-3xl mx-auto text-center sr">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/38 mb-6">
            Personal Manifesto
          </p>
          <h2 className="font-display font-black text-cream-DEFAULT mb-6"
            style={{ fontSize:"clamp(1.8rem,3.5vw,3rem)", lineHeight:"1.15" }}>
            Good code, like good art, has <span className="italic text-paint-red">intention.</span>
          </h2>
          <p className="font-body text-cream-muted/60 leading-[1.9]" style={{ fontSize:"1.05rem" }}>
            I got into programming the same way I got into painting — by wanting to make something that didn&apos;t exist before.
            The tools are different, the canvas is a terminal, but the drive is identical. I believe the best engineers are
            the ones who never stop being curious, never stop making things, and never stop asking &ldquo;what if?&rdquo;
          </p>
        </div>

        {/* Fun facts grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sr">
          {[
            { icon:"☕", fact:"Coffee or Tea?", answer:"Tea. Always." },
            { icon:"🌙", fact:"Peak coding hours", answer:"10pm – 2am" },
            { icon:"🎵", fact:"Coding playlist", answer:"Lo-fi & Jazz" },
            { icon:"📖", fact:"Current read", answer:"Clean Architecture" },
          ].map(f => (
            <div key={f.fact} className="card-parchment p-5 text-center group">
              <div className="text-2xl mb-3">{f.icon}</div>
              <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/35 mb-1">{f.fact}</p>
              <p className="font-display text-sm font-bold text-cream-DEFAULT/75 group-hover:text-cream-DEFAULT transition-colors">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
