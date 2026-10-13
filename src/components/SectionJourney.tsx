"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TIMELINE } from "@/data/portfolioData";
import { GraduationCap, Rocket, Compass, CheckCircle, ArrowRight } from "lucide-react";

export default function SectionJourney() {
  const shouldReduceMotion = useReducedMotion();

  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case "CURRENT":
        return <GraduationCap className="w-4 h-4 text-[#467BFF]" />;
      case "ACTIVE":
        return <Rocket className="w-4 h-4 text-emerald-400" />;
      default:
        return <Compass className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-8 bg-[#08090B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#467BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header: Directional Entrance From Left (x: -60 -> 0) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono tracking-widest text-[#969BA5]">
              <span className="text-[#467BFF]">05</span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="uppercase">ACADEMIC &amp; BUILDER TIMELINE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold uppercase tracking-tight text-[#F5F5F0]">
              STILL LEARNING. <br />
              <span className="text-[#467BFF]">ALWAYS BUILDING.</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-mono text-[#969BA5] max-w-xs sm:text-right"
          >
            Tracing the path from academic foundations to full-scale web product engineering.
          </motion.p>
        </motion.div>

        {/* Editorial Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#08090B] flex items-center justify-center transition-all ${
                  item.status === "CURRENT"
                    ? "border-[#467BFF] shadow-[0_0_12px_rgba(70,123,255,0.8)]"
                    : item.status === "ACTIVE"
                    ? "border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                    : "border-purple-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.status === "CURRENT"
                      ? "bg-[#467BFF]"
                      : item.status === "ACTIVE"
                      ? "bg-emerald-400"
                      : "bg-purple-400"
                  }`}
                />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#12151B]/80 hover:bg-[#161B26] border border-white/10 hover:border-[#467BFF]/40 transition-all duration-300">
                {/* Milestone Period & Status Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#467BFF]">
                      {item.year}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-[11px] font-mono tracking-wider text-[#969BA5] uppercase">
                      {item.period}
                    </span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                      item.status === "CURRENT"
                        ? "bg-[#467BFF]/10 text-[#467BFF] border border-[#467BFF]/30"
                        : item.status === "ACTIVE"
                        ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/30"
                        : "bg-purple-400/10 text-purple-400 border border-purple-400/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F0] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#969BA5] mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-white/80">{item.organization}</span>
                  <span className="text-white/20">•</span>
                  <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#969BA5] mt-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Relevant Focus Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.05]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-white/70 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
