"use client";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface PixelBorderProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gold" | "dark" | "night";
  padding?: string;
}

export default function PixelBorder({
  children,
  className,
  variant = "default",
  padding = "p-4",
}: PixelBorderProps) {
  return (
    <div
      className={clsx(
        padding,
        "relative",
        {
          "pixel-box bg-[var(--panel-bg)]": variant === "default",
          "pixel-box-gold bg-[var(--panel-bg)]": variant === "gold",
          "border-4 border-[#1A1A2E] bg-[#0F0F1A] shadow-[4px_4px_0_rgba(0,0,0,0.8)]":
            variant === "dark",
          "border-4 border-[#2D1B69] bg-[#1A1A3E] shadow-[4px_4px_0_rgba(0,0,0,0.7)]":
            variant === "night",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
