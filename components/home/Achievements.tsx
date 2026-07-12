"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

export default function Achievements() {
  return (
    <section className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark">Achievements</h2>
        <a href="#" className="text-xs font-bold text-gray-500 hover:text-navy transition-colors tracking-widest uppercase">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {/* Navy Trophy Card */}
        <div className="bg-navy-dark rounded-xl p-6 relative overflow-hidden flex flex-col items-center text-center shadow-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent"></div>
          <div className="w-24 h-24 relative mb-4 z-10 flex items-center justify-center text-gold">
            <Trophy size={64} strokeWidth={1} />
          </div>
          <p className="text-white font-serif italic text-lg z-10 leading-snug">
            &quot;Excellence is not a skill, it is an attitude.&quot;
          </p>
          <p className="text-gold text-[10px] uppercase font-bold tracking-widest mt-1 z-10">
            — Ralph Marston
          </p>
        </div>

        {/* Stats List */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-lightBg border border-gray-200 flex items-center justify-center shrink-0">
              <Star className="text-gold" size={18} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy-dark text-sm">100%</h4>
              <p className="text-gray-500 text-[11px]">Board Exam Results</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-lightBg border border-gray-200 flex items-center justify-center shrink-0">
              <Trophy className="text-gold" size={20} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy-dark text-[15px]">State Level Winners</h4>
              <p className="text-gray-500 text-xs">In Various Competitions</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-lightBg border border-gray-200 flex items-center justify-center shrink-0">
              <Medal className="text-gold" size={20} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-navy-dark text-[15px]">University Toppers</h4>
              <p className="text-gray-500 text-xs">Consistently Every Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
