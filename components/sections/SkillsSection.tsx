"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBar from "@/components/ui/SkillBar";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";

const categoryIcons: Record<SkillCategory, string> = {
  Backend: "⚙️",
  ERP: "🏗️",
  Frontend: "🎨",
  Database: "🗄️",
  DevOps: "🐳",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Backend");

  const filtered = skills.filter((s) => s.category === activeCategory);
  const totalXP = filtered.reduce((sum, s) => sum + s.xp, 0);
  const avgXP = Math.round(totalXP / (filtered.length || 1));

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <Image
          src="/images/training_ground.png"
          alt="Training ground background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          icon="⚔️"
          title="Training Ground"
          subtitle="Character stats & skill mastery"
          location="Skills"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Category selector panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Status window header */}
            <div
              className="px-4 py-3 mb-0"
              style={{
                background: "linear-gradient(90deg, #1A1A2E, #2D2D4A)",
                border: "4px solid #3D3060",
                borderBottom: "none",
                boxShadow: "4px 0 0 rgba(0,0,0,0.4), -4px 0 0 rgba(0,0,0,0.4)",
              }}
            >
              <span
                className="text-[10px] font-pixel text-[#AA66CC]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                ── STATUS ──
              </span>
            </div>

            <div
              className="p-4 space-y-2"
              style={{
                background: "#16162A",
                border: "4px solid #3D3060",
                borderTop: "none",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.6)",
              }}
            >
              {skillCategories.map((cat) => {
                const catSkills = skills.filter((s) => s.category === cat);
                const catAvg = Math.round(catSkills.reduce((s, sk) => s + sk.xp, 0) / catSkills.length);

                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center gap-3 p-3 text-left transition-all"
                    style={{
                      background: activeCategory === cat ? "rgba(170,102,204,0.2)" : "transparent",
                      border: activeCategory === cat ? "2px solid #AA66CC" : "2px solid transparent",
                      boxShadow: activeCategory === cat ? "0 0 8px rgba(170,102,204,0.3)" : "none",
                    }}
                  >
                    <span className="text-xl flex-shrink-0">{categoryIcons[cat]}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[10px] font-pixel mb-1"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          color: activeCategory === cat ? "#AA66CC" : "#A89EC0",
                        }}
                      >
                        {cat}
                      </div>
                      <div className="h-2 bg-[#2D2D4A] overflow-hidden" style={{ border: "1px solid #3D3060" }}>
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            width: `${catAvg}%`,
                            background: activeCategory === cat
                              ? "linear-gradient(90deg, #AA66CC, #CC88EE)"
                              : "linear-gradient(90deg, #555, #777)",
                          }}
                        />
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-pixel flex-shrink-0"
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        color: activeCategory === cat ? "#FFD700" : "#6B6090",
                      }}
                    >
                      {catAvg}%
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Overall stats */}
            <div
              className="mt-4 p-4"
              style={{
                background: "#16162A",
                border: "4px solid #3D3060",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.6)",
              }}
            >
              <div
                className="text-[10px] font-pixel text-[#AA66CC] mb-3"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                ── BATTLE STATS ──
              </div>
              {[
                { label: "STR", value: 88, color: "#FF4444" },
                { label: "INT", value: 92, color: "#33B5E5" },
                { label: "AGI", value: 75, color: "#00C851" },
                { label: "DEX", value: 80, color: "#FFD700" },
                { label: "LUK", value: 70, color: "#AA66CC" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-pixel w-8 flex-shrink-0"
                    style={{ fontFamily: "'Press Start 2P', monospace", color }}
                  >
                    {label}
                  </span>
                  <div className="flex-1 h-2 bg-[#2D2D4A]" style={{ border: "1px solid #3D3060" }}>
                    <div style={{ width: `${value}%`, height: "100%", background: color, transition: "width 1s ease" }} />
                  </div>
                  <span
                    className="text-[10px] font-pixel flex-shrink-0"
                    style={{ fontFamily: "'Press Start 2P', monospace", color: "#6B6090" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skill bars panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            {/* Panel header */}
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{
                background: "linear-gradient(90deg, var(--border-dark), var(--border-color))",
                border: "4px solid var(--border-dark)",
                borderBottom: "none",
              }}
            >
              <span
                className="text-[10px] font-pixel text-[var(--warm-white)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {categoryIcons[activeCategory]} {activeCategory} Skills
              </span>
              <span
                className="text-[10px] font-pixel text-[var(--accent-secondary)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Avg: {avgXP}%
              </span>
            </div>

            <div
              className="p-6"
              style={{
                background: "var(--panel-bg)",
                border: "4px solid var(--border-dark)",
                borderTop: "none",
                boxShadow: "6px 6px 0 var(--shadow-color)",
                minHeight: "300px",
              }}
            >
              <div className="space-y-1">
                {filtered.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    xp={skill.xp}
                    color={skill.color}
                    delay={i * 80}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center gap-4 flex-wrap">
              {["Novice (1-3)", "Adept (4-6)", "Expert (7-8)", "Master (9-10)"].map((label, i) => {
                const colors = ["#9B9B9B", "#33B5E5", "#AA66CC", "#FFD700"];
                return (
                  <div key={label} className="flex items-center gap-1">
                    <div className="w-3 h-3 border border-[var(--border-color)]" style={{ background: colors[i] }} />
                    <span
                      className="text-[10px] font-pixel text-[var(--text-muted)]"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
