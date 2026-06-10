"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <Image
          src="/images/adventure_journal.png"
          alt="Adventure journal background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 text-5xl opacity-15 animate-float" style={{ imageRendering: "pixelated" }}>📖</div>
      <div className="absolute bottom-16 left-4 text-4xl opacity-15 animate-sway" style={{ imageRendering: "pixelated" }}>🗺️</div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle
          icon="📖"
          title="Adventure Journal"
          subtitle="The hero's journey through the professional world"
          location="Work Experience"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[3px] md:left-1/2 md:-translate-x-1/2"
            style={{ background: "var(--border-color)", imageRendering: "pixelated" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex md:${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start gap-4 pl-14 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 md:left-1/2 md:-translate-x-1/2`}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                    className="w-6 h-6 flex items-center justify-center text-sm"
                    style={{
                      background: "var(--accent-secondary)",
                      border: "3px solid var(--border-dark)",
                      boxShadow: "0 0 8px var(--glow-color), 3px 3px 0 rgba(0,0,0,0.4)",
                      imageRendering: "pixelated",
                    }}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div
                    className="p-5"
                    style={{
                      background: "var(--panel-bg)",
                      border: "4px solid var(--border-dark)",
                      boxShadow: "6px 6px 0 var(--shadow-color)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3
                          className="text-[9px] font-pixel text-[var(--text-primary)] mb-1 leading-relaxed"
                          style={{ fontFamily: "'Press Start 2P', monospace" }}
                        >
                          {exp.position}
                        </h3>
                        <div
                          className="text-xs font-semibold text-[var(--accent-primary)]"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div
                          className="text-[7px] font-pixel px-2 py-1"
                          style={{
                            fontFamily: "'Press Start 2P', monospace",
                            background: "var(--accent-secondary)",
                            color: "#2C1810",
                            border: "2px solid var(--border-dark)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.startDate}–{exp.endDate}
                        </div>
                        <div
                          className="text-[6px] font-pixel text-[var(--text-muted)] mt-1"
                          style={{ fontFamily: "'Press Start 2P', monospace" }}
                        >
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div
                      className="text-[7px] font-pixel text-[var(--text-muted)] mb-3"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      📍 {exp.location}
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-3">
                      <div
                        className="text-[6px] font-pixel text-[var(--text-muted)] mb-2"
                        style={{ fontFamily: "'Press Start 2P', monospace" }}
                      >
                        ── QUEST LOG ──
                      </div>
                      <ul className="space-y-1">
                        {exp.responsibilities.slice(0, 3).map((r, ri) => (
                          <li
                            key={ri}
                            className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            <span className="text-[var(--accent-secondary)] flex-shrink-0 mt-0.5">▶</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-3">
                      <div
                        className="text-[6px] font-pixel text-[var(--text-muted)] mb-2"
                        style={{ fontFamily: "'Press Start 2P', monospace" }}
                      >
                        ── ACHIEVEMENTS ──
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((a, ai) => (
                          <li
                            key={ai}
                            className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            <span className="text-yellow-400 flex-shrink-0">⭐</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech used */}
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[6px] font-pixel px-1 py-0.5"
                          style={{
                            fontFamily: "'Press Start 2P', monospace",
                            background: "#1A1A2E",
                            color: "#AA66CC",
                            border: "1px solid #3D3060",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End of timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div
              className="px-6 py-3 text-center"
              style={{
                background: "var(--accent-secondary)",
                border: "4px solid var(--border-dark)",
                boxShadow: "4px 4px 0 var(--shadow-color)",
              }}
            >
              <span
                className="text-[8px] font-pixel text-[#2C1810]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                🌟 Adventure Continues...
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
