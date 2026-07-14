"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const heroImages = [
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school1.jpeg",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school3.jpg",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school2.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="Rosary school campus"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlay — dark left to lighter right, plus bottom scrim */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F2D52]/95 via-[#0F2D52]/70 to-[#0F2D52]/30 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F2D52]/60 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 w-full pt-28 md:pt-0">
        {/* 75 years badge */}
        <div className="flex justify-center pt-6 pb-4 md:absolute md:top-8 md:right-8 lg:right-16 md:block md:pt-0 md:pb-0 z-20 scale-50 md:scale-100 origin-center md:origin-top-right">
          <div className="relative flex flex-col items-center w-[170px] group">
            <div className="w-[140px] h-[140px] rounded-full bg-[#D4AF37] flex items-center justify-center shadow-2xl relative z-10 cursor-pointer transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg]">
              <div className="w-[118px] h-[118px] rounded-full bg-[#0F2D52] border border-dashed border-[#D4AF37]/50 flex flex-col items-center justify-center">
                <p className="text-[40px] font-bold text-[#D4AF37] leading-none">75</p>
                <p className="text-xs font-bold text-white tracking-[0.18em] mt-1.5">YEARS</p>
              </div>
            </div>

            <div className="bg-[#D4AF37] rounded-md px-4 py-1.5 mt-2.5">
              <p className="text-xs font-bold text-[#0F2D52] tracking-wide">1949 – 2024</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl sm:text-3xl md:text-6xl text-white leading-tight px-4 md:px-0 mt-2 md:mt-0">
            Shaping Minds.<br />
            Building Futures.<br />
            <span className="text-[#D4AF37]">Inspiring Excellence.</span>
          </h1>
          <p className="mt-3 text-white/90 text-xs sm:text-sm md:text-lg max-w-md px-4 md:px-0">
            A legacy of 75 Years in nurturing generations of confident leaders.
          </p>
          <div className="flex gap-2 md:gap-4 mt-6 md:mt-8 flex-wrap md:flex-nowrap px-4 md:px-0">
            <button className="bg-[#D4AF37] text-[#0F2D52] font-bold rounded-full px-3 py-1.5 md:px-4 md:py-2.5 whitespace-nowrap text-[10px] md:text-xs uppercase tracking-wide">
              Admissions open 2026-27
            </button>
            <button className="border border-white/60 text-white rounded-full px-3 py-1.5 md:px-4 md:py-2.5 flex items-center gap-1.5 whitespace-nowrap text-[10px] md:text-xs uppercase tracking-wide hover:bg-white/10 transition-colors">
              Virtual tour <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
