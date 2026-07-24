"use client";

const experiences = [
  { year: "2023 - PRESENT", num: "04", company: "Cognizant", title: "PROJECT MANAGER", desc: "Leading QA process setup, cross team delivery for ING Bank Australia & ASOS (UK). Built GenAI test case generator reducing 80% manual effort." },
  { year: "2019-2023", num: "03", company: "Altisource", title: "PRINCIPAL ENGINEER / LEAD ENGINEER", desc: "Led QE team, test automation using Selenium, Appium, Rest Assured. Owned end-to-end QA for web & mobile platforms." },
  { year: "2015-2019", num: "02", company: "VMware", title: "SENIOR QA ENGINEER", desc: "MDM, Email security testing for Android, iOS & Windows. Customer bug analysis and root cause identification." },
  { year: "2011-2015", num: "01", company: "Huawei", title: "SOFTWARE ENGINEER / SDET", desc: "Mobile app & device testing. Automation using Python. Worked on UI based test framework." },
];

export default function ExperienceSummary() {
  return (
    <div className="bg-tactical-black/60 border border-tactical-green/30 p-6 backdrop-blur-md h-full relative">
      <div className="font-plex text-xs text-tactical-green mb-6 uppercase tracking-widest border-b border-tactical-green/20 pb-2">
        {"/// EXPERIENCE - MISSION HISTORY"}
      </div>
      
      <div className="relative pl-6 space-y-6">
        {/* Vertical Line */}
        <div className="absolute top-2 bottom-2 left-[3px] w-[2px] bg-tactical-green/30"></div>
        
        {experiences.map((exp, i) => (
          <div key={i} className="relative flex flex-col md:flex-row md:items-start gap-4">
            {/* Node */}
            <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full border-2 border-tactical-green bg-tactical-black"></div>
            
            <div className="md:w-1/3 shrink-0 flex gap-4 items-start">
              <div className="text-tactical-green-pale font-plex text-[10px] leading-tight w-16">{exp.year}</div>
              <div className="flex items-center gap-2">
                <span className="font-orbitron text-xl text-tactical-green opacity-50">{exp.num}</span>
                <span className="font-orbitron font-bold text-lg text-white tracking-widest">{exp.company}</span>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h4 className="font-share text-tactical-green uppercase mb-1">{exp.title}</h4>
              <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-2">{exp.desc}</p>
              <button className="text-tactical-green-pale font-plex text-[10px] uppercase hover:text-white transition-colors group">
                VIEW DETAILS <span className="group-hover:translate-x-1 inline-block transition-transform">»</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
