"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Award, ShieldCheck, Calendar, ExternalLink, Eye, Download, FileText } from "lucide-react";
import { CERTIFICATES } from "@/data/portfolioData";
import { CertificateItem } from "@/types";
import CertificateModal from "./CertificateModal";

export default function SectionCertificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications & Learning"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-12 bg-[#08090B] overflow-hidden"
    >
      {/* Background Subtle Ambient Glow & Oversized Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#467BFF]/5 blur-[160px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 right-0 text-[120px] md:text-[200px] font-bold text-white/[0.015] font-heading select-none pointer-events-none tracking-tighter"
      >
        VERIFIED
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-16 z-10">
        {/* Section Header: Alternating Left-to-Right Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#467BFF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#467BFF] animate-pulse" />
              <span>ACCREDITED EXPERTISE · PROVEN COMPETENCIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight">
              LEARNING &amp;{" "}
              <span className="italic font-serif font-normal bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 text-transparent bg-clip-text">
                CERTIFICATIONS
              </span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-white/60 max-w-md leading-relaxed"
          >
            Verified credentials in systems engineering, applied artificial intelligence, foundational algorithms, and cybersecurity forensics.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {CERTIFICATES.map((cert) => (
            <motion.article
              key={cert.id}
              variants={cardVariants}
              className="group relative flex flex-col justify-between bg-[#11141B]/80 hover:bg-[#141824] border border-white/10 hover:border-[#467BFF]/40 rounded-2xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-400 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
            >
              {/* Subtle radial sheen on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-radial from-[#467BFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Card Header: Metadata & Badges */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#467BFF]/10 border border-[#467BFF]/25 flex items-center justify-center text-[#467BFF]">
                      <Award className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-[#467BFF] tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#467BFF] transition-colors font-heading">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* Genuine Document Preview with Clip-path Reveal */}
                <div
                  className="relative w-full aspect-[1.414/1] mt-2 rounded-xl overflow-hidden bg-[#07080A] border border-white/10 shadow-inner group/img cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open full certificate for ${cert.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ clipPath: "inset(12% 0% 12% 0%)" }}
                    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={cert.imagePreview}
                      alt={`${cert.title} certificate document`}
                      fill
                      className="object-contain p-2 sm:p-3 transition-transform duration-500 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </motion.div>

                  {/* Hover Overlay with "Click to inspect" badge */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wider shadow-lg transform -translate-y-1 group-hover/img:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" /> INSPECT DOCUMENT
                    </span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Issue Date & Actions */}
              <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                  <Calendar className="w-3.5 h-3.5 text-[#467BFF]" />
                  <span>{cert.issueDate || "Verified Credential"}</span>
                </div>

                <div className="flex items-center gap-2">
                  {cert.documentPdf && (
                    <a
                      href={cert.documentPdf}
                      download
                      aria-label={`Download original PDF for ${cert.title}`}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                      title="Download authentic PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#467BFF]/15 hover:bg-[#467BFF] text-[#467BFF] hover:text-white border border-[#467BFF]/30 hover:border-transparent text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Full Document View Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
