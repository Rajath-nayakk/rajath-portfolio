"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectPreviewVisual from "./ProjectPreviewVisual";
import ProjectModal from "./ProjectModal";
import { ExternalLink, ArrowUpRight, Code, Eye } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function SectionWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-28 sm:py-36 px-6 sm:px-8 bg-[#08090B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#467BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono tracking-widest text-[#969BA5]">
              <span className="text-[#467BFF]">02</span>
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="uppercase">SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold uppercase tracking-tight text-[#F5F5F0]">
              THINGS I&apos;VE <span className="text-[#467BFF]">BUILT.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#969BA5] max-w-xs sm:text-right">
            [03 PRODUCTION PROJECTS]
            <p className="mt-1 text-white/50">
              Engineered with full-stack architecture, clean UI, and applied intelligence.
            </p>
          </div>
        </div>

        {/* Project Cards Editorial Stack */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-[#12151B]/70 border border-white/10 hover:border-[#467BFF]/40 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(70,123,255,0.1)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Metadata, Overview, Tech Stack */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Top line with Number & Category */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#969BA5]">
                    <span className="text-2xl font-heading font-bold text-white/20 group-hover:text-[#467BFF] transition-colors">
                      {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 uppercase tracking-wider text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#F5F5F0] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-[#467BFF] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#969BA5] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/5 text-[#F5F5F0]/80 group-hover:border-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-[#969BA5]">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#467BFF] hover:bg-[#3468E8] text-white text-xs font-mono tracking-wider transition-all shadow-md group/btn"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white text-xs font-mono tracking-wider transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                      <ExternalLink className="w-3 h-3 text-[#969BA5]" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Interactive Mock UI Preview */}
                <div
                  className="lg:col-span-6 w-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  title="Click to view detailed case study"
                  data-cursor="view"
                >
                  <div className="relative group/card transform transition-transform duration-500 lg:group-hover:scale-[1.02]">
                    <ProjectPreviewVisual
                      type={project.previewType}
                      title={project.title}
                    />
                    {/* Hover hint overlay */}
                    <div className="absolute inset-0 bg-[#08090B]/30 opacity-0 group-hover/card:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider text-white shadow-xl">
                        CLICK TO OPEN DEEP DIVE ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
