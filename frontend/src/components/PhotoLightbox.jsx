import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoLightbox({ photo, photos, onClose, onNavigate }) {
  const prev = useCallback(
    () => onNavigate((photos.findIndex((p) => p.id === photo.id) - 1 + photos.length) % photos.length),
    [photo, photos, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((photos.findIndex((p) => p.id === photo.id) + 1) % photos.length),
    [photo, photos, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox"
          data-testid="photo-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl md:p-12"
          onClick={onClose}
        >
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photo.full}
              alt={`Photograph ${photo.index} by Buddhadeb Banik`}
              className="max-h-[82vh] max-w-full rounded-sm object-contain"
              referrerPolicy="no-referrer"
            />
            <figcaption className="mt-4 text-xs tracking-[0.2em] text-muted-foreground">
              {photo.title} — {String(photo.index).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </figcaption>
          </motion.figure>

          <button
            data-testid="lightbox-close-button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <button
            data-testid="lightbox-prev-button"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition-colors hover:text-foreground md:left-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            data-testid="lightbox-next-button"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 text-foreground/80 transition-colors hover:text-foreground md:right-8"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
