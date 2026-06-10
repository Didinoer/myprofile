"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CompanionCharacter from "@/components/layout/CompanionCharacter";
import ParticleLayer from "@/components/layout/ParticleLayer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, AnimatePresence } from "framer-motion";

// Konami code easter egg: ↑↑↓↓←→←→ba
const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Konami code listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIdx]) {
        const next = konamiIdx + 1;
        if (next === KONAMI.length) {
          setKonamiUnlocked(true);
          setTimeout(() => setKonamiUnlocked(false), 4000);
          setKonamiIdx(0);
        } else {
          setKonamiIdx(next);
        }
      } else {
        setKonamiIdx(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [konamiIdx]);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: "#0F0F1A" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-6xl mb-8"
              style={{ imageRendering: "pixelated" }}
            >
              🏰
            </motion.div>
            <div
              className="text-[10px] font-pixel text-[#FFD700] mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Loading Village...
            </div>
            {/* Pixel progress bar */}
            <div
              className="w-48 h-4 overflow-hidden"
              style={{ background: "#1A1A2E", border: "3px solid #3D3060" }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "linear" }}
                className="h-full"
                style={{ background: "linear-gradient(90deg, #6ABF5E, #00E65C)" }}
              />
            </div>
            <div
              className="mt-4 text-[7px] font-pixel text-[#6B6090] animate-blink"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Press START to begin
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami code celebration */}
      <AnimatePresence>
        {konamiUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center pointer-events-none"
            style={{ background: "rgba(0,0,0,0.85)" }}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-center"
            >
              <div className="text-8xl mb-4" style={{ imageRendering: "pixelated" }}>🎉</div>
              <div
                className="text-sm font-pixel text-[#FFD700] mb-2"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                KONAMI CODE!
              </div>
              <div
                className="text-[9px] font-pixel text-[#AA66CC]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                🏆 Secret Achievement Unlocked:<br />
                &quot;Code Whisperer&quot;
              </div>
              {/* Falling emojis */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl pointer-events-none"
                  initial={{ y: -50, x: `${(i * 8.5) - 5}vw`, opacity: 1 }}
                  animate={{ y: "100vh", opacity: 0 }}
                  transition={{ duration: 2, delay: i * 0.1, ease: "linear" }}
                  style={{ imageRendering: "pixelated" }}
                >
                  {["⭐", "🌟", "✨", "🎮", "🏆", "🌸", "🎯", "⚔️", "🔮", "💫", "🎊", "🌺"][i]}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site */}
      <div className="relative">
        <Navbar />
        <ParticleLayer />
        <CompanionCharacter />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer
          className="relative py-8 px-4 text-center border-t-4"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border-dark)",
          }}
        >
          <div
            className="text-[8px] font-pixel text-[var(--text-muted)] mb-2"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            © 2025 Didi Nurahman
          </div>
          <div
            className="text-[7px] font-pixel text-[var(--text-muted)]"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            Crafted with ❤️ + ⚔️ + ☕
          </div>
          <div
            className="mt-2 text-[6px] font-pixel text-[var(--text-muted)] opacity-50"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            🕹️ Try the Konami Code for a surprise!
          </div>
        </footer>
      </div>
    </>
  );
}
