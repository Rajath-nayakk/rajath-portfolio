"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AudioToggle from "@/components/AudioToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState("");

  // Live Mangaluru (IST - UTC+5:30) time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", options).format(now) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "MANIFESTO", href: "#manifesto" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "TOOLKIT", href: "#skills" },
    { label: "TIMELINE", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#08090B]/80 backdrop-blur-md border-b border-white/[0.08]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Status */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-lg sm:text-xl font-heading font-bold tracking-tight text-[#F5F5F0] hover:text-[#467BFF] transition-colors"
            >
              <span>RAJATH</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded border border-white/20 text-[#969BA5] group-hover:border-[#467BFF]/50 group-hover:text-[#467BFF] transition-colors">
                ®
              </span>
            </Link>

            {/* Availability Pill (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#969BA5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#969BA5]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#F5F5F0] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#467BFF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Utilities: Time, Audio & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mangaluru Local Clock */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/10 text-[11px] font-mono text-[#969BA5]">
              <span className="text-white/60">MANGALURU:</span>
              <span className="text-[#F5F5F0] tabular-nums">{timeString}</span>
            </div>

            {/* Audio Toggle */}
            <AudioToggle />

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#467BFF] hover:bg-[#3468E8] text-white text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(70,123,255,0.3)] hover:shadow-[0_0_25px_rgba(70,123,255,0.5)] transform hover:-translate-y-0.5"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-[#F5F5F0] hover:text-[#467BFF]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#08090B]/95 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 transition-all">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono tracking-widest text-[#969BA5]">
              // NAVIGATION
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-medium tracking-tight text-[#F5F5F0] hover:text-[#467BFF] transition-colors py-1 flex items-center justify-between border-b border-white/[0.06]"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#969BA5]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#969BA5]">
              <span>MANGALURU, IN</span>
              <span className="text-[#F5F5F0]">{timeString}</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#467BFF] text-white text-sm font-mono tracking-wider font-medium"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </>
  );
}
