"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Keep exploring! 🗺️",
  "You're doing great! ✨",
  "Check out my projects!",
  "Don't forget to say hi!",
  "Psst... try clicking a tree 🌳",
  "Skills level up with practice!",
  "Every quest matters! 📜",
  "You are special! 💫",
];

export default function CompanionCharacter() {
  const [scrollPct, setScrollPct] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [msgIdx, setMsgIdx] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [prevPct, setPrevPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollPct(pct);

      if (Math.abs(pct - prevPct) > 0.005) {
        setIsWalking(true);
        setPrevPct(pct);
      }
    };

    const stopWalking = () => setIsWalking(false);
    let walkTimer: ReturnType<typeof setTimeout>;

    const debouncedStop = () => {
      clearTimeout(walkTimer);
      walkTimer = setTimeout(stopWalking, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", debouncedStop, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", debouncedStop);
      clearTimeout(walkTimer);
    };
  }, [prevPct]);

  // Periodic message
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(MESSAGES[msgIdx % MESSAGES.length]);
      setMsgIdx((i) => i + 1);
      setTimeout(() => setMessage(null), 3500);
    }, 8000);
    return () => clearInterval(interval);
  }, [msgIdx]);

  // Position companion along right side based on scroll
  const topPct = 20 + scrollPct * 60; // 20% to 80% of viewport height

  return (
    <div
      className="fixed right-4 z-30 pointer-events-none select-none"
      style={{ top: `${topPct}%`, transition: "top 0.3s ease-out" }}
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            className="absolute right-14 bottom-4 w-40 pointer-events-none"
          >
            <div
              className="bg-[var(--panel-bg)] border-2 border-[var(--border-dark)] p-2 text-center"
              style={{ boxShadow: "3px 3px 0 var(--shadow-color)" }}
            >
              <p
                className="text-[8px] text-[var(--text-primary)] leading-tight"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {message}
              </p>
            </div>
            {/* Arrow pointing right */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[6px] w-0 h-0"
              style={{
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderLeft: "6px solid var(--border-dark)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character sprite */}
      <motion.div
        animate={isWalking ? { y: [0, -4, 0, -2, 0] } : { y: [0, -3, 0] }}
        transition={
          isWalking
            ? { duration: 0.4, repeat: Infinity, ease: "linear" }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className="w-10 h-10 flex items-center justify-center text-3xl"
        style={{ imageRendering: "pixelated", filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.5))" }}
      >
        {isWalking ? "🧙" : "🧙‍♂️"}
      </motion.div>

      {/* Shadow */}
      <div
        className="w-6 h-1 mx-auto opacity-30"
        style={{ background: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
      />
    </div>
  );
}
