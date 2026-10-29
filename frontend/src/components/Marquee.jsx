import { marqueeItems } from "../data/portfolio";

function Track({ hidden = false }) {
  return (
    <div aria-hidden={hidden || undefined} className="marquee-group flex shrink-0 items-center">
      {marqueeItems.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-sm uppercase tracking-[0.25em] text-muted-foreground md:px-10">{item}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      data-testid="home-marquee"
      className="overflow-hidden border-y border-border/60 py-5 md:py-6"
    >
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
