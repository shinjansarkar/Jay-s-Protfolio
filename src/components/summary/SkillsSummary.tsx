"use client";

import { FaJava, FaPython, FaDocker, FaJira } from "react-icons/fa";
import { SiSelenium, SiAppium, SiJenkins } from "react-icons/si";
import { AiOutlineAim } from "react-icons/ai"; // Using as fallback for GenAI/Rest Assured

const skills = [
  { name: "Selenium", icon: SiSelenium, bars: 4, total: 5 },
  { name: "GenAI", icon: AiOutlineAim, bars: 5, total: 5 },
  { name: "Appium", icon: SiAppium, bars: 4, total: 5 },
  { name: "GitHub Copilot", icon: AiOutlineAim, bars: 5, total: 5 },
  { name: "Rest Assured", icon: AiOutlineAim, bars: 4, total: 5 },
  { name: "Jenkins", icon: SiJenkins, bars: 4, total: 5 },
  { name: "Python", icon: FaPython, bars: 4, total: 5 },
  { name: "Docker", icon: FaDocker, bars: 3, total: 5 },
  { name: "Java", icon: FaJava, bars: 5, total: 5 },
  { name: "JIRA", icon: FaJira, bars: 5, total: 5 },
  { name: "C# / RestSharp", icon: AiOutlineAim, bars: 3, total: 5 },
  { name: "Agile / Scrum", icon: AiOutlineAim, bars: 5, total: 5 },
];

export default function SkillsSummary() {
  return (
    <div className="bg-tactical-black/60 border border-tactical-green/30 p-6 backdrop-blur-md h-full relative">
      <div className="font-plex text-xs text-tactical-green mb-6 uppercase tracking-widest border-b border-tactical-green/20 pb-2">
        {"/// SKILLS - WEAPONS INVENTORY"}
      </div>
      
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-tactical-green/10 border border-tactical-green/30 flex items-center justify-center text-tactical-green group-hover:bg-tactical-green/20 transition-colors">
              <skill.icon className="text-lg" />
            </div>
            <div className="flex-1">
              <div className="font-rajdhani text-sm text-gray-200 mb-1">{skill.name}</div>
              <div className="flex gap-1">
                {[...Array(skill.total)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 flex-1 ${idx < skill.bars ? 'bg-tactical-green shadow-[0_0_5px_#00ff66]' : 'bg-gray-800'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
