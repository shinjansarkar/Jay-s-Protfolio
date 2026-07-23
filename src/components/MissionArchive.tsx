"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { SiPython, SiReact, SiDocker, SiJenkins } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import Image from "next/image";

const projects = [
  {
    id: "P-01",
    name: "PROJECT ALPHA",
    subtitle: "AUTOMATION FRAMEWORK",
    objective: "BUILD ROBUST AUTOMATED TEST CASE GENERATOR",
    problem: "HIGH MANUAL EFFORT IN TEST CASE DESIGN",
    solution: "IMPLEMENTED GENAI TO AUTOMATE TEST CASE CREATION REDUCING 80% MANUAL EFFORT.",
    tech: [
      { icon: RiOpenaiFill, color: "text-black" },
      { icon: SiPython, color: "text-[#3776AB]" },
      { icon: SiReact, color: "text-[#61DAFB]" },
      { icon: SiDocker, color: "text-[#2496ED]" },
    ],
    gallery: ["/igi_assets/robot.png", "/igi_assets/drone.png", "/igi_assets/container.png"]
  },
  {
    id: "P-02",
    name: "PROJECT BETA",
    subtitle: "GENAI TEST GENERATOR",
    objective: "BUILD GENAI POWERED TEST CASE GENERATOR",
    problem: "HIGH MANUAL EFFORT IN TEST CASE DESIGN",
    solution: "IMPLEMENTED GENAI TO AUTOMATE TEST CASE CREATION REDUCING 80% MANUAL EFFORT.",
    tech: [
      { icon: RiOpenaiFill, color: "text-black" },
      { icon: SiPython, color: "text-[#3776AB]" },
      { icon: SiReact, color: "text-[#61DAFB]" },
      { icon: SiDocker, color: "text-[#2496ED]" },
    ],
    gallery: ["/igi_assets/assault_rifle.png", "/igi_assets/drone.png", "/igi_assets/sniper_rifle.png"]
  },
  {
    id: "P-03",
    name: "PROJECT GAMMA",
    subtitle: "API AUTOMATION",
    objective: "SECURE RESTFUL ENDPOINTS",
    problem: "FREQUENT REGRESSIONS IN BACKEND",
    solution: "DEPLOYED CONTINUOUS API TESTING PIPELINE VIA JENKINS.",
    tech: [
      { icon: SiDocker, color: "text-[#2496ED]" },
      { icon: SiJenkins, color: "text-[#D24939]" },
    ],
    gallery: ["/igi_assets/container.png", "/igi_assets/robot.png", "/igi_assets/container.png"]
  },
  {
    id: "P-04",
    name: "PROJECT DELTA",
    subtitle: "QA PROCESS SETUP",
    objective: "STREAMLINE QA LIFECYCLE",
    problem: "NO STANDARDIZED QA PROCESS",
    solution: "ESTABLISHED AGILE QA WORKFLOWS AND CI/CD INTEGRATION.",
    tech: [
      { icon: SiReact, color: "text-[#61DAFB]" },
      { icon: SiJenkins, color: "text-[#D24939]" },
    ],
    gallery: ["/igi_assets/robot.png", "/igi_assets/drone.png", "/igi_assets/robot.png"]
  },
  {
    id: "P-05",
    name: "PROJECT EPSILON",
    subtitle: "PERFORMANCE TESTING",
    objective: "ENSURE SYSTEM STABILITY UNDER LOAD",
    problem: "SYSTEM CRASHES DURING PEAK HOURS",
    solution: "EXECUTED JMETER LOAD TESTS AND OPTIMIZED DATABASE QUERIES.",
    tech: [
      { icon: SiPython, color: "text-[#3776AB]" },
      { icon: SiDocker, color: "text-[#2496ED]" },
    ],
    gallery: ["/igi_assets/container.png", "/igi_assets/assault_rifle.png", "/igi_assets/sniper_rifle.png"]
  },
];

export default function MissionArchive() {
  const [activeProject, setActiveProject] = useState(projects[1]);

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col relative overflow-hidden">

      {/* Header */}
      <div className="mb-8 z-20 shrink-0">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-2xl font-orbitron text-tactical-green font-bold uppercase tracking-widest leading-none drop-shadow-[0_0_10px_rgba(0,255,102,0.8)]">
              MISSION ARCHIVE
            </h2>
            <span className="text-gray-400 font-plex text-[10px] uppercase tracking-widest">
              // CLASSIFIED FILES
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 w-full max-w-7xl mx-auto min-h-0">

        {/* Left Sidebar List - Folder Tabs */}
        <div className="w-full lg:w-72 flex flex-col gap-3 shrink-0 overflow-y-auto custom-scrollbar pr-2">
          {projects.map((proj) => {
            const isActive = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`flex items-center gap-4 p-4 text-left border rounded-sm transition-all duration-300 relative group overflow-hidden ${isActive
                  ? "bg-tactical-green/10 border-tactical-green shadow-[inset_0_0_20px_rgba(0,255,102,0.15)]"
                  : "border-tactical-green/20 hover:border-tactical-green/60 bg-[#050806]"
                  }`}
              >
                <div className="text-3xl text-[#D9A05B] drop-shadow-md shrink-0">
                  {isActive ? <FaFolderOpen /> : <FaFolder />}
                </div>

                <div className="flex-1">
                  <h3 className={`font-orbitron font-bold text-sm tracking-widest uppercase ${isActive ? "text-tactical-green" : "text-gray-300"}`}>
                    {proj.name}
                  </h3>
                  <p className={`font-plex text-[9px] uppercase tracking-wider ${isActive ? "text-tactical-green-pale" : "text-gray-500"}`}>
                    {proj.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Clipboard and Paper */}
        <div className="flex-1 relative flex justify-center lg:justify-start items-start p-4">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl"
            >
              {/* The Clipboard Base */}
              <div className="absolute inset-0 bg-[#2A2B27] rounded-md shadow-[20px_20px_30px_rgba(0,0,0,0.9)] border-2 border-[#1A1A1A] -rotate-1 transform origin-bottom-left">
                {/* Clipboard Clip */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-[#444] to-[#222] border-2 border-[#111] rounded-md shadow-xl flex items-center justify-center z-30">
                  <div className="w-24 h-2 bg-gradient-to-b from-[#222] to-[#111] border border-black rounded-full"></div>
                </div>
              </div>

              {/* Stacked Papers */}
              <div className="absolute inset-0 bg-[#C8BFA9] shadow-md border border-[#A89E8A] transform rotate-1 translate-x-2 translate-y-1"></div>
              <div className="absolute inset-0 bg-[#D2C8B1] shadow-md border border-[#B0A793] transform rotate-[0.5deg] translate-x-1 translate-y-0.5"></div>

              {/* Top Paper */}
              <div
                className="relative bg-old-paper shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-[#B5AB97] p-8 md:p-12 text-[#222] min-h-[600px] flex flex-col z-10"
              >


                {/* Paperclip */}
                <div className="absolute -top-4 right-16 w-6 h-20 border-[3px] border-gray-400 rounded-full bg-transparent shadow-[2px_2px_5px_rgba(0,0,0,0.5)] z-20 transform rotate-3"></div>
                <div className="absolute top-1 right-[69px] w-3 h-12 border-[2px] border-gray-500 rounded-full bg-transparent shadow-sm z-30 transform rotate-3"></div>

                {/* Document Content */}
                <div className="flex-1 font-plex space-y-6 pt-4">

                  {/* Title Header */}
                  <div className="border-b border-black/20 pb-4">
                    <h3 className="text-2xl font-share font-bold uppercase tracking-widest text-black/90">
                      {activeProject.name}
                    </h3>
                    <span className="text-black/60 text-[11px] uppercase tracking-[0.2em] font-bold">
                      // {activeProject.subtitle}
                    </span>
                  </div>

                  {/* Sections */}
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/80 mb-1">MISSION OBJECTIVE</h4>
                    <p className="font-share text-sm tracking-wide text-black/90 uppercase">{activeProject.objective}</p>
                  </div>

                  <div className="border-t border-black/10 pt-4">
                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/80 mb-1">PROBLEM</h4>
                    <p className="font-share text-sm tracking-wide text-black/90 uppercase">{activeProject.problem}</p>
                  </div>

                  <div className="border-t border-black/10 pt-4">
                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/80 mb-1">SOLUTION</h4>
                    <p className="font-share text-sm tracking-wide text-black/90 uppercase leading-relaxed">{activeProject.solution}</p>
                  </div>

                  <div className="border-t border-black/10 pt-4 pb-2">
                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-black/80 mb-4">TECH STACK</h4>
                    <div className="flex gap-6 items-center">
                      {activeProject.tech.map((t, i) => (
                        <div key={i} className={`flex items-center justify-center ${t.color} drop-shadow-md hover:scale-110 transition-transform`}>
                          <t.icon className="text-4xl" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {activeProject.gallery.map((img, i) => (
                      <div key={i} className="aspect-[4/3] bg-black/90 border border-black/50 p-1 shadow-inner relative overflow-hidden group rounded-sm">
                        <div className="absolute inset-1 border border-tactical-green/30 z-10 pointer-events-none"></div>
                        <Image src={img} alt="Gallery" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 brightness-75 contrast-125 saturate-50" />
                      </div>
                    ))}
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="mt-8">
                  <button className="w-full bg-[#2A3428] text-tactical-green-pale px-4 py-3 font-share font-bold text-xs tracking-widest uppercase hover:bg-tactical-green hover:text-black transition-colors border border-tactical-green/50 shadow-md">
                    &gt; GITHUB
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
