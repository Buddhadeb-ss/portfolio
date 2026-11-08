import React from "react";

export default function StatusLed({
  color = "green",
  label = "PWR",
  state = "on", // "on" | "blink" | "flash" | "off"
  size = "sm",
  className = "",
}) {
  const colorMap = {
    green: {
      bg: "bg-emerald-500",
      glow: "shadow-[0_0_8px_rgba(16,185,129,0.7)]",
      border: "border-emerald-400/40",
      text: "text-emerald-500/80",
    },
    amber: {
      bg: "bg-amber-400",
      glow: "shadow-[0_0_8px_rgba(251,191,36,0.7)]",
      border: "border-amber-300/40",
      text: "text-amber-400/80",
    },
    blue: {
      bg: "bg-sky-400",
      glow: "shadow-[0_0_8px_rgba(56,189,248,0.7)]",
      border: "border-sky-300/40",
      text: "text-sky-400/80",
    },
    red: {
      bg: "bg-rose-500",
      glow: "shadow-[0_0_8px_rgba(244,63,94,0.7)]",
      border: "border-rose-400/40",
      text: "text-rose-500/80",
    },
  };

  const current = colorMap[color] || colorMap.green;
  const isOff = state === "off";

  const animClass =
    state === "blink"
      ? "animate-led-blink"
      : state === "flash"
      ? "animate-led-flash"
      : "";

  const dotSize = size === "xs" ? "h-1.5 w-1.5" : "h-2 w-2";

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-mono select-none ${className}`}
      aria-hidden="true"
    >
      <span
        className={`relative inline-flex rounded-full border ${current.border} ${dotSize} ${
          isOff ? "bg-muted-foreground/30" : `${current.bg} ${current.glow}`
        } ${animClass}`}
      />
      {label && (
        <span className="text-[10px] tracking-wider uppercase text-muted-foreground/75 font-mono">
          {label}
        </span>
      )}
    </div>
  );
}
