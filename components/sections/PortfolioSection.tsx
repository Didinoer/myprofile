"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import PixelBorder from "@/components/ui/PixelBorder";
import PixelButton from "@/components/ui/PixelButton";
import { projects, projectCategories, difficultyColors, type ProjectCategory } from "@/data/projects";

const ALL = "All" as const;
type Filter = ProjectCategory | typeof ALL;

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    filter === ALL ? projects : projects.filter((p) => p.category === filter);

  const activeCategories = [ALL, ...projectCategories.filter((c) =>
    projects.some((p) => p.category === c)
  )];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Quest board background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/quest_board.png"
          alt="Quest board background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          icon="📜"
          title="Quest Board"
          subtitle="Available quests & completed adventures"
          location="Portfolio"
        />

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {activeCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-3 py-2 transition-all duration-150 text-[8px]"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                background: filter === cat ? "var(--accent-secondary)" : "var(--bg-secondary)",
                border: `3px solid ${filter === cat ? "var(--border-dark)" : "var(--border-color)"}`,
                boxShadow: filter === cat ? "3px 3px 0 var(--shadow-color)" : "2px 2px 0 var(--shadow-color)",
                color: filter === cat ? "#2C1810" : "var(--text-secondary)",
                transform: filter === cat ? "translate(-1px, -1px)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Quest cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div
                  className="quest-card h-full flex flex-col"
                  style={{
                    background: "var(--panel-bg)",
                    border: "4px solid var(--border-dark)",
                    boxShadow: "6px 6px 0 var(--shadow-color)",
                  }}
                  onClick={() => setSelected(project)}
                >
                  {/* Thumbnail */}
                  <div className="relative h-36 overflow-hidden" style={{ borderBottom: "3px solid var(--border-dark)" }}>
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      style={{ imageRendering: "pixelated" }}
                    />
                    {/* Overlay with difficulty */}
                    <div className="absolute top-2 right-2">
                      <span
                        className="text-[7px] font-pixel px-2 py-1"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          background: difficultyColors[project.difficulty],
                          color: project.difficulty === "Easy" ? "#000" : "#fff",
                          border: "2px solid rgba(0,0,0,0.3)",
                        }}
                      >
                        {project.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span
                        className="text-[7px] font-pixel px-2 py-1"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          background: "rgba(0,0,0,0.7)",
                          color: "#FFD700",
                          border: "2px solid #FFD700",
                        }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    {/* Category badge */}
                    <div className="mb-2">
                      <span
                        className="text-[6px] font-pixel px-2 py-1"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          background: "var(--bg-secondary)",
                          border: "2px solid var(--border-color)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[10px] font-pixel mb-2 leading-relaxed text-[var(--text-primary)]"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs text-[var(--text-secondary)] mb-3 flex-1 line-clamp-2"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[6px] font-pixel px-1 py-0.5"
                          style={{
                            fontFamily: "'Press Start 2P', monospace",
                            background: "#1A1A2E",
                            color: "#AA66CC",
                            border: "1px solid #3D3060",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className="text-[6px] font-pixel px-1 py-0.5"
                          style={{ fontFamily: "'Press Start 2P', monospace", color: "var(--text-muted)" }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[6px] font-pixel"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          color: project.status === "Completed" ? "#00C851" : project.status === "In Progress" ? "#FFBB33" : "#33B5E5",
                        }}
                      >
                        ● {project.status}
                      </span>
                      <span
                        className="text-[7px] font-pixel text-[var(--accent-secondary)] cursor-pointer hover:underline"
                        style={{ fontFamily: "'Press Start 2P', monospace" }}
                      >
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.8)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: "var(--panel-bg)",
                border: "6px solid var(--border-dark)",
                boxShadow: "10px 10px 0 rgba(0,0,0,0.7)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{
                  background: "linear-gradient(90deg, var(--border-dark), var(--border-color))",
                  borderBottom: "3px solid var(--border-dark)",
                }}
              >
                <span
                  className="text-[9px] font-pixel text-[#FFF9F0]"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  📜 Quest Details
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white hover:text-red-400 transition-colors text-lg"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden" style={{ border: "3px solid var(--border-color)" }}>
                  <Image
                    src={selected.thumbnail}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                <h3
                  className="text-sm font-pixel text-[var(--text-primary)]"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  {selected.title}
                </h3>

                <div className="flex gap-3 flex-wrap">
                  <span
                    className="text-[7px] font-pixel px-2 py-1"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      background: difficultyColors[selected.difficulty],
                      color: selected.difficulty === "Easy" ? "#000" : "#fff",
                    }}
                  >
                    {selected.difficulty}
                  </span>
                  <span
                    className="text-[7px] font-pixel px-2 py-1"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      background: "var(--bg-secondary)",
                      border: "2px solid var(--border-color)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {selected.category}
                  </span>
                  <span
                    className="text-[7px] font-pixel px-2 py-1"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      color: selected.status === "Completed" ? "#00C851" : "#FFBB33",
                    }}
                  >
                    ● {selected.status}
                  </span>
                </div>

                <p
                  className="text-sm text-[var(--text-secondary)] leading-relaxed"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {selected.longDescription}
                </p>

                <div>
                  <div
                    className="text-[7px] font-pixel text-[var(--text-muted)] mb-2"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    TECHNOLOGIES:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[7px] font-pixel px-2 py-1"
                        style={{
                          fontFamily: "'Press Start 2P', monospace",
                          background: "#1A1A2E",
                          color: "#AA66CC",
                          border: "2px solid #3D3060",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {selected.demoUrl && selected.demoUrl !== "#" && (
                    <PixelButton href={selected.demoUrl} variant="primary" size="sm">
                      🌐 Demo
                    </PixelButton>
                  )}
                  {selected.sourceUrl && selected.sourceUrl !== "#" && (
                    <PixelButton href={selected.sourceUrl} variant="secondary" size="sm">
                      📁 Source
                    </PixelButton>
                  )}
                  <PixelButton onClick={() => setSelected(null)} variant="ghost" size="sm">
                    ✕ Close
                  </PixelButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
