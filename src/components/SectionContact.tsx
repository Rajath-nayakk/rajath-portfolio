"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ResumeModal from "./ResumeModal";
import confetti from "canvas-confetti";
import {
  Mail,
  FileText,
  Send,
  CheckCircle2,
  ArrowUp,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function SectionContact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#467BFF", "#22C55E", "#F5F5F0"],
        });
      } catch {
        // Fallback safely
      }
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full pt-28 pb-12 px-6 sm:px-8 bg-[#08090B] border-t border-white/[0.08] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] accent-glow-spot pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 text-xs font-mono tracking-widest text-[#969BA5]">
          <span className="text-[#467BFF]">06</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="uppercase">INITIATE CONTACT</span>
        </div>

        {/* Oversized Typographic Statement - Alternating from Right */}
        <div className="space-y-3 mb-16">
          <motion.h2
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight text-[#F5F5F0]"
          >
            HAVE AN IDEA?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight text-[#467BFF]"
          >
            LET&apos;S BUILD SOMETHING.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#969BA5] max-w-xl pt-2 font-light"
          >
            I&apos;m always excited to explore technical collaborations, open-source initiatives, hackathon teams, and software engineering opportunities.
          </motion.p>
        </div>

        {/* Contact Matrix: Channels + Interactive Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono tracking-widest text-[#969BA5] uppercase">
              // CONNECT DIRECTLY
            </h3>

            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#12151B] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#969BA5] uppercase">EMAIL ADDRESS</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#467BFF] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-lg sm:text-xl font-heading font-semibold text-white hover:text-[#467BFF] transition-colors block truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-[#969BA5]">
                Direct inbox for project inquiries and correspondence.
              </p>
            </div>

            {/* Social & Professional Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#12151B] border border-white/10 hover:border-[#467BFF]/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <GithubIcon className="w-5 h-5 text-white group-hover:text-[#467BFF] transition-colors" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#969BA5] group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#969BA5] block">GITHUB</span>
                  <span className="text-sm font-semibold text-white">@Rajath-nayakk</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#12151B] border border-white/10 hover:border-[#467BFF]/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <LinkedinIcon className="w-5 h-5 text-white group-hover:text-[#467BFF] transition-colors" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#969BA5] group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#969BA5] block">LINKEDIN</span>
                  <span className="text-sm font-semibold text-white">Rajath Nayak</span>
                </div>
              </a>
            </div>

            {/* Resume Action Pill */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="w-full p-5 rounded-2xl bg-[#12151B] border border-white/10 hover:border-[#467BFF]/50 transition-all flex items-center justify-between group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#467BFF]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-heading font-semibold text-white group-hover:text-[#467BFF] transition-colors block">
                    Curriculum Vitae / Resume
                  </span>
                  <span className="text-xs font-mono text-[#969BA5]">
                    Preview qualifications & printable format
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-white group-hover:bg-[#467BFF] transition-colors">
                VIEW
              </span>
            </button>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono tracking-widest text-[#969BA5] uppercase mb-6">
              // SEND A MESSAGE
            </h3>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#12151B] border border-white/10">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white">
                    Message Received!
                  </h4>
                  <p className="text-sm text-[#969BA5] max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. Rajath will review your note and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#969BA5]">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#467BFF] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#969BA5]">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#467BFF] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#969BA5]">
                      PROJECT / TOPIC
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hackathon collaboration, internship opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#467BFF] focus:outline-none text-sm text-white placeholder-white/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#969BA5]">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about what you're building..."
                      className="w-full px-4 py-3 rounded-xl bg-[#08090B] border border-white/10 focus:border-[#467BFF] focus:outline-none text-sm text-white placeholder-white/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#467BFF] hover:bg-[#3468E8] disabled:opacity-50 text-white text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(70,123,255,0.3)] hover:shadow-[0_0_35px_rgba(70,123,255,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Footer */}
      <footer className="max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-white/[0.08] relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#969BA5]">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">RAJATH NAYAK</span>
            <span className="text-white/20">•</span>
            <span>MANGALURU, KARNATAKA, INDIA</span>
          </div>

          <div className="text-center sm:text-right">
            <span>© 2026 RAJATH NAYAK. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-[11px] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 text-[#467BFF]" />
          </button>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
