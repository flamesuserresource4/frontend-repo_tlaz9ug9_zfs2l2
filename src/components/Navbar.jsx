import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Configurator", href: "#config" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="backdrop-blur-xl bg-white/10 border border-white/15 shadow-2xl rounded-full px-6 py-3 flex items-center gap-6 text-sm text-white">
        <a href="#top" className="font-semibold tracking-wide">SimAssist</a>
        <div className="h-5 w-px bg-white/20" />
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <motion.a
          href="#config"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-neutral-900 font-semibold px-4 py-2 shadow-lg"
        >
          Launch Simulation
        </motion.a>
      </nav>
    </div>
  );
}
