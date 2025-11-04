import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Feature({ title, subtitle, gradient, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className={`pointer-events-none absolute -inset-24 bg-gradient-to-br ${gradient} opacity-20 blur-3xl`} />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 mt-1">{subtitle}</p>
        <div className="mt-4">{children}</div>
      </div>
    </motion.div>
  );
}

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.12)_0%,rgba(26,31,58,0)_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI-Powered Features</h2>
          <p className="mt-2 text-white/70">Premium animations and purposeful interactions that showcase real capability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            title="LLM Agents Analyze"
            subtitle="Real-time insights from operational data"
            gradient="from-cyan-500 to-fuchsia-500"
          >
            <div className="h-40 relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400/20 to-purple-400/20" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-cyan-300"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "-60px 0px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8 + i * 0.2, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </div>
          </Feature>

          <Feature
            title="Real-Time Simulation"
            subtitle="3D + 2D views with animated logistics"
            gradient="from-orange-400 to-amber-500"
          >
            <div className="h-40 grid grid-cols-2 gap-3">
              <div className="relative rounded-lg border border-white/10 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.06) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.06) 75%, transparent 75%, transparent)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <motion.div className="absolute bottom-3 left-3 w-7 h-3 bg-orange-400 rounded-sm" animate={{ x: [0, 120, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
                <motion.div className="absolute top-3 right-3 w-6 h-6 border-2 border-cyan-400" animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 3 }} />
              </div>
              <div className="relative rounded-lg border border-white/10 p-3">
                <div className="grid grid-cols-4 items-end gap-1 h-full">
                  {[6, 9, 4, 11].map((h, i) => (
                    <motion.div key={i} className="bg-cyan-400/70" initial={{ height: 0 }} animate={{ height: h * 6 }} transition={{ duration: 1.2, delay: i * 0.1 }} />
                  ))}
                </div>
              </div>
            </div>
          </Feature>

          <Feature
            title="Optimization Recommendations"
            subtitle="Before/After savings visualized"
            gradient="from-lime-400 to-emerald-500"
          >
            <div className="h-40 relative">
              <div className="absolute inset-0 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 p-3">
                  <motion.div className="h-2 rounded bg-white/20 w-2/3 mb-2" />
                  <motion.div className="h-2 rounded bg-white/20 w-1/2 mb-2" />
                  <motion.div className="h-2 rounded bg-white/20 w-4/5" />
                </div>
                <div className="rounded-lg border border-white/10 p-3">
                  <motion.div className="h-2 rounded bg-white/20 w-4/5 mb-2" />
                  <motion.div className="h-2 rounded bg-white/20 w-2/3 mb-2" />
                  <motion.div className="h-2 rounded bg-white/20 w-11/12" />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 px-3 py-1 text-neutral-900 text-xs font-semibold shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Avg. 22% cost reduction
              </motion.div>
            </div>
          </Feature>
        </div>
      </div>
    </section>
  );
}
