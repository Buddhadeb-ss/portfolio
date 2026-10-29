import { Reveal } from "../components/Reveal";
import { Download } from "lucide-react";
import Footer from "../components/Footer";
import { profile, capabilities } from "../data/portfolio";

export default function About() {
  return (
    <main data-testid="about-page">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-md border border-border/60">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {profile.name} — {profile.location}
            </p>
          </Reveal>

          <div>
            <Reveal>
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
              <a
                href="/resume.pdf"
                download
                data-testid="download-cv-button"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-14 grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Engineering</h2>
                  <ul className="mt-5 space-y-2.5" data-testid="about-capabilities-engineering">
                    {capabilities.engineering.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm">
                        <span className="h-1 w-1 rounded-full bg-foreground/50" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Tools</h2>
                  <ul className="mt-5 space-y-2.5" data-testid="about-capabilities-tools">
                    {capabilities.tools.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-sm">
                        <span className="h-1 w-1 rounded-full bg-foreground/50" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-14 border-t border-border/60 pt-8">
                <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</h2>
                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                  {profile.links.map((l) => (
                    <a
                      key={l.label}
                      data-testid={`about-link-${l.label.toLowerCase()}`}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-2 text-sm"
                    >
                      <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-foreground">
                        {l.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{l.handle}</span>
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
