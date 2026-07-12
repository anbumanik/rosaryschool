"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Admissions", href: "#" },
  { name: "Campus Life", href: "#" },
  { name: "Achievements", href: "#" },
  { name: "News & Events", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-soft py-3"
          : "bg-navy py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group -ml-2 md:-ml-4">
          <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0 group-hover:scale-105 transition-transform drop-shadow-sm">
            <Image src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/rosary_logo1-2-removebg-preview.png" alt="Rosary School Crest" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-extrabold text-lg md:text-xl leading-tight tracking-tight">
              ROSARY
            </span>
            <span className="text-gray-300 text-[10px] md:text-xs font-medium leading-tight">
              Matriculation Hr. Sec. School<br/>
              Chennai
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center lg:space-x-0 xl:space-x-2 flex-1 justify-center mx-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white font-medium text-[13px] xl:text-sm px-2 xl:px-3 py-2 rounded-full hover:bg-navy-light transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-navy bg-gold rounded-full hover:bg-gold-light hover:shadow-glow transition-all duration-300"
          >
            ENQUIRE NOW
          </Link>
          
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark border-t border-navy-light overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-200 hover:bg-navy hover:text-white rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#"
                  className="block w-full text-center px-6 py-3 text-base font-semibold text-navy bg-gold rounded-full"
                >
                  ENQUIRE NOW
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
