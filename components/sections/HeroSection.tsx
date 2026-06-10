"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/components/layout/DayNightProvider";
import PixelButton from "@/components/ui/PixelButton";
import { profile } from "@/data/profile";

// Easter egg: tree click achievement
let treeClicks = 0;

export default function HeroSection() {
  const { isDay } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax transforms
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const treeY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [easterEgg, setEasterEgg] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    // Hide "press any key" prompt after first scroll
    const handler = () => setShowPrompt(false);
    window.addEventListener("scroll", handler, { once: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleTreeClick = () => {
    treeClicks++;
    if (treeClicks >= 1) {
      setEasterEgg(true);
      setTimeout(() => setEasterEgg(false), 3000);
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: isDay ? "linear-gradient(180deg, #5BA3D9 0%, #87CEEB 40%, #B8E0F7 70%, #6ABF5E 100%)" : "linear-gradient(180deg, #0D0D2B 0%, #1A1A3E 50%, #0D1F10 100%)" }}
    >
      {/* Stars (night only) */}
      {!isDay && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `star-twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                imageRendering: "pixelated",
              }}
            />
          ))}
        </div>
      )}

      {/* Sky layer */}
      <motion.div style={{ y: skyY }} className="absolute inset-0 pointer-events-none">
        {/* Clouds */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${10 + i * 8}%`,
              left: `-200px`,
              animation: `cloud-drift ${20 + i * 8}s linear ${i * 6}s infinite`,
            }}
          >
            <div
              className="text-4xl md:text-5xl"
              style={{ imageRendering: "pixelated", opacity: isDay ? 0.9 : 0.3, filter: isDay ? "none" : "brightness(0.4)" }}
            >
              ☁️
            </div>
          </motion.div>
        ))}

        {/* Birds (day only) */}
        {isDay && (
          <div
            className="absolute top-[15%] left-0 text-sm"
            style={{ animation: "bird-fly 12s ease-in-out 2s infinite" }}
          >
            🐦
          </div>
        )}

        {/* Moon (night only) */}
        {!isDay && (
          <div
            className="absolute top-[10%] right-[10%] text-4xl"
            style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 10px rgba(255,250,205,0.5))" }}
          >
            🌙
          </div>
        )}
      </motion.div>

      {/* Mountain layer */}
      <motion.div style={{ y: mountainY }} className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="relative h-48 md:h-64">
          {/* Pixel mountains using CSS */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: isDay
                ? "linear-gradient(180deg, #8B9EB4 0%, #6B7E94 100%)"
                : "linear-gradient(180deg, #1A2030 0%, #0D1520 100%)",
              clipPath: "polygon(0% 100%, 0% 60%, 8% 20%, 15% 60%, 22% 35%, 30% 70%, 38% 15%, 48% 65%, 55% 30%, 63% 60%, 70% 25%, 78% 55%, 85% 35%, 93% 70%, 100% 40%, 100% 100%)",
            }}
          />
          {/* Snow caps */}
          {isDay && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 opacity-70"
              style={{
                background: "transparent",
                backgroundImage: "radial-gradient(2px 2px at 8% 20%, white 0%, transparent 100%), radial-gradient(2px 2px at 22% 35%, white 0%, transparent 100%), radial-gradient(2px 2px at 38% 15%, white 0%, transparent 100%), radial-gradient(2px 2px at 55% 30%, white 0%, transparent 100%), radial-gradient(2px 2px at 70% 25%, white 0%, transparent 100%), radial-gradient(2px 2px at 85% 35%, white 0%, transparent 100%)",
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Tree layer with easter egg */}
      <motion.div style={{ y: treeY }} className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="flex items-end justify-between px-4 pb-0">
          {/* Left trees */}
          <div className="flex items-end gap-1">
            <button
              className="text-4xl md:text-5xl cursor-pointer pointer-events-auto"
              onClick={handleTreeClick}
              aria-label="Click the tree to discover a secret!"
              title="🌳 Try clicking me!"
              style={{ imageRendering: "pixelated", background: "none", border: "none", filter: "drop-shadow(2px 0 0 rgba(0,0,0,0.3))" }}
            >
              🌲
            </button>
            <div className="text-3xl md:text-4xl" style={{ imageRendering: "pixelated" }}>🌳</div>
            <div className="text-5xl md:text-6xl" style={{ imageRendering: "pixelated", filter: "drop-shadow(2px 0 0 rgba(0,0,0,0.3))" }}>🌲</div>
          </div>

          {/* Right trees */}
          <div className="flex items-end gap-1">
            <div className="text-5xl md:text-6xl" style={{ imageRendering: "pixelated", filter: "drop-shadow(-2px 0 0 rgba(0,0,0,0.3))" }}>🌲</div>
            <div className="text-3xl md:text-4xl" style={{ imageRendering: "pixelated" }}>🌳</div>
            <div className="text-4xl md:text-5xl" style={{ imageRendering: "pixelated" }}>🌲</div>
          </div>
        </div>
      </motion.div>

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-20"
        style={{
          background: isDay
            ? "linear-gradient(180deg, #6ABF5E 0%, #4E9A3E 50%, #3A7A2E 100%)"
            : "linear-gradient(180deg, #1A3320 0%, #0D2015 100%)",
        }}
      >
        {/* Grass blades */}
        <div
          className="absolute top-0 left-0 right-0 h-4"
          style={{
            backgroundImage: isDay
              ? "repeating-linear-gradient(90deg, #7ACF6E 0px, #7ACF6E 3px, transparent 3px, transparent 8px)"
              : "repeating-linear-gradient(90deg, #1A4020 0px, #1A4020 3px, transparent 3px, transparent 8px)",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 pt-20 pb-32"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Avatar frame */}
              <div
                className="w-40 h-40 md:w-56 md:h-56 relative overflow-hidden"
                style={{
                  border: "6px solid var(--border-dark)",
                  boxShadow: "8px 8px 0 var(--shadow-color), 0 0 20px var(--glow-color)",
                  background: isDay ? "#87CEEB" : "#1A1A3E",
                  imageRendering: "pixelated",
                }}
              >
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} pixel avatar`}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                  priority
                />
              </div>

              {/* Level badge */}
              <div
                className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center"
                style={{
                  background: "#FFD700",
                  border: "3px solid #C4A000",
                  boxShadow: "3px 3px 0 rgba(0,0,0,0.5)",
                }}
              >
                <span
                  className="text-[7px] font-pixel text-[#2C1810]"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  Lv99
                </span>
              </div>

              {/* HP/SP bars */}
              <div className="mt-4 space-y-1 w-40 md:w-56">
                <div className="flex items-center gap-2">
                  <span className="text-[7px] font-pixel text-red-400 w-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>HP</span>
                  <div className="flex-1 xp-bar-container">
                    <div className="xp-bar-fill" style={{ width: "100%", background: "linear-gradient(90deg, #FF4444, #FF6666)" }} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[7px] font-pixel text-blue-400 w-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>MP</span>
                  <div className="flex-1 xp-bar-container">
                    <div className="xp-bar-fill" style={{ width: "88%", background: "linear-gradient(90deg, #3388FF, #55AAFF)" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="h-[3px] w-6 bg-[var(--accent-secondary)]" />
              <span
                className="text-[8px] font-pixel text-[var(--accent-secondary)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                ✨ PLAYER ONE
              </span>
              <div className="h-[3px] w-6 bg-[var(--accent-secondary)]" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-3 text-glow"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                color: isDay ? "#FFF9F0" : "#E8E0FF",
                textShadow: isDay
                  ? "4px 4px 0 rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.3)"
                  : "4px 4px 0 rgba(0,0,0,0.8), 0 0 20px rgba(170,102,204,0.5)",
                lineHeight: 1.4,
              }}
            >
              {profile.name}
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <div
                className="inline-block px-4 py-2"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "2px solid var(--accent-secondary)",
                  boxShadow: "0 0 8px var(--glow-color)",
                }}
              >
                <span
                  className="text-[10px] font-pixel"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: "var(--accent-secondary)",
                  }}
                >
                  {profile.title}
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl mb-8 italic"
              style={{
                fontFamily: "'VT323', monospace",
                color: isDay ? "rgba(255,255,255,0.9)" : "rgba(232,224,255,0.8)",
                fontSize: "22px",
              }}
            >
              &quot;{profile.tagline}&quot;
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <PixelButton href="#portfolio" variant="primary" size="md">
                📜 View Portfolio
              </PixelButton>
              <PixelButton href={profile.resume} variant="secondary" size="md">
                📄 Download CV
              </PixelButton>
              <PixelButton href="#contact" variant="ghost" size="md">
                ✉️ Contact Me
              </PixelButton>
            </motion.div>

            {/* Scroll prompt */}
            {showPrompt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-8 flex items-center gap-2 justify-center lg:justify-start"
              >
                <span
                  className="text-[7px] font-pixel text-white/60 animate-blink"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  ▼ scroll to explore
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Easter egg toast */}
      {easterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4"
          style={{
            background: "#FFD700",
            border: "4px solid #C4A000",
            boxShadow: "6px 6px 0 rgba(0,0,0,0.5)",
          }}
        >
          <p
            className="text-[9px] font-pixel text-[#2C1810]"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            🏆 Achievement Unlocked: Tree Whisperer!
          </p>
        </motion.div>
      )}
    </section>
  );
}
