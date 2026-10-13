"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  TrendingUp,
  DollarSign,
  PieChart,
  Bot,
  Zap,
  CheckCircle,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Sliders,
} from "lucide-react";

export default function FinPilotShowcase() {
  const [activeTab, setActiveTab] = useState<"analytics" | "categorizer" | "advisor">("analytics");
  const [budgetLimit, setBudgetLimit] = useState(65000);
  const shouldReduceMotion = useReducedMotion();

  const tabs = [
    { id: "analytics", label: "01. PREDICTIVE ANALYTICS", icon: TrendingUp },
    { id: "categorizer", label: "02. AI AUTO-CLASSIFIER", icon: Zap },
    { id: "advisor", label: "03. WEALTH COPILOT", icon: Bot },
  ] as const;

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-8 bg-[#080B0F] border-t border-white/[0.08] overflow-hidden">
      {/* Background Emerald Ambient Glow */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Project Header Banner: Directional Entrance From Left (x: -60 -> 0) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span className="text-xl font-bold font-heading">02</span>
              <span className="w-8 h-[1px] bg-emerald-400/40" />
              <span>SECOND FEATURED SHOWCASE · FINANCIAL TECH & MACHINE LEARNING</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black uppercase tracking-tight text-[#F5F5F0]">
              FIN <span className="text-emerald-400">PILOT</span>
            </h2>

            <p className="text-lg sm:text-xl font-mono text-white/70 mt-2 max-w-2xl">
              Intelligent Personal Finance & Automated Categorization Coach
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] group"
            >
              <GithubIcon className="w-4 h-4 text-black" />
              <span>EXPLORE REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Screen Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    : "bg-[#11161F] text-[#969BA5] border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* HIGH-FIDELITY FINTECH WORKSTATION WITH CLIP-PATH REVEAL */}
        <motion.div
          initial={{ clipPath: "inset(6% 0% 6% 0%)", opacity: 0.9 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl sm:rounded-3xl bg-[#0B0F16] border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#070A0F] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-[#969BA5]">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>finpilot.ai/dashboard/telemetry</span>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
              ENGINE: PYTHON + NEXT.JS
            </span>
          </div>

          {/* DYNAMIC SCREEN CONTENT */}
          <div className="p-6 sm:p-10 min-h-[480px] sm:min-h-[560px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "analytics" && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Predictive Cashflow & Burn-Rate Analytics
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Real-time fiscal health indexing and automated budget threshold modeling.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+14.8% NET ACCELERATION</span>
                    </div>
                  </div>

                  {/* Financial Metrics Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-[#121824] border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-[#969BA5] uppercase block">
                        MONTHLY SAVINGS VELOCITY
                      </span>
                      <div className="text-3xl font-heading font-bold text-white">
                        ₹42,850
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                        <div className="w-[74%] h-full bg-gradient-to-r from-emerald-500 to-[#467BFF] rounded-full" />
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 block pt-1">
                        74% of target achieved
                      </span>
                    </div>

                    <div className="p-5 rounded-xl bg-[#121824] border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-[#969BA5] uppercase block">
                        RECURRING DISCRETIONARY
                      </span>
                      <div className="text-3xl font-heading font-bold text-white">
                        ₹18,420
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                        <div className="w-[32%] h-full bg-amber-400 rounded-full" />
                      </div>
                      <span className="text-[11px] font-mono text-amber-400 block pt-1">
                        -8% reduction from last month
                      </span>
                    </div>

                    <div className="p-5 rounded-xl bg-[#121824] border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-[#969BA5] uppercase block">
                        AUTO-CLASSIFICATION RATE
                      </span>
                      <div className="text-3xl font-heading font-bold text-emerald-400 font-mono">
                        99.4%
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-3">
                        <div className="w-[99%] h-full bg-emerald-400 rounded-full" />
                      </div>
                      <span className="text-[11px] font-mono text-white/70 block pt-1">
                        1,420 transactions processed
                      </span>
                    </div>
                  </div>

                  {/* Interactive Target Slider */}
                  <div className="p-5 rounded-xl bg-[#0F1420] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-emerald-400" /> MONTHLY EXPENDITURE CEILING
                      </span>
                      <span className="text-emerald-400 font-bold">₹{budgetLimit.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={30000}
                      max={120000}
                      step={5000}
                      value={budgetLimit}
                      onChange={(e) => setBudgetLimit(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "categorizer" && (
                <motion.div
                  key="categorizer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Semantic Transaction Categorization Engine
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        NLP pipeline transforms messy UPI/NEFT narration strings into normalized fiscal tags.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                      ZERO MANUAL RECEIPT ENTRY
                    </span>
                  </div>

                  {/* Transaction Parsing Live Stream */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-[#121824] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-white font-semibold block">
                          UPI/92841029/AWS-CLOUD-SERVICES/MUMBAI
                        </span>
                        <span className="text-[11px] text-[#969BA5]">Oct 12 · Ref: 0092144</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded bg-[#467BFF]/20 text-[#467BFF] border border-[#467BFF]/30">
                          Infrastructure · 99.8% Conf.
                        </span>
                        <span className="text-white font-bold text-sm">₹2,840.00</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121824] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-white font-semibold block">
                          POS-TXN-STARBUCKS-COFFEE-MANGALORE
                        </span>
                        <span className="text-[11px] text-[#969BA5]">Oct 11 · Ref: 8812904</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Food & Dining · 99.4% Conf.
                        </span>
                        <span className="text-white font-bold text-sm">₹450.00</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121824] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-white font-semibold block">
                          ZERODHA-BROKING-LTD-FUNDS-ADDED
                        </span>
                        <span className="text-[11px] text-[#969BA5]">Oct 10 · Ref: 4491023</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                          Investments · 100% Conf.
                        </span>
                        <span className="text-white font-bold text-sm">₹15,000.00</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "advisor" && (
                <motion.div
                  key="advisor"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        AI Wealth Coach & Proactive Diagnostics
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Natural language recommendations synthesizing historical transaction patterns.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                      INSIGHTS ENGINE
                    </span>
                  </div>

                  {/* AI Recommendations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-[#121824] border border-emerald-500/30 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                        <Bot className="w-4 h-4" /> SUBSCRIPTION OPTIMIZATION
                      </div>
                      <h5 className="font-semibold text-white">
                        Duplicate Streaming Subscriptions Identified
                      </h5>
                      <p className="text-xs text-[#969BA5] leading-relaxed">
                        Detected ₹1,498 monthly recurring outflow across 3 video streaming tiers with low engagement. Pruning 2 tiers saves ₹14,400 annually.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#121824] border border-[#467BFF]/30 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#467BFF] font-bold">
                        <TrendingUp className="w-4 h-4" /> CASH RESERVE PROJECTOR
                      </div>
                      <h5 className="font-semibold text-white">
                        Emergency Fund Milestone Reached
                      </h5>
                      <p className="text-xs text-[#969BA5] leading-relaxed">
                        Current monthly savings velocity will fulfill your 6-month buffer target 28 days ahead of projected schedule.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Tech Attributes */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#969BA5]">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Python Machine Learning</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">FastAPI</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Next.js & Tailwind</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">PostgreSQL</span>
              </div>
              <span className="text-white/70">
                Full-Stack & AI Integration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
