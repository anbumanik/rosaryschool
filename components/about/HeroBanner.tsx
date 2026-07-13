"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden">
      {/* Campus image */}
      <Image
        src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/about-us-3-image-1.png"
        alt="Rosary campus assembly hall"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/90 via-[#0F2D52]/20 to-transparent z-10 pointer-events-none" />

      {/* Bottom-left overlay text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute bottom-6 left-6 md:bottom-8 md:left-10 z-20"
      >
        <h2 className="font-heading font-bold text-white text-lg sm:text-xl md:text-2xl leading-snug max-w-md">
          A legacy built on faith and excellence
        </h2>
        <p className="text-blue-200/80 text-xs mt-1.5 font-medium">Our campus, since 1950</p>
      </motion.div>
    </section>
  );
}
