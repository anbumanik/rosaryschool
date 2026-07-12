"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden relative shadow-2xl bg-navy flex flex-col lg:flex-row"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay hidden lg:block"></div>
          <div className="absolute inset-0 bg-navy-gradient opacity-90"></div>

          {/* Image side (mobile visible, desktop left) */}
          <div className="w-full lg:w-5/12 h-64 lg:h-auto relative z-10 hidden md:block">
            <Image 
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school4.jpg" 
              alt="Future Leaders at Rosary School" 
              fill 
              className="object-cover border-r border-white/10" 
            />
          </div>

          {/* Content side */}
          <div className="w-full lg:w-7/12 p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-widest mb-6 self-start animate-pulse">
              Limited Seats Available
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
              Admissions Open <span className="text-gold">2026-27</span>
            </h2>
            
            <p className="text-lg text-white/80 font-medium mb-10 max-w-xl">
              Begin your child&apos;s journey of excellence with us. Join the Rosary family and be part of our 75-year legacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#"
                className="group flex items-center justify-center px-8 py-4 text-sm font-bold text-navy bg-gold rounded-full hover:bg-gold-light hover:shadow-glow transition-all duration-300"
              >
                Apply Online
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link 
                href="#"
                className="group flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-transparent rounded-full border border-white/30 hover:bg-white hover:text-navy transition-all duration-300"
              >
                <Download className="mr-2" size={18} />
                Download Prospectus
              </Link>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
