import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import SimulationConfigurator from "./components/SimulationConfigurator";
import FeaturesShowcase from "./components/FeaturesShowcase";

function FooterCTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.12)_0%,rgba(26,31,58,0)_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to supercharge your port operations?</h2>
          <p className="mt-2 text-white/70">Request access to the private beta and get a tailored demo.</p>
          <form
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch shortly.");
            }}
          >
            <input
              required
              type="email"
              placeholder="Work email"
              className="col-span-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-neutral-900 font-semibold px-4 py-3 shadow-lg"
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0a0e27,#1a1f3a)] text-white">
      <Navbar />
      <Hero3D />
      <FeaturesShowcase />
      <SimulationConfigurator />
      <FooterCTA />
      <footer className="border-t border-white/10 py-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} SimAssist. All rights reserved.</footer>
    </div>
  );
}
