"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsCTA() {
  return (
    <section className="h-full rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 bg-navy flex flex-col group">
      {/* Top Half: Image */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden shrink-0">
        <Image 
          src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school4.jpg" 
          alt="Admissions" 
          fill 
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700" 
        />
        {/* Subtle gradient to blend into the navy background smoothly */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Bottom Half: Content */}
      <div className="p-5 sm:p-6 relative z-20 flex flex-col flex-1">
        <h2 className="text-2xl sm:text-[26px] font-heading font-bold text-white mb-1.5 leading-tight">
          Admissions Open<br/>
          2026-27
        </h2>
        
        <p className="text-[13px] text-gray-300 font-medium mb-5">
          Limited seats available.
        </p>
        
        <div className="flex flex-col gap-3 w-full">
          <Link 
            href="#"
            className="w-full flex items-center justify-center px-4 py-2.5 text-[11px] font-bold text-navy bg-gold rounded-md hover:bg-gold-light hover:shadow-glow transition-all duration-300 tracking-wide"
          >
            APPLY ONLINE
          </Link>
          
          <Link 
            href="#"
            className="w-full flex items-center justify-center px-4 py-2.5 text-[11px] font-bold text-white bg-transparent rounded-md border border-white/40 hover:bg-white hover:text-navy transition-all duration-300 backdrop-blur-sm tracking-wide"
          >
            <Download className="mr-2" size={14} />
            DOWNLOAD PROSPECTUS
          </Link>
        </div>
      </div>
    </section>
  );
}
