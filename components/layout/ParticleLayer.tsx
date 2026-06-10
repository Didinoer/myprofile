"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "./DayNightProvider";

export default function ParticleLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDay } = useTheme();
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Particles
    const count = 25;
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      drift: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p) => {
        // Float upward
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame * 0.01 + p.phase) * 0.3;
        p.opacity = 0.4 + Math.sin(frame * 0.02 + p.phase) * 0.3;

        // Reset when off top
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        // Draw pixel particle
        const size = Math.round(p.size) * 2; // snap to 2px grid
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));

        if (isDay) {
          // Day: golden petals / sparkles
          ctx.fillStyle = "#FFD700";
          ctx.fillRect(Math.round(p.x), Math.round(p.y), size, size);
          // Highlight
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1);
        } else {
          // Night: fireflies / stars
          const glowSize = size + 2;
          ctx.fillStyle = `rgba(170, 102, 204, ${p.opacity * 0.3})`;
          ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y) - 1, glowSize, glowSize);
          ctx.fillStyle = "#E0D0FF";
          ctx.fillRect(Math.round(p.x), Math.round(p.y), size, size);
        }
      });

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDay]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
