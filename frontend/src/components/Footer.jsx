import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, EASE } from "./Reveal";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border/60" data-testid="site-footer">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Get in touch</p>
          <a
            data-testid="footer-cta-link"
            href="https://www.linkedin.com/in/buddhadeb-banik/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex flex-wrap items-baseline gap-x-4 font-display text-4xl font-light tracking-tighter sm:text-5xl lg:text-6xl"
          >
            <span>Let's make something</span>
            <span className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              worth shipping
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4, y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <ArrowUpRight className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.4} />
              </motion.span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border/60 pt-10 md:grid-cols-4 font-mono">
            {profile.links.map((l) => (
              <a
                key={l.label}
                data-testid={`footer-link-${l.label.toLowerCase()}`}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <span className="flex flex-col">
                  <span className="text-foreground font-sans font-medium">{l.label}</span>
                  <span className="text-xs text-muted-foreground font-mono">{l.handle}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Hardware Status footer row */}
        <div className="mt-14 pt-6 border-t border-border/40 flex flex-col gap-3 font-mono text-xs text-muted-foreground/80 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>·</span>
            <span className="text-emerald-500/90 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              BOARD: REV 2.6.4
            </span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <span>Bengaluru, India — engineering by day, light by instinct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
