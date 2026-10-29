import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import { Reveal, MaskedLines, EASE } from "../components/Reveal";
import { profile, projects, photos, splitPanels, drive } from "../data/portfolio";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMark = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[94svh] flex-col justify-center overflow-hidden" data-testid="home-hero">
      <motion.div style={{ y: yMark }} className="absolute right-12 top-1/2 hidden -translate-y-1/2 xl:block">
        <motion.div
          data-testid="hero-portrait"
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 1.2, ease: EASE }}
          className="group relative"
        >
          <img
            src="/portrait.webp"
            alt="Buddhadeb Banik"
            className="h-[400px] w-[280px] rounded-md border border-border/70 object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-black/5" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: yCopy, opacity }} className="mx-auto w-full max-w-6xl px-6 pt-24 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          {profile.name} — {profile.location}
        </motion.p>

        <h1 className="font-display text-[clamp(2.9rem,9.5vw,7.25rem)] font-light leading-[0.98] tracking-tighter">
          <MaskedLines lines={profile.headline} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between xl:pr-[360px]"
        >
          <p className="max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            {profile.tagline}
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/work"
              data-testid="hero-cta-work"
              className="whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              View the work
            </Link>
            <Link
              to="/photography"
              data-testid="hero-cta-photography"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-6 py-3 text-sm transition-colors duration-300 hover:border-foreground/50"
            >
              Photography
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-6 flex items-center gap-3 text-muted-foreground md:left-10"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
      </motion.div>
    </section>
  );
}

function SplitSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32" data-testid="home-split-section">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Two disciplines</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
          One pair of eyes, two ways of seeing.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
        {splitPanels.map((p, i) => (
          <Reveal key={p.to} delay={i * 0.12}>
            <Link
              to={p.to}
              data-testid={p.testid}
              className="group relative block h-[58vh] overflow-hidden rounded-md md:h-[68vh]"
            >
              <img
                src={p.image}
                alt={p.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">{p.overline}</p>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-display text-3xl font-light tracking-tight text-white md:text-4xl">{p.title}</h3>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 max-w-xs text-sm font-light text-white/75">{p.line}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, index }) {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <Link
        to={`/work/${p.id}`}
        data-testid={`home-project-card-${p.id}`}
        className="group block"
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
        </div>
      </Link>
    </Reveal>
  );
}

function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="border-t border-border/60" data-testid="home-featured-work">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected work</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Built from silicon up.
            </h2>
          </div>
          <Link
            to="/work"
            data-testid="home-all-projects-link"
            className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <Link
          to="/work"
          data-testid="home-all-projects-link-mobile"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground md:hidden"
        >
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function PhotoStrip() {
  const strip = photos.slice(0, 5);
  return (
    <section className="border-t border-border/60" data-testid="home-photo-strip">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The other half</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Chasing light, not clock speed.
            </h2>
          </div>
          <Link
            to="/photography"
            data-testid="home-gallery-link"
            className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Full gallery
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-14 flex gap-4 overflow-x-auto pb-2 md:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {strip.map((ph, i) => (
            <Reveal key={ph.id} delay={i * 0.08} className="shrink-0">
              <Link to="/photography" data-testid={`home-photo-strip-item-${i + 1}`} className="group block">
                <div className="h-64 w-52 overflow-hidden rounded-md md:h-80 md:w-64">
                  <img
                    src={ph.thumb}
                    alt={`Photograph ${ph.index}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                </div>
                <p className="mt-2 text-[11px] tracking-[0.2em] text-muted-foreground">
                  {String(ph.index).padStart(2, "0")}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          to="/photography"
          data-testid="home-gallery-link-mobile"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground md:hidden"
        >
          Full gallery <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee />
      <SplitSection />
      <FeaturedWork />
      <PhotoStrip />
      <Footer />
    </main>
  );
}
