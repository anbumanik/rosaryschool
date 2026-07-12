"use client";

import { motion } from "framer-motion";
import { Book, Shield, Star, PenTool, ScrollText, Calculator, Palette, Leaf } from "lucide-react";

const clubs = [
  { name: "GUIDES CLUB", Icon: Book, color: "text-blue-600" },
  { name: "NSS CLUB", Icon: Star, color: "text-red-600" },
  { name: "RSP CLUB", Icon: Shield, color: "text-gray-800" },
  { name: "ENGLISH LITERARY", Icon: PenTool, color: "text-indigo-600" },
  { name: "TAMIL LITERARY", Icon: ScrollText, color: "text-orange-600" },
  { name: "MATH CLUB", Icon: Calculator, color: "text-blue-500" },
  { name: "ARTS & CRAFTS", Icon: Palette, color: "text-pink-500" },
  { name: "ECO CLUB", Icon: Leaf, color: "text-green-600" },
];

export default function ClubsMarquee() {
  // Triple the array to create a seamless infinite scroll
  const marqueeItems = [...clubs, ...clubs, ...clubs];

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-heading font-extrabold text-[#0F2D52]">Student Clubs</h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full flex items-center h-20">
        {/* Edge Gradients for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {marqueeItems.map((club, index) => (
            <div key={index} className="flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all cursor-pointer bg-white group w-[220px] shrink-0">
              <club.Icon className="w-5 h-5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-[#0F2D52] whitespace-nowrap overflow-hidden text-ellipsis">{club.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
