"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Users, BookOpen, Trophy, Flag } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: GraduationCap, end: 75, suffix: "+", label: "Years of Legacy" },
  { icon: Users, end: 5000, suffix: "+", label: "Students" },
  { icon: BookOpen, end: 300, suffix: "+", label: "Faculty Members" },
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
    <span className="font-heading font-bold text-3xl sm:text-4xl text-white">
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
    <div className="bg-navy-dark w-full py-16 relative z-20 shadow-xl border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300 border border-navy-light group-hover:border-gold">
                <stat.icon className="text-gold" size={32} strokeWidth={1.5} />
              </div>
              <Counter end={stat.end} suffix={stat.suffix} inView={isInView} />
              <span className="text-white/70 font-medium text-sm mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
