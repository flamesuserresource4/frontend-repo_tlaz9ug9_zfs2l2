import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft radial vignette that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,14,39,0)_0%,rgba(10,14,39,0.2)_45%,rgba(10,14,39,0.65)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-cyan-200 via-white to-purple-200 text-transparent bg-clip-text"
        >
          SimAssist — AI-Powered Port Simulation & Optimization
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          Orchestrate cranes, trucks, and containers with intelligent agents. Visualize operations in 3D and optimize throughput in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#config"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-neutral-900 font-semibold px-6 py-3 shadow-xl">
            Launch Simulation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            View Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
