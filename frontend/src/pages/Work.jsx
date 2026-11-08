import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Reveal, EASE } from "../components/Reveal";
import { PcbTraceLine } from "../components/hardware/PcbTraceBus";
import { projects } from "../data/portfolio";

function ProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: EASE }}
      className="flex flex-col h-full"
    >
      <Link
        to={`/work/${p.id}`}
        data-testid={`work-project-card-${p.id}`}
        className="group block flex-1"
      >
        <div className="relative overflow-hidden rounded-md border border-border/70 bg-card">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {p.demoGif && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Hardware Demo
            </span>
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/80">
                IC_{String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight group-hover:text-foreground">
                {p.title}
              </h3>
            </div>

            <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            {/* Quantified Empirical Engineering Metrics */}
            {p.metrics && p.metrics.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border/50 pt-3">
                {p.metrics.slice(0, 4).map((m, mi) => (
                  <div key={mi} className="font-mono text-[11px] leading-tight">
                    <span className="block text-muted-foreground/70 text-[9px] uppercase tracking-wider">
                      {m.label}
                    </span>
                    <span className="text-foreground/90 font-medium">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Stack Tags */}
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-border/60 bg-muted/20 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
        </div>
      </Link>
    </motion.article>
  );
}

export default function Work() {
  return (
    <main data-testid="work-page">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <Reveal>
          <Link
            to="/"
            data-testid="work-back-home-link"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Console
          </Link>
          <h1 className="mt-8 font-display text-5xl font-light tracking-tighter sm:text-6xl lg:text-7xl">
            The work
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Embedded systems, bare-metal firmware, KiCad PCBs, and TinyML — {projects.length} verified projects built from schematic to source with real silicon benchmarks.
          </p>
        </Reveal>

        <PcbTraceLine testPoint="BUS: ALL_SYSTEM_NODES" className="my-12" />

        <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-20">
          <a
            data-testid="work-github-link"
            href="https://github.com/Buddhadeb-ss"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm transition-colors duration-300 hover:border-foreground/50 font-mono"
          >
            Everything else lives on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
