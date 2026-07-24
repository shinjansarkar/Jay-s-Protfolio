"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFolder, FaMedal, FaLocationArrow, FaTrophy, FaBriefcase, FaHome, FaChartBar } from "react-icons/fa";
import { GiRifle } from "react-icons/gi";

const menuItems = [
  { id: "home", path: "/home", label: "HOME", icon: FaHome },
  { id: "briefing", path: "/mission-briefing", label: "MISSION BRIEFING", icon: FaFolder },
  { id: "history", path: "/mission-history", label: "MISSION HISTORY", icon: FaBriefcase },
  { id: "inventory", path: "/weapon-inventory", label: "WEAPON INVENTORY", icon: GiRifle },
  { id: "archive", path: "/mission-archive", label: "MISSION ARCHIVE", icon: FaFolder },
  { id: "achievements", path: "/achievements", label: "ACHIEVEMENTS", icon: FaTrophy },
  { id: "intel", path: "/intel-center", label: "INTEL CENTER", icon: FaMedal },
  { id: "statistics", path: "/statistics", label: "STATISTICS", icon: FaChartBar },
  { id: "extraction", path: "/extraction", label: "EXTRACTION", icon: FaLocationArrow },
];

export default function LeftCommandMenu() {
  const pathname = usePathname();

  return (
    <nav className="h-full w-full bg-[#050505]/90 border-r border-tactical-green/20 p-6 flex flex-col relative overflow-y-auto custom-scrollbar">
      {/* Top Header */}
      <div className="mb-8 shrink-0">
        <p className="text-tactical-green font-plex text-[10px] tracking-widest uppercase mb-1">OPERATION:</p>
        <h2 className="text-tactical-green-pale font-orbitron font-bold text-3xl leading-none uppercase mb-1 text-shadow-glow">
          JAYABRATA
        </h2>
        <p className="text-gray-500 font-share text-xs uppercase tracking-widest">
          CAREER DOSSIER
        </p>
      </div>

      {/* Navigation List */}
      <ul className="flex-1 flex flex-col gap-1 font-rajdhani text-sm uppercase font-bold tracking-wider mb-8">
        {menuItems.map(({ id, path, label, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <li key={id}>
              <Link
                href={path}
                className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-center gap-4 ${isActive
                    ? "bg-tactical-green/10 text-tactical-green border border-tactical-green/40 shadow-[inset_0_0_15px_rgba(0,255,102,0.1)]"
                    : "text-gray-500 hover:text-tactical-green-pale hover:bg-tactical-green/5"
                  }`}
              >
                <Icon className={`text-lg ${isActive ? 'text-tactical-green' : 'text-tactical-green/50'}`} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Clearance Level */}
      <div className="mt-auto shrink-0 border border-tactical-green/20 p-4 bg-tactical-green/5 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-tactical-green/50"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-tactical-green/50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-tactical-green/50"></div>

        <p className="font-plex text-[10px] text-gray-500 mb-1">CLEARANCE LEVEL</p>
        <h3 className="font-orbitron font-bold text-tactical-green-light text-lg mb-1">TOP SECRET</h3>
        <p className="font-plex text-[10px] text-red-500/80 uppercase">ACCESS RESTRICTED</p>
      </div>
    </nav>
  );
}
