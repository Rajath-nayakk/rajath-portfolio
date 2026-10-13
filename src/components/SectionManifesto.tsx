"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { PERSONAL_INFO, PHILOSOPHY_PILLARS } from "@/data/portfolioData";
import { Sparkles, Terminal, Code, Cpu, Compass } from "lucide-react";

export default function SectionManifesto() {
  const shouldReduceMotion = useReducedMotion();

  // Alternating heading entrance: from left (x: -60 -> 0)
  const headingVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const riseVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="manifesto"
      aria-label="Editorial Manifesto"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#F4F4EE] text-[#121316] overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Editorial Texture & Oversized Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#121316 1px, transparent 1px), linear-gradient(90deg, #121316 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-10 text-[140px] md:text-[240px] font-bold text-[#121316]/[0.03] font-heading select-none pointer-events-none tracking-tighter"
      >
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
        {/* Kinetic Header Bar */}
        <div className="flex items-center justify-between border-b border-[#121316]/10 pb-6 text-xs font-mono tracking-widest text-[#555A64] uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="font-semibold text-[#0066FF]">CHAPTER 01</span>
            <span className="text-[#121316]/30">/</span>
            <span>CORE PHILOSOPHY &amp; ENGINEERING MANIFESTO</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#555A64]">
            12.87° N, 74.88° E · MANGALURU
          </span>
        </div>

        {/* Section Heading: Directional Left Entrance (x: -60 -> 0) */}
        <div className="space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase tracking-tight text-[#121316] leading-[0.88]">
              NOT JUST A <br />
              <span className="text-[#0066FF]">DEVELOPER.</span>
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tight text-[#121316]/40 leading-[0.9]"
          >
            AN EXPLORER OF <span className="italic font-serif font-normal text-[#121316]">EXPERIENCES.</span>
          </motion.h3>
        </div>

        {/* Editorial Magazine Grid Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Lead */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.p
              variants={riseVariants}
              className="text-xl sm:text-2xl md:text-3xl font-normal text-[#121316] leading-relaxed"
            >
              &ldquo;{PERSONAL_INFO.bioShort}&rdquo;
            </motion.p>

            <motion.div
              variants={riseVariants}
              className="space-y-4 text-sm sm:text-base text-[#4A4E57] leading-relaxed border-t border-[#121316]/10 pt-8"
            >
              <p>
                My approach to software engineering rejects generic templates and boilerplate answers. As a third-year Computer Science undergraduate at Sahyadri College of Engineering and Management in Mangaluru, I view every software interface as a precision bridge between computational rigor and human intent.
              </p>
              <p>
                From building collaborative matchmaking systems like <strong className="text-[#121316] font-semibold">HackHub</strong> to architecting machine learning budget intelligence in <strong className="text-[#121316] font-semibold">Fin Pilot</strong>, I architect scalable backends and pair them with micro-animated interfaces that settle naturally and elevate every user touchpoint.
              </p>
            </motion.div>

            {/* Editorial Metric Cards */}
            <motion.div
              variants={riseVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              <div className="p-5 rounded-xl bg-white border border-[#121316]/10 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-[#0066FF] uppercase font-semibold block">
                  ACADEMIC DEGREE
                </span>
                <span className="text-base font-bold text-[#121316] block font-heading">
                  3rd Year B.E.
                </span>
                <span className="text-xs text-[#6B7280]">Computer Science &amp; Engg.</span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#121316]/10 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold block">
                  INSTITUTION
                </span>
                <span className="text-base font-bold text-[#121316] block font-heading">
                  Sahyadri College
                </span>
                <span className="text-xs text-[#6B7280]">Mangaluru, Karnataka</span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#121316]/10 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-[#0066FF] uppercase font-semibold block">
                  TIMEZONE &amp; FOCUS
                </span>
                <span className="text-base font-bold text-[#121316] font-mono block">
                  UTC +5:30 (IST)
                </span>
                <span className="text-xs text-[#6B7280]">Full-Stack Systems &amp; AI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Duality Matrix & Pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div
              variants={riseVariants}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#121316]/10 shadow-md space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#121316]/10">
                <span className="text-xs font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
                  // THE DUAL DIMENSIONS
                </span>
                <span className="text-xs font-mono text-[#6B7280]">
                  FORMAL × CASUAL
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#121316]/5 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#0066FF] uppercase tracking-wider block">
                    DIMENSION 01 // PROFESSIONAL RIGOR
                  </span>
                  <h4 className="text-sm font-bold text-[#121316] font-heading">
                    Type-Safe Systems &amp; Architecture
                  </h4>
                  <p className="text-xs text-[#4A4E57] leading-relaxed">
                    Relational schema modeling in PostgreSQL, secure authentication, idempotent REST &amp; Next.js APIs, and performance-tuned queries.
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#0066FF]/10 text-[#0066FF] font-medium">
                    NAVY SUIT MINDSET
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#121316]/5 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                    DIMENSION 02 // CREATIVE AGILITY
                  </span>
                  <h4 className="text-sm font-bold text-white-90 text-[#121316] font-heading">
                    Rapid Hackathon Execution &amp; AI
                  </h4>
                  <p className="text-xs text-[#4A4E57] leading-relaxed">
                    Iterative sprint prototypes, embedding foundation models into actual user flows, and expressive spatial animations.
                  </p>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-700 font-medium">
                    RED POLO PASSION
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Pillars */}
            <motion.div
              variants={riseVariants}
              className="grid grid-cols-2 gap-3"
            >
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="p-4 rounded-xl bg-white/70 border border-[#121316]/10 flex flex-col gap-1.5"
                >
                  <span className="text-[10px] font-mono text-[#0066FF] font-bold">
                    {pillar.index}
                  </span>
                  <h5 className="text-xs font-bold text-[#121316] font-heading">
                    {pillar.title}
                  </h5>
                  <p className="text-[11px] text-[#6B7280] leading-snug">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
