import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background:"#0A0603" }}
    >
      <svg className="mb-8 opacity-10" width="200" height="60" viewBox="0 0 200 60" fill="none">
        <path d="M5 30 Q50 5 100 30 Q150 55 195 20"
          stroke="#C44B2B" strokeWidth="18" strokeLinecap="round" fill="none"
          style={{ strokeDasharray:400, strokeDashoffset:400, animation:"brushIn 2s ease-out 0.2s forwards" }} />
      </svg>
      <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-cream-muted/35 mb-4">Lost on the map</p>
      <h1 className="font-display font-black text-cream-DEFAULT mb-3" style={{ fontSize:"clamp(5rem,12vw,12rem)", lineHeight:1 }}>
        404
      </h1>
      <p className="font-body italic text-cream-muted/55 text-xl mb-10 max-w-sm">
        This territory hasn&apos;t been charted yet.
      </p>
      <Link href="/" className="btn-accent">Return to Studio →</Link>
    </div>
  );
}
