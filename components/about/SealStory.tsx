"use client";

import { motion } from "framer-motion";
import { Anchor } from "lucide-react";

export default function SealStory() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0F2D52] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 items-center"
    >
      {/* Left: Seal badge */}
      <div className="flex justify-center">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center shadow-glow cursor-pointer hover:animate-bounce transition-all duration-300">
          <Anchor size={56} className="text-[#D4AF37]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Right: text */}
      <div className="text-center md:text-left">
        <p className="text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
          The Seal of Our Institution
        </p>
        <p className="text-white/80 text-sm leading-relaxed">
          The seal represents a ship sailing on stormy water led on by a star — symbolic of a student&apos;s life
          guided amidst the tempests by the light of the star of the sea. The ship&apos;s anchor stands for charity,
          bringing it into the harbour of truth.
        </p>
      </div>
    </motion.section>
  );
}
