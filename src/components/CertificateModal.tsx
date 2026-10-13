"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ExternalLink, Download, ShieldCheck, Calendar, Award } from "lucide-react";
import { CertificateItem } from "@/types";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, handleKeyDown]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E1117] border border-white/10 rounded-2xl shadow-2xl flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 sticky top-0 bg-[#0E1117]/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#467BFF]/15 border border-[#467BFF]/30 flex items-center justify-center text-[#467BFF]">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#467BFF]">
                  {certificate.issuer}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  <ShieldCheck className="w-3 h-3" /> Verified Credential
                </span>
              </div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-semibold text-white/95 mt-0.5 font-heading">
                {certificate.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate preview"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Document Preview */}
        <div className="p-4 sm:p-6 flex flex-col gap-6">
          <div className="relative w-full aspect-[1.414/1] bg-[#08090B] border border-white/10 rounded-xl overflow-hidden shadow-inner flex items-center justify-center group">
            <Image
              src={certificate.imagePreview}
              alt={`${certificate.title} Certificate Preview`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>

          {/* Details & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2 flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-white/40">Credential Scope</span>
              <p className="text-sm text-white/75 leading-relaxed">{certificate.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#467BFF]" /> Issue Date
                </span>
                <span className="text-sm font-semibold text-white/90">{certificate.issueDate || "Verified"}</span>
              </div>

              <div className="flex flex-col gap-2">
                {certificate.documentPdf && (
                  <a
                    href={certificate.documentPdf}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#467BFF] hover:bg-[#3B6AE8] text-white text-xs font-semibold tracking-wider transition-all shadow-md shadow-[#467BFF]/20"
                  >
                    <Download className="w-3.5 h-3.5" /> Download PDF
                  </a>
                )}
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium tracking-wide transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
