"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6 font-semibold text-sm">
              <Trophy size={16} />
              <span>Hall of Fame</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Our <span className="text-gold">Achievements</span>
            </h2>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white/80 mb-12 border-l-4 border-gold pl-6 py-2">
              &quot;Excellence is not a skill, it is an attitude.&quot;
              <footer className="text-sm font-sans not-italic text-gold mt-4 font-semibold uppercase tracking-wider">— Ralph Marston</footer>
            </blockquote>

            <div className="space-y-6">
              <div className="flex items-center gap-6 glassmorphism-navy p-6 rounded-2xl border-l-4 border-l-gold">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Star className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">100%</h4>
                  <p className="text-white/70 font-medium">Board Exam Results</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 glassmorphism-navy p-6 rounded-2xl border-l-4 border-l-green">
                <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center shrink-0">
                  <Trophy className="text-green" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">State Level</h4>
                  <p className="text-white/70 font-medium">Sports & Athletics Winners</p>
                </div>
              </div>

              <div className="flex items-center gap-6 glassmorphism-navy p-6 rounded-2xl border-l-4 border-l-navy-light">
                <div className="w-12 h-12 rounded-full bg-navy-light/40 flex items-center justify-center shrink-0">
                  <Medal className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">University Toppers</h4>
                  <p className="text-white/70 font-medium">Alumni Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Trophy Display - 3D Render simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex justify-center items-center h-full"
          >
             <div className="relative w-80 h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl"></div>
                {/* Fallback image for 3D Trophy */}
                <div className="absolute inset-0 flex items-center justify-center z-10 text-gold opacity-50">
                   <Trophy size={200} strokeWidth={0.5} />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
