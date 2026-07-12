"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Platinum Jubilee Celebrations Announced",
    excerpt: "Join us in celebrating 75 years of academic excellence and holistic development as we unveil a year-long series of events.",
    day: "15",
    month: "AUG",
    image: "bg-navy-light",
  },
  {
    id: 2,
    title: "State Level Science Exhibition Winners",
    excerpt: "Our senior students secured the first place in the State Level Science Exhibition with their innovative smart city model.",
    day: "02",
    month: "SEP",
    image: "bg-green",
  },
  {
    id: 3,
    title: "Annual Sports Meet 2024",
    excerpt: "Get ready for the most awaited event of the year. The Annual Sports Meet will be held at the main campus ground.",
    day: "28",
    month: "SEP",
    image: "bg-gold",
  },
];

export default function NewsEvents() {
  return (
    <section className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark">News & Events</h2>
        <a href="#" className="text-xs font-bold text-gray-500 hover:text-navy transition-colors tracking-widest uppercase">
          View All
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1 justify-between">
        {newsItems.map((item, index) => (
          <div key={item.id} className="flex gap-3 group cursor-pointer">
            {/* Date Badge */}
            <div className="w-12 h-12 bg-navy-dark text-white rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-gold transition-colors duration-300">
              <span className="text-base font-heading font-bold leading-none">{item.day}</span>
              <span className="text-[9px] uppercase font-bold tracking-wider mt-0.5">{item.month}</span>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-[15px] font-heading font-bold text-navy-dark mb-1 group-hover:text-gold transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed">
                {item.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination arrows */}
      <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-100">
        <button className="text-gray-400 hover:text-navy transition-colors">
          <ArrowLeft size={16} />
        </button>
        <div className="flex gap-1.5">
           <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
           <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
           <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        </div>
        <button className="text-gray-400 hover:text-navy transition-colors">
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
