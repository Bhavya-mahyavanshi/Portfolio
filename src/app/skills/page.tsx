"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SKILLS } from "@/lib/data";

export default function SkillsPage() {
  useScrollReveal();

  const volumes = Object.values(SKILLS);

  return (
    <div data-section="reading" className="page-enter min-h-screen">
      {/* Line paper background */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(212,184,150,0.018) 28px,rgba(212,184,150,0.018) 29px)",
          opacity:1
        }} />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-20">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-4 sr">Knowledge &amp; Reading</p>
          <h1 className="font-display font-black leading-[0.92] text-cream-DEFAULT sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            BUILDING LOGIC
          </h1>
          <h1 className="font-display font-black italic leading-[0.92] text-paint-gold sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            LIKE CHAPTERS.
          </h1>
          <p className="font-body italic text-cream-muted/50 mt-4 sr" style={{ fontSize:"1.1rem" }}>
            Every system tells a story. Here are the volumes I&apos;ve mastered.
          </p>
        </div>

        {/* 4 volumes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {volumes.map((vol, i) => (
            <div
              key={vol.label}
              className="card-parchment p-8 sr"
              style={{ transitionDelay:`${i*100}ms` }}
            >
              {/* Volume top line */}
              <div className="h-0.5 w-full mb-6 rounded-full" style={{ background: vol.color }} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{vol.icon}</span>
                <div>
                  <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/35">
                    {vol.label.split("—")[0].trim()}
                  </p>
                  <h3 className="font-display text-lg font-bold text-cream-DEFAULT leading-tight">
                    {vol.label.split("—")[1]?.trim() ?? vol.label}
                  </h3>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {vol.items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-ui text-xs text-cream-DEFAULT/70">{skill.name}</span>
                      <span className="font-mono text-[10px] text-cream-muted/38">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width:`${skill.level}%`,
                          background:`linear-gradient(90deg, ${vol.color}, ${vol.color}70)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts cloud */}
        <div className="sr mb-20">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-6">All Concepts</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Object-Oriented Programming","Data Structures","Algorithms",
              "System Design","RESTful APIs","Database Design","JWT Auth",
              "CRUD Operations","Query Optimisation","Agile Methodology",
              "Debugging","Modular Design","Software Architecture",
              "API Integration","Version Control","CI/CD Basics",
            ].map((concept, i) => {
              const colors = ["#C44B2B","#4A6B8A","#B8953A","#4A6741"];
              const c = colors[i % colors.length];
              return (
                <span key={concept} className="tag"
                  style={{ background:`${c}10`, border:`1px solid ${c}22`, color:`${c}cc` }}>
                  {concept}
                </span>
              );
            })}
          </div>
        </div>

        {/* IDE code block — personalised */}
        <div className="sr">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-5">In Code</p>
          <div className="code-block">
            <div className="code-comment mb-1">// bhavya.profile.ts — auto-generated from brain</div>
            <div>
              <span className="code-keyword">const</span>{" "}
              <span className="code-var">developer</span> = {"{"}
            </div>
            <div className="pl-6">
              name: <span className="code-str">"Bhavya Mahyavanshi"</span>,
            </div>
            <div className="pl-6">
              role: <span className="code-str">"Junior Backend Developer"</span>,
            </div>
            <div className="pl-6">
              languages: <span className="code-str">["Java", "Python", "JavaScript", "C++"]</span>,
            </div>
            <div className="pl-6">
              databases: <span className="code-str">["MongoDB", "MySQL", "SQLite", "Redis"]</span>,
            </div>
            <div className="pl-6">
              tools: <span className="code-str">["Node.js", "Express", "Git", "Linux", "Postman"]</span>,
            </div>
            <div className="pl-6">
              softSkills: <span className="code-str">["Problem-solving", "Teamwork", "Communication"]</span>,
            </div>
            <div className="pl-6">
              currentlyLearning: <span className="code-str">"Docker, Kubernetes, System Design"</span>,
            </div>
            <div className="pl-6">
              openTo: <span className="code-str">"Internships + Part-time Backend Roles"</span>,
            </div>
            {"};"}
          </div>
        </div>
      </div>
    </div>
  );
}
