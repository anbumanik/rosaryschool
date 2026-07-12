"use client";

import { motion, useInView } from "framer-motion";
import { Award, Users, BookOpen, Trophy, Medal } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Award, value: "75+", label: "Years of legacy" },
  { icon: Users, value: "1000+", label: "Students" },
  { icon: BookOpen, value: "40+", label: "Faculty members" },
  { icon: Trophy, value: "100%", label: "Board results" },
  { icon: Medal, value: "25+", label: "Sports and clubs" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#0F2D52] py-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-5 w-full"
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={i} 
              variants={itemVariants} 
              className="flex items-center justify-center gap-3.5 px-3 py-4 md:py-0 border-r border-white/15 last:border-r-0 text-left"
            >
              <div className="w-9 h-9 rounded-[10px] bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col">
                <p className="text-[22px] font-bold text-white leading-none">{stat.value}</p>
                <p className="text-[11px] text-[#B9C4D6] mt-1">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
