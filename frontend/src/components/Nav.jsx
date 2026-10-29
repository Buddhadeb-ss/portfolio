import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const links = [
  { to: "/work", label: "Work" },
  { to: "/photography", label: "Photography" },
  { to: "/about", label: "About" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      data-testid="theme-toggle-button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex"
      >
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.span>
    </button>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl"
      data-testid="site-navigation"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          data-testid="nav-logo-link"
          className="group flex items-center gap-2.5 text-foreground"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.__lenis?.scrollTo(0) ?? window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo className="h-[22px] w-[22px] transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="hidden font-display text-[15px] font-medium tracking-tight sm:inline">Buddhadeb Banik</span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-[13px] md:text-sm tracking-wide transition-colors duration-300 hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
