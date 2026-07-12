"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lightBg/50 -skew-x-12 transform origin-top hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-4/5 sm:w-2/3 lg:w-4/12 relative mx-auto lg:mx-0"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl bg-gradient-to-b from-lightBg to-navy-light/10">
              <div className="absolute inset-0 bg-navy-light/5 z-10 mix-blend-multiply"></div>
              <Image 
                src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sr-principle--removebg-preview.png"
                alt="Dr. Sr. Jasintha Quadras (FMM) - Principal"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Gold Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-2xl -z-10 hidden sm:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-green rounded-2xl -z-10 hidden sm:block"></div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <Quote className="text-gold opacity-20 w-24 h-24 absolute -top-8 -left-8 -z-10 transform -rotate-6" />
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-dark mb-8">
              Welcome to <span className="text-gold">Rosary</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 font-sans leading-relaxed relative">
              <p>
                Education is not just about academic excellence; it is about character building, spiritual growth, and nurturing a compassionate heart. At Rosary Matriculation Higher Secondary School, we have stood by these principles for over 75 years.
              </p>
              <p>
                Our vision is to empower young minds with the knowledge and moral compass they need to navigate the complexities of tomorrow. We strive to create a holistic environment where every student feels valued, inspired, and challenged to achieve their highest potential.
              </p>
              <p className="font-medium text-navy-dark">
                As we step into a new era, we remain committed to our founding values while embracing modern methodologies to ensure our students are future-ready.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
              <div>
                <p className="font-heading font-extrabold text-navy text-xl">Dr. Sr. Jasintha Quadras (FMM)</p>
                <p className="text-gold font-semibold uppercase tracking-wider text-sm mt-1">Principal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
