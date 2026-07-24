"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DashboardHero() {
  return (
    <div className="w-full h-full p-8 md:p-16 flex flex-col justify-between relative z-10">
      {/* Top Left Status */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-3 h-3 rounded-full bg-tactical-green animate-pulse shadow-[0_0_10px_#00ff66]"></div>
        <span className="font-plex text-xs uppercase tracking-widest text-tactical-green/70">DATABASE CONNECTED</span>
      </div>

      {/* Main Title Area */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl flex-1 flex flex-col justify-center"
      >
        <h1 className="text-5xl md:text-[5rem] leading-none font-rajdhani font-bold text-gray-200 mb-6 tracking-tighter uppercase text-shadow-glow">
          <span className="text-white font-normal block mb-2 font-share tracking-wider text-4xl">AGENT:</span>
          <span className="text-tactical-green">JAYABRATA CHAKRABORTY</span>
        </h1>
        
        <div className="inline-block bg-[#050505]/80 border-l-4 border-tactical-green px-4 py-2 mb-8 w-max">
          <h2 className="text-xl text-tactical-green font-share uppercase tracking-widest font-bold">
            PROJECT MANAGER <span className="text-gray-500 mx-2">|</span> 15+ YEARS EXPERIENCE
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 font-plex text-sm text-gray-300 uppercase tracking-wider mb-12 font-bold">
          <span>GENAI</span>
          <span className="text-tactical-green text-xs mt-1">◆</span>
          <span>QA LEADERSHIP</span>
          <span className="text-tactical-green text-xs mt-1">◆</span>
          <span>AUTOMATION</span>
          <span className="text-tactical-green text-xs mt-1">◆</span>
          <span>PROJECT MANAGEMENT</span>
        </div>

        <Link href="/mission-briefing" className="group inline-block w-max relative px-8 py-3 border border-tactical-green text-tactical-green font-orbitron font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:bg-tactical-green hover:text-black mb-16 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
          <span className="relative z-10 flex items-center gap-3">
            <span className="group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
            START MISSION
          </span>
          <div className="absolute inset-0 bg-tactical-green/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
        </Link>
      </motion.div>

      {/* Bottom Area: Quote & Radar */}
      <div className="flex justify-between items-end w-full">
        {/* Quote Block with Target Brackets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-4 max-w-lg"
        >
          {/* Target Corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tactical-green"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tactical-green"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tactical-green"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tactical-green"></div>
          
          <p className="font-plex text-sm text-tactical-green-pale leading-relaxed tracking-wider">
            I don&apos;t just test software,<br/>
            I ensure quality, efficiency<br/>
            and impact at scale.
          </p>
        </motion.div>

        {/* Radar Map */}
        <div className="w-24 h-24 rounded-full border border-tactical-green/40 relative overflow-hidden flex items-center justify-center opacity-70">
          <div className="w-full h-[1px] bg-tactical-green/30 absolute top-1/2"></div>
          <div className="h-full w-[1px] bg-tactical-green/30 absolute left-1/2"></div>
          <div className="absolute inset-0 rounded-full border border-tactical-green/20 scale-50"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,255,102,0)_0%,rgba(0,255,102,0.1)_80%,rgba(0,255,102,0.8)_100%)] rounded-full animate-[spin_3s_linear_infinite]"></div>
          {/* Blips */}
          <div className="w-1.5 h-1.5 bg-tactical-green rounded-full shadow-[0_0_8px_#00ff66] absolute top-1/3 left-2/3 animate-pulse"></div>
          <div className="w-1 h-1 bg-tactical-green/50 rounded-full absolute bottom-1/3 left-1/4"></div>
        </div>
      </div>
    </div>
  );
}
