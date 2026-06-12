"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import DialogueBox from "@/components/ui/DialogueBox";
import PixelBorder from "@/components/ui/PixelBorder";
import { profile } from "@/data/profile";

const DIALOGUES = [
  profile.bio,
  profile.bioExtended,
  `Current mission: ${profile.currentPosition} | Location: ${profile.location}`,
  `Interests: ${profile.interests.join(" • ")}`,
  `Career Goal: ${profile.careerGoal}`,
];

export default function AboutSection() {
  const [dialogueIdx, setDialogueIdx] = useState(0);

  const nextDialogue = () => {
    setDialogueIdx((i) => (i + 1) % DIALOGUES.length);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/character_house.png"
          alt="Character house background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 left-4 text-4xl opacity-20 animate-sway" style={{ imageRendering: "pixelated" }}>🌿</div>
      <div className="absolute top-16 right-8 text-3xl opacity-20 animate-float" style={{ imageRendering: "pixelated", animationDelay: "0.5s" }}>🌸</div>
      <div className="absolute bottom-16 left-8 text-4xl opacity-20 animate-sway" style={{ imageRendering: "pixelated", animationDelay: "1s" }}>🌻</div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          icon="🏠"
          title="Character House"
          subtitle="Meet the developer behind the code"
          location="About Me"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Character profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <PixelBorder variant="gold" className="relative overflow-visible">
              {/* Profile header */}
              <div
                className="text-center py-2 mb-4 -mx-4 -mt-4 px-4"
                style={{
                  background: "linear-gradient(90deg, #8B6914, #C4A000, #8B6914)",
                  borderBottom: "3px solid #5C4A1E",
                }}
              >
                <span
                  className="text-[10px] font-pixel text-[#FFF9F0]"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  ─── CHARACTER PROFILE ───
                </span>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div
                    className="w-28 h-28 relative overflow-hidden"
                    style={{
                      border: "4px solid var(--border-dark)",
                      boxShadow: "4px 4px 0 var(--shadow-color)",
                      imageRendering: "pixelated",
                    }}
                  >
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Stats grid */}
              {[
                { label: "NAME", value: profile.name, icon: "👤" },
                { label: "CLASS", value: "Fullstack Dev", icon: "⚔️" },
                { label: "SPEC", value: "System Analyst", icon: "📊" },
                { label: "LOCATION", value: profile.location, icon: "📍" },
                { label: "EDUCATION", value: profile.education.split(" ").slice(0, 3).join(" "), icon: "🎓" },
                { label: "STATUS", value: "Active", icon: "✅" },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-2 py-2 border-b border-[var(--border-color)] last:border-b-0"
                >
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <div className="min-w-0">
                    <div
                      className="text-[10px] font-pixel text-[var(--text-muted)] mb-0.5"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-xs text-[var(--text-primary)] font-semibold truncate"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Interests */}
              <div className="mt-4">
                <div
                  className="text-[10px] font-pixel text-[var(--text-muted)] mb-2"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  ♦ INTERESTS
                </div>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-[10px] px-2 py-1"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "2px solid var(--border-color)",
                        fontFamily: "'Nunito', sans-serif",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </PixelBorder>
          </motion.div>

          {/* Right: Dialogue system */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            {/* NPC sign */}
            <div
              className="inline-flex items-center gap-2 self-start px-3 py-2"
              style={{
                background: "var(--bg-secondary)",
                border: "3px solid var(--border-dark)",
                boxShadow: "3px 3px 0 var(--shadow-color)",
              }}
            >
              <span className="text-lg">🧙‍♂️</span>
              <span
                className="text-[10px] font-pixel text-[var(--text-secondary)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Villager Didi says...
              </span>
            </div>

            {/* Dialogue box */}
            <DialogueBox
              key={dialogueIdx}
              text={DIALOGUES[dialogueIdx]}
              speakerName={profile.name}
              speakerIcon="🧙‍♂️"
              speed={25}
              onComplete={() => {}}
            />

            {/* Navigation dots */}
            <div className="flex items-center gap-3">
              <button
                onClick={nextDialogue}
                className="px-4 py-2 text-[10px] font-pixel cursor-pointer"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  background: "var(--accent-secondary)",
                  border: "3px solid var(--border-dark)",
                  boxShadow: "3px 3px 0 var(--shadow-color)",
                  color: "#2C1810",
                }}
              >
                ▶ next
              </button>

              <div className="flex gap-2">
                {DIALOGUES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDialogueIdx(i)}
                    className="w-3 h-3 border-2 border-[var(--border-color)]"
                    style={{
                      background: i === dialogueIdx ? "var(--accent-secondary)" : "var(--bg-secondary)",
                      imageRendering: "pixelated",
                    }}
                    aria-label={`Dialogue ${i + 1}`}
                  />
                ))}
              </div>

              <span
                className="text-[10px] font-pixel text-[var(--text-muted)]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {dialogueIdx + 1}/{DIALOGUES.length}
              </span>
            </div>

            {/* Career goal card */}
            <PixelBorder variant="default" className="mt-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <div
                    className="text-[10px] font-pixel text-[var(--accent-primary)] mb-2"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    QUEST OBJECTIVE
                  </div>
                  <p
                    className="text-sm text-[var(--text-secondary)] leading-relaxed"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {profile.careerGoal}
                  </p>
                </div>
              </div>
            </PixelBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
