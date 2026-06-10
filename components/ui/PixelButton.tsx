"use client";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { ReactNode, MouseEventHandler } from "react";

interface PixelButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-[#6ABF5E] text-[#1A1A00] border-[#3A7A2E] hover:bg-[#7ACF6E] shadow-[4px_4px_0_#3A7A2E]",
  secondary: "bg-[#FFD700] text-[#2C1810] border-[#C4A000] hover:bg-[#FFE740] shadow-[4px_4px_0_#C4A000]",
  danger: "bg-[#FF4444] text-white border-[#CC0000] hover:bg-[#FF6666] shadow-[4px_4px_0_#CC0000]",
  ghost: "bg-transparent text-[var(--text-primary)] border-[var(--border-color)] hover:bg-[var(--bg-secondary)] shadow-[4px_4px_0_var(--shadow-color)]",
};

const sizes = {
  sm: "px-3 py-2 text-[7px]",
  md: "px-4 py-3 text-[8px]",
  lg: "px-6 py-4 text-[9px]",
};

export default function PixelButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
}: PixelButtonProps) {
  const baseClass = clsx(
    "pixel-btn font-pixel border-4 transition-none cursor-pointer inline-flex items-center justify-center gap-2",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { x: 2, y: 2, boxShadow: "none" }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={baseClass}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { x: 2, y: 2, boxShadow: "none" }}
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {children}
    </motion.button>
  );
}
