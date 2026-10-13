"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "portrait" | "view">("default");
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element is hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const portraitZone = target.closest("[data-cursor='portrait']");
      const viewZone = target.closest("[data-cursor='view']");

      if (portraitZone) {
        setCursorType("portrait");
        setCursorText("REVEAL");
      } else if (viewZone) {
        setCursorType("view");
        setCursorText("VIEW");
      } else if (interactive) {
        setCursorType("hover");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none border border-white/30 backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "portrait" || cursorType === "view" ? 80 : cursorType === "hover" ? 48 : 28,
          height: cursorType === "portrait" || cursorType === "view" ? 80 : cursorType === "hover" ? 48 : 28,
          backgroundColor:
            cursorType === "portrait"
              ? "rgba(70, 123, 255, 0.25)"
              : cursorType === "view"
              ? "rgba(255, 255, 255, 0.15)"
              : cursorType === "hover"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0)",
          borderColor:
            cursorType === "portrait"
              ? "rgba(70, 123, 255, 0.8)"
              : cursorType === "hover"
              ? "rgba(255, 255, 255, 0.6)"
              : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-white drop-shadow-md select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#467BFF] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: cursorType === "portrait" || cursorType === "view" ? 0 : 1,
        }}
      />
    </div>
  );
}
