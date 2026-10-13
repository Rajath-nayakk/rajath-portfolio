"use client";

import { useEffect } from "react";
import { PERSONAL_INFO, PROJECTS, SKILLS, TIMELINE } from "@/data/portfolioData";
import { X, Download, Printer, ExternalLink, Mail, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E1117] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 print:hidden">
          <span className="text-xs font-mono text-[#467BFF] uppercase tracking-wider">
            CURRICULUM VITAE // PREVIEW
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F5F5F0] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#969BA5] hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formal Printable Resume Document */}
        <div className="space-y-6 text-[#F5F5F0]">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-heading font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-[#467BFF]">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#969BA5] pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}
              </span>
              <span className="text-white/20">•</span>
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                GitHub: Rajath-nayakk
              </a>
              <span className="text-white/20">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                LinkedIn: Rajath Nayak
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono tracking-widest text-[#969BA5] uppercase">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-[#141822] border border-white/5 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  Sahyadri College of Engineering and Management
                </h3>
                <span className="text-xs font-mono text-[#467BFF]">2023 — 2027</span>
              </div>
              <p className="text-xs text-[#969BA5]">
                Bachelor of Engineering in Computer Science & Engineering · Third Year Undergraduate
              </p>
              <p className="text-[11px] text-[#969BA5]/80 pt-1">
                Coursework: Data Structures, Analysis of Algorithms, Database Systems, Computer Networks, Operating Systems, Web Technologies.
              </p>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono tracking-widest text-[#969BA5] uppercase">
              KEY TECHNICAL PROJECTS
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-[#141822] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
                    {proj.title} — <span className="font-normal text-xs text-[#467BFF]">{proj.tagline}</span>
                  </h3>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono text-[#467BFF] hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#969BA5] leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono tracking-widest text-[#969BA5] uppercase">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#141822] border border-white/5">
                <span className="font-mono text-[#467BFF] block mb-1">FRONTEND & FRAMEWORKS</span>
                <span className="text-[#969BA5]">React, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141822] border border-white/5">
                <span className="font-mono text-emerald-400 block mb-1">BACKEND & RUNTIMES</span>
                <span className="text-[#969BA5]">Node.js, Express.js, Python, REST APIs</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141822] border border-white/5">
                <span className="font-mono text-amber-400 block mb-1">DATABASES & ORMS</span>
                <span className="text-[#969BA5]">PostgreSQL, Supabase, SQL</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141822] border border-white/5">
                <span className="font-mono text-purple-400 block mb-1">DEVELOPMENT TOOLS</span>
                <span className="text-[#969BA5]">Git, GitHub, VS Code, Linux Basics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between print:hidden">
          <span className="text-xs font-mono text-[#969BA5]">
            PDF representation compiled from verified profile.
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#467BFF] hover:bg-[#3468E8] text-white text-xs font-mono tracking-wider transition-colors shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            <span>SAVE AS PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
