import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLines({ lines, className = "", lineClassName = "", baseDelay = 0.1, stagger = 0.12 }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: baseDelay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
