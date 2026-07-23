"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function ContactSummary() {
  return (
    <div className="bg-tactical-black/60 border border-tactical-green/30 p-6 backdrop-blur-md h-full relative flex flex-col justify-between">
      <div className="font-plex text-xs text-tactical-green mb-6 uppercase tracking-widest border-b border-tactical-green/20 pb-2">
        /// CONTACT - EXFILTRATION
      </div>
      
      <div className="space-y-4 flex-1">
        <a href="tel:+917483121154" className="flex items-center gap-3 text-gray-300 hover:text-tactical-green transition-colors group">
          <FaPhone className="text-tactical-green/50 group-hover:text-tactical-green" />
          <span className="font-share text-sm">7483121154</span>
        </a>
        <a href="mailto:jayabrata.btech0711@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-tactical-green transition-colors group">
          <FaEnvelope className="text-tactical-green/50 group-hover:text-tactical-green" />
          <span className="font-share text-sm">jayabrata.btech0711@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/jayabrata-chakraborty-176a8248" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-tactical-green transition-colors group">
          <FaLinkedin className="text-tactical-green/50 group-hover:text-tactical-green" />
          <span className="font-share text-sm text-ellipsis overflow-hidden whitespace-nowrap block w-48">linkedin.com/in/jayabrata-chakraborty-176a8248</span>
        </a>
        <a href="https://github.com/Jayabrata2004" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-tactical-green transition-colors group">
          <FaGithub className="text-tactical-green/50 group-hover:text-tactical-green" />
          <span className="font-share text-sm">github.com/Jayabrata2004</span>
        </a>
      </div>

      <button className="w-full mt-6 border border-tactical-green text-tactical-green font-orbitron text-sm uppercase py-2 hover:bg-tactical-green hover:text-black transition-colors">
        INITIATE CONTACT
      </button>
      
      {/* Easter Egg Soldier Sillhouette */}
      <div className="absolute bottom-4 right-4 w-12 h-16 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCAxMDAiPjxwYXRoIGQ9Ik0yNSAwQzE4IDAgMTUgNSAxNSAxMEMxNSAxNSAyMCAyMCAyNSAyMEMzMCAyMCAzNSAxNSAzNSAxMEMzNSA1IDMyIDAgMjUgMFpNMTAgMjVMMTAgNDBMMTUgNjVMMTUgMTAwTDM1IDEwMEwzNSA2NUw0MCA0MEw0MCAyNUwxMCAyNVoiIGZpbGw9IiMwMGZmNjYiLz48L3N2Zz4=')] bg-contain bg-no-repeat bg-bottom"></div>
    </div>
  );
}
