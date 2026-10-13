"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, RefreshCw } from "lucide-react";

interface InteractivePortraitProps {
  className?: string;
  priority?: boolean;
}

export default function InteractivePortrait({
  className = "",
  priority = true,
}: InteractivePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false); // For mobile tap or explicit toggle
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [pixelCoords, setPixelCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if pointer is touch
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Smooth mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setPixelCoords({ x, y });
    setCoords({ x: xPercent, y: yPercent });

    // Subtle 3D tilt
    const tiltX = ((y / rect.height) - 0.5) * -7;
    const tiltY = ((x / rect.width) - 0.5) * 7;
    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Mobile / click toggle
  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const isCasualActive = isToggled || isHovered;

  const getMaskStyle = () => {
    if (isToggled) {
      return {
        WebkitMaskImage: `radial-gradient(circle 900px at 50% 50%, black 100%, transparent 100%)`,
        maskImage: `radial-gradient(circle 900px at 50% 50%, black 100%, transparent 100%)`,
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      };
    }
    if (isHovered && !isTouchDevice) {
      return {
        WebkitMaskImage: `radial-gradient(circle 200px at ${pixelCoords.x}px ${pixelCoords.y}px, black 35%, rgba(0,0,0,0.7) 70%, transparent 100%)`,
        maskImage: `radial-gradient(circle 200px at ${pixelCoords.x}px ${pixelCoords.y}px, black 35%, rgba(0,0,0,0.7) 70%, transparent 100%)`,
        transition: "none",
      };
    }
    return {
      WebkitMaskImage: `radial-gradient(circle 0px at ${coords.x}% ${coords.y}%, black 0%, transparent 0%)`,
      maskImage: `radial-gradient(circle 0px at ${coords.x}% ${coords.y}%, black 0%, transparent 0%)`,
      transition: "all 0.5s ease-out",
    };
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Outer ambient glow */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl transition-all duration-700 pointer-events-none"
        style={{
          background: isCasualActive
            ? "radial-gradient(circle, rgba(70, 123, 255, 0.35) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(70, 123, 255, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Main Portrait Frame with 3D perspective */}
      <div
        ref={containerRef}
        data-cursor="portrait"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
        className="group relative w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] aspect-[4/5.2] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-[#12151B] transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        aria-label="Interactive Portrait of Rajath Nayak: Formal Suit view, hover or tap to reveal Casual Tea Plantation view"
      >
        {/* BASE LAYER: Formal Suit Portrait (Default state) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/rajath-formal.jpg"
            alt="Rajath Nayak — Formal Portrait in Navy Suit"
            fill
            priority={priority}
            sizes="(max-width: 640px) 340px, (max-width: 768px) 390px, 420px"
            className="object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle contrast grading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* TOP LAYER: Casual Tea Plantation Portrait (Revealed on hover / toggle) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={getMaskStyle()}
        >
          <Image
            src="/images/rajath-casual.jpg"
            alt="Rajath Nayak — Casual Portrait in Red Polo at Tea Plantation"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 768px) 390px, 420px"
            className="object-cover object-[center_24%] scale-[1.08] transition-transform duration-700 ease-out"
          />
          {/* Subtle warm grading overlay for casual mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/70 via-transparent to-black/15" />
        </div>

        {/* Cursor Reveal Follower Indicator Ring (Desktop only when hovering) */}
        {isHovered && !isToggled && !isTouchDevice && (
          <div
            className="absolute pointer-events-none w-[200px] h-[200px] rounded-full border border-[#467BFF]/60 shadow-[0_0_20px_rgba(70,123,255,0.4)] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            style={{
              left: `${pixelCoords.x}px`,
              top: `${pixelCoords.y}px`,
            }}
          />
        )}

        {/* Live Identity Badge (Corner overlay) */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-colors">
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              isCasualActive ? "bg-[#22C55E] animate-pulse" : "bg-[#467BFF]"
            }`}
          />
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#F5F5F0] font-medium">
            {isCasualActive ? "BEYOND THE CODE." : "THE PROFESSIONAL."}
          </span>
        </div>

        {/* Quick Mode Switcher Icon (Top Right) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          title={isToggled ? "Return to formal portrait" : "Lock casual view"}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#467BFF] hover:bg-black/80 transition-all text-white/80 hover:text-white"
        >
          <RefreshCw
            className={`w-3.5 h-3.5 transition-transform duration-500 ${
              isToggled ? "rotate-180 text-[#467BFF]" : ""
            }`}
          />
        </button>

        {/* Corner View Tag */}
        <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#969BA5]">
          {isCasualActive ? "VIEW 02 / CASUAL" : "VIEW 01 / FORMAL"}
        </div>
      </div>

      {/* Supporting Interactive Prompt Bar Below Portrait */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] px-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#969BA5]">
          <Sparkles className="w-3.5 h-3.5 text-[#467BFF]" />
          <span className="uppercase text-[11px]">
            {isTouchDevice
              ? "TAP TO TOGGLE VIEW ⇄"
              : isCasualActive
              ? "BEYOND THE CODE."
              : "HOVER TO MEET THE OTHER SIDE →"}
          </span>
        </div>

        {/* Interactive segmented toggle pills */}
        <div className="flex items-center p-1 rounded-full bg-[#12151B] border border-white/10 text-[11px] font-mono">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsToggled(false);
              setIsHovered(false);
            }}
            className={`px-3 py-1 rounded-full transition-all ${
              !isCasualActive
                ? "bg-[#467BFF] text-white font-medium shadow-sm"
                : "text-[#969BA5] hover:text-white"
            }`}
          >
            FORMAL
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsToggled(true);
            }}
            className={`px-3 py-1 rounded-full transition-all ${
              isCasualActive
                ? "bg-[#467BFF] text-white font-medium shadow-sm"
                : "text-[#969BA5] hover:text-white"
            }`}
          >
            CASUAL
          </button>
        </div>
      </div>
    </div>
  );
}
