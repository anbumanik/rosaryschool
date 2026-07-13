import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2D52] pt-2">
      {/* Top gold accent line */}
      <div className="h-1 bg-[#D4AF37]" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image 
              src="https://ik.imagekit.io/d5lm3vdk3/New%20Folder/rosary%20school/rosary_logo1-2-removebg-preview.png" 
              alt="Rosary crest" 
              width={44} 
              height={44} 
            />
            <div>
              <p className="font-bold text-white text-lg leading-tight">ROSARY</p>
              <p className="text-[10px] text-white/60 leading-tight">
                Matriculation Hr. Sec. School<br />Chennai
              </p>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            A legacy of 75 Years in nurturing generations of confident leaders through holistic education and character building.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0F2D52] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links + Portals — side by side on mobile, separate columns on desktop */}
        <div className="grid grid-cols-2 md:contents gap-6 md:gap-0">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Academics</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Admissions</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Campus Life</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Achievements</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">News & Events</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="text-white font-bold mb-4">Portals</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Alumni</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Parent Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Student Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Staff Portal</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact column — fix map overflow */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <MapPin className="text-[#D4AF37] shrink-0 mt-0.5" size={18} />
              <a href="https://maps.app.goo.gl/hTk5xsKwymM21reC8" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                25, Santhome High Road,<br />
                Santhome, Chennai – 600 004,<br />
                Tamil Nadu, India
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Phone className="text-[#D4AF37] shrink-0" size={18} />
              <span>+91 44 2497 1098 / 2497 3099</span>
            </li>
            <li className="flex items-center gap-3 text-white/70 text-sm">
              <Mail className="text-[#D4AF37] shrink-0" size={18} />
              <a href="mailto:office@rosarychennai.com" className="hover:text-[#D4AF37] transition-colors">
                office@rosarychennai.com
              </a>
            </li>
          </ul>

          <div className="mt-4 rounded-lg overflow-hidden border border-white/10 w-full aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497362.6598203136!2d80.12033300000002!3d13.121612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52687f8fe94399%3A0x2725df5cd6a76e24!2sRosary%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sus!4v1783953369641!5m2!1sen!2sus"
              className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-5 flex flex-col items-center md:flex-row md:items-center md:justify-between text-xs text-white/50 text-center md:text-left gap-2 md:gap-0">
        <p>© {new Date().getFullYear()} Rosary Matriculation Hr. Sec. School. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
