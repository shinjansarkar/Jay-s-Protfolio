"use client";

import { FaAward, FaCertificate, FaMedal } from "react-icons/fa";

const certs = [
  { name: "Software Testing with Jira & Agile", icon: FaAward, type: "Gold" },
  { name: "Gemini Enterprise Deployment", icon: FaCertificate, type: "Platinum" },
  { name: "AMCAT Certified Software Engineer", icon: FaMedal, type: "Silver" },
  { name: "Jenkins Mastery", icon: FaAward, type: "Bronze" },
  { name: "Certified Partner Gemini", icon: FaCertificate, type: "Platinum" },
];

export default function AchievementsSummary() {
  const getMedalColor = (type: string) => {
    switch (type) {
      case "Gold": return "text-yellow-500 border-yellow-500/50";
      case "Platinum": return "text-cyan-400 border-cyan-400/50";
      case "Silver": return "text-gray-300 border-gray-300/50";
      case "Bronze": return "text-amber-700 border-amber-700/50";
      default: return "text-tactical-green border-tactical-green";
    }
  };

  return (
    <div className="bg-tactical-black/60 border border-tactical-green/30 p-6 backdrop-blur-md h-full relative">
      <div className="font-plex text-xs text-tactical-green mb-6 uppercase tracking-widest border-b border-tactical-green/20 pb-2">
        /// ACHIEVEMENTS & CERTIFICATIONS
      </div>
      
      <div className="flex justify-between items-center h-24">
        {certs.map((cert, i) => (
          <div key={i} className="flex flex-col items-center group cursor-pointer w-20 text-center">
            <div className={`w-12 h-12 rounded-full bg-tactical-black border-2 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-translate-y-1 ${getMedalColor(cert.type)}`}>
              <cert.icon className="text-xl" />
            </div>
            <div className="font-plex text-[8px] text-gray-400 mt-2 uppercase leading-tight group-hover:text-tactical-green transition-colors">
              {cert.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
