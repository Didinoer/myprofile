import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323, Nunito } from "next/font/google";
import "./globals.css";
import { DayNightProvider } from "@/components/layout/DayNightProvider";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const vt323Font = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Didi Nurahman — Fullstack Developer & System Analyst",
  description:
    "Portfolio of Didi Nurahman — a Fullstack Developer and System Analyst specializing in Laravel, ERPNext, React, and enterprise web solutions. Explore my skills, projects, and adventures.",
  keywords: [
    "Didi Nurahman",
    "Fullstack Developer",
    "System Analyst",
    "Laravel",
    "ERPNext",
    "React",
    "Next.js",
    "Indonesia Developer",
    "Web Developer",
    "PHP Developer",
  ],
  authors: [{ name: "Didi Nurahman" }],
  creator: "Didi Nurahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://didi-nurahman.dev",
    title: "Didi Nurahman — Fullstack Developer & System Analyst",
    description:
      "Explore the pixel-art RPG portfolio of Didi Nurahman — Fullstack Developer, System Analyst, and code adventurer.",
    siteName: "Didi Nurahman Portfolio",
    images: [{ url: "/images/hero_village.png", width: 1200, height: 630, alt: "Didi Nurahman Pixel Village Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Didi Nurahman — Fullstack Developer & System Analyst",
    description: "Explore the pixel-art RPG portfolio of Didi Nurahman.",
    images: ["/images/hero_village.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#87CEEB" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D2B" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Didi Nurahman",
  jobTitle: "Fullstack Developer & System Analyst",
  description:
    "Fullstack Developer and System Analyst specializing in PHP, Laravel, ERPNext, React, and enterprise web solutions.",
  url: "https://didi-nurahman.dev",
  sameAs: [
    "https://instagram.com/didi_noer72",
    "https://facebook.com/nurahman.didi",
    "https://github.com/didi-nurahman",
    "https://linkedin.com/in/didi-nurahman",
  ],
  knowsAbout: ["PHP", "Laravel", "ERPNext", "React", "Next.js", "System Analysis", "Docker", "MySQL"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${pixelFont.variable} ${vt323Font.variable} ${bodyFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <DayNightProvider>{children}</DayNightProvider>
      </body>
    </html>
  );
}
