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
      
      <div className="flex flex-col sm:flex-row gap-6 relative z-10 h-full">
        {/* Message Content */}
        <div className="w-full sm:w-3/5 flex flex-col justify-between">
          <div className="relative">
            <Quote className="text-navy-light w-8 h-8 mb-2" fill="currentColor" />
            <div className="space-y-4 text-sm text-gray-700 font-sans leading-relaxed">
              <p>
                At Rosary, we believe in the holistic development of every child – academically, morally, socially and spiritually. Our mission is to empower students to become compassionate leaders and responsible citizens.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="font-heading font-bold text-navy-dark">Dr. Sr. Jasintha Quadras (FMM)</p>
            <p className="text-gray-500 text-xs mt-0.5">Principal</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full sm:w-2/5 flex items-end justify-end sm:justify-center relative mt-4 sm:mt-0">
          <div className="w-full aspect-[3/4] max-w-[200px] rounded-xl overflow-hidden relative shadow-md">
            <Image 
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sr-principle--removebg-preview.png"
              alt="Principal"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
