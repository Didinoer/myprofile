"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./DayNightProvider";

const NAV_LINKS = [
  { id: "hero", label: "Home", icon: "🏠", location: "Village Entrance" },
  { id: "about", label: "About", icon: "👤", location: "Character House" },
  { id: "skills", label: "Skills", icon: "⚔️", location: "Training Ground" },
  { id: "portfolio", label: "Portfolio", icon: "📜", location: "Quest Board" },
  { id: "experience", label: "Journey", icon: "📖", location: "Adventure Journal" },
  { id: "achievements", label: "Achievements", icon: "🏆", location: "Hall of Fame" },
  { id: "contact", label: "Contact", icon: "✉️", location: "Post Office" },
];

export default function Navbar() {
  const { isDay, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const activeLink = NAV_LINKS.find((l) => l.id === activeSection);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          borderBottom: scrolled ? "3px solid var(--border-dark)" : "none",
          boxShadow: scrolled ? "0 4px 0 var(--shadow-color)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo / Location indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xl animate-bounce-pixel" style={{ imageRendering: "pixelated" }}>🗺️</span>
            <div className="hidden sm:block">
              <div
                className="text-[10px] font-pixel text-[var(--accent-secondary)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                📍 {activeLink?.location || "Village Entrance"}
              </div>
              <div
                className="text-[10px] font-pixel text-[var(--text-primary)] mt-0.5"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Didi&apos;s Village
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="group relative px-3 py-2 transition-all duration-150"
                aria-label={`Navigate to ${link.label}`}
              >
                <span
                  className="text-[14px] font-pixel flex items-center gap-1 transition-colors"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: activeSection === link.id ? "var(--accent-secondary)" : isDay ? "#000000" : "#ffffff",
                  }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: "var(--accent-secondary)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Day/Night Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-none border-2 border-[var(--border-dark)] overflow-hidden"
              style={{
                background: isDay ? "#87CEEB" : "#1A1A3E",
                boxShadow: "2px 2px 0 var(--shadow-color)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDay ? "night" : "day"} mode`}
              title={`Switch to ${isDay ? "night" : "day"} mode`}
            >
              <motion.div
                className="absolute top-[2px] w-5 h-5 flex items-center justify-center text-xs"
                animate={{ x: isDay ? 2 : 26 }}
                transition={{ type: "tween", duration: 0.2 }}
                style={{ imageRendering: "pixelated" }}
              >
                {isDay ? "☀️" : "🌙"}
              </motion.div>
            </motion.button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 border-2 border-[var(--border-color)]"
              style={{ background: "var(--panel-bg)" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-[2px] bg-[var(--text-primary)] mb-1 transition-all" />
              <div className="w-5 h-[2px] bg-[var(--text-primary)] mb-1 transition-all" />
              <div className="w-5 h-[2px] bg-[var(--text-primary)] transition-all" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 border-b-4 border-[var(--border-dark)]"
            style={{ background: "var(--nav-bg)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full px-6 py-4 flex items-center gap-3 border-b border-[var(--border-color)] text-left hover:opacity-80"
                style={{
                  background: activeSection === link.id ? "var(--bg-secondary)" : "transparent",
                }}
              >
                <span className="text-xl">{link.icon}</span>
                <div>
                  <div
                    className="text-[10px] font-pixel"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      color: activeSection === link.id ? "var(--accent-secondary)" : "var(--text-primary)",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="text-[10px] text-[var(--text-muted)]"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    {link.location}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
