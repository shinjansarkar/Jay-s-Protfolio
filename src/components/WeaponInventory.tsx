"use client";

import { motion } from "framer-motion";
import { FaJava, FaSyncAlt } from "react-icons/fa";
import { SiPython, SiGithubcopilot, SiJenkins, SiDocker, SiSelenium, SiAppium, SiJira, SiPostman } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";

const weapons = [
  { name: "JAVA", type: "BACKEND LANGUAGE", level: 9, icon: FaJava, color: "text-[#f89820]" },
  { name: "PYTHON", type: "AUTOMATION SCRIPTING", level: 9, icon: SiPython, color: "text-[#3776AB]" },
  { name: "GENAI", type: "AI CORE", level: 10, icon: RiOpenaiFill, color: "text-white" },
  { name: "COPILOT", type: "AI ASSISTANT", level: 8, icon: SiGithubcopilot, color: "text-white" },
  { name: "JENKINS", type: "CI/CD PIPELINE", level: 8, icon: SiJenkins, color: "text-[#D24939]" },
  { name: "DOCKER", type: "CONTAINERIZATION", level: 8, icon: SiDocker, color: "text-[#2496ED]" },
  { name: "RESTSHARP", type: "API AUTOMATION", level: 7, icon: TbBrandCSharp, color: "text-[#239120]" },
  { name: "REST ASSURED", type: "API AUTOMATION", level: 8, icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "SELENIUM", type: "WEB AUTOMATION", level: 8, icon: SiSelenium, color: "text-[#43B02A]" },
  { name: "APPIUM", type: "MOBILE AUTOMATION", level: 7, icon: SiAppium, color: "text-[#662D91]" },
  { name: "JIRA", type: "PROJECT MANAGEMENT", level: 7, icon: SiJira, color: "text-[#0052CC]" },
  { name: "AGILE", type: "METHODOLOGY", level: 8, icon: FaSyncAlt, color: "text-[#00ff66]" },
];

export default function WeaponInventory() {
  return (
    <div className="w-full h-full p-4 md:p-8">
      {/* Top Left Header inside Content */}
      <div className="mb-8 z-20">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-2xl font-orbitron text-tactical-green font-bold uppercase tracking-widest leading-none drop-shadow-[0_0_10px_rgba(0,255,102,0.8)]">
              WEAPON INVENTORY
            </h2>
            <span className="text-gray-400 font-plex text-[10px] uppercase tracking-widest">
              {"// SKILLS ARSENAL"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {weapons.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative bg-[#050806] border border-tactical-green/40 overflow-hidden flex flex-col h-[200px] shadow-[0_0_15px_rgba(0,0,0,0.9)] cursor-pointer"
          >
            {/* Background Icon replacing Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pt-8">
              <w.icon className={`text-[100px] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out ${w.color} filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] grayscale group-hover:grayscale-0`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050806] via-transparent to-transparent pointer-events-none opacity-80"></div>
              {/* Scanline overlay for IGI vibe */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none z-10 opacity-20"></div>
            </div>

            {/* Corner brackets - thicker and more game-like */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-tactical-green/70 z-10 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-tactical-green/70 z-10 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-tactical-green/70 z-10 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-tactical-green/70 z-10 pointer-events-none"></div>

            {/* Header: Title and Type */}
            <div className="relative z-10 p-4 pb-0">
              <h3 className="text-xl font-orbitron font-bold text-tactical-green drop-shadow-[0_0_5px_rgba(0,255,102,1)] tracking-widest uppercase">
                {w.name}
              </h3>
              <p className="font-plex text-[10px] text-gray-300 uppercase tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                {w.type}
              </p>
            </div>

            {/* Center Reticle (shows on hover) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 border border-tactical-green/50 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-tactical-green rounded-full shadow-[0_0_8px_#00ff66]"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-tactical-green/30"></div>
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-tactical-green/30"></div>
              </div>
            </div>

            {/* Bottom Level Indicator */}
            <div className="mt-auto relative z-10 p-4 pt-0">
              <div className="flex items-center gap-3">
                <span className="font-plex text-xs text-tactical-green font-bold uppercase drop-shadow-[0_0_5px_rgba(0,255,102,0.8)]">
                  LVL {w.level}
                </span>
                <div className="flex gap-1 flex-1 h-2">
                  {[...Array(10)].map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-full flex-1 border border-black/50 ${index < w.level ? 'bg-tactical-green shadow-[0_0_8px_rgba(0,255,102,0.9)]' : 'bg-[#0a1a0f] opacity-50'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center w-full max-w-7xl mx-auto z-20 relative">
        <button className="text-tactical-green font-orbitron font-bold text-sm tracking-[0.2em] hover:text-white transition-colors uppercase border border-tactical-green/30 px-6 py-2 bg-black/50 hover:bg-tactical-green/20 hover:border-tactical-green hover:shadow-[0_0_15px_rgba(0,255,102,0.5)]">
          &gt; VIEW ALL SKILLS
        </button>
      </div>
    </div>
  );
}
