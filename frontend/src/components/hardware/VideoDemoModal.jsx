import React, { useState } from "react";
import { Play, Pause, ExternalLink, X, Cpu, Activity, Gauge } from "lucide-react";

export default function HardwareVideoDemo({ project, className = "" }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState(project.demoGif ? "gif" : "video"); // "gif" | "video"

  if (!project.demoGif && !project.demoVideo) {
    return null;
  }

  return (
    <section
      className={`rounded-xl border border-border/70 bg-card/60 p-5 md:p-7 backdrop-blur-sm ${className}`}
      data-testid={`hardware-demo-section-${project.id}`}
    >
      {/* Header bar with diagnostic metrics */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/50 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Hardware in Action — Bench Test Run
            </h3>
          </div>
          <p className="mt-1 font-display text-lg font-medium text-foreground">
            Live Hardware Execution & Telemetry
          </p>
        </div>

        {/* View Toggle (GIF / Video) if both exist */}
        {project.demoGif && project.demoVideo && (
          <div className="flex items-center rounded-lg border border-border/70 p-0.5 bg-muted/40 font-mono text-xs">
            <button
              type="button"
              onClick={() => setViewMode("gif")}
              className={`rounded-md px-2.5 py-1 transition-all ${
                viewMode === "gif"
                  ? "bg-foreground text-background font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Live Loop
            </button>
            <button
              type="button"
              onClick={() => setViewMode("video")}
              className={`rounded-md px-2.5 py-1 transition-all ${
                viewMode === "video"
                  ? "bg-foreground text-background font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full Video (MP4)
            </button>
          </div>
        )}
      </div>

      {/* Screen Container */}
      <div className="relative mt-5 overflow-hidden rounded-lg border border-border/80 bg-neutral-950">
        {/* HUD Top Bar Overlay */}
        <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between bg-black/60 px-4 py-2 text-[10px] font-mono text-neutral-300 backdrop-blur-md border-b border-white/10 select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="h-3 w-3" /> LIVE_RUN
            </span>
            <span className="hidden sm:inline text-neutral-400">DEVICE: ESP32-CAM [COM8]</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sky-300">BAUD: 460,800</span>
            <span className="text-amber-300">INFERENCE: 141ms</span>
          </div>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-video w-full flex items-center justify-center pt-8 pb-2">
          {viewMode === "gif" && project.demoGif ? (
            <img
              src={project.demoGif}
              alt={`${project.title} live hardware tracking demonstration`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          ) : project.demoVideo ? (
            <video
              src={project.demoVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-contain"
            />
          ) : null}
        </div>

        {/* HUD Bottom Bar Overlay */}
        <div className="border-t border-white/10 bg-black/70 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-neutral-400" />
              <span>Xtensa 240MHz</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5 text-neutral-400" />
              <span>Zero-Leak INT8 Core</span>
            </span>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Inspect Bench Artifacts</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

