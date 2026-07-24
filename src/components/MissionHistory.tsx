"use client";

import { useState } from "react";

const missions = [
  {
    id: "01",
    name: "Operation Dragon",
    company: "Huawei",
    status: "COMPLETE",
    x: "20%",
    y: "35%",
    labelX: "10%",
    labelY: "15%"
  },
  {
    id: "02",
    name: "Operation Sentinel",
    company: "VMware",
    status: "COMPLETE",
    x: "45%",
    y: "30%",
    labelX: "35%",
    labelY: "10%"
  },
  {
    id: "03",
    name: "Operation Whisper",
    company: "Flatchat",
    status: "COMPLETE",
    x: "70%",
    y: "35%",
    labelX: "60%",
    labelY: "15%"
  },
  {
    id: "04",
    name: "Operation Velocity",
    company: "Runnr",
    status: "COMPLETE",
    x: "25%",
    y: "65%",
    labelX: "15%",
    labelY: "45%"
  },
  {
    id: "05",
    name: "Operation Horizon",
    company: "Altisource",
    status: "COMPLETE",
    x: "50%",
    y: "80%",
    labelX: "40%",
    labelY: "90%"
  },
  {
    id: "06",
    name: "Operation Genesis",
    company: "Cognizant",
    status: "ACTIVE",
    x: "75%",
    y: "65%",
    labelX: "80%",
    labelY: "50%"
  }
];

export default function MissionHistory() {
  const [activeMission, setActiveMission] = useState(missions[missions.length - 1]);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Tactical Map Area */}
      <div className="w-full h-full relative bg-[#050505] border border-tactical-green/30 rounded-sm overflow-hidden flex items-center justify-center p-4 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]">
        
        {/* Top Left Header inside Map */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex gap-2 items-start">
            <div className="w-4 h-4 border-t-2 border-l-2 border-tactical-green mt-1"></div>
            <div>
              <h2 className="text-xl font-orbitron text-tactical-green font-bold uppercase tracking-widest leading-none">
                MISSION HISTORY
              </h2>
              <span className="text-tactical-green/70 font-plex text-[10px] uppercase tracking-widest">
                {"// OPERATION MAP"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Left Stats inside Map */}
        <div className="absolute bottom-4 left-4 z-20 border border-tactical-green/50 bg-[#0B0F0D]/80 backdrop-blur-sm p-4 font-plex text-xs text-tactical-green uppercase tracking-widest space-y-2">
          <div>TOTAL MISSIONS: 06</div>
          <div>MISSIONS COMPLETED: 05</div>
          <div>CURRENT MISSION: 06</div>
        </div>
        
        {/* Map Container */}
        <div className="relative w-full h-full max-w-5xl aspect-[16/9] mt-8 mx-auto">
          {/* Real World Map Background (Masked for perfect coloring) */}
          <div 
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none bg-tactical-green"
            style={{
              WebkitMaskImage: "url('/world_map.svg')",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/world_map.svg')",
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat"
            }}
          ></div>

          {/* Tactical Curved Paths connecting missions */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            {missions.map((m, i) => {
              if (i === 0) return null;
              const prev = missions[i - 1];
              return (
                <path
                  key={`path-${m.id}`}
                  d={`M ${parseFloat(prev.x)},${parseFloat(prev.y)} Q ${parseFloat(prev.x) + 20},${parseFloat(prev.y) - 20} ${parseFloat(m.x)},${parseFloat(m.y)}`}
                  fill="none"
                  stroke="rgba(0, 255, 102, 0.4)"
                  strokeWidth="0.3"
                  strokeDasharray="1 1"
                  className="animate-[dash_20s_linear_infinite]"
                />
              );
            })}
            
            {/* Lines connecting labels to nodes */}
            {missions.map((m) => (
              <path
                key={`label-line-${m.id}`}
                d={`M ${parseFloat(m.labelX)},${parseFloat(m.labelY) + (parseFloat(m.labelY) < parseFloat(m.y) ? 5 : -5)} L ${parseFloat(m.x)},${parseFloat(m.y)}`}
                fill="none"
                stroke="rgba(0, 255, 102, 0.6)"
                strokeWidth="0.2"
                strokeDasharray="0.5 0.5"
              />
            ))}
          </svg>

          {/* Mission Nodes & Labels */}
          {missions.map((m) => (
            <div key={m.id}>
              {/* Target Node */}
              <button
                onClick={() => setActiveMission(m)}
                className="absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center group z-30"
                style={{ left: m.x, top: m.y }}
              >
                {/* Outer pulsing ring */}
                <span className="absolute inset-0 rounded-full border border-tactical-green/50 animate-ping opacity-75"></span>
                {/* Middle ring */}
                <span className="absolute inset-1 rounded-full border border-tactical-green shadow-[0_0_10px_rgba(0,255,102,0.8)]"></span>
                {/* Inner glowing core */}
                <span className={`relative w-2 h-2 rounded-full bg-tactical-green shadow-[0_0_8px_#fff]`}></span>
              </button>

              {/* Label Box */}
              <button 
                onClick={() => setActiveMission(m)}
                className={`absolute w-48 -ml-24 z-40 bg-[#0B0F0D]/90 backdrop-blur-sm border transition-all ${
                  activeMission.id === m.id 
                    ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' 
                    : 'border-tactical-green/50 hover:border-tactical-green shadow-[0_0_10px_rgba(0,255,102,0.1)]'
                }`}
                style={{ left: m.labelX, top: m.labelY }}
              >
                <div className="flex">
                  {/* Number Block */}
                  <div className={`p-2 font-share text-lg font-bold border-r flex items-center justify-center ${
                    activeMission.id === m.id ? 'border-yellow-500/50 text-yellow-500' : 'border-tactical-green/30 text-tactical-green'
                  }`}>
                    {m.id}
                  </div>
                  {/* Text Block */}
                  <div className="p-2 text-left flex-1">
                    <div className={`font-plex text-[10px] uppercase tracking-wider ${
                      activeMission.id === m.id ? 'text-yellow-500' : 'text-tactical-green'
                    }`}>
                      OPERATION {m.name.replace('Operation ', '')}
                    </div>
                    <div className="font-share text-sm text-white font-bold uppercase tracking-widest mt-0.5">
                      {m.company}
                    </div>
                  </div>
                </div>
                {/* Status Bar */}
                <div className={`border-t px-2 py-1 text-[9px] font-plex uppercase tracking-widest text-left flex items-center gap-2 ${
                  activeMission.id === m.id ? 'border-yellow-500/50 text-yellow-500/70' : 'border-tactical-green/30 text-tactical-green/70'
                }`}>
                  STATUS: {m.status}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
