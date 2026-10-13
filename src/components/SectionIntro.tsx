"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, PHILOSOPHY_PILLARS } from "@/data/portfolioData";
import { ArrowDownRight, Compass, Terminal, Cpu, Sparkles } from "lucide-react";

export default function SectionIntro() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-8 bg-[#08090B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#467BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono tracking-widest text-[#969BA5]">
          <span className="text-[#467BFF]">01</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="uppercase">THE INTRODUCTION</span>
        </div>

        {/* Oversized Cinematic Typography Statement */}
        <div className="space-y-2 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight text-[#F5F5F0]"
          >
            NOT JUST A <span className="text-[#467BFF]">DEVELOPER.</span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight text-white/30 hover:text-white/80 transition-colors cursor-default"
          >
            AN EXPLORER OF IDEAS.
          </motion.h2>
        </div>

        {/* Editorial Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#F5F5F0] leading-relaxed">
              {PERSONAL_INFO.bioShort}
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4 text-sm sm:text-base text-[#969BA5] leading-relaxed">
              <p>
                My journey began with a curiosity about how software shapes interaction in the real world. As a third-year undergraduate at Sahyadri College of Engineering and Management, I actively merge engineering discipline with creative frontend finesse.
              </p>
              <p>
                Whether designing AI-driven collaborative platforms like <strong className="text-white">HackHub</strong> or crafting automated financial intelligence tools like <strong className="text-white">Fin Pilot</strong>, I prioritize clean architecture, performant execution, and thoughtful user experience.
              </p>
            </div>

            {/* Quick Credentials Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-[#12151B] border border-white/10">
                <div className="text-xs font-mono text-[#969BA5] uppercase mb-1">Status</div>
                <div className="text-sm font-semibold text-[#F5F5F0]">3rd Year CSE</div>
                <div className="text-[11px] text-[#467BFF] font-mono mt-0.5">Undergraduate</div>
              </div>

              <div className="p-4 rounded-xl bg-[#12151B] border border-white/10">
                <div className="text-xs font-mono text-[#969BA5] uppercase mb-1">Institution</div>
                <div className="text-sm font-semibold text-[#F5F5F0] truncate" title="Sahyadri College of Engg.">Sahyadri College</div>
                <div className="text-[11px] text-[#467BFF] font-mono mt-0.5">Mangaluru, IN</div>
              </div>

              <div className="p-4 rounded-xl bg-[#12151B] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-[#969BA5] uppercase mb-1">Focus</div>
                <div className="text-sm font-semibold text-[#F5F5F0]">Full-Stack + AI</div>
                <div className="text-[11px] text-[#467BFF] font-mono mt-0.5">Web Systems</div>
              </div>
            </div>
          </motion.div>

          {/* Pillars of Engineering & Craft */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#969BA5] tracking-wider uppercase mb-2">
              <span>// CORE PILLARS</span>
              <span>PHILOSOPHY</span>
            </div>

            {PHILOSOPHY_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-5 rounded-2xl bg-[#12151B]/80 hover:bg-[#161A24] border border-white/10 hover:border-[#467BFF]/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#467BFF]">
                    {pillar.index}
                  </span>
                  <ArrowDownRight className="w-4 h-4 text-[#969BA5] group-hover:text-[#467BFF] transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-[#F5F5F0] mt-2 mb-1 group-hover:text-[#467BFF] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#969BA5] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
