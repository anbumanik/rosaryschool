"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const principals = [
  {
    name: "Dr. Sr. Jasintha Quadras (FMM)",
    tenure: "2026 – Present",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sr-principle--removebg-preview.png?updatedAt=1783869484891",
    imgClass: "scale-125 origin-bottom",
  },
  {
    name: "Sr. Vensi Sahayarani (FMM)",
    tenure: "2022 – 2026",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/26.png",
    imgClass: "",
  },
  {
    name: "Sr. Mary Zacharia (FMM)",
    tenure: "2011 – 2022",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/22.png",
    imgClass: "",
  },
  {
    name: "Sr. Sriyapushpam (FMM)",
    tenure: "2009 – 2011",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/11.png",
    imgClass: "",
  },
  {
    name: "Sr. Mary Zacharia (FMM)",
    tenure: "2002 – 2009",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/9.png",
    imgClass: "",
  },
  {
    name: "Sr. Leena D'Souza (FMM)",
    tenure: "1997 – 2002",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/2.png",
    imgClass: "",
  },
  {
    name: "Sr. Fatima Anthonimuthu (FMM)",
    tenure: "1995 – 1997",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/97.png",
    imgClass: "",
  },
  {
    name: "Sr. Leena D'Souza (FMM)",
    tenure: "1989 – 1995",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/2.png",
    imgClass: "",
  },
  {
    name: "Sr. Teresita Polycarpus (FMM)",
    tenure: "1983 – 1989",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/89.png",
    imgClass: "",
  },
  {
    name: "Sr. Edwin",
    tenure: "1981 – 1983",
    image: "",
    imgClass: "",
  },
  {
    name: "Ms. Lilly Muthayya",
    tenure: "1978 – 1981",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/81.png",
    imgClass: "",
  },
  {
    name: "Sr. Celine Xavier (FMM)",
    tenure: "1972 – 1978",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/78.png",
    imgClass: "",
  },
  {
    name: "Mother John Houghton (FMM)",
    tenure: "1971 – 1972",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/72.png",
    imgClass: "",
  },
  {
    name: "Mother Teresa Xavier (FMM)",
    tenure: "1956 – 1971",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/71.png",
    imgClass: "",
  },
  {
    name: "Sr. Breeda (FMM)",
    tenure: "1955 – 1956",
    image: "",
    imgClass: "",
  },
  {
    name: "Sr. Anne Marie Dayle (FMM)",
    tenure: "1950 – 1955",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/55.png",
    imgClass: "",
  },
];

import { useState } from "react";

export default function OurPrincipals() {
  const [showAll, setShowAll] = useState(false);

  // Common card renderer
  const renderCard = (person: any, index: number, isGrid = false) => (
    <motion.div
      key={index}
      initial={isGrid ? { opacity: 0, y: 20 } : false}
      animate={isGrid ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.4, delay: isGrid ? index * 0.05 : 0 }}
      className={`bg-white border border-gray-100 rounded-2xl shadow-soft overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
        isGrid ? "w-[160px] sm:w-[180px]" : "w-[160px] sm:w-[180px] shrink-0"
      }`}
    >
      {/* Photo or Placeholder */}
      <div className="relative w-full h-48 bg-[#F5F7FA] overflow-hidden flex items-center justify-center">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className={`object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ${person.imgClass}`}
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/40 flex items-center justify-center">
            <span className="text-3xl font-heading font-black text-[#D4AF37] text-center px-2 leading-none">
              {person.name.includes(" ") ? person.name.split(" ")[1][0] : person.name[0]}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 text-center border-t border-gray-100 h-full bg-white">
        <p className="font-heading font-bold text-navy-dark text-[12px] leading-snug">
          {person.name}
        </p>
        <p className="text-[10.5px] text-[#D4AF37] font-bold mt-1 tracking-wide">
          {person.tenure}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className="text-[10px] font-black tracking-[0.22em] text-[#D4AF37] uppercase mb-2">
          Words About Us
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy-dark">
          Our Principals
        </h2>
        <div className="w-11 h-[3px] bg-[#D4AF37] rounded-full mx-auto mt-3" />
      </motion.div>

      {/* Content Area */}
      <div className="transition-all duration-500">
        {showAll ? (
          /* Grid View - All Principals ordered */
          <div className="flex flex-wrap justify-center gap-5 py-4">
            {principals.map((person, index) => renderCard(person, index, true))}
          </div>
        ) : (
          /* Marquee Wrapper - Infinite Scroll */
          <div className="relative w-full overflow-hidden flex items-center py-4">
            {/* Edge fade gradients for seamless look */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5">
              {/* Duplicate the array twice for seamless infinite scrolling */}
              {[...principals, ...principals].map((person, index) => renderCard(person, index, false))}
            </div>
          </div>
        )}
      </div>

      {/* View All / View Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2.5 rounded-full border border-[#0F2D52] text-[#0F2D52] text-[13px] font-bold hover:bg-[#0F2D52] hover:text-white transition-colors duration-300 shadow-sm"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
}
