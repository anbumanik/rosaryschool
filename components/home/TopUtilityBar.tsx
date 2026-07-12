"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function TopUtilityBar() {
  return (
    <div className="w-full bg-[#0F2D52] text-gray-300 py-1.5 px-4 md:px-8 text-[11px] font-medium border-b border-white/10 flex items-center justify-end z-50 relative h-8">
      <div className="flex items-center space-x-3 md:space-x-4">
        <a href="#" className="hover:text-white transition-colors">Alumni</a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-white transition-colors">Parent Portal</a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-white transition-colors">Student Portal</a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-white transition-colors">Staff Login</a>
        <span className="text-gray-500">|</span>
        <button aria-label="Search" className="hover:text-white transition-colors flex items-center justify-center">
          <Search size={12} />
        </button>
      </div>
    </div>
  );
}
