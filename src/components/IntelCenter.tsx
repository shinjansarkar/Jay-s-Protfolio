"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  { name: "MASTERCLASS SOFTWARE TESTING WITH JIRA & AGILE", org: "QA LEAD", image: "/igi_assets/medal.png" },
  { name: "GEMINI ENTERPRISE DEPLOYMENT SPECIALIST", org: "GOOGLE CLOUD", image: "/igi_assets/medal.png" },
  { name: "AMCAT CERTIFIED SOFTWARE ENGINEER IT SERVICES", org: "ASPIRING MINDS", image: "/igi_assets/medal.png" },
  { name: "JENKINS THE COMPLETE TUTORIAL", org: "UDEMY", image: "/igi_assets/medal.png" },
  { name: "GOOGLE CLOUD GENAI CERTIFIED PROFESSIONAL", org: "GOOGLE CLOUD", image: "/igi_assets/medal.png" },
];

export default function IntelCenter() {
  return (
    <div className="w-full h-full p-4 md:p-8">
      {/* Top Left Header inside Content */}
      <div className="mb-8 z-20">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-2xl font-orbitron text-tactical-green font-bold uppercase tracking-widest leading-none drop-shadow-[0_0_10px_rgba(0,255,102,0.8)]">
              INTEL CENTER
            </h2>
            <span className="text-gray-400 font-plex text-[10px] uppercase tracking-widest">
              {"// CERTIFICATIONS"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full max-w-7xl mx-auto overflow-x-auto custom-scrollbar pb-4">
        <div className="flex flex-nowrap md:flex-wrap justify-center gap-4 min-w-max md:min-w-0 px-2">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative w-48 h-72 bg-[#020202] shrink-0 border border-black shadow-[0_10px_30px_rgba(0,0,0,1)] flex flex-col items-center p-2 group"
            >
              {/* Wooden/Metal Frame borders (Thick outer frame) */}
              <div className="absolute inset-0 border-4 border-[#151515] shadow-[inset_0_0_10px_rgba(0,0,0,1)] pointer-events-none z-20"></div>
              <div className="absolute inset-1 border-[3px] border-[#222] pointer-events-none z-20"></div>
              <div className="absolute inset-2 border border-black shadow-[inset_0_0_20px_rgba(0,0,0,1)] pointer-events-none z-20"></div>
              
              {/* Inner glass reflection */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-2 left-2 right-2 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-30 rounded-t-sm"></div>

              {/* Glowing Top Light (Spotlight effect) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-yellow-100/80 rounded-full blur-[2px] z-20"></div>
              <div className="absolute top-2 left-0 right-0 h-40 bg-gradient-to-b from-yellow-500/20 via-yellow-600/5 to-transparent z-10 pointer-events-none mix-blend-screen"></div>
              
              {/* Display Case Backing */}
              <div className="absolute inset-2 bg-[#0a0a0a] z-0 shadow-[inset_0_0_50px_rgba(0,0,0,1)]"></div>
              
              {/* Medal Container */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-6 w-full">
                <div className="relative w-32 h-32 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
                  <Image 
                    src={cert.image} 
                    alt={cert.name} 
                    fill 
                    className="object-contain filter saturate-[1.2] contrast-[1.2]"
                  />
                </div>
              </div>

              {/* Text Plate Base */}
              <div className="relative z-20 w-11/12 h-16 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-t border-[#333] border-x border-[#111] border-b-2 border-black rounded-sm mt-auto mb-2 flex items-center justify-center p-2 shadow-[0_-5px_15px_rgba(0,0,0,0.8)]">
                {/* Plate Screws */}
                <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#444] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#444] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-[#444] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-[#444] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
                
                <h4 className="font-share font-bold text-[9px] text-gray-400 text-center leading-tight uppercase tracking-wider h-full flex items-center justify-center px-2 text-shadow-sm">
                  {cert.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center w-full max-w-7xl mx-auto z-20 relative">
        <button className="text-tactical-green font-orbitron font-bold text-sm tracking-[0.2em] hover:text-white transition-colors uppercase border border-tactical-green/30 px-6 py-2 bg-black/50 hover:bg-tactical-green/20 hover:border-tactical-green hover:shadow-[0_0_15px_rgba(0,255,102,0.5)]">
          &gt; VIEW ALL CERTIFICATIONS
        </button>
      </div>
    </div>
  );
}
