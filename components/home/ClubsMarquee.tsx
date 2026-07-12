import { Book, Shield, Star, PenTool, ScrollText, Calculator, Palette, Leaf } from "lucide-react";

const clubs = [
  { name: "GUIDES CLUB", Icon: Book, color: "text-blue-600" },
  { name: "NSS CLUB", Icon: Star, color: "text-red-600" },
  { name: "RSP CLUB", Icon: Shield, color: "text-gray-800" },
  { name: "ENGLISH LITERARY", Icon: PenTool, color: "text-indigo-600" },
  { name: "TAMIL LITERARY", Icon: ScrollText, color: "text-orange-600" },
  { name: "MATH CLUB", Icon: Calculator, color: "text-blue-500" },
  { name: "ARTS & CRAFTS", Icon: Palette, color: "text-pink-500" },
  { name: "ECO CLUB", Icon: Leaf, color: "text-green-600" },
];

export default function ClubsMarquee() {
  // Duplicating the array multiple times to ensure the marquee fills the screen and loops seamlessly
  const marqueeItems = [...clubs, ...clubs, ...clubs, ...clubs, ...clubs, ...clubs];

  return (
    <section className="py-16 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-heading font-extrabold text-navy-dark">Student Clubs</h2>
        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full flex overflow-hidden py-4">
        {/* Overlay gradients for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((club, index) => (
            <div 
              key={index} 
              className="relative w-48 sm:w-64 h-16 sm:h-24 mx-6 sm:mx-8 border border-gray-200 sm:border-2 rounded-xl flex items-center justify-center bg-lightBg flex-shrink-0 cursor-pointer group hover:border-gold transition-colors"
            >
              {/* Logo overflowing the left side */}
              <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border border-gray-100 sm:border-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                {/* I am using placeholder icons here since we don't have the image URLs yet. 
                    You can replace these with <Image src="..." /> later! */}
                <club.Icon className={`${club.color} w-5 h-5 sm:w-[30px] sm:h-[30px]`} />
              </div>
              
              <h3 className="text-navy font-bold text-[13px] sm:text-lg ml-4 sm:ml-6">{club.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
