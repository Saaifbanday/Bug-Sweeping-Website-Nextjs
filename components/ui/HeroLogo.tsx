import React from "react";
import { Shield, RadioTower } from "lucide-react";

export default function HeroLogo() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-[#0d1526]/80 rounded-2xl border border-[var(--color-border)] overflow-hidden backdrop-blur-sm group">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,57,70,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Outer Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.15)_0%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />

      {/* Radar Rings */}
      <div className="absolute w-[80%] aspect-square border border-[var(--color-accent)] opacity-20 rounded-full shadow-[0_0_15px_rgba(230,57,70,0.2)_inset]" />
      <div className="absolute w-[55%] aspect-square border border-[var(--color-accent)] opacity-30 rounded-full" />
      <div className="absolute w-[30%] aspect-square border border-[var(--color-accent)] opacity-40 rounded-full" />

      {/* Crosshairs */}
      <div className="absolute w-[80%] h-[1px] bg-[var(--color-accent)] opacity-20" />
      <div className="absolute h-[80%] w-[1px] bg-[var(--color-accent)] opacity-20" />

      {/* Radar sweep animation */}
      <div
        className="absolute z-10 w-[40%] h-[40%] bottom-[50%] left-[50%] origin-bottom-left animate-[spin_3s_linear_infinite]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(230,57,70,0.3) 100%)",
          borderBottom: "2px solid var(--color-accent)",
        }}
      />

      {/* Signals/Bugs found */}
      <div className="absolute w-2 h-2 rounded-full bg-red-500 top-[25%] left-[30%] opacity-0 animate-[ping_3s_infinite_0.5s]" />
      <div className="absolute w-2.5 h-2.5 rounded-full bg-red-500 bottom-[35%] right-[25%] opacity-0 animate-[ping_3s_infinite_1.5s]" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-red-500 top-[60%] left-[20%] opacity-0 animate-[ping_3s_infinite_2.2s]" />

      {/* Center Shield Icon */}
      <div className="absolute z-20 flex items-center justify-center w-16 h-16 rounded-full bg-[#080d1a] border border-[var(--color-accent)] shadow-[0_0_20px_rgba(230,57,70,0.8)]">
        <Shield size={32} style={{ color: "var(--color-accent)" }} />
      </div>

      {/* Inner Icon inside shield */}
      <div className="absolute z-30">
        <RadioTower size={16} className="text-white animate-pulse" />
      </div>
    </div>
  );
}
