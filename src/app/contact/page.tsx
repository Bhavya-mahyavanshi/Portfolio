"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROFILE } from "@/lib/data";
import { Send, CheckCircle } from "lucide-react";

type FormState = { name: string; email: string; subject: string; message: string };

const CONTACT_CARDS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, symbol: "@", color: "#C44B2B" },
  { label: "LinkedIn", value: "bhavyamahyavanshi", href: PROFILE.linkedin, symbol: "in", color: "#4A6B8A" },
  { label: "GitHub", value: "Bhavya-mahyavanshi", href: PROFILE.github, symbol: "⌘", color: "#B8953A" },
  { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}`, symbol: "✦", color: "#4A6741" },
];

export default function ContactPage() {
  useScrollReveal();

  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — in production, wire to API route
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div data-section="painting" className="page-enter min-h-screen"
      style={{ background:"radial-gradient(ellipse at 50% 80%, rgba(196,75,43,0.07) 0%,transparent 55%), #0A0603" }}>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/45 mb-4 sr">
            The Studio is Open
          </p>
          <h1 className="font-display font-black leading-[0.92] text-cream-DEFAULT sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            LET&apos;S CREATE
          </h1>
          <h1 className="font-display font-black italic leading-[0.92] text-paint-red sr"
            style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
            TOGETHER.
          </h1>
          <p className="font-body italic text-cream-muted/50 mt-4 max-w-md sr" style={{ fontSize:"1.1rem" }}>
            Open to internships, part-time, and full-time backend engineering roles. Based in Scarborough, ON — available remotely.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CONTACT_CARDS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card-parchment sr group p-5 block"
              style={{ transitionDelay:`${i*70}ms` }}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center font-mono text-xs mb-3 border"
                style={{ background:`${c.color}15`, borderColor:`${c.color}30`, color:c.color }}>
                {c.symbol}
              </div>
              <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/38 mb-1">{c.label}</p>
              <p className="font-body text-xs text-cream-muted/55 group-hover:text-cream-muted/90 transition-colors break-all leading-relaxed">
                {c.value}
              </p>
              <div className="mt-3 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background:`linear-gradient(90deg,${c.color}50,transparent)` }} />
            </a>
          ))}
        </div>

        <div className="divider-h mb-16" />

        {/* Contact form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 sr">
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-cream-muted/40 mb-7">
              Send a Message
            </p>

            {submitted ? (
              <div className="card-parchment p-10 text-center">
                <CheckCircle className="mx-auto mb-5 text-paint-sage" size={40} />
                <h3 className="font-display text-2xl font-black text-cream-DEFAULT mb-3">Message received!</h3>
                <p className="font-body text-cream-muted/60 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", subject:"", message:"" }); }}
                  className="btn-ghost"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/40 block mb-2">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent border border-cream-muted/12 rounded px-4 py-3 font-body text-sm text-cream-DEFAULT/80 placeholder:text-cream-muted/25 focus:outline-none focus:border-cream-muted/35 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/40 block mb-2">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border border-cream-muted/12 rounded px-4 py-3 font-body text-sm text-cream-DEFAULT/80 placeholder:text-cream-muted/25 focus:outline-none focus:border-cream-muted/35 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/40 block mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1A0F0A] border border-cream-muted/12 rounded px-4 py-3 font-ui text-xs text-cream-DEFAULT/70 focus:outline-none focus:border-cream-muted/35 transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="parttime">Part-time Role</option>
                    <option value="fulltime">Full-time Position</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Just saying hi 👋</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/40 block mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity, the project, or just say hello..."
                    className="w-full bg-transparent border border-cream-muted/12 rounded px-4 py-3 font-body text-sm text-cream-DEFAULT/80 placeholder:text-cream-muted/25 focus:outline-none focus:border-cream-muted/35 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent flex items-center gap-2 px-7 py-3.5 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border border-cream-DEFAULT/40 border-t-cream-DEFAULT rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-5 sr from-right">
            <div className="card-parchment p-6">
              <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/38 mb-4">Status</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-paint-sage animate-pulse" />
                <span className="font-ui text-xs text-cream-DEFAULT/70">Available for opportunities</span>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-paint-sage text-xs">✓</span>
                  <span className="font-body text-xs text-cream-muted/55">Internship / Co-op</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-paint-sage text-xs">✓</span>
                  <span className="font-body text-xs text-cream-muted/55">Part-time backend roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-paint-sage text-xs">✓</span>
                  <span className="font-body text-xs text-cream-muted/55">Remote &amp; hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-paint-sage text-xs">✓</span>
                  <span className="font-body text-xs text-cream-muted/55">Open source collaboration</span>
                </div>
              </div>
            </div>

            <div className="card-parchment p-6">
              <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/38 mb-4">Location</p>
              <p className="font-display text-base text-cream-DEFAULT mb-1">Scarborough, ON</p>
              <p className="font-body text-xs text-cream-muted/50">Canada · UTC -5 (EST)</p>
              <p className="font-body text-xs text-cream-muted/40 mt-3">Typically responds within 24 hours.</p>
            </div>

            <div className="card-parchment p-6">
              <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/38 mb-4">Quick Links</p>
              <div className="space-y-2">
                <Link href="/projects" className="font-ui text-xs text-cream-muted/55 hover:text-cream-DEFAULT transition-colors flex items-center gap-2 ink-line">
                  <span className="text-paint-red text-[10px]">▸</span> View Projects
                </Link>
                <Link href="/skills" className="font-ui text-xs text-cream-muted/55 hover:text-cream-DEFAULT transition-colors flex items-center gap-2 ink-line">
                  <span className="text-paint-gold text-[10px]">▸</span> View Skills
                </Link>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
                  className="font-ui text-xs text-cream-muted/55 hover:text-cream-DEFAULT transition-colors flex items-center gap-2 ink-line">
                  <span className="text-paint-blue text-[10px]">▸</span> GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 divider-h" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sr">
          <p className="font-display italic text-cream-muted/25 text-sm">Bhavya Mahyavanshi</p>
          <p className="font-ui text-[9px] tracking-widest uppercase text-cream-muted/18">Backend Developer · Scarborough, ON · 2025</p>
          <p className="font-mono text-[9px] text-cream-muted/18">Crafted with code &amp; canvas</p>
        </div>
      </div>
    </div>
  );
}
