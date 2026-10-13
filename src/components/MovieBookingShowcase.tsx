"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  Film,
  Armchair,
  Clock,
  Ticket,
  CheckCircle,
  Calendar,
  Sparkles,
  QrCode,
  ShieldCheck,
} from "lucide-react";

export default function MovieBookingShowcase() {
  const [activeView, setActiveView] = useState<"seats" | "showtimes" | "pass">("seats");
  const [selectedSeats, setSelectedSeats] = useState<number[]>([14, 15]);
  const shouldReduceMotion = useReducedMotion();

  const toggleSeat = (id: number) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const views = [
    { id: "seats", label: "01. THEATRE SEAT ENGINE", icon: Armchair },
    { id: "showtimes", label: "02. SHOWTIME RADAR", icon: Clock },
    { id: "pass", label: "03. DIGITAL TICKET PASS", icon: Ticket },
  ] as const;

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-8 bg-[#09080B] border-t border-white/[0.08] overflow-hidden">
      {/* Background Crimson Cinematic Ambient Glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Project Header Banner: Directional Entrance From Right (x: 60 -> 0) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-rose-500 uppercase tracking-widest mb-3">
              <span className="text-xl font-bold font-heading">03</span>
              <span className="w-8 h-[1px] bg-rose-500/40" />
              <span>THIRD FEATURED SHOWCASE · REAL-TIME INTERACTIVE WEB APPLICATION</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black uppercase tracking-tight text-[#F5F5F0]">
              CINEMA<span className="text-rose-500">TIX</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl font-mono text-white/70 mt-2 max-w-2xl"
            >
              Real-Time Cinema Ticketing, Theatre Seat Allocation &amp; Pass Engine
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://github.com/Rajath-nayakk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(225,29,72,0.4)] group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>EXPLORE ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Interactive View Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {views.map((v) => {
            const Icon = v.icon;
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveView(v.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-rose-600 text-white font-semibold shadow-[0_0_20px_rgba(225,29,72,0.5)]"
                    : "bg-[#141016] text-[#969BA5] border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        {/* HIGH-FIDELITY CINEMA THEATRE WORKSTATION WITH CLIP-PATH REVEAL */}
        <motion.div
          initial={{ clipPath: "inset(6% 0% 6% 0%)", opacity: 0.9 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl sm:rounded-3xl bg-[#0D0A10] border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#08060A] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-[#969BA5]">
                <ShieldCheck className="w-3 h-3 text-rose-500" />
                <span>cinematix.app/auditorium-01/booking</span>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-rose-600/10 text-rose-400 border border-rose-600/30 text-[10px] font-mono">
              DOLBY ATMOS · SCREEN 01
            </span>
          </div>

          {/* DYNAMIC SCREEN CONTENT */}
          <div className="p-6 sm:p-10 min-h-[480px] sm:min-h-[560px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeView === "seats" && (
                <motion.div
                  key="seats"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 flex flex-col items-center"
                >
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Interactive SVG Theatre Seating Engine
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Tiered price zones with instant reservation lock to prevent concurrent double-booking.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#969BA5] block">SELECTED TICKETS</span>
                      <span className="text-base font-mono font-bold text-rose-400">
                        {selectedSeats.length} SEATS · ₹{selectedSeats.length * 320}
                      </span>
                    </div>
                  </div>

                  {/* Curved Cinema Screen Banner */}
                  <div className="w-full max-w-md py-6 flex flex-col items-center">
                    <div className="w-72 sm:w-96 h-4 rounded-t-full border-t-2 border-rose-500/80 shadow-[0_-8px_25px_rgba(225,29,72,0.5)] flex items-center justify-center">
                      <span className="text-[9px] font-mono tracking-widest text-[#969BA5]">
                        CURVED CINEMA SCREEN
                      </span>
                    </div>

                    {/* Interactive Seat Grid */}
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-2.5 sm:gap-3.5 my-6">
                      {Array.from({ length: 24 }).map((_, idx) => {
                        const isSelected = selectedSeats.includes(idx);
                        const isOccupied = idx === 2 || idx === 3 || idx === 11 || idx === 18;

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => !isOccupied && toggleSeat(idx)}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                              isOccupied
                                ? "bg-white/10 text-white/20 cursor-not-allowed"
                                : isSelected
                                ? "bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.8)] scale-110"
                                : "bg-[#18131C] text-white/60 hover:bg-white/20"
                            }`}
                            title={isOccupied ? "Occupied" : `Seat ${idx + 1}`}
                          >
                            <Armchair className="w-4 h-4" />
                          </button>
                        );
                      })}
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#969BA5]">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-[#18131C] border border-white/20" /> Available (₹320)
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-rose-600" /> Selected
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-white/10" /> Reserved
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeView === "showtimes" && (
                <motion.div
                  key="showtimes"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Curated Film Showtimes & Formats
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Multi-hall schedule browser with real-time seat fill percentages.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-rose-600/20 text-rose-400 text-xs font-mono border border-rose-600/30">
                      LIVE CINEMA SCHEDULE
                    </span>
                  </div>

                  {/* Showtime Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-[#141018] border border-rose-600/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-rose-400 font-bold">
                          ORIGINAL SCI-FI · 148 MINS
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-600 text-white">
                          IMAX 3D
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Project Chronos: Singularity
                      </h4>
                      <p className="text-xs text-[#969BA5]">
                        Experience the deepest exploration of quantum causality in high-frame-rate IMAX 3D.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                        <button className="px-3 py-1.5 rounded-lg bg-rose-600 text-white font-bold">
                          18:30 (Filling Fast)
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white">
                          21:45 (Available)
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#141018] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#467BFF] font-bold">
                          CYBERPUNK THRILLER · 122 MINS
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#467BFF] text-white">
                          DOLBY ATMOS
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Neon Horizon 2049
                      </h4>
                      <p className="text-xs text-[#969BA5]">
                        A rogue systems engineer navigates high-stakes corporate espionage in neo-Tokyo.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                        <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white">
                          16:15 (Available)
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white">
                          19:00 (Available)
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeView === "pass" && (
                <motion.div
                  key="pass"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 flex flex-col items-center"
                >
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Digital Boarding Pass Verification
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Instant QR code ticket generation and contactless admission verification.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                      TICKET CONFIRMED
                    </span>
                  </div>

                  {/* Cinema Pass Graphic */}
                  <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-[#18121E] to-[#100D14] border border-rose-500/40 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] font-mono text-rose-400 block">ADMISSION PASS</span>
                        <h4 className="text-lg font-bold text-white">PROJECT CHRONOS</h4>
                      </div>
                      <QrCode className="w-10 h-10 text-white" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-[#969BA5] block">SCREEN</span>
                        <span className="text-white font-bold">01 · IMAX</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#969BA5] block">SEATS</span>
                        <span className="text-rose-400 font-bold">C14, C15</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#969BA5] block">TIME</span>
                        <span className="text-white font-bold">18:30 IST</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#969BA5]">
                      <span>CODE: CNX-9941-RN</span>
                      <span className="text-emerald-400">PAID ₹640</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Tech Attributes */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#969BA5]">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">React 19</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Node.js Express</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">PostgreSQL</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Tailwind CSS</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">REST APIs</span>
              </div>
              <span className="text-white/70">
                Full-Stack & Systems Architecture
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
