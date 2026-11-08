import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { telemetryData } from "../../data/portfolio";
import StatusLed from "./StatusLed";

export default function OledDisplay({ className = "" }) {
  const [screenIndex, setScreenIndex] = useState(0);
  const [inverted, setInverted] = useState(false);
  const [powerOn, setPowerOn] = useState(true);
  const [uptimeSeconds, setUptimeSeconds] = useState(142);

  // Live uptime counter
  useEffect(() => {
    if (!powerOn) return;
    const interval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [powerOn]);

  const screens = telemetryData.telemetryScreens || [];
  const current = screens[screenIndex] || screens[0];

  const formatUptime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (!powerOn) return;
    setScreenIndex((prev) => (prev + 1) % screens.length);
  };

  const handleInvert = () => {
    if (!powerOn) return;
    setInverted((prev) => !prev);
  };

  const handlePower = () => {
    setPowerOn((prev) => !prev);
  };

  return (
    <div
      className={`relative w-full max-w-[360px] rounded-lg border border-border/80 bg-card p-3 shadow-md font-mono select-none ${className}`}
      data-testid="hardware-oled-module"
    >
      {/* Top Header Pinout / Silkscreen */}
      <div className="flex items-center justify-between pb-2 border-b border-border/40 text-[10px] text-muted-foreground/80">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground/80">SSD1306</span>
          <span className="text-[9px] text-muted-foreground/60">[0x3C_I2C]</span>
        </div>
        <div className="flex items-center gap-2.5">
          <StatusLed color="green" label="PWR" state={powerOn ? "on" : "off"} size="xs" />
          <StatusLed color="amber" label="SDA" state={powerOn ? "flash" : "off"} size="xs" />
          <StatusLed color="blue" label="SCL" state={powerOn ? "blink" : "off"} size="xs" />
        </div>
      </div>

      {/* OLED Physical Screen Bezel */}
      <div className="relative mt-2.5 overflow-hidden rounded-md border border-neutral-700/60 bg-[#070b10] p-2.5 shadow-inner">
        {/* Glass reflection gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

        {/* 128x64 Display Area */}
        <div
          className={`relative min-h-[110px] flex flex-col justify-between rounded p-2 transition-colors duration-200 ${
            inverted
              ? "bg-[#38bdf8] text-[#050b14]"
              : "bg-[#05090f] text-[#38bdf8]"
          }`}
          style={{
            boxShadow: powerOn
              ? inverted
                ? "0 0 16px rgba(56, 189, 248, 0.4)"
                : "inset 0 0 12px rgba(56, 189, 248, 0.15)"
              : "none",
          }}
        >
          <AnimatePresence mode="wait">
            {powerOn ? (
              <motion.div
                key={`${screenIndex}-${inverted}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col justify-between h-full"
              >
                {/* Title & Uptime Bar */}
                <div className="flex items-center justify-between border-b border-current/25 pb-1 text-[10px] font-semibold tracking-wider">
                  <span>{current.title}</span>
                  <span className="text-[9px] opacity-80">UP: {formatUptime(uptimeSeconds)}</span>
                </div>

                {/* Body Telemetry Lines */}
                <div className="py-1.5 space-y-1 text-[11px] leading-tight font-medium">
                  <div className="truncate">{current.line1}</div>
                  <div className="truncate">{current.line2}</div>
                  <div className="truncate">{current.line3}</div>
                  <div className="truncate">{current.line4}</div>
                </div>

                {/* Footer status line */}
                <div className="flex items-center justify-between pt-1 border-t border-current/20 text-[9px] opacity-75">
                  <span>SCR {screenIndex + 1}/{screens.length}</span>
                  <span>400kHz FAST</span>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-full min-h-[90px] items-center justify-center text-[10px] text-neutral-600 font-mono">
                [DISPLAY POWERED OFF]
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tactile Push Buttons */}
      <div className="mt-2.5 flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            data-testid="oled-button-next"
            onClick={handleNext}
            disabled={!powerOn}
            className="flex items-center gap-1 rounded border border-border/70 bg-secondary/50 px-2 py-1 text-[10px] text-foreground/80 hover:bg-secondary hover:text-foreground active:scale-95 transition-all disabled:opacity-40"
            title="Cycle telemetry screens"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            MODE
          </button>
          <button
            type="button"
            data-testid="oled-button-invert"
            onClick={handleInvert}
            disabled={!powerOn}
            className="rounded border border-border/70 bg-secondary/50 px-2 py-1 text-[10px] text-foreground/80 hover:bg-secondary hover:text-foreground active:scale-95 transition-all disabled:opacity-40"
            title="Invert display buffer"
          >
            INVERT
          </button>
        </div>

        <button
          type="button"
          data-testid="oled-button-power"
          onClick={handlePower}
          className={`flex items-center gap-1.5 rounded border px-2 py-1 text-[10px] font-medium transition-all active:scale-95 ${
            powerOn
              ? "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20"
              : "border-border/70 text-muted-foreground bg-secondary/30 hover:bg-secondary"
          }`}
          title="Toggle display power"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              powerOn ? "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" : "bg-neutral-500"
            }`}
          />
          {powerOn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}

