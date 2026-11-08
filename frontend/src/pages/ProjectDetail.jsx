import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Gauge, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Reveal, EASE } from "../components/Reveal";
import HardwareVideoDemo from "../components/hardware/VideoDemoModal";
import { PcbTraceLine, CircuitBadge } from "../components/hardware/PcbTraceBus";
import { projects } from "../data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.id === slug);
  const p = projects[index];

  if (!p) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 font-mono" data-testid="project-not-found">
        <p className="text-muted-foreground">[NODE_FAULT: SPECIFIED PROJECT NOT FOUND]</p>
        <Link to="/work" data-testid="project-not-found-back" className="text-sm underline">
          Return to Project Bus
        </Link>
      </main>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <main data-testid={`project-detail-${p.id}`}>
      <section className="mx-auto max-w-6xl px-6 pt-36 md:px-10 md:pt-44">
        <Reveal>
          <div className="flex items-center justify-between">
            <Link
              to="/work"
              data-testid="project-back-link"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All work
            </Link>
            <CircuitBadge label="NODE" value={`#${String(index + 1).padStart(2, "0")}`} />
          </div>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                Project {String(index + 1).padStart(2, "0")} — {p.tagline}
              </p>
              <h1 className="mt-4 font-display text-4xl font-light tracking-tighter sm:text-5xl lg:text-6xl">
                {p.title}
              </h1>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="project-github-link"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-mono transition-colors duration-300 hover:border-foreground/50"
            >
              Inspect Source on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-md border border-border/70 bg-card">
            <img src={p.image} alt={p.title} className="aspect-[16/8] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Hardware in Action Video / GIF Telemetry (If project has demo) */}
      {(p.demoGif || p.demoVideo) && (
        <section className="mx-auto max-w-6xl px-6 pt-14 md:px-10">
          <HardwareVideoDemo project={p} />
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <Reveal>
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Overview</h2>
              <p className="mt-5 text-base font-light leading-relaxed md:text-lg">{p.overview}</p>
            </Reveal>

            {/* Quantified Empirical Engineering Benchmarks */}
            {p.metrics && p.metrics.length > 0 && (
              <Reveal delay={0.08}>
                <div className="mt-14 rounded-lg border border-border/70 bg-muted/20 p-6 font-mono">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-border/50 pb-3">
                    <Gauge className="h-3.5 w-3.5 text-foreground/80" />
                    <span>Empirical Engineering Benchmarks</span>
                  </div>
                  <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.metrics.map((m, mi) => (
                      <div key={mi} className="border-l-2 border-border/70 pl-3">
                        <dt className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</dt>
                        <dd className="text-sm font-semibold text-foreground/90 mt-0.5">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.1}>
              <h2 className="mt-14 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Build log</h2>
              <ol className="mt-6 space-y-0 font-mono" data-testid={`project-build-log-${p.id}`}>
                {p.buildSteps.map((step, i) => (
                  <li key={i} className="flex gap-5 border-t border-border/60 py-4 last:border-b text-xs md:text-sm font-light leading-relaxed">
                    <span className="tracking-[0.2em] text-muted-foreground shrink-0 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-foreground/90 font-light leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            {p.wiring && (
              <Reveal delay={0.15}>
                <h2 className="mt-14 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Wiring & Pinout Map</h2>
                <div className="mt-5 rounded-md border border-border/60 bg-muted/20 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                  {p.wiring}
                </div>
              </Reveal>
            )}
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="rounded-md border border-border/60 p-7" data-testid={`project-meta-${p.id}`}>
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Technology Stack</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded border border-border/70 bg-secondary/40 px-3 py-1 text-[11px] font-mono tracking-wide text-foreground/90">
                      {s}
                    </li>
                  ))}
                </ul>

                {p.hardware && (
                  <>
                    <h2 className="mt-8 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-1.5">
                      <Cpu className="h-3 w-3" /> Hardware Bill of Materials
                    </h2>
                    <ul className="mt-5 space-y-2.5 font-mono text-xs">
                      {p.hardware.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-border shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-md border border-border/60 p-7">
                <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">System Capabilities</h2>
                <ul className="mt-5 space-y-3" data-testid={`project-features-${p.id}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light leading-relaxed text-muted-foreground">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {p.buildImages.length > 0 && (
        <section className="border-t border-border/60" data-testid={`project-build-gallery-${p.id}`}>
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <PcbTraceLine testPoint="OSC: BENCH_CAPTURES" className="mb-10" />
            <Reveal>
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">From the build & lab bench</h2>
            </Reveal>
            <div className={`mt-10 grid gap-6 ${p.buildImages.length > 2 ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
              {p.buildImages.map((img, i) => (
                <motion.figure
                  key={img.url}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
                  className="overflow-hidden rounded-md border border-border/60 bg-card"
                >
                  <img src={img.url} alt={`${p.title} — ${img.label}`} loading="lazy" className="w-full object-cover" />
                  <figcaption className="border-t border-border/60 px-4 py-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {img.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <Link
            to={`/work/${next.id}`}
            data-testid="project-next-link"
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Next project in queue</p>
              <p className="mt-2 font-display text-2xl font-light tracking-tight transition-colors duration-300 group-hover:text-foreground sm:text-3xl">
                {next.title}
              </p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
