"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Rosary has been a second home for my children. The school focuses on all-round development and the values they inculcate are truly commendable.",
    role: "- Parent of Class XII Student",
  },
  {
    id: 2,
    quote: "The dedication of the teachers and the robust curriculum have shaped my daughter into a confident and capable individual ready for the world.",
    role: "- Parent of Class X Student",
  },
  {
    id: 3,
    quote: "Rosary provided not just education, but a second home where moral values and character building were given equal importance as academics.",
    role: "- Alumnus (Batch of 2018)",
  },
  {
    id: 4,
    quote: "The state-of-art facilities and dedicated faculty have made learning a joy. My son looks forward to going to school every single day.",
    role: "- Parent of Class VIII Student",
  },
  {
    id: 5,
    quote: "Extracurriculars are highly encouraged here. The balance between sports, arts, and academics is what sets Rosary apart.",
    role: "- Parent of Class XI Student",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-full min-h-[280px] bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-navy-dark">Testimonial</h2>
      </div>

      <div className="flex flex-col flex-1 relative">
        <Quote className="text-navy-dark w-10 h-10 mb-4 fill-navy-dark" strokeWidth={0} />
        
        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <p className="text-[13.5px] sm:text-[14px] text-gray-700 font-medium leading-[1.8] mb-6">
                {testimonials[current].quote}
              </p>
              
              <div className="mt-auto">
                <p className="text-sm font-bold text-navy-dark">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-5 pt-3 border-t border-gray-100">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === idx ? "bg-navy-dark" : "bg-gray-200 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
