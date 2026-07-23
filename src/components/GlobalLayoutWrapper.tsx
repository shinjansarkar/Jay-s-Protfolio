"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftCommandMenu from "./LeftCommandMenu";
import LenisProvider from "./LenisProvider";

export default function GlobalLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-10 flex w-full h-full p-2 gap-2 overflow-hidden bg-tactical-black">

      {/* ACCESS MENU Button (Always visible when menu is closed) */}
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-6 left-6 z-50 bg-tactical-black/80 border border-tactical-green px-4 py-2 font-share text-tactical-green text-sm uppercase tracking-widest hover:bg-tactical-green hover:text-black transition-colors"
          >
            [ ACCESS MENU ]
          </motion.button>
        )}
      </AnimatePresence>

      {/* Collapsible Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 288, opacity: 1 }} // 288px = w-72
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full overflow-hidden shrink-0 relative z-40 border-r border-tactical-green/30 bg-tactical-black"
          >
            {/* Close Button inside Menu */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 z-50 text-tactical-green hover:text-white font-orbitron text-xl leading-none"
            >
              ×
            </button>
            <div className="w-72 h-full">
              <LeftCommandMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Route Content */}
      <div className="flex-1 h-full overflow-hidden relative border border-tactical-green/30 bg-[#050505]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </div>
    </div>
  );
}
