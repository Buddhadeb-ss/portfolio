import React from "react";

export function PcbTraceLine({ className = "", orientation = "horizontal", testPoint = "" }) {
  if (orientation === "vertical") {
    return (
      <div
        className={`relative flex flex-col items-center select-none ${className}`}
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full border border-border/80 bg-background flex items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-border" />
        </span>
        <span className="w-px flex-1 bg-gradient-to-b from-border/80 via-border/40 to-border/10" />
        {testPoint && (
          <span className="my-1.5 rotate-90 text-[9px] font-mono tracking-widest text-muted-foreground/60">
            {testPoint}
          </span>
        )}
        <span className="h-2 w-2 rounded-full border border-border/80 bg-background flex items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-border" />
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center w-full select-none py-1 ${className}`}
      aria-hidden="true"
    >
      <span className="h-2 w-2 shrink-0 rounded-full border border-border/80 bg-background flex items-center justify-center">
        <span className="h-1 w-1 rounded-full bg-border" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-border/80 via-border/50 to-border/20" />
      {testPoint && (
        <span className="px-2 text-[9px] font-mono tracking-widest text-muted-foreground/60 uppercase">
          {testPoint}
        </span>
      )}
      <span className="h-px flex-1 bg-gradient-to-r from-border/20 via-border/50 to-border/80" />
      <span className="h-2 w-2 shrink-0 rounded-full border border-border/80 bg-background flex items-center justify-center">
        <span className="h-1 w-1 rounded-full bg-border" />
      </span>
    </div>
  );
}

export function CircuitBadge({ label = "TEST_POINT", value = "3.3V", className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground select-none ${className}`}
      aria-hidden="true"
    >
      <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
      <span className="opacity-75">{label}:</span>
      <span className="text-foreground/90 font-medium">{value}</span>
    </div>
  );
}

