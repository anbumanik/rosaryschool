"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const fullText = [
  "Born on 21st May 1839 in Nantes, France, into a noble Christian family, Helene Marie Philippine de Chappotin, in religion Mary of the Passion, was an exceptional woman marked by an inextinguishable love of the absolute. She was gifted with an uncommon superior intelligence, an open mind and resolute will given fully to God.",
  "The Institute of the Franciscan Missionaries of Mary was founded in 1877 by Blessed Mary of the Passion at Ootacamund – Tamil Nadu. It is an international religious congregation of women spread across the five continents around the globe.",
  "As a young sister, Mother Mary of the Passion came to India and had spent 11 years of her life at the service of the people of Tamil Nadu, mostly among the women and the children. The zeal of the foundress knew no bounds in responding to the needs of the poor and the abandoned.",
  "She was particularly interested in the promotion of women and their empowerment. Her intense activity drew its dynamism from contemplation of the great mysteries of faith.",
  "We discover Christ’s message of love through their life of prayer and work and transmit this to our sisters and brothers by our varied activities. Our preference is to work for the poor and the marginalised, whoever they may be, to create a more just and human society.",
  "One of our major activities in India is providing formal education at all levels. We commit ourselves to serve the economically weak, socially backward and needy. Students are admitted irrespective of caste and creed.",
];

export default function OurFoundress() {
  const [expanded, setExpanded] = useState(false);

  // Show first 2 paragraphs as preview, rest expand on Read More
  const preview = fullText.slice(0, 2);
  const more = fullText.slice(2);

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center">
        {/* Left: Image with pop-up effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          className="relative w-full max-w-[380px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-soft group"
        >
          <Image
            src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/about.jpg"
            alt="Our Foundress - Blessed Mary of the Passion"
            fill
            unoptimized
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Decorative Gold Border Overlay */}
          <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-3xl pointer-events-none" />
        </motion.div>

        {/* Right: Text with Read More */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[10px] font-black tracking-[0.22em] text-[#D4AF37] uppercase mb-2">
            Inspiration & Vision
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy-dark mb-5">
            Our Foundress
          </h2>
          <div className="w-11 h-[3px] bg-[#D4AF37] rounded-full mb-6" />

          {/* Preview paragraphs */}
          <div className="space-y-4 text-[13.5px] text-gray-600 leading-relaxed">
            {preview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Expandable paragraphs */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="more"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 text-[13.5px] text-gray-600 leading-relaxed mt-4">
                  {more.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Read More / Less toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-navy-dark px-5 py-2.5 rounded-full hover:bg-[#D4AF37] hover:text-navy-dark transition-colors duration-300 shadow-sm group/btn"
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
        </motion.div>
      </div>
    </section>
  );
}
