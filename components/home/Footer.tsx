import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t-4 border-gold pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 shrink-0 drop-shadow-sm">
                <Image src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/rosary_logo1-2-removebg-preview.png" alt="Rosary School Crest" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-lg leading-tight">
                  ROSARY
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A legacy of 75 Years in nurturing generations of confident leaders through holistic education and character building.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Academics</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Admissions</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Campus Life</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Achievements</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">News & Events</Link></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Portals</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Alumni</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Parent Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Student Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Staff Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-gold transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="text-gold shrink-0 mt-0.5" size={18} />
                <a href="https://maps.app.goo.gl/9HkG7Dy61MR3yadGA" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  25, Santhome High Road,<br />
                  Santhome, Chennai – 600 004,<br />
                  Tamil Nadu, India
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="text-gold shrink-0" size={18} />
                <span>+91 44 2497 1098 / 2497 3099</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:office@rosarychennai.com" className="hover:text-gold transition-colors">
                  office@rosarychennai.com
                </a>
              </li>
            </ul>
            
            {/* Map Thumbnail */}
            <a href="https://maps.app.goo.gl/9HkG7Dy61MR3yadGA" target="_blank" rel="noopener noreferrer" className="mt-6 w-full h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group relative block">
              <div className="absolute inset-0 bg-navy-light/40 mix-blend-overlay group-hover:bg-navy-light/20 transition-colors"></div>
              <MapPin size={32} className="text-gold/50 group-hover:scale-110 transition-transform group-hover:text-gold" />
              <span className="absolute bottom-2 text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">View on Google Maps</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Rosary Matriculation Hr. Sec. School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
