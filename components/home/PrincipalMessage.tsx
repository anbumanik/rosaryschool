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
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10 h-full">
        {/* Image - Circular on Mobile, Pop-up on Desktop */}
        <div className="w-32 h-32 sm:w-1/2 sm:h-auto sm:aspect-[3/4] flex-shrink-0 mx-auto sm:mx-0 rounded-full sm:rounded-none overflow-hidden sm:overflow-visible relative sm:mt-10 bg-navy-light/5 sm:bg-transparent flex items-start justify-center">
          <div className="w-full h-full sm:max-w-[240px] relative drop-shadow-sm sm:drop-shadow-2xl sm:group-hover:-translate-y-2 transition-transform duration-500 z-20 sm:scale-110">
            <Image 
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sr-principle--removebg-preview.png"
              alt="Principal"
              fill
              className="object-cover sm:object-contain object-top scale-125 sm:scale-100 pt-2 sm:pt-0"
            />
          </div>
        </div>

        {/* Message Content */}
        <div className="w-full sm:w-1/2 flex flex-col justify-start gap-3 sm:gap-4 h-full py-2 text-center sm:text-left">
          <div className="relative">
            <Quote className="text-navy-light w-8 h-8 mb-2 mx-auto sm:mx-0" fill="currentColor" />
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
