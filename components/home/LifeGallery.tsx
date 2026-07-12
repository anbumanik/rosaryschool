"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, MonitorPlay, Dumbbell, Palette } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    id: 1,
    title: "Smart Classrooms",
    description: "Interactive learning environments equipped with modern digital tools.",
    icon: MonitorPlay,
    bg: "bg-navy-light",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school5.jpg"
  },
  {
    id: 2,
    title: "Science Labs",
    description: "State-of-the-art laboratories to foster practical learning and curiosity.",
    icon: Microscope,
    bg: "bg-green",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school%206.jpg"
  },
  {
    id: 3,
    title: "Sports Excellence",
    description: "Comprehensive facilities promoting physical fitness and teamwork.",
    icon: Dumbbell,
    bg: "bg-gold",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/sport.jpg"
  },
  {
    id: 4,
    title: "Cultural Activities",
    description: "Nurturing creativity through arts, music, and dramatic performances.",
    icon: Palette,
    bg: "bg-navy-dark",
    image: "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/cll.jpeg"
  },
];

export default function LifeGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      const firstChild = scrollContainer.children[0] as HTMLElement;
      if (!firstChild) return;
      
      const itemWidth = firstChild.offsetWidth + 32; // item width + gap-8 (32px)
      
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full relative flex flex-col">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">Campus Experience</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-dark">Life @ Rosary</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="text-navy hover:text-gold transition-colors font-semibold flex items-center group">
            Explore Campus <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden flex-1">
        {/* Horizontal scroll container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory no-scrollbar h-full"
        >
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative min-w-[260px] w-[260px] md:min-w-[320px] md:w-[320px] h-[350px] md:h-[400px] rounded-3xl overflow-hidden group snap-center cursor-pointer flex-shrink-0 shadow-sm"
              style={{
                perspective: 1000
              }}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-700 ease-out z-0">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200"></div>
                )}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
              
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-6 text-white shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100`}>
                  <item.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {item.title}
                  <span className="block w-0 h-1 bg-gold mt-4 group-hover:w-16 transition-all duration-500 ease-out"></span>
                </h3>
                
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
