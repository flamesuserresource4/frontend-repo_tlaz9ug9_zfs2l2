import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GridPreview({ x, y }) {
  const cells = useMemo(() => Array.from({ length: x * y }, (_, i) => i), [x, y]);

  // Color coded zones: loading (cyan), storage (purple), transit (orange), green (success)
  const zoneColor = (row, col) => {
    if (row < 1) return "bg-cyan-400/50"; // top band
    if (row >= y - 1) return "bg-orange-400/50"; // bottom band
    if (col < 1) return "bg-purple-500/40"; // left band
    if (col >= x - 1) return "bg-lime-400/40"; // right band
    return "bg-white/5";
  };

  return (
    <div
      className="grid w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5"
      style={{ gridTemplateColumns: `repeat(${x}, minmax(0, 1fr))` }}
    >
      {cells.map((i) => {
        const row = Math.floor(i / x);
        const col = i % x;
        return (
          <motion.div
            key={`${x}-${y}-${i}`}
            layout
            className={`relative ${zoneColor(row, col)} border border-white/10`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function SimulationConfigurator() {
  const [blocksX, setBlocksX] = useState(6);
  const [blocksY, setBlocksY] = useState(4);
  const [trucks, setTrucks] = useState(12);
  const [cranes, setCranes] = useState(4);

  const metrics = useMemo(() => {
    const cells = blocksX * blocksY;
    const utilization = Math.min(100, Math.round((trucks * 1.6 + cranes * 8) / cells * 100));
    const fuel = Math.max(5, Math.round(trucks * 7 + cranes * 4));
    const time = Math.max(3, Math.round(120 - (cranes * 6 + trucks * 1.2)));
    return { cells, utilization, fuel, time };
  }, [blocksX, blocksY, trucks, cranes]);

  return (
    <section id="config" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,217,255,0.15)_0%,rgba(26,31,58,0)_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Interactive 3D Simulation Preview</h2>
          <p className="mt-2 text-white/70">Adjust yard layout and see a live 3D-inspired preview of operational zones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Yard Layout Configurator</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-white/80">Blocks (X)</label>
                  <span className="text-cyan-300 font-mono">{blocksX}</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={12}
                  value={blocksX}
                  onChange={(e) => setBlocksX(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-white/80">Blocks (Y)</label>
                  <span className="text-cyan-300 font-mono">{blocksY}</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={10}
                  value={blocksY}
                  onChange={(e) => setBlocksY(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-white/80">Truck Fleet Size</label>
                  <span className="text-cyan-300 font-mono">{trucks}</span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={40}
                  value={trucks}
                  onChange={(e) => setTrucks(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-white/80">RTG Cranes</label>
                  <span className="text-cyan-300 font-mono">{cranes}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={cranes}
                  onChange={(e) => setCranes(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <MetricCard label="Utilization" value={`${metrics.utilization}%`} accent="from-cyan-400 to-sky-500" />
              <MetricCard label="Cells" value={metrics.cells} accent="from-purple-500 to-fuchsia-500" />
              <MetricCard label="Fuel Index" value={metrics.fuel} accent="from-orange-400 to-amber-500" />
              <MetricCard label="ETA (min)" value={metrics.time} accent="from-lime-400 to-emerald-500" />
            </div>
          </div>

          {/* Live Preview */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Live Yard Preview</h3>
            <AnimatePresence mode="popLayout">
              <motion.div key={`${blocksX}-${blocksY}`} layout>
                <GridPreview x={blocksX} y={blocksY} />
              </motion.div>
            </AnimatePresence>
            <p className="mt-3 text-sm text-white/70">
              Zones: cyan (loading), purple (storage), orange (transit), lime (priority lanes)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, accent }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
      <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />
      <div className="relative">
        <p className="text-white/70 text-sm">{label}</p>
        <p className="text-2xl font-bold text-white font-mono mt-1">{value}</p>
      </div>
    </div>
  );
}
