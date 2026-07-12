"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The dedication of the teachers and the robust curriculum have shaped my daughter into a confident and capable individual ready for the world.",
    author: "Mrs. Anjali R.",
    role: "Parent of Class X Student",
  },
  {
    id: 2,
    quote: "Rosary provided not just education, but a second home where moral values and character building were given equal importance as academics.",
    author: "Mr. Karthik S.",
    role: "Alumnus (Batch of 2018)",
  },
  {
    id: 3,
    quote: "Seeing the 75-year legacy continue with such modern facilities and dedicated staff assures me that we made the right choice for our child's future.",
    author: "Dr. Lakshmi V.",
    role: "Parent of Class XII Student",
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 bg-lightBg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <Quote className="text-gold/20 w-32 h-32 mx-auto mb-8" />
        
        <div className="relative h-[250px] sm:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-navy-dark leading-relaxed mb-8 font-sans">
                &quot;{testimonials[current].quote}&quot;
              </p>
              <div>
                <h4 className="font-heading font-bold text-lg text-navy">{testimonials[current].author}</h4>
                <span className="text-sm font-semibold text-gold uppercase tracking-wider">{testimonials[current].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx ? "bg-gold w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
