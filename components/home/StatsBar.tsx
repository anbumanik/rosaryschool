"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, BookOpen, Trophy, Flag } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: GraduationCap, end: 75, suffix: "+", label: "Years of Legacy" },
  { icon: Users, end: 1000, suffix: "+", label: "Students" },
  { icon: BookOpen, end: 40, suffix: "+", label: "Faculty Members" },
  { icon: Trophy, end: 100, suffix: "%", label: "Board Results" },
  { icon: Flag, end: 25, suffix: "+", label: "Sports & Clubs" },
];

function Counter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, inView]);

  return (
    <span className="font-heading font-bold text-2xl lg:text-3xl text-white">
      {count}{suffix}
    </span>
  );
}

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
    <div className="bg-navy-dark w-full py-8 relative z-20 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 divide-x-0 lg:divide-x lg:divide-navy-light"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 group px-4">
              <div className="w-12 h-12 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={36} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <Counter end={stat.end} suffix={stat.suffix} inView={isInView} />
                <span className="text-white/70 font-medium text-xs mt-0.5">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
