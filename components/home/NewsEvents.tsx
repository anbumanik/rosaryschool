"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Megaphone } from "lucide-react";

const newsItems = [
  {
    id: 1,
    tag: "EVENT",
    title: "Platinum Jubilee Celebrations",
    excerpt: "75 years of excellence — a year-long series of landmark events begins this August.",
    day: "15",
    month: "AUG",
    color: "from-navy to-navy-light",
  },
  {
    id: 2,
    tag: "ACHIEVEMENT",
    title: "State Science Exhibition Winners",
    excerpt: "Our students secured 1st place with their innovative smart city model.",
    day: "02",
    month: "SEP",
    color: "from-[#1A4175] to-navy",
  },
  {
    id: 3,
    tag: "SPORTS",
    title: "Annual Sports Meet 2024",
    excerpt: "The most awaited event of the year returns to the main campus ground.",
    day: "28",
    month: "SEP",
    color: "from-navy-dark to-navy",
  },
];

export default function NewsEvents() {
  return (
    <section className="h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <Megaphone size={18} className="text-gold" />
          <h2 className="text-xl font-heading font-bold text-navy-dark">News & Events</h2>
        </div>
        <a
          href="#"
          className="text-[11px] font-bold text-navy-dark/50 hover:text-gold transition-colors tracking-widest uppercase flex items-center gap-1 group"
        >
          View All <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 flex-1">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex items-center gap-4 rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Date Badge */}
            <div
              className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex flex-col items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-105 transition-transform duration-300`}
            >
              <span className="text-xl font-heading font-black text-white leading-none">{item.day}</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-gold mt-0.5">{item.month}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 py-1">
              <span className="text-[9px] font-black tracking-[0.15em] text-gold uppercase mb-1 block">
                {item.tag}
              </span>
              <h3 className="text-[13.5px] font-heading font-bold text-navy-dark mb-1 group-hover:text-gold transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[11px] line-clamp-1 leading-relaxed">{item.excerpt}</p>
            </div>

            {/* Arrow */}
            <ArrowRight
              size={14}
              className="text-gray-300 group-hover:text-gold group-hover:translate-x-0.5 transition-all flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <a
          href="#"
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-lightBg hover:bg-navy-dark hover:text-white text-navy-dark text-[12px] font-bold tracking-widest uppercase transition-all duration-300 group"
        >
          <Calendar size={14} className="group-hover:text-gold transition-colors" />
          Full Calendar
        </a>
      </div>
    </section>
  );
}
