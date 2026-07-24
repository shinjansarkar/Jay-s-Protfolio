"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "Initializing Military Database...",
  "Decrypting Personnel Records...",
  "Loading Agent... ████████████████████ 100%",
  "Identity Verified.",
  "ACCESS GRANTED"
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    // Add sounds if available (we will just log or play later)
    // For now, simulate the boot process
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      if (stepIndex < bootSequence.length) {
        setDisplayedText((prev) => prev + "\n> " + bootSequence[stepIndex]);
        
        if (stepIndex === bootSequence.length - 1) {
          setIsFlickering(true);
          setTimeout(() => {
            onComplete();
          }, 1500); // Wait after ACCESS GRANTED
        }
        
        stepIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-tactical-black font-share"
      >
        <div className={`w-full max-w-3xl p-8 text-tactical-green ${isFlickering ? 'animate-pulse' : ''}`}>
          <pre className="whitespace-pre-wrap text-lg md:text-2xl leading-relaxed text-shadow-glow">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              _
            </motion.span>
          </pre>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
