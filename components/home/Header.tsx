"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "About Us", 
  "Academics", 
  "Admissions", 
  "Campus Life", 
  "Achievements", 
  "News & Events", 
  "Contact"
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full overflow-visible transition-all duration-300 ${
          scrolled
            ? "bg-[#0F2D52]/95 backdrop-blur-md shadow-lg py-2"
            : "bg-[#0F2D52] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/rosary_logo1-2-removebg-preview.png"
              alt="Rosary crest"
              width={scrolled ? 40 : 52}
              height={scrolled ? 40 : 52}
              className="transition-all duration-300"
            />
            <div>
              <p className="font-bold text-white text-lg leading-tight tracking-wide">
                ROSARY
              </p>
              <p className="text-[11px] text-white/70 leading-tight">
                Matriculation Hr. Sec. School<br />Chennai
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8 text-white text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link} href="#" className="relative group py-1">
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#D4AF37] text-[#0F2D52] font-bold rounded-full px-5 py-2.5 text-sm hover:brightness-105 transition">
              Enquire Now
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 w-full z-40 lg:hidden bg-[#0F2D52]/95 backdrop-blur-md border-t border-white/10 shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-white text-base font-medium hover:text-[#D4AF37] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button className="w-full bg-[#D4AF37] text-[#0F2D52] font-bold rounded-full px-5 py-3 text-sm hover:brightness-105 transition">
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
