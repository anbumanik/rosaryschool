"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] lg:h-[70vh] lg:min-h-[600px] lg:max-h-[800px] bg-navy flex items-center justify-center overflow-hidden group pt-32 pb-16 md:pt-20 md:pb-0">
      
      {/* Full Background Image Slider */}
      <div className="absolute inset-0 z-0 w-full h-full">
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
              alt="Rosary School Campus Background" 
              fill 
              className="object-cover object-[75%_center] md:object-center" 
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navy Gradient Overlays for smooth blending */}
      {/* Main gradient to blend text into the image - adjusted for mobile visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy via-navy/80 to-transparent w-[100%] md:w-3/4 lg:w-2/3 pointer-events-none"></div>
      
      {/* Additional bottom gradient for mobile to ensure text at the bottom is perfectly readable */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 bg-gradient-to-t from-navy via-navy/80 to-transparent md:hidden pointer-events-none"></div>
      
      {/* Secondary right-to-left subtle gradient so the badge pops on bright images */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-navy/60 to-transparent w-full md:w-1/3 right-0 ml-auto pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full flex flex-col md:flex-row justify-between items-center h-full">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-2/3 lg:w-5/12 flex flex-col mt-auto md:mt-0 pb-8 md:pb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.15] tracking-tight mb-4 drop-shadow-lg">
              Shaping Minds.<br/>
              Building Futures.<br/>
              <span className="text-gold">Inspiring Excellence.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 font-medium mb-8 max-w-md leading-relaxed drop-shadow-md">
              A legacy of 75 Years in nurturing generations of confident leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-gold text-navy font-bold rounded hover:bg-gold-light transition-colors shadow-lg">
                ADMISSIONS OPEN 2026-27
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-white/50 text-white font-bold rounded hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center backdrop-blur-sm">
                VIRTUAL TOUR <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: 75 Years Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex flex-col items-center justify-center absolute right-8 lg:right-24 top-1/2 -translate-y-1/2"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Wreath outline approximation using borders and glow */}
            <div className="w-40 h-40 rounded-full border-2 border-dashed border-gold/60 flex flex-col items-center justify-center bg-navy/40 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.2)]">
               <span className="text-gold text-6xl font-heading font-extrabold leading-none drop-shadow-lg">75</span>
               <span className="text-white text-sm font-bold tracking-widest mt-1">YEARS</span>
            </div>
            
            {/* Banner below the wreath */}
            <div className="absolute -bottom-4 bg-gold px-6 py-1.5 shadow-lg transform -skew-x-12">
               <span className="text-navy font-bold text-sm transform skew-x-12 block text-center tracking-widest">1949 - 2024</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
