import { useEffect, useRef } from "react";

const items = [
  "Python",
  "Three.js",
  "OpenGL",
  "LangChain",
  "Groq",
  "Gemini",
  "Streamlit",
  "Salabim",
];

export default function TechStackOrbit() {
  const containerRef = useRef(null);

  useEffect(() => {
    // nothing needed; CSS handles animation
  }, []);

  return (
    <section id="tech" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.12)_0%,rgba(26,31,58,0)_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technology Stack</h2>
          <p className="mt-2 text-white/70">Floating 3D-like orbit of the platforms that power SimAssist.</p>
        </div>

        <div ref={containerRef} className="relative mx-auto h-80 w-full max-w-2xl">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-6 rounded-full border border-purple-400/20" />
          <div className="absolute inset-12 rounded-full border border-emerald-400/20" />
          {items.map((label, idx) => (
            <span
              key={label}
              className={`absolute select-none rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white shadow-md backdrop-blur-md animate-[orbit_16s_linear_infinite]`}
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${80 + (idx % 3) * 30}px`,
                animationDelay: `${idx * 0.8}s`,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <style>
        {`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(0) rotate(0deg); }
          50% { transform: rotate(180deg) translateX(0) rotate(-180deg); }
          100% { transform: rotate(360deg) translateX(0) rotate(-360deg); }
        }
        `}
      </style>
    </section>
  );
}
