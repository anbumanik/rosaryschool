import { Trophy, Star, Medal } from "lucide-react";

export default function StatsHighlight() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-around h-full min-h-[160px]">
      
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-lightBg border border-gray-100 flex items-center justify-center">
          <Star className="text-gold" size={18} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-navy-dark text-[15px] sm:text-base leading-tight">100%</h4>
          <p className="text-gray-500 text-[10px] sm:text-[11px] uppercase tracking-wide mt-0.5">Board results</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-lightBg border border-gray-100 flex items-center justify-center">
          <Trophy className="text-gold" size={18} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-navy-dark text-[15px] sm:text-base leading-tight">State</h4>
          <p className="text-gray-500 text-[10px] sm:text-[11px] uppercase tracking-wide mt-0.5">Winners</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-lightBg border border-gray-100 flex items-center justify-center">
          <Medal className="text-gold" size={18} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-navy-dark text-[15px] sm:text-base leading-tight">Toppers</h4>
          <p className="text-gray-500 text-[10px] sm:text-[11px] uppercase tracking-wide mt-0.5">Every year</p>
        </div>
      </div>

    </div>
  );
}
