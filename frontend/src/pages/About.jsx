import { Reveal } from "../components/Reveal";
import { Download } from "lucide-react";
import Footer from "../components/Footer";
import { PcbTraceLine, CircuitBadge } from "../components/hardware/PcbTraceBus";
import StatusLed from "../components/hardware/StatusLed";
import { profile, capabilities } from "../data/portfolio";

export default function About() {
  return (
    <main data-testid="about-page">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-md border border-border/70 bg-card">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-neutral-300">
                <StatusLed color="green" label="STATION_01" size="xs" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>{profile.name} — {profile.location}</span>
              <CircuitBadge label="NODE" value="ID_BB" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Dossier & Bio
                </span>
              </div>
              <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
                Silicon in the day, light after dark.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {profile.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/resume.pdf"
                  download
                  data-testid="download-cv-button"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-300 hover:-translate-y-0.5 font-medium shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  Download CV (PDF)
                </a>
              </div>
            </Reveal>

            <PcbTraceLine testPoint="CAPABILITIES_BUS" className="my-10" />

            <Reveal delay={0.15}>
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    Engineering
                  </h2>
                  <ul className="mt-5 space-y-2.5 font-mono text-xs" data-testid="about-capabilities-engineering">
                    {capabilities.engineering.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-foreground/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    Lab & Tooling
                  </h2>
                  <ul className="mt-5 space-y-2.5 font-mono text-xs" data-testid="about-capabilities-tools">
                    {capabilities.tools.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-foreground/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 border-t border-border/60 pt-8">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  Elsewhere
                </h2>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 font-mono">
                  {profile.links.map((l) => (
                    <a
                      key={l.label}
                      data-testid={`about-link-${l.label.toLowerCase()}`}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-2 text-sm"
                    >
                      <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-foreground text-foreground">
                        {l.label}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{l.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
