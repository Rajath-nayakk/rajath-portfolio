"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Subtle ambient synth pad (low frequency warm atmosphere)
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(65.41, ctx.currentTime); // C2

        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(130.81, ctx.currentTime); // C3

        // Lowpass filter for warm cinematic texture
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();
        osc1Ref.current = osc1;
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch {
        // Fallback gracefully if browser audio is blocked
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          try {
            osc1Ref.current?.stop();
            osc2Ref.current?.stop();
            audioCtxRef.current?.close();
          } catch {
            // Ignore close errors
          }
          osc1Ref.current = null;
          osc2Ref.current = null;
          audioCtxRef.current = null;
          gainNodeRef.current = null;
        }, 550);
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      try {
        osc1Ref.current?.stop();
        osc2Ref.current?.stop();
        audioCtxRef.current?.close();
      } catch {
        // Ignore unmount cleanup errors
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute ambient atmosphere" : "Enable cinematic soundscape"}
      className="group relative flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#467BFF]/50 transition-all text-xs font-mono text-[#969BA5] hover:text-[#F5F5F0]"
    >
      <div className="flex items-center gap-0.5 h-3">
        {isPlaying ? (
          <>
            <span className="w-0.5 h-3 bg-[#467BFF] rounded-full animate-pulse" />
            <span className="w-0.5 h-2 bg-[#467BFF] rounded-full animate-bounce delay-75" />
            <span className="w-0.5 h-3.5 bg-[#467BFF] rounded-full animate-pulse delay-150" />
            <span className="w-0.5 h-1.5 bg-[#467BFF] rounded-full animate-bounce delay-100" />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#969BA5] group-hover:text-[#F5F5F0] transition-colors" />
        )}
      </div>
      <span className="hidden sm:inline text-[11px] tracking-wider uppercase">
        {isPlaying ? "SOUND ON" : "SOUND OFF"}
      </span>
      {isPlaying && (
        <Volume2 className="w-3 h-3 text-[#467BFF] animate-pulse" />
      )}
    </button>
  );
}
