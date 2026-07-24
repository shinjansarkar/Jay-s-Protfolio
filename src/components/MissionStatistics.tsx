"use client";

import { motion } from "framer-motion";

export default function MissionStatistics() {
  return (
    <div className="w-full h-full p-4 flex flex-col relative">

      {/* Top Left Header inside Content */}
      <div className="mb-6 z-20">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-xl font-orbitron text-gray-300 font-bold uppercase tracking-widest leading-none text-shadow-glow">
              MISSION STATISTICS
            </h2>
            <span className="text-gray-500 font-plex text-[10px] uppercase tracking-widest">
              {"// PERFORMANCE DASHBOARD"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto flex-1">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 h-full min-h-[300px]">

          {/* Box 1: Experience */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">EXPERIENCE</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">15+</div>
            <div className="font-plex text-xs text-gray-500 uppercase">YEARS</div>
          </motion.div>

          {/* Box 2: Manual Effort Reduction */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">MANUAL EFFORT REDUCTION</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">80%</div>
            <div className="font-plex text-xs text-tactical-green uppercase">EFFICIENCY GAIN</div>
            {/* Background Line Chart SVG */}
            <svg className="absolute bottom-0 w-full h-12 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 30">
              <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,5" fill="none" stroke="#00ff66" strokeWidth="2" />
              <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,5 L100,30 L0,30 Z" fill="rgba(0,255,102,0.1)" />
            </svg>
          </motion.div>

          {/* Box 3: Releases Delivered */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">RELEASES DELIVERED</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">100+</div>
            <div className="font-plex text-xs text-gray-500 uppercase">SUCCESSFUL</div>
          </motion.div>

          {/* Box 4: Teams Collaborated */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">TEAMS COLLABORATED</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">20+</div>
            <div className="font-plex text-xs text-gray-500 uppercase">TEAMS</div>
          </motion.div>

          {/* Box 5: Automation Coverage */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">AUTOMATION COVERAGE</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">85%</div>
            {/* Background Bar Chart SVG */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
            <div className="absolute bottom-2 flex items-end gap-1 w-full px-4 h-12 opacity-30">
              <div className="w-full bg-tactical-green h-[20%]"></div>
              <div className="w-full bg-tactical-green h-[40%]"></div>
              <div className="w-full bg-tactical-green h-[60%]"></div>
              <div className="w-full bg-tactical-green h-[45%]"></div>
              <div className="w-full bg-tactical-green h-[85%]"></div>
            </div>
          </motion.div>

          {/* Box 6: Test Cases Automated */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">TEST CASES AUTOMATED</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">10K+</div>
            <div className="font-plex text-xs text-gray-500 uppercase">CASES</div>
          </motion.div>

          {/* Box 7: Bugs Prevented */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">BUGS PREVENTED</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">95%</div>
            <div className="font-plex text-xs text-gray-500 uppercase">BEFORE PRODUCTION</div>
          </motion.div>

          {/* Box 8: Mission Success Rate */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="border border-tactical-green/30 bg-[#050505]/90 p-4 flex flex-col items-center justify-center text-center">
            <h4 className="font-share text-[10px] text-gray-400 uppercase tracking-widest mb-4">MISSION SUCCESS RATE</h4>
            <div className="font-rajdhani text-5xl font-bold text-tactical-green mb-1">100%</div>
          </motion.div>

        </div>

        <div className="mt-4 flex justify-center">
          <button className="text-tactical-green font-share font-bold text-xs tracking-widest hover:text-white transition-colors uppercase">
            &gt; FULL REPORT
          </button>
        </div>
      </div>
    </div>
  );
}
