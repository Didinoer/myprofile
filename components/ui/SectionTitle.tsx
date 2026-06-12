"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  icon: string;
  title: string;
  subtitle?: string;
  location?: string;
}

export default function SectionTitle({ icon, title, subtitle, location }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      {/* Location label */}
      {location && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-[2px] w-8 bg-[var(--border-color)]" />
          <span
            className="text-[10px] font-pixel text-[var(--text-muted)] tracking-widest"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            📍 {location}
          </span>
          <div className="h-[2px] w-8 bg-[var(--border-color)]" />
        </div>
      )}

      {/* Main title banner */}
      <div className="inline-block relative">
        {/* Banner background */}
        <div
          className="px-8 py-4 relative"
          style={{
            background: "var(--wood-brown, #8B6914)",
            border: "4px solid var(--border-dark, #5C4A1E)",
            boxShadow: "6px 6px 0 var(--shadow-color)",
          }}
        >
          {/* Decorative nails */}
          <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-[#C4A000] opacity-80" />
          <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#C4A000] opacity-80" />
          <div className="absolute bottom-1 left-2 w-2 h-2 rounded-full bg-[#C4A000] opacity-80" />
          <div className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-[#C4A000] opacity-80" />

          <div className="flex items-center gap-3 justify-center">
            <span className="text-3xl" style={{ imageRendering: "pixelated" }}>
              {icon}
            </span>
            <h2
              className="text-sm md:text-base font-pixel text-[#FFF9F0]"
              style={{ fontFamily: "'Press Start 2P', monospace", textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Banner rope/string decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[var(--border-dark, #5C4A1E)]" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-xl mx-auto"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="h-[2px] w-16 bg-[var(--border-color)]" />
        <span className="text-[var(--accent-secondary)]">✦</span>
        <div className="h-[2px] w-16 bg-[var(--border-color)]" />
      </div>
    </motion.div>
  );
}
