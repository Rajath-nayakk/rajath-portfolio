"use client";

import { useState } from "react";
import { Users, Sparkles, TrendingUp, DollarSign, Film, Armchair, CheckCircle2, Bot, Layers } from "lucide-react";

interface ProjectPreviewVisualProps {
  type: "hackhub" | "finpilot" | "movie";
  title: string;
}

export default function ProjectPreviewVisual({ type, title }: ProjectPreviewVisualProps) {
  // Interactive seat state for movie preview
  const [selectedSeats, setSelectedSeats] = useState<number[]>([14, 15]);

  const toggleSeat = (id: number) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  if (type === "hackhub") {
    return (
      <div className="w-full h-full min-h-[300px] p-6 bg-[#0E1117] rounded-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group/visual select-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#467BFF]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Mock Topbar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] font-mono text-[#969BA5]">hackhub.app/explore</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#467BFF]/20 text-[#467BFF] border border-[#467BFF]/30">
            AI MATCHMAKER ON
          </span>
        </div>

        {/* Center UI Content */}
        <div className="py-4 space-y-3 relative z-10">
          {/* Featured Hackathon Card */}
          <div className="p-3.5 rounded-lg bg-[#161B26] border border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white">Global AI Innovations 2026</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-green-500/20 text-green-400">REGISTERING</span>
              </div>
              <p className="text-[11px] text-[#969BA5]">48h Hackathon · $25,000 Prize Pool · Virtual</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#467BFF] block">MATCH SCORE</span>
              <span className="text-sm font-bold text-white font-mono">98.4%</span>
            </div>
          </div>

          {/* Squad Member Match Recommendations */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-[#12151E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-white flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-[#467BFF]" /> Teammate Found
                </span>
                <span className="text-[9px] font-mono text-green-400">Available</span>
              </div>
              <p className="text-[10px] text-[#969BA5]">ML Engineer · PyTorch, FastAPI</p>
            </div>

            <div className="p-2.5 rounded-lg bg-[#12151E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-white flex items-center gap-1.5">
                  <Bot className="w-3 h-3 text-[#467BFF]" /> AI Idea Copilot
                </span>
                <span className="text-[9px] font-mono text-[#467BFF]">Ready</span>
              </div>
              <p className="text-[10px] text-[#969BA5]">Pitch Deck & Solution Generator</p>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#969BA5] relative z-10">
          <span>SUPABASE + POSTGRESQL</span>
          <span className="text-white/80">COMMUNITY HUB</span>
        </div>
      </div>
    );
  }

  if (type === "finpilot") {
    return (
      <div className="w-full h-full min-h-[300px] p-6 bg-[#0E1117] rounded-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group/visual select-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Mock Topbar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] font-mono text-[#969BA5]">finpilot.ai/analytics</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            AUTO-CLASSIFIED: 99.2%
          </span>
        </div>

        {/* Center UI Content */}
        <div className="py-4 space-y-3 relative z-10">
          {/* Monthly Budget Card */}
          <div className="p-3.5 rounded-lg bg-[#161B26] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#969BA5]">OCTOBER SAVINGS MOMENTUM</span>
                <div className="text-base font-bold text-white flex items-center gap-1">
                  ₹42,850 <span className="text-[11px] font-normal text-emerald-400">+14.2%</span>
                </div>
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Budget Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[68%] h-full bg-gradient-to-r from-emerald-500 to-[#467BFF] rounded-full" />
            </div>
          </div>

          {/* AI Semantic Log Preview */}
          <div className="space-y-1.5">
            <div className="p-2.5 rounded-lg bg-[#12151E] border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-white">AWS CLOUD USAGE</span>
              </div>
              <span className="font-mono text-[11px] text-[#467BFF] bg-[#467BFF]/10 px-1.5 py-0.5 rounded">
                Infrastructure · ₹1,840
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#12151E] border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-white">COFFEE & CAFE</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                Food & Dining · ₹320
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#969BA5] relative z-10">
          <span>AI CATEGORIZATION ENGINE</span>
          <span className="text-white/80">REAL-TIME TELEMETRY</span>
        </div>
      </div>
    );
  }

  // Movie Booking Application
  return (
    <div className="w-full h-full min-h-[300px] p-6 bg-[#0E1117] rounded-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group/visual select-none">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Mock Topbar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[10px] font-mono text-[#969BA5]">cinematix.app/seats</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-400 border border-purple-500/30">
          SCREEN 01 · DOLBY ATMOS
        </span>
      </div>

      {/* Center UI Content: Curved Theatre Screen & Interactive Seat Grid */}
      <div className="py-2 space-y-2 relative z-10 flex flex-col items-center">
        {/* Curved Screen Banner */}
        <div className="w-48 h-3 rounded-t-full border-t-2 border-purple-400/80 shadow-[0_-4px_12px_rgba(168,85,247,0.4)] flex items-center justify-center">
          <span className="text-[8px] font-mono tracking-widest text-[#969BA5]">SCREEN</span>
        </div>

        {/* Seat Grid */}
        <div className="grid grid-cols-6 gap-2 my-1">
          {Array.from({ length: 18 }).map((_, idx) => {
            const isSelected = selectedSeats.includes(idx);
            const isOccupied = idx === 3 || idx === 8 || idx === 9;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => !isOccupied && toggleSeat(idx)}
                className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                  isOccupied
                    ? "bg-white/10 text-white/20 cursor-not-allowed"
                    : isSelected
                    ? "bg-[#467BFF] text-white shadow-[0_0_10px_rgba(70,123,255,0.7)]"
                    : "bg-[#181D28] text-white/60 hover:bg-white/20"
                }`}
                title={isOccupied ? "Occupied" : `Seat ${idx + 1}`}
              >
                <Armchair className="w-3.5 h-3.5" />
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 text-[9px] font-mono text-[#969BA5] pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded bg-[#181D28]" /> Available
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded bg-[#467BFF]" /> Selected
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded bg-white/10" /> Reserved
          </span>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#969BA5] relative z-10">
        <span>CLICK SEATS TO INTERACT</span>
        <span className="text-white font-bold">{selectedSeats.length} SEATS (₹{selectedSeats.length * 280})</span>
      </div>
    </div>
  );
}
