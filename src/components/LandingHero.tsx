"use client";

import { motion } from "framer-motion";

export default function LandingHero() {
  const handleStartMission = () => {
    const briefingSection = document.getElementById("briefing");
    if (briefingSection) {
      briefingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-black/40 backdrop-blur-sm border border-tactical-green/20 rounded-sm relative overflow-hidden">
      {/* Radar Sweep Effect (CSS) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#00ff66_100%)] animate-[spin_4s_linear_infinite]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <p className="text-tactical-green-light font-plex tracking-[0.3em] uppercase text-sm mb-4">
          Operation:
        </p>
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-2 tracking-wider text-shadow-glow">
          JAYABRATA CHAKRABORTY
        </h1>
        <h2 className="text-2xl md:text-3xl text-tactical-green font-share mb-8">
          PROJECT MANAGER
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 font-rajdhani text-lg text-gray-300">
          <span className="px-4 py-1 border border-tactical-green/30 bg-tactical-green/10 rounded-sm">GenAI</span>
          <span className="px-4 py-1 border border-tactical-green/30 bg-tactical-green/10 rounded-sm">QA Leadership</span>
          <span className="px-4 py-1 border border-tactical-green/30 bg-tactical-green/10 rounded-sm">Automation</span>
          <span className="px-4 py-1 border border-tactical-green/30 bg-tactical-green/10 rounded-sm">Project Management</span>
        </div>

        <div className="mb-12">
          <p className="text-gray-500 font-plex uppercase text-sm mb-2">Mission Status</p>
          <div className="inline-block px-6 py-2 bg-tactical-green text-black font-bold font-share animate-pulse">
            ACTIVE
          </div>
        </div>

        <button
          onClick={handleStartMission}
          className="group relative px-8 py-4 bg-transparent border-2 border-tactical-green text-tactical-green font-orbitron font-bold text-xl uppercase tracking-widest overflow-hidden transition-all hover:bg-tactical-green hover:text-black"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="group-hover:translate-x-2 transition-transform">▶</span>
            START MISSION
          </span>
          {/* Glitch hover effect */}
          <div className="absolute inset-0 bg-tactical-green/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
        </button>
      </motion.div>
    </div>
  );
}
