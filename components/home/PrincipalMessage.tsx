"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark">
          A Message from the Principal
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10 h-full">
        {/* Principal Image */}
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

            {/* Preview (always visible) */}
            <div className="space-y-2 text-[13px] text-gray-700 font-sans leading-relaxed">
              <p className="font-semibold text-navy-dark">Dear Students, Parents, and Well-Wishers,</p>
              <p>Greetings to you all.</p>
              <p>
                Education is the most powerful tool we can give our children to shape their future and transform the
                world around them. At Rosary Matriculation, we believe that every child is unique, filled with
                potential, and capable of achieving great things when guided with care, discipline, and inspiration.
              </p>
            </div>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 text-[13px] text-gray-700 font-sans leading-relaxed mt-2">
                    <p>
                      We are proud to provide a strong academic foundation while also nurturing values such as
                      integrity, respect, perseverance, and compassion. We strive to create a learning environment
                      where students are encouraged to dream big, think independently, and grow into confident
                      individuals who contribute positively to society.
                    </p>
                    <p>
                      In today&apos;s ever-changing world, it is important that our children are not only knowledgeable
                      but also adaptable, responsible, and kind-hearted. Together with the support of parents, we aim
                      to guide our students to become future leaders who uphold strong values and make a meaningful
                      difference.
                    </p>
                    <p>
                      Let us join hands in inspiring young minds, shaping bright futures, and building a better
                      tomorrow.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Read Less Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-navy hover:text-gold transition-colors duration-300 group/btn mx-auto sm:mx-0"
            >
              {expanded ? (
                <>
                  Read Less
                  <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
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
