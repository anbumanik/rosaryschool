"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark">
          A Message from the Principal
        </h2>
      </div>
      
      <div className="flex flex-row gap-4 sm:gap-8 relative z-10 h-full items-start">
        {/* Image - Left Side (Left on Mobile too) */}
        <div className="w-2/5 sm:w-1/2 flex items-start justify-center relative mt-6 sm:mt-10 h-full">
          <div className="w-full aspect-[3/4] max-w-[200px] sm:max-w-[240px] relative drop-shadow-2xl sm:group-hover:-translate-y-2 transition-transform duration-500 z-20 scale-110">
            <Image 
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sr-principle--removebg-preview.png"
              alt="Principal"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>

        {/* Message Content - Right Side (Right on Mobile too) */}
        <div className="w-3/5 sm:w-1/2 flex flex-col justify-start gap-3 sm:gap-4 h-full py-2">
          <div className="relative">
            <Quote className="text-navy-light w-8 h-8 mb-2" fill="currentColor" />
            <div className="space-y-4 text-[14px] text-gray-700 font-sans leading-relaxed">
              <p>
                At Rosary, we believe in the holistic development of every child – academically, morally, socially and spiritually. Our mission is to empower students to become compassionate leaders and responsible citizens.
              </p>
            </div>
          </div>
          
          <div className="mt-2 pt-4 border-t border-gray-100">
            <p className="font-heading font-bold text-navy-dark">Dr. Sr. Jasintha Quadras (FMM)</p>
            <p className="text-gray-500 text-xs mt-0.5">Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
