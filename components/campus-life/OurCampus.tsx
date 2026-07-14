"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const campusImages = [
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school2.jpg?updatedAt=1783868987058",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school3.jpg?updatedAt=1783868987174",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/about-us-3-image-1.png?updatedAt=1783955366383",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school5.jpg?updatedAt=1783868987223",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school%206.jpg?updatedAt=1783868987360",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/school4.jpg?updatedAt=1783868987183",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/007.jpg",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/011.jpg",
  "https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/schi7.jpg"
];

// Helper to assign dynamic spans for a masonry/bento look
const getGridSpan = (index: number) => {
  if (index === 0) return "col-span-2 md:row-span-2";
  if (index === 3) return "col-span-2 md:row-span-1";
  if (index === 6) return "col-span-2 md:row-span-2";
  if (index === 7) return "col-span-1 row-span-2 md:row-span-2";
  return "col-span-1 row-span-1 md:row-span-1";
};

// 3D Tilt Card Component
const TiltCard = ({ src, index, className }: { src: string; index: number; className: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only reset the 3D tilt if the user is using a mouse. 
    // On touch devices, leave the tilt so the "hover" effect remains after a tap.
    if (e.pointerType === "mouse") {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => {}} // Empty onClick forces iOS Safari to trigger CSS :hover on tap
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-xl md:rounded-2xl overflow-hidden group shadow-soft hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        <Image
          src={src}
          alt={`Campus View ${index + 1}`}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Elegant overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-xl md:rounded-2xl transition-colors duration-500 pointer-events-none mix-blend-overlay" />
      </div>
    </motion.div>
  );
};

export default function OurCampus() {
  return (
    <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 perspective-[1000px]">
      <div className="text-center mb-10 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black tracking-[0.22em] text-[#D4AF37] uppercase mb-3"
        >
          Explore Our Grounds
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-navy-dark"
        >
          Our School Campus
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-16 h-[3px] bg-[#D4AF37] rounded-full mx-auto mt-4 md:mt-6"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-6" style={{ perspective: "1000px" }}>
        {campusImages.map((src, index) => (
          <TiltCard key={index} src={src} index={index} className={getGridSpan(index)} />
        ))}
      </div>
    </section>
  );
}
