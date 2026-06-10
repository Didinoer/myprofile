"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DialogueBoxProps {
  text: string;
  speakerName?: string;
  speakerIcon?: string;
  speed?: number; // ms per character
  className?: string;
  onComplete?: () => void;
  autoPlay?: boolean;
}

export default function DialogueBox({
  text,
  speakerName,
  speakerIcon = "💬",
  speed = 30,
  className = "",
  onComplete,
  autoPlay = true,
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    setDisplayedText("");
    setIsComplete(false);
    setCharIndex(0);
  }, [text, autoPlay]);

  useEffect(() => {
    if (!autoPlay) return;
    if (charIndex >= text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, text, speed, onComplete, autoPlay]);

  const handleClick = () => {
    if (!isComplete) {
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`dialog-box p-4 md:p-6 cursor-pointer select-none ${className}`}
      onClick={handleClick}
      role="dialog"
      aria-label="NPC dialogue"
    >
      {speakerName && (
        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[var(--border-color)]">
          <span className="text-lg">{speakerIcon}</span>
          <span
            className="font-pixel text-[9px] text-[var(--accent-secondary)]"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            {speakerName}
          </span>
        </div>
      )}
      <p
        className="font-body text-sm md:text-base text-[var(--text-primary)] leading-relaxed"
        style={{ fontFamily: "'Nunito', sans-serif", minHeight: "3rem" }}
      >
        {autoPlay ? displayedText : text}
        {autoPlay && !isComplete && (
          <span className="animate-blink text-[var(--accent-primary)]">▮</span>
        )}
      </p>
      {isComplete && (
        <div className="flex justify-end mt-2">
          <span
            className="text-[8px] font-pixel text-[var(--text-muted)] animate-bounce-pixel"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            ▼ next
          </span>
        </div>
      )}
    </motion.div>
  );
}
