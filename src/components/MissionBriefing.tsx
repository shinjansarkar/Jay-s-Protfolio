"use client";

import { motion } from "framer-motion";

export default function MissionBriefing() {
  return (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative overflow-hidden">

      {/* Top Left Header inside Content */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-xl font-orbitron text-tactical-green font-bold uppercase tracking-widest leading-none drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">
              MISSION BRIEFING
            </h2>
            <span className="text-gray-400 font-plex text-[10px] uppercase tracking-widest">
              {"// AGENT DOSSIER"}
            </span>
          </div>
        </div>
      </div>

      {/* The Open Notebook Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl h-[80vh] min-h-[600px] bg-[#111] p-3 md:p-5 rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.95)] border border-[#2a2a2a] flex"
        style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxMTEiPjwvcmVjdD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyIj48L3JlY3Q+PC9zdmc+')" }}
      >
        {/* Metal Corner Protectors */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 rounded-tl-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-600 rounded-bl-lg shadow-[inset_2px_-2px_4px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-600 rounded-tr-lg shadow-[inset_-2px_2px_4px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 rounded-br-lg shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5)]"></div>

        {/* Paper Pages Area */}
        <div className="relative flex-1 flex shadow-2xl ring-1 ring-black/60">

          {/* Left Page */}
          <div
            className="flex-1 relative bg-old-paper overflow-hidden p-8 lg:p-12 shadow-[inset_-15px_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Paperclip */}
            <div className="absolute -top-2 left-12 w-6 h-20 border-[3px] border-gray-300 rounded-full bg-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.8)] z-20 transform -rotate-6"></div>
            <div className="absolute top-3 left-[51px] w-3 h-12 border-[2px] border-gray-400 rounded-full bg-transparent shadow-sm z-30 transform -rotate-6"></div>

            {/* Photo */}
            <div className="w-full max-w-[250px] aspect-[3/4] bg-[#111] border-2 border-[#111] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden mb-8 transform -rotate-1">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125 saturate-50"
                style={{ backgroundImage: "url('/profile.png')" }}
              ></div>
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs text-center p-4 bg-gray-800/80 -z-10">
                NO IMAGE FOUND <br /> (PLACE /profile.png IN PUBLIC)
              </div>
            </div>

            {/* Mission Objectives */}
            <div>
              <p className="text-black/70 text-sm font-bold uppercase tracking-widest mb-4">MISSION OBJECTIVES:</p>
              <ul className="space-y-3 font-share font-bold text-[13px] text-black/90 tracking-wide">
                <li className="flex gap-2"><span>&gt;</span> BUILD SCALABLE QA SYSTEMS</li>
                <li className="flex gap-2"><span>&gt;</span> LEAD AUTOMATION INITIATIVES</li>
                <li className="flex gap-2"><span>&gt;</span> IMPLEMENT GENAI SOLUTIONS</li>
                <li className="flex gap-2"><span>&gt;</span> DELIVER HIGH QUALITY SOFTWARE</li>
                <li className="flex gap-2"><span>&gt;</span> MENTOR ENGINEERING TEAMS</li>
              </ul>
            </div>
          </div>

          {/* Center Spine Crease */}
          <div className="w-6 shrink-0 bg-gradient-to-r from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.4)] z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] mix-blend-multiply"></div>

          {/* Right Page */}
          <div
            className="flex-1 relative bg-old-paper overflow-hidden p-8 lg:p-12 pl-16 shadow-[inset_15px_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="border-b border-black/20 pb-4 mb-6 relative">
              <h3 className="text-3xl font-share font-bold uppercase tracking-widest text-black/90">
                MISSION BRIEFING
              </h3>
              <span className="text-black/60 text-[11px] uppercase tracking-[0.2em] font-bold">
              {"// AGENT DOSSIER"}
              </span>
            </div>

            {/* Top Secret Stamp (Moved to middle right) */}
            <div
              className="absolute top-[40%] right-12 border-[4px] border-red-800/80 text-red-800/80 text-4xl font-bold px-4 py-1 uppercase transform rotate-[-5deg] shadow-sm mix-blend-multiply z-30"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              TOP SECRET
            </div>

            {/* Details */}
            <div className="space-y-6 text-[13px] font-share uppercase font-bold tracking-widest text-black/90 max-w-xs relative z-10">
              <div>
                <span className="text-black/60 text-[10px] block mb-1">NAME:</span>
                JAYABRATA CHAKRABORTY
              </div>
              <div>
                <span className="text-black/60 text-[10px] block mb-1">ROLE:</span>
                PROJECT MANAGER
              </div>
              <div>
                <span className="text-black/60 text-[10px] block mb-1">COMPANY:</span>
                COGNIZANT
              </div>
              <div>
                <span className="text-black/60 text-[10px] block mb-1">EXPERIENCE:</span>
                15+ YEARS
              </div>
            </div>

            {/* Eagle SVG (Large, faded, background) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.1] pointer-events-none flex items-center justify-center mix-blend-multiply">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                {/* Approximated Eagle/Shield Emblem */}
                <path d="M50 10 L60 25 L85 20 L75 40 L95 45 L70 60 L80 85 L50 70 L20 85 L30 60 L5 45 L25 40 L15 20 L40 25 Z" />
                <rect x="40" y="30" width="20" height="40" rx="2" fill="none" stroke="black" strokeWidth="4" />
              </svg>
            </div>

            {/* Signature */}
            <div className="absolute bottom-12 right-12 flex justify-end">
              <div className="text-center opacity-80 mix-blend-multiply">
                <div className="font-['Brush_Script_MT',cursive] text-5xl text-black/90 -rotate-6 mb-2">
                  J. Chakraborty
                </div>
                <div className="text-[9px] font-plex uppercase tracking-widest border-t border-black/40 pt-2 text-black/70 font-bold">
                  COMMAND AUTHORITY
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
