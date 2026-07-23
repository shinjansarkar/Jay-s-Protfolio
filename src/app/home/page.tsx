"use client";

import DashboardHero from "@/components/DashboardHero";

export default function HomePage() {
  return (
    <div 
      className="w-full h-full flex flex-col relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Slightly reduced overlay since the generated image is already dark */}
      <DashboardHero />
    </div>
  );
}
