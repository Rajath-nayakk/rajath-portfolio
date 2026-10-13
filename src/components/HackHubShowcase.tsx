"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  Users,
  Bot,
  Layers,
  Sparkles,
  Calendar,
  CheckCircle2,
  Terminal,
  Trophy,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";

export default function HackHubShowcase() {
  const [activeScreen, setActiveScreen] = useState<"discovery" | "matchmaker" | "squad" | "copilot">("discovery");
  const shouldReduceMotion = useReducedMotion();

  const screens = [
    { id: "discovery", label: "01. DISCOVERY RADAR", icon: Search },
    { id: "matchmaker", label: "02. AI MATCHMAKER", icon: Users },
    { id: "squad", label: "03. SQUAD WAR ROOM", icon: Layers },
    { id: "copilot", label: "04. AI PITCH COPILOT", icon: Bot },
  ] as const;

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 sm:px-8 bg-[#090C12] border-t border-white/[0.08] overflow-hidden">
      {/* Background Futuristic Electric Blue Glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#467BFF]/10 rounded-full blur-[140px] pointer-events-none" />
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
            <div className="flex items-center gap-3 text-xs font-mono text-[#467BFF] uppercase tracking-widest mb-3">
              <span className="text-xl font-bold font-heading">01</span>
              <span className="w-8 h-[1px] bg-[#467BFF]/40" />
              <span>MAIN FEATURED SHOWCASE · FULL-STACK WEB &amp; AI</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black uppercase tracking-tight text-[#F5F5F0]">
              HACK<span className="text-[#467BFF]">HUB</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl font-mono text-white/70 mt-2 max-w-2xl"
            >
              Where Builders Assemble · Intelligent Hackathon Discovery &amp; Teammate Matchmaking
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://github.com/Rajath-nayakk/hackhub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#467BFF] hover:bg-[#3468E8] text-white text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(70,123,255,0.4)] group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>EXPLORE SOURCE REPOSITORY</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Screen Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeScreen === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#467BFF] text-white font-semibold shadow-[0_0_20px_rgba(70,123,255,0.5)]"
                    : "bg-[#121620] text-[#969BA5] border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* HIGH-FIDELITY BROWSER WORKSTATION SHOWCASE WITH CLIP-PATH REVEAL */}
        <motion.div
          initial={{ clipPath: "inset(6% 0% 6% 0%)", opacity: 0.9 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl sm:rounded-3xl bg-[#0D111A] border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Mock Browser Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#090C14] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-[#969BA5]">
                <ShieldCheck className="w-3 h-3 text-[#467BFF]" />
                <span>https://hackhub.dev/app/{activeScreen}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-[#467BFF]/10 text-[#467BFF] border border-[#467BFF]/30 text-[10px]">
                NEXT.JS 15 + SUPABASE
              </span>
            </div>
          </div>

          {/* DYNAMIC SCREEN CONTENT CONTAINER */}
          <div className="p-6 sm:p-10 min-h-[480px] sm:min-h-[560px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeScreen === "discovery" && (
                <motion.div
                  key="discovery"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Global Hackathon Radar & Timeline
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Filtered: Artificial Intelligence, Cloud Infrastructure, Open Innovation
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>32 EVENTS LIVE</span>
                    </div>
                  </div>

                  {/* Featured Event Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-[#141824] border border-white/10 hover:border-[#467BFF]/50 transition-all space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#467BFF]/20 text-[#467BFF] border border-[#467BFF]/30">
                            GLOBAL VIRTUAL
                          </span>
                          <h4 className="text-lg font-bold text-white mt-2">
                            AI Genesis Summit 2026
                          </h4>
                          <p className="text-xs text-[#969BA5] mt-1">
                            Build agents, autonomous workflows, and LLM integrations.
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#969BA5] block">PRIZE POOL</span>
                          <span className="text-lg font-mono font-bold text-white">$50,000</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#NextJS</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#FastAPI</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#PostgreSQL</span>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#969BA5]">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <Calendar className="w-3.5 h-3.5" /> 4 DAYS REMAINING
                        </span>
                        <span className="text-white font-semibold">142 TEAMS FORMING</span>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#141824] border border-white/10 hover:border-[#467BFF]/50 transition-all space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-400 border border-purple-500/30">
                            INTER-COLLEGE SPRINT
                          </span>
                          <h4 className="text-lg font-bold text-white mt-2">
                            HackSahyadri Innovations
                          </h4>
                          <p className="text-xs text-[#969BA5] mt-1">
                            Collegiate engineering hackathon solving local civic & campus tech challenges.
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-[#969BA5] block">AWARDS</span>
                          <span className="text-lg font-mono font-bold text-white">₹1,50,000</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#CampusTech</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#FullStack</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/70">#IoT</span>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#969BA5]">
                        <span className="flex items-center gap-1.5 text-[#467BFF]">
                          <Calendar className="w-3.5 h-3.5" /> MARCH 2026
                        </span>
                        <span className="text-white font-semibold">CAMPUS HYBRID</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeScreen === "matchmaker" && (
                <motion.div
                  key="matchmaker"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        AI Teammate Matchmaking Engine
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Algorithm analyzes complementary skill distributions, time zones & technical roles.
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#467BFF]/20 text-[#467BFF] text-xs font-mono border border-[#467BFF]/40">
                      COMPATIBILITY ALGORITHM: ACTIVE
                    </div>
                  </div>

                  {/* Teammate Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#141824] border border-[#467BFF]/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-[#467BFF]/20 border border-[#467BFF] flex items-center justify-center font-bold text-white">
                          RN
                        </div>
                        <span className="text-xs font-mono font-bold text-[#467BFF]">98.6% MATCH</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Rajath Nayak</h5>
                        <p className="text-[11px] font-mono text-[#969BA5]">Lead Full-Stack Architect</p>
                      </div>
                      <p className="text-xs text-white/70">
                        Next.js App Router, Express, Supabase, Tailwind, System Architecture.
                      </p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/20 text-green-400">
                        READY TO SPRINT
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#141824] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center font-bold text-white">
                          US
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">95.2% MATCH</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Ujwal S.</h5>
                        <p className="text-[11px] font-mono text-[#969BA5]">AI / ML Engineer</p>
                      </div>
                      <p className="text-xs text-white/70">
                        Python, LangChain, PyTorch, Predictive Modeling & Embeddings.
                      </p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/20 text-green-400">
                        MATCHED SQUAD
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#141824] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center font-bold text-white">
                          AR
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-400">92.4% MATCH</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Ananya R.</h5>
                        <p className="text-[11px] font-mono text-[#969BA5]">UI / Product Designer</p>
                      </div>
                      <p className="text-xs text-white/70">
                        Figma, Design Systems, Micro-interactions, Usability Audits.
                      </p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/80">
                        INVITATION SENT
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeScreen === "squad" && (
                <motion.div
                  key="squad"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Squad War Room & Collaborative Canvas
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Real-time task synchronization, Git repo branch management & countdown timer.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#969BA5] block">SPRINT COUNTDOWN</span>
                      <span className="text-base font-mono font-bold text-white">36:14:28 REMAINING</span>
                    </div>
                  </div>

                  {/* Kanban Sprint Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#10141E] border border-white/5 space-y-3">
                      <span className="text-xs font-mono text-[#969BA5] uppercase block">
                        // BACKLOG [03]
                      </span>
                      <div className="p-3 rounded-lg bg-[#161B28] text-xs space-y-1">
                        <span className="font-semibold text-white block">OAuth Flow & JWT</span>
                        <span className="text-[#969BA5]">Assigned to Rajath</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#161B28] text-xs space-y-1">
                        <span className="font-semibold text-white block">PostgreSQL Schema Migrations</span>
                        <span className="text-[#969BA5]">Row-level security policies</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#10141E] border border-[#467BFF]/30 space-y-3">
                      <span className="text-xs font-mono text-[#467BFF] uppercase block">
                        // IN PROGRESS [02]
                      </span>
                      <div className="p-3 rounded-lg bg-[#161B28] text-xs space-y-1 border-l-2 border-[#467BFF]">
                        <span className="font-semibold text-white block">Next.js App Router Shell</span>
                        <span className="text-[#969BA5]">Rajath Nayak · Active commit</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#161B28] text-xs space-y-1 border-l-2 border-emerald-400">
                        <span className="font-semibold text-white block">Vector Embeddings Pipeline</span>
                        <span className="text-[#969BA5]">FastAPI microservice integration</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#10141E] border border-white/5 space-y-3">
                      <span className="text-xs font-mono text-emerald-400 uppercase block">
                        // COMPLETED [04]
                      </span>
                      <div className="p-3 rounded-lg bg-[#161B28] text-xs space-y-1 border-l-2 border-green-500">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Ideation & Problem Validation
                        </span>
                        <span className="text-[#969BA5]">Finalized team submission pitch</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeScreen === "copilot" && (
                <motion.div
                  key="copilot"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        AI Pitch & Architecture Copilot
                      </h3>
                      <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
                        Prompt-driven system design diagrams, presentation scripts, and dev roadmaps.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono border border-purple-500/30">
                      GEMINI & LLM INTEGRATION
                    </span>
                  </div>

                  {/* Terminal Simulation */}
                  <div className="p-5 rounded-xl bg-[#090C12] border border-white/10 font-mono text-xs space-y-3">
                    <div className="text-[#467BFF]">
                      &gt; prompt: &quot;Generate system architecture for high-throughput hackathon team matchmaking.&quot;
                    </div>
                    <div className="text-white/80 leading-relaxed pl-2 border-l border-white/10">
                      [Architecture Recommendation Engine]<br />
                      ├── Ingestion: Supabase Auth & Realtime Subscriptions<br />
                      ├── Vector Store: pgvector with cosine similarity distance on skill tags<br />
                      ├── Microservice: FastAPI inference for squad compatibility score<br />
                      └── Frontend: Next.js 15 App Router with server-driven streaming
                    </div>
                    <div className="text-green-400 text-[11px]">
                      ✓ Generated architecture blueprint & slide outline in 420ms
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Tech Attributes */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#969BA5]">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Next.js 15</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">React 19</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Supabase / PostgreSQL</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">Node.js Express</span>
                <span className="px-3 py-1 rounded bg-white/[0.03] text-white">AI Embeddings</span>
              </div>
              <span className="text-white/70">
                Architected & Engineered by Rajath Nayak
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
