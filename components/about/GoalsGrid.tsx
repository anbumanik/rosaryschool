"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Sun,
  UserRound,
  Scale,
  Leaf,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Sprout,
  Recycle,
  Home,
} from "lucide-react";

const goals = [
  {
    icon: HeartHandshake,
    title: "Communal Harmony",
    description: "Respect for all religions and classes of people.",
  },
  {
    icon: Sun,
    title: "Faith Based Philosophy",
    description: "A sound philosophy of life rooted in faith in God.",
  },
  {
    icon: UserRound,
    title: "Respect for the Person",
    description: "A deep respect for every human being.",
  },
  {
    icon: Scale,
    title: "Core Values",
    description: "Truth, love, justice, freedom and peace.",
  },
  {
    icon: Leaf,
    title: "Harmony with Nature",
    description: "Right relationships among people and nature.",
  },
  {
    icon: Briefcase,
    title: "Professional Readiness",
    description: "Women who fulfil duties with a strong sense of citizenship.",
  },
  {
    icon: ShieldCheck,
    title: "Human Dignity",
    description: "Upholding human rights and dignity for all.",
  },
  {
    icon: GraduationCap,
    title: "Academic Competence",
    description: "Building women of character and responsibility.",
  },
  {
    icon: Sprout,
    title: "Agents of Change",
    description: "Fostering justice, peace and integrity of creation.",
  },
  {
    icon: Recycle,
    title: "The Ethic of Enough",
    description: "Living by sufficiency as a core value.",
  },
  {
    icon: Home,
    title: "Character and Family",
    description: "Educating girls to become women of character, good wives and responsible mothers.",
  },
];

export default function GoalsGrid() {
  return (
    <section>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-navy-dark mb-3">
          Goals and Objectives
        </h2>
        <div className="w-11 h-[3px] bg-[#D4AF37] rounded-full" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-gray-100/80 p-[1.1rem] flex flex-col gap-3 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300 group"
          >
            {/* Icon badge */}
            <div className="w-[34px] h-[34px] rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
              <goal.icon size={17} className="text-[#D4AF37]" strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[14px] font-heading font-bold text-navy-dark mb-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                {goal.title}
              </h3>
              <p className="text-[12.5px] text-gray-500 leading-relaxed">{goal.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
