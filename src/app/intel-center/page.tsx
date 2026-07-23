"use client";

import { motion } from "framer-motion";

export default function IntelCenterPage() {
  return (
    <div className="w-full min-h-full p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-12 border-b border-tactical-green/30 pb-4">
          <h2 className="text-4xl font-orbitron text-tactical-green font-bold uppercase tracking-widest">
            Intel Center
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-tactical-green/50 to-transparent"></div>
          <span className="text-gray-500 font-plex text-sm">SECURE_VAULT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-tactical-dark p-6 border border-tactical-green/30 backdrop-blur-sm relative group">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-tactical-green"></div>
            <h3 className="font-share text-xl text-tactical-green-pale mb-4 uppercase">Current Position</h3>
            <p className="font-rajdhani text-gray-300 text-lg">Project Manager at Cognizant</p>
            <p className="font-plex text-sm text-gray-500 mt-2">Location: Kolkata, India</p>
          </div>

          <div className="bg-tactical-dark p-6 border border-tactical-green/30 backdrop-blur-sm relative group">
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-tactical-green"></div>
            <h3 className="font-share text-xl text-tactical-green-pale mb-4 uppercase">Current Mission</h3>
            <p className="font-rajdhani text-gray-300 text-lg">Leading GenAI automation initiatives and cross-team delivery for top-tier financial clients.</p>
          </div>

          <div className="bg-tactical-dark p-6 border border-tactical-green/30 backdrop-blur-sm relative group md:col-span-2">
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-tactical-green"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-tactical-green"></div>
            <h3 className="font-share text-xl text-tactical-green-pale mb-4 uppercase">Professional Summary</h3>
            <p className="font-rajdhani text-gray-300 text-lg leading-relaxed">
              A seasoned QA leader and Project Manager with over 15 years of experience in the software industry. 
              Specializes in building robust automation frameworks from scratch, implementing Generative AI solutions 
              to reduce manual testing effort, and mentoring engineering teams. Proven track record of delivering 
              high-quality software for enterprise clients globally.
            </p>
            
            <button className="mt-8 px-6 py-2 border border-tactical-green text-tactical-green font-orbitron hover:bg-tactical-green hover:text-black transition-colors uppercase text-sm tracking-widest">
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
