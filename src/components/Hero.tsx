"use client";

import { motion, Variants } from "framer-motion";
import InteractivePortrait from "./InteractivePortrait";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ChevronDown, MapPin, GraduationCap, Code2, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-4 sm:px-8 overflow-hidden bg-[#08090B] select-none"
    >
      {/* Background Cinematic Atmosphere & Grid Lines */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#467BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-35" />

      {/* Decorative Editorial Grid Lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 pointer-events-none flex justify-between opacity-[0.03]">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* Top Editorial Telemetry Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#969BA5] uppercase"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[#F5F5F0] font-medium">{PERSONAL_INFO.status}</span>
        </motion.div>

        <motion.div variants={itemVariants} className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-white/90">
            <GraduationCap className="w-3.5 h-3.5 text-[#467BFF]" />
            CSE UNDERGRADUATE · 3RD YEAR
          </span>
          <span className="text-white/20">/</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#467BFF]" />
            SAHYADRI · MANGALURU
          </span>
        </motion.div>
      </motion.div>

      {/* Main Composition: Layered Giant Typography + Perfectly Preserved Interactive Portrait */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center my-auto py-4">
        {/* Giant Architectural Background Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden leading-[0.76]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full text-center flex flex-col items-center justify-center"
          >
            <span className="text-[17vw] sm:text-[15vw] md:text-[13vw] font-heading font-black uppercase tracking-tighter text-white/[0.045] block">
              RAJATH
            </span>
            <span className="text-[17vw] sm:text-[15vw] md:text-[13vw] font-heading font-black uppercase tracking-tighter text-white/[0.045] block -mt-[2vw]">
              NAYAK
            </span>
          </motion.div>
        </div>

        {/* Central Preserved Interactive Portrait Card (The exact size and animation the user loves) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-full flex justify-center py-2 sm:py-4"
        >
          <InteractivePortrait priority />
        </motion.div>

        {/* Hero Headlines & Core Identity Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="relative z-20 text-center max-w-2xl mt-4 px-4 space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-[#F5F5F0]">
            &ldquo;{PERSONAL_INFO.heroTagline}&rdquo;
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal text-[#969BA5] max-w-lg mx-auto">
            {PERSONAL_INFO.title}
          </p>

          {/* Quick Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-[#12151B] hover:bg-[#1A1F2C] border border-white/10 hover:border-[#467BFF]/50 text-xs font-mono tracking-wider text-[#F5F5F0] transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              EXPLORE FEATURED WORKS [03]
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono tracking-wider text-[#969BA5] hover:text-white transition-all duration-300"
            >
              START A CONVERSATION
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Telemetry & Scroll Prompt */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#969BA5]">
        <span className="hidden sm:inline">12.87° N, 74.88° E · MANGALURU</span>

        <a
          href="#manifesto"
          className="flex items-center gap-2 mx-auto sm:mx-0 group hover:text-[#F5F5F0] transition-colors"
        >
          <span className="text-xs">SCROLL TO DISCOVER</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#467BFF] group-hover:translate-y-1 transition-transform" />
        </a>

        <span className="hidden sm:inline">EDITION 2026 · RAJATH®</span>
      </div>
    </section>
  );
}
