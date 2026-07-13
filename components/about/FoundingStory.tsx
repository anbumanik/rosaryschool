"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react";

const fullText = [
  "The seal of our educational institution represents a ship sailing on stormy water led on by a star. The ship is symbolic of a student's life guided amidst the tempests by the light of the star of the sea. Sailing on the sea of life, the ship's anchor which stands for charity, brings it into the harbour of truth.",
  "To be born at God's will, a blessing and to grow in His grace a privilege.",
  "19th June 1950 is a significant day in the annals of Rosary Matriculation Girls Higher Secondary School as it saw the birth of this highly esteemed institution in response to the wishes of many parents in Chennai to give their children education through English medium.",
  "Rosary Matriculation School is run by the Institute of the Franciscan Missionaries of Mary — a society registered under the Societies Registration Act, having its office at Chennai.",
  "An atmosphere of joyous freedom, conducive to personality development and fulfilment through self-control and self-direction, leads to spontaneous involvement of all pupils in the organisation and discipline of the school.",
];

export default function FoundingStory() {
  const [expanded, setExpanded] = useState(false);

  // Show first 2 paragraphs as preview, rest expand on Read More
  const preview = fullText.slice(0, 2);
  const more = fullText.slice(2);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-start">
      {/* Left: text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-navy-dark mb-5">
          Rosary Matriculation Higher Secondary School
        </h2>

        {/* Preview paragraphs (always visible) */}
        <div className="space-y-3 text-[13.5px] text-gray-600 leading-relaxed">
          {preview.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Expandable paragraphs */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="more"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 text-[13.5px] text-gray-600 leading-relaxed mt-3">
                {more.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More / Less toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-navy-dark hover:text-[#D4AF37] transition-colors duration-300 group/btn"
        >
          {expanded ? (
            <>
              Read Less
              <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" />
            </>
          ) : (
            <>
              Read More
              <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
      </motion.div>

      {/* Right: stat card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-soft p-8 flex flex-col items-center justify-center text-center gap-3"
      >
        <div className="w-12 h-12 rounded-full bg-[#F5F7FA] border border-gray-200 flex items-center justify-center">
          <CalendarDays size={22} className="text-[#D4AF37]" />
        </div>
        <p className="text-4xl font-heading font-black text-navy-dark tracking-tight">1950</p>
        <p className="text-gray-400 text-xs font-medium max-w-[160px] leading-relaxed">
          Founded to provide English medium education
        </p>
      </motion.div>
    </section>
  );
}
