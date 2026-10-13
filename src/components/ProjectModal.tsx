"use client";

import { useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectPreviewVisual from "./ProjectPreviewVisual";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E1117] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#467BFF] uppercase mb-1">
              <span>PROJECT {project.number}</span>
              <span className="text-white/20">/</span>
              <span>{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#969BA5] mt-1 font-mono">
              Role: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#969BA5] hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live UI Mock Preview Component */}
        <div className="rounded-xl overflow-hidden border border-white/10">
          <ProjectPreviewVisual type={project.previewType} title={project.title} />
        </div>

        {/* Overview & Architecture */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono tracking-wider text-[#969BA5] uppercase">
            // OVERVIEW & PURPOSE
          </h3>
          <p className="text-sm sm:text-base text-[#F5F5F0] leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono tracking-wider text-[#969BA5] uppercase">
            // KEY ARCHITECTURAL HIGHLIGHTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#141822] border border-white/5 flex items-start gap-2.5 text-xs text-[#969BA5] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#467BFF] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono tracking-wider text-[#969BA5] uppercase">
            // TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#969BA5]">
            Verified codebase by Rajath Nayak
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#467BFF] hover:bg-[#3468E8] text-white text-xs font-mono tracking-wider transition-colors shadow-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>EXPLORE ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
