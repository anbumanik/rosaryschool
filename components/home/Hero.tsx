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
    <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center pt-20 pb-24 group">
      
      {/* Full Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={heroImages[currentIndex]} 
              alt="Rosary School Campus Background" 
              fill 
              className="object-cover" 
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Visible on hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm hidden md:flex"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm hidden md:flex"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row justify-between items-center h-full">
        


      </div>
    </section>
  );
}
