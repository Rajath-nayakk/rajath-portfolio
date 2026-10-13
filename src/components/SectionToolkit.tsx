"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/data/portfolioData";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Boxes,
} from "lucide-react";

type CategoryFilter = "All" | "Frontend" | "Backend" | "Database" | "Tools" | "Interests";

export default function SectionToolkit() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories: CategoryFilter[] = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Interests",
  ];

  const filteredSkills =
    activeTab === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-3.5 h-3.5 text-[#467BFF]" />;
      case "Backend":
        return <Server className="w-3.5 h-3.5 text-emerald-400" />;
      case "Database":
        return <Database className="w-3.5 h-3.5 text-amber-400" />;
      case "Tools":
        return <Wrench className="w-3.5 h-3.5 text-purple-400" />;
      case "Interests":
        return <Sparkles className="w-3.5 h-3.5 text-pink-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-white" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-8 bg-[#08090B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#467BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header: Directional Entrance From Right (x: 60 -> 0) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono tracking-widest text-[#969BA5]">
              <span className="text-[#467BFF]">04</span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="uppercase">MY TOOLKIT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold uppercase tracking-tight text-[#F5F5F0]">
              THE TOOLS BEHIND <br />
              <span className="text-[#467BFF]">THE IDEAS.</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-mono text-[#969BA5] max-w-xs sm:text-right"
          >
            Practiced across full-stack applications, distributed databases, and emerging AI models.
          </motion.p>
        </motion.div>

        {/* Filter Categories Pill Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#467BFF] text-white shadow-[0_0_20px_rgba(70,123,255,0.4)]"
                  : "bg-[#12151B] text-[#969BA5] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative p-6 rounded-2xl bg-[#12151B]/80 hover:bg-[#161B26] border border-white/10 hover:border-[#467BFF]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Category marker and icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-wider uppercase text-[#969BA5]">
                      {getCategoryIcon(skill.category)}
                      {skill.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/30 group-hover:text-[#467BFF] transition-colors">
                      [0{index + 1}]
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-heading font-semibold text-[#F5F5F0] group-hover:text-white transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {/* Grounded description */}
                  <p className="text-xs sm:text-sm text-[#969BA5] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>PRODUCTION READY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#467BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
