"use client";

import { motion } from "framer-motion";

export default function FloatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="absolute -top-10 right-4 sm:-right-8 lg:right-0 z-20"
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full glassmorphism border border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
      >
        {/* Inner ring */}
        <div className="absolute inset-1 rounded-full border-2 border-dashed border-gold/40 animate-[spin_30s_linear_infinite]" />
        
        <div className="text-center">
          <span className="block text-gold font-heading font-black text-2xl sm:text-3xl leading-none">
            75
          </span>
          <span className="block text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest mt-1">
            Years
          </span>
          <span className="block text-white/70 font-sans font-medium text-[8px] mt-0.5">
            1949–2024
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
