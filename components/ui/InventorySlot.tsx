"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type ItemRarity, rarityColors } from "@/data/skills";

interface InventorySlotProps {
  name: string;
  icon: string;
  description: string;
  rarity: ItemRarity;
  index: number;
}

export default function InventorySlot({
  name,
  icon,
  description,
  rarity,
  index,
}: InventorySlotProps) {
  const [hovered, setHovered] = useState(false);
  const rarityColor = rarityColors[rarity];

  const isUrl = icon.startsWith("http") || icon.startsWith("/");
  const isSvg = icon.trim().startsWith("<svg");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slot */}
      <div
        className="inventory-slot w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center gap-1 p-1"
        style={{ borderColor: hovered ? rarityColor : undefined }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center relative">
          {isSvg ? (
            <div 
              className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
              dangerouslySetInnerHTML={{ __html: icon }} 
            />
          ) : isUrl ? (
            <img
              src={icon}
              alt={name}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-2xl md:text-3xl" style={{ imageRendering: "pixelated" }}>
              {icon}
            </span>
          )}
        </div>
        <span
          className="text-[10px] font-pixel text-center leading-none mt-1"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: rarityColor,
          }}
        >
          {rarity}
        </span>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-40 pointer-events-none"
            style={{ imageRendering: "pixelated" }}
          >
            <div
              className="bg-[#0F0F1A] border-2 p-2 text-center"
              style={{ borderColor: rarityColor }}
            >
              <div
                className="text-[10px] font-pixel mb-1"
                style={{ fontFamily: "'Press Start 2P', monospace", color: rarityColor }}
              >
                {name}
              </div>
              <div
                className="text-[10px] text-[#A89EC0] leading-tight"
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: "10px" }}
              >
                {description}
              </div>
              <div
                className="mt-1 text-[10px] font-pixel"
                style={{ fontFamily: "'Press Start 2P', monospace", color: rarityColor, opacity: 0.8 }}
              >
                [{rarity}]
              </div>
            </div>
            {/* Tooltip arrow */}
            <div
              className="w-2 h-2 mx-auto rotate-45 -mt-1"
              style={{ background: rarityColor }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
