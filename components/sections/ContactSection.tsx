"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import PixelButton from "@/components/ui/PixelButton";
import { profile } from "@/data/profile";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required!";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required!";
    if (!form.subject.trim()) e.subject = "Subject is required!";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message too short!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { label: "Email", icon: "📧", href: `mailto:${profile.contact.email}`, value: profile.contact.email, color: "#FF4444" },
    { label: "Instagram", icon: "📸", href: profile.contact.instagram, value: profile.contact.instagramHandle, color: "#E1306C" },
    { label: "Facebook", icon: "📘", href: profile.contact.facebook, value: profile.contact.facebookName, color: "#1877F2" },
    { label: "GitHub", icon: "🐙", href: profile.contact.github, value: "didi-nurahman", color: "#333" },
    { label: "LinkedIn", icon: "💼", href: profile.contact.linkedin, value: "didi-nurahman", color: "#0A66C2" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/post_office.png"
          alt="Post office background"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      {/* Decorative */}
      <div className="absolute top-12 left-8 text-4xl opacity-20 animate-float" style={{ imageRendering: "pixelated" }}>✉️</div>
      <div className="absolute top-24 right-12 text-3xl opacity-20 animate-sway" style={{ imageRendering: "pixelated", animationDelay: "0.8s" }}>📬</div>
      <div className="absolute bottom-20 right-8 text-4xl opacity-20 animate-float" style={{ imageRendering: "pixelated", animationDelay: "1.2s" }}>📮</div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          icon="✉️"
          title="Post Office"
          subtitle="Send a message to the village"
          location="Contact"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Social links panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Post office sign */}
            <div
              className="text-center py-3 mb-4"
              style={{
                background: "linear-gradient(90deg, #FF4444, #CC0000)",
                border: "4px solid #880000",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="text-[8px] font-pixel text-white"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                📮 SOCIAL LINKS
              </span>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.1 } }}
                  className="flex items-center gap-3 p-3 group"
                  style={{
                    background: "var(--panel-bg)",
                    border: "3px solid var(--border-dark)",
                    boxShadow: "4px 4px 0 var(--shadow-color)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl"
                    style={{
                      background: link.color,
                      border: "2px solid rgba(0,0,0,0.2)",
                      imageRendering: "pixelated",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-[7px] font-pixel text-[var(--text-muted)] mb-0.5"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-xs text-[var(--text-primary)] truncate font-semibold"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <span className="ml-auto text-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mailbox decoration */}
            <div className="mt-6 text-center">
              <div
                className="inline-block p-4"
                style={{
                  background: "var(--panel-bg)",
                  border: "3px solid var(--border-dark)",
                  boxShadow: "4px 4px 0 var(--shadow-color)",
                }}
              >
                <div className="text-5xl mb-2" style={{ imageRendering: "pixelated" }}>📫</div>
                <p
                  className="text-[7px] font-pixel text-[var(--text-muted)]"
                  style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: 2 }}
                >
                  Responses within<br />24 hours!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Letter writing frame */}
            <div
              className="p-6"
              style={{
                background: "var(--panel-bg)",
                border: "4px solid var(--border-dark)",
                boxShadow: "8px 8px 0 var(--shadow-color)",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, var(--border-color) 27px, var(--border-color) 28px)",
              }}
            >
              <div className="mb-6">
                <div
                  className="text-[8px] font-pixel text-[var(--text-muted)] mb-1"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  To: Didi Nurahman
                </div>
                <div
                  className="text-[7px] font-pixel text-[var(--text-muted)]"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  📍 The Village, Indonesia
                </div>
              </div>

              {status === "sent" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4" style={{ imageRendering: "pixelated" }}>📨</div>
                  <div
                    className="text-[9px] font-pixel text-[var(--accent-primary)] mb-2"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    Message Sent!
                  </div>
                  <p
                    className="text-sm text-[var(--text-secondary)]"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    Your letter has been delivered to the post office. Didi will respond soon!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-[7px] font-pixel text-[var(--accent-secondary)] underline"
                    style={{ fontFamily: "'Press Start 2P', monospace", background: "none", border: "none", cursor: "pointer" }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label
                          className="block text-[7px] font-pixel text-[var(--text-muted)] mb-1"
                          style={{ fontFamily: "'Press Start 2P', monospace" }}
                          htmlFor={`contact-${field}`}
                        >
                          {field === "name" ? "Your Name" : "Email Address"}
                          <span className="text-red-400"> *</span>
                        </label>
                        <input
                          id={`contact-${field}`}
                          type={field === "email" ? "email" : "text"}
                          value={form[field]}
                          onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                          className="w-full px-3 py-2 text-sm outline-none"
                          style={{
                            background: "var(--bg-primary)",
                            border: `3px solid ${errors[field] ? "#FF4444" : "var(--border-color)"}`,
                            color: "var(--text-primary)",
                            fontFamily: "'Nunito', sans-serif",
                          }}
                          placeholder={field === "name" ? "Hero Name..." : "hero@village.com"}
                        />
                        {errors[field] && (
                          <p
                            className="text-[6px] font-pixel text-red-400 mt-1"
                            style={{ fontFamily: "'Press Start 2P', monospace" }}
                          >
                            ⚠ {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="block text-[7px] font-pixel text-[var(--text-muted)] mb-1"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                      htmlFor="contact-subject"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      className="w-full px-3 py-2 text-sm outline-none"
                      style={{
                        background: "var(--bg-primary)",
                        border: `3px solid ${errors.subject ? "#FF4444" : "var(--border-color)"}`,
                        color: "var(--text-primary)",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                      placeholder="Quest title..."
                    />
                    {errors.subject && (
                      <p className="text-[6px] font-pixel text-red-400 mt-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                        ⚠ {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[7px] font-pixel text-[var(--text-muted)] mb-1"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                      htmlFor="contact-message"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-3 py-2 text-sm outline-none resize-none"
                      style={{
                        background: "var(--bg-primary)",
                        border: `3px solid ${errors.message ? "#FF4444" : "var(--border-color)"}`,
                        color: "var(--text-primary)",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                      placeholder="Write your quest here..."
                    />
                    {errors.message && (
                      <p className="text-[6px] font-pixel text-red-400 mt-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                        ⚠ {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <PixelButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "📨 Sending..." : "📬 Send Letter"}
                  </PixelButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
