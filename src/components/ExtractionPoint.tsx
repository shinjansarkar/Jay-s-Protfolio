"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaLocationArrow } from "react-icons/fa";

export default function ExtractionPoint() {
  return (
    <div className="w-full h-full p-4 flex flex-col relative">
      
      {/* Top Left Header inside Content */}
      <div className="mb-6 z-20">
        <div className="flex gap-2 items-start">
          <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
          <div>
            <h2 className="text-xl font-orbitron text-gray-300 font-bold uppercase tracking-widest leading-none text-shadow-glow">
              EXTRACTION POINT
            </h2>
            <span className="text-gray-500 font-plex text-[10px] uppercase tracking-widest">
              {"// CONTACT COMMAND"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-1 w-full max-w-7xl mx-auto h-[500px]">
        
        {/* Left List */}
        <div className="w-full md:w-80 flex flex-col gap-2 shrink-0 justify-center">
          
          <a href="mailto:jayabrata.btech0711@gmail.com" className="group flex items-center gap-4 p-4 border border-tactical-green/30 bg-[#050505]/80 hover:bg-tactical-green/10 hover:border-tactical-green transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] cursor-pointer">
            <FaEnvelope className="text-2xl text-tactical-green group-hover:scale-110 transition-transform" />
            <span className="font-orbitron font-bold tracking-widest text-tactical-green group-hover:text-tactical-green-light">EMAIL HQ</span>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 border border-tactical-green/30 bg-[#050505]/80 hover:bg-tactical-green/10 hover:border-tactical-green transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] cursor-pointer">
            <FaLinkedin className="text-2xl text-gray-400 group-hover:text-tactical-green group-hover:scale-110 transition-transform" />
            <span className="font-orbitron font-bold tracking-widest text-gray-300 group-hover:text-tactical-green-light">LINKEDIN</span>
          </a>

          <a href="https://github.com/Jayabrata2004" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 border border-tactical-green/30 bg-[#050505]/80 hover:bg-tactical-green/10 hover:border-tactical-green transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] cursor-pointer">
            <FaGithub className="text-2xl text-gray-400 group-hover:text-tactical-green group-hover:scale-110 transition-transform" />
            <span className="font-orbitron font-bold tracking-widest text-gray-300 group-hover:text-tactical-green-light">GITHUB</span>
          </a>

          <button className="group flex items-center gap-4 p-4 border border-tactical-green/30 bg-[#050505]/80 hover:bg-tactical-green/10 hover:border-tactical-green transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] cursor-pointer text-left">
            <FaDownload className="text-2xl text-gray-400 group-hover:text-tactical-green group-hover:scale-110 transition-transform" />
            <span className="font-orbitron font-bold tracking-widest text-gray-300 group-hover:text-tactical-green-light">DOWNLOAD DOSSIER</span>
          </button>

          <button className="group flex items-center gap-4 p-4 border border-tactical-green/30 bg-[#050505]/80 hover:bg-tactical-green/10 hover:border-tactical-green transition-all shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] cursor-pointer text-left">
            <FaLocationArrow className="text-2xl text-gray-400 group-hover:text-tactical-green group-hover:scale-110 transition-transform" />
            <span className="font-orbitron font-bold tracking-widest text-gray-300 group-hover:text-tactical-green-light">REQUEST EXTRACTION</span>
          </button>

        </div>

        {/* Right Side Helicopter Image */}
        <div className="flex-1 relative border-2 border-tactical-green/30 bg-black overflow-hidden group">
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-tactical-green/50 z-10"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-tactical-green/50 z-10"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-tactical-green/50 z-10"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-tactical-green/50 z-10"></div>

          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
            style={{ backgroundImage: "url('/extraction.png')" }}
          ></div>
          <div className="absolute inset-0 bg-tactical-green mix-blend-overlay opacity-30"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-orbitron font-bold text-tactical-green text-shadow-glow text-center uppercase mb-2"
            >
              MISSION COMPLETE
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-tactical-green-pale font-share font-bold tracking-widest text-lg text-center"
            >
              READY FOR YOUR NEXT MISSION?
            </motion.p>
          </div>
        </div>

      </div>
    </div>
  );
}
