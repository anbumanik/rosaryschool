"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsCTA() {
  return (
    <section className="h-full rounded-2xl overflow-hidden relative shadow-md bg-navy flex flex-col group min-h-[350px]">
      {/* Background Image spanning the right side */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image 
          src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school4.jpg" 
          alt="Admissions" 
          fill 
          className="object-cover object-[80%_center] group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Navy Gradient Overlay for text readability on the left - perfectly matches screenshot */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy from-45% via-navy/80 to-transparent w-full pointer-events-none"></div>
      
      {/* Additional bottom gradient for mobile readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-navy/50 to-transparent h-full pointer-events-none sm:hidden"></div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 relative z-20 flex flex-col h-full w-full max-w-[85%] sm:max-w-[70%] lg:max-w-[85%]">
        <h2 className="text-2xl sm:text-[28px] font-heading font-bold text-white mb-2 leading-tight">
          Admissions Open<br/>
          2026-27
        </h2>
        
        <p className="text-[13px] text-gray-200 font-medium mb-8">
          Limited seats available.
        </p>
        
        <div className="flex flex-col gap-3 mt-auto items-start">
          <Link 
            href="#"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-bold text-navy bg-gold rounded-md hover:bg-gold-light hover:shadow-glow transition-all duration-300 tracking-wide"
          >
            APPLY ONLINE
          </Link>
          
          <Link 
            href="#"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-bold text-white bg-transparent rounded-md border border-white/40 hover:bg-white hover:text-navy transition-all duration-300 backdrop-blur-sm tracking-wide"
          >
            <Download className="mr-2" size={14} />
            DOWNLOAD PROSPECTUS
          </Link>
        </div>
      </div>
    </section>
  );
}
