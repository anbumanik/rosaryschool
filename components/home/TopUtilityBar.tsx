"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function TopUtilityBar() {
  return (
    <div className="w-full bg-navy text-white py-1.5 px-4 md:px-8 text-xs font-medium border-b border-navy-light flex items-center justify-between z-50 relative overflow-hidden h-8">
      
      {/* Marquee Container */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <motion.div 
          className="whitespace-nowrap absolute flex items-center"
          animate={{ x: ["100vw", "-100vw"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <span className="text-gold-light tracking-wide uppercase font-semibold">
            Rosary Matriculation Hr. Sec. School, Chennai
          </span>
        </motion.div>
      </div>

      {/* Right Icons / Actions */}
      <div className="flex items-center justify-end pl-4 bg-navy z-10 relative h-full shadow-[-10px_0_10px_rgba(15,45,82,1)]">
        <button aria-label="Search" className="hover:text-gold-light transition-colors ml-2 flex items-center justify-center">
          <Search size={14} />
        </button>
      </div>

    </div>
  );
}
