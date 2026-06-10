"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { clsx } from "clsx";

interface SkillBarProps {
  name: string;
  icon: string;
  level: number;
  xp: number;
  color: string;
  delay?: number;
}

export default function SkillBar({
  name,
  icon,
  level,
  xp,
  color,
  delay = 0,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className="flex items-center gap-3 py-2"
    >
      {/* Icon */}
      <div
        className="w-8 h-8 flex items-center justify-center text-lg flex-shrink-0"
        style={{
          imageRendering: "pixelated",
          filter: `drop-shadow(0 0 4px ${color}80)`,
        }}
      >
        {icon}
      </div>

      {/* Skill info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-xs font-pixel text-[var(--text-primary)] truncate"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "8px" }}
          >
            {name}
          </span>
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <span
              className="text-[7px] font-pixel text-[var(--text-muted)]"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Lv.{level}
            </span>
            <span
              className="text-[7px] font-pixel"
              style={{ color, fontFamily: "'Press Start 2P', monospace" }}
            >
              {xp}%
            </span>
          </div>
        </div>

        {/* XP bar */}
        <div className="xp-bar-container rounded-none overflow-hidden">
          <motion.div
            className="xp-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: animated ? `${xp}%` : "0%" }}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1,
            }}
            style={{ background: `linear-gradient(90deg, ${color}CC 0%, ${color} 50%, ${color}CC 100%)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
