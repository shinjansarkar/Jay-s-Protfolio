"use client";

import { useState, useEffect } from "react";
import BootScreen from "./BootScreen";

export default function BootScreenWrapper({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Check session storage if we've already booted so it doesn't replay on manual refresh
    const hasBooted = sessionStorage.getItem("system_booted");
    if (hasBooted) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("system_booted", "true");
    setBooted(true);
  };

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return <>{children}</>;
}
