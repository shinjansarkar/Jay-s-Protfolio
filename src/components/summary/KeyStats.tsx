"use client";

const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PROJECTS DELIVERED" },
  { value: "80%", label: "MANUAL EFFORT REDUCTION" },
  { value: "100%", label: "QUALITY FOCUS" },
];

export default function KeyStats() {
  return (
    <div className="bg-tactical-black/60 border border-tactical-green/30 p-6 backdrop-blur-md h-full relative">
      <div className="font-plex text-xs text-tactical-green mb-6 uppercase tracking-widest border-b border-tactical-green/20 pb-2">
        {"/// KEY STATS"}
      </div>
      
      <div className="flex flex-col gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-4xl font-orbitron font-bold text-tactical-green-light mb-1 text-shadow-glow group-hover:scale-105 transition-transform">
              {stat.value}
            </div>
            <div className="font-plex text-[10px] text-gray-400 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-10 right-4 w-48 h-64 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjAwIj48cGF0aCBkPSJNMTAwIDBDMTAwIDEwMCAwIDEwMCAwIDIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjY2IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-contain bg-no-repeat bg-right"></div>
    </div>
  );
}
