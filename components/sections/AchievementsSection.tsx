"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import InventorySlot from "@/components/ui/InventorySlot";
import { profile } from "@/data/profile";
import { achievements } from "@/data/experience";
import { techInventory } from "@/data/skills";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/hall_of_fame.png"
          alt="Hall of fame background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          icon="🏆"
          title="Hall of Fame"
          subtitle="Legendary deeds & collected trophies"
          location="Achievements"
        />

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
        >
          {[
            { label: "Years of\nExp", value: profile.stats.yearsExperience, icon: "⏰", suffix: "+" },
            { label: "Projects\nDone", value: profile.stats.projectsCompleted, icon: "✅", suffix: "+" },
            { label: "Happy\nClients", value: profile.stats.happyClients, icon: "😊", suffix: "+" },
            { label: "ERP\nDeploys", value: profile.stats.erpImplementations, icon: "⚙️", suffix: "" },
            { label: "Certifi-\ncations", value: profile.stats.certifications, icon: "📜", suffix: "" },
          ].map(({ label, value, icon, suffix }) => (
            <div
              key={label}
              className="text-center p-4"
              style={{
                background: "var(--panel-bg)",
                border: "4px solid var(--border-dark)",
                boxShadow: "6px 6px 0 var(--shadow-color)",
              }}
            >
              <div className="text-3xl mb-2" style={{ imageRendering: "pixelated" }}>
                {icon}
              </div>
              <div
                className="text-2xl md:text-3xl font-pixel text-[var(--accent-secondary)] mb-1"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div
                className="text-[6px] font-pixel text-[var(--text-muted)] whitespace-pre-line leading-relaxed"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievement badges */}
        <div className="mb-12">
          <div
            className="text-[8px] font-pixel text-[var(--text-muted)] mb-4 text-center"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            ── ACHIEVEMENT BADGES ──
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="text-center p-4 badge-unlock"
                style={{
                  background: "var(--panel-bg)",
                  border: "3px solid var(--border-dark)",
                  boxShadow: "4px 4px 0 var(--shadow-color)",
                }}
              >
                <div className="text-3xl mb-2" style={{ imageRendering: "pixelated" }}>
                  {ach.icon}
                </div>
                <div
                  className="text-[7px] font-pixel text-[var(--accent-secondary)] mb-1 leading-relaxed"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  {ach.title}
                </div>
                <div
                  className="text-[8px] text-[var(--text-muted)]"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {ach.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Inventory */}
        <div>
          <div
            className="px-4 py-3 mb-0 flex items-center justify-between"
            style={{
              background: "linear-gradient(90deg, #1A1A2E, #2D2D4A)",
              border: "4px solid #3D3060",
              borderBottom: "none",
            }}
          >
            <span
              className="text-[8px] font-pixel text-[#AA66CC]"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              🎒 Technology Inventory
            </span>
            <span
              className="text-[7px] font-pixel text-[#6B6090]"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              {techInventory.length}/{techInventory.length} items
            </span>
          </div>
          <div
            className="p-6"
            style={{
              background: "#16162A",
              border: "4px solid #3D3060",
              borderTop: "none",
              boxShadow: "6px 6px 0 rgba(0,0,0,0.6)",
            }}
          >
            <div className="flex flex-wrap gap-3">
              {techInventory.map((item, i) => (
                <InventorySlot
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  description={item.description}
                  rarity={item.rarity as "Common" | "Rare" | "Epic" | "Legendary"}
                  index={i}
                />
              ))}
            </div>
            <div className="mt-4 flex gap-4 flex-wrap">
              {(["Common", "Rare", "Epic", "Legendary"] as const).map((r) => {
                const colors = { Common: "#9B9B9B", Rare: "#33B5E5", Epic: "#AA66CC", Legendary: "#FFD700" };
                return (
                  <div key={r} className="flex items-center gap-1">
                    <div className="w-2 h-2" style={{ background: colors[r] }} />
                    <span
                      className="text-[6px] font-pixel"
                      style={{ fontFamily: "'Press Start 2P', monospace", color: colors[r] }}
                    >
                      {r}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
