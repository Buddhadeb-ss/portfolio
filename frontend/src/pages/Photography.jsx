import { useState } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PhotoLightbox from "../components/PhotoLightbox";
import { Reveal, EASE } from "../components/Reveal";
import { photos } from "../data/portfolio";

export default function Photography() {
  const [active, setActive] = useState(null);

  return (
    <main data-testid="photography-page">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <Reveal>
          <h1 className="font-display text-5xl font-light tracking-tighter sm:text-6xl lg:text-7xl">
            Photography
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {photos.length} frames from my viewfinder — street, landscape, and the light in between.
              Shot on whatever was in hand, kept if it breathes.
            </p>
            <a
              data-testid="photography-instagram-link"
              href="https://www.instagram.com/arc.buddha/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:border-foreground/50"
            >
              <Instagram className="h-4 w-4" />
              @arc.buddha
            </a>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32" data-testid="photography-masonry">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((ph, i) => (
            <motion.figure
              key={ph.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: EASE }}
              className="mb-4 break-inside-avoid md:mb-5"
            >
              <button
                data-testid={`photography-photo-${ph.index}`}
                onClick={() => setActive(ph)}
                className="group relative block w-full overflow-hidden rounded-md"
                aria-label={`Open photograph ${ph.index}`}
              >
                <img
                  src={ph.src}
                  alt={`Photograph ${ph.index} by Buddhadeb Banik`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-90"
                />
                <figcaption className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] tracking-[0.2em] text-white backdrop-blur-sm">
                    {String(ph.index).padStart(2, "0")}
                  </span>
                </figcaption>
              </button>
              <figcaption className="mt-3" data-testid={`photography-caption-${ph.index}`}>
                <span className="text-[13px] font-medium">{ph.title}</span>
                <span className="mt-0.5 block text-xs font-light leading-relaxed text-muted-foreground">
                  {ph.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <PhotoLightbox
        photo={active}
        photos={photos}
        onClose={() => setActive(null)}
        onNavigate={(i) => setActive(photos[i])}
      />
      <Footer />
    </main>
  );
}
