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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-dark">News & Events</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 hidden sm:flex"
          >
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-navy hover:border-navy transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-navy hover:border-navy transition-colors">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-navy text-white rounded-xl overflow-hidden flex flex-col text-center shadow-lg w-16">
                  <span className="font-heading font-bold text-xl bg-navy-dark py-2">{item.day}</span>
                  <span className="text-xs font-bold py-1 bg-navy tracking-widest">{item.month}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-navy-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {item.excerpt}
              </p>
              
              <Link href="#" className="mt-auto inline-flex items-center text-sm font-bold text-navy hover:text-gold transition-colors">
                READ MORE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
           <button className="px-6 py-3 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-colors">
             View All Events
           </button>
        </div>

      </div>
    </section>
  );
}
