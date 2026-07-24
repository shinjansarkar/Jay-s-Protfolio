"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("DATABASE CONNECTED");

  useEffect(() => {    const timer1 = setTimeout(() => setLoadingText("VERIFYING CLEARANCE"), 400);
    const timer2 = setTimeout(() => setLoadingText("LOADING PAGE"), 800);
    const timer3 = setTimeout(() => setLoadingText("ACCESS GRANTED"), 1200);
    const timer4 = setTimeout(() => setLoading(false), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-tactical-black flex items-center justify-center crt-overlay"
          >
            <div className="w-96 text-left p-8 border border-tactical-green/30 bg-tactical-green/5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-share text-tactical-green text-lg tracking-widest uppercase mb-4"
              >
                {loadingText}
                <span className="animate-pulse">_</span>
              </motion.div>
              
              <div className="w-full h-1 bg-gray-900 overflow-hidden">
                <motion.div 
                  className="h-full bg-tactical-green shadow-[0_0_10px_#00ff66]"
                  initial={{ width: "0%" }}
                  animate={{ width: loadingText === "ACCESS GRANTED" ? "100%" : "60%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
