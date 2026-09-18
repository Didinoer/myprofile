import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323, Nunito } from "next/font/google";
import "./globals.css";
import { DayNightProvider } from "@/components/layout/DayNightProvider";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  preload: true,
});

const vt323Font = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
  preload: true,
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Didi Nurahman — Fullstack Developer & System Analyst | Gaming Portfolio",
  description: "Professional portfolio of Didi Nurahman - Fullstack Developer & System Analyst specializing in Laravel, Node.js, React, and ERP Systems. Indonesia-based developer with gaming-themed portfolio experience.",
  
  keywords: [
    "Didi Nurahman", "Fullstack Developer Indonesia", "System Analyst", "Laravel Developer", "React Developer", "ERPNext Specialist",
    "PHP Developer", "Node.js Developer", "TypeScript", "Next.js", "Web Development", "Enterprise Solutions", "System Integration", "Database Design",
    "Indonesia Developer", "Jakarta Developer", "Gaming Portfolio", "Pixel Art Website", "Creative Developer", "Freelance Developer",
    "Web Application Development", "ERP Implementation", "System Analysis", "Database Management", "API Development", "UI/UX Design"
  ],

  authors: [{ 
    name: "Didi Nurahman",
    url: "https://didi-nurahman.dev"
  }],
  creator: "Didi Nurahman",
  publisher: "Didi Nurahman",

  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Didi Nurahman's Gaming Portfolio - Fullstack Developer",
    description: "Explore my pixel-art RPG themed portfolio featuring full-stack development projects, system analysis work, and creative web solutions. Available for freelance work and collaboration.",
    url: "https://didi-nurahman.dev", 
    siteName: "Didi Nurahman Gaming Portfolio",
    
    images: [
      {
        url: "/images/og-image-portfolio.jpg?width=1200&height=630",
        width: 1200,
        height: 630,
        alt: "Didi Nurahman - Gaming-themed Portfolio featuring Fullstack Development Projects",
        type: "image/jpeg"
      },
      {
        url: "/images/avatar3.png?width=400&height=400", 
        width: 400,
        height: 400,
        alt: "Didi Nurahman - Pixel Avatar - Fullstack Developer & System Analyst",
        type: "image/png"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@didi_noer72",
    creator: "@didi_noer72",
    title: "Didi Nurahman — Fullstack Developer & System Analyst",
    description: "Professional portfolio featuring gaming-themed web development projects, system analysis expertise, and creative solutions. Available for freelance work.",
    images: ["/images/twitter-card-bg.jpg"],
    creatorId: "didi_noer72",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/images/icon.png?width=180&height=180",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#6ABF5E",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Didi Nurahman",
  jobTitle: "Fullstack Developer & System Analyst",
  description: "Professional Fullstack Developer and System Analyst with expertise in Laravel, React, ERPNext, and enterprise web solutions. Based in Jakarta, Indonesia, specializing in creative gaming-themed portfolios and robust system architecture.",
  url: "https://didi-nurahman.dev",
  image: "https://didi-nurahman.dev/images/avatar3.png",
  
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "professional",
    email: "didinoer98@gmail.com",
    telephone: "+628****7725",
  },
  
  worksFor: {
    "@type": "Organization", 
    name: "Independent Contractor",
  },
  
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "Jakarta",
    addressLocality: "Jakarta",
  },
  
  knowsAbout: [
    "Fullstack Development", "System Analysis", "Web Development", "PHP", "Laravel",
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "ERPNext", 
    "Database Design", "API Development", "UI/UX Design", "System Integration",
  ],
  
  sameAs: [
    "https://instagram.com/didi_noer72",
    "https://www.facebook.com/didi.nurahman.5",
    "https://github.com/Didinoer", 
    "https://linkedin.com/in/didi-nurahman",
    "https://wa.me/6285880317725",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org", 
  "@type": "WebSite",
  name: "Didi Nurahman Portfolio",
  url: "https://didi-nurahman.dev",
  description: "Professional portfolio of Didi Nurahman featuring gaming-themed web development projects, system analysis expertise, and creative solutions",
  publisher: {
    "@type": "Person",
    name: "Didi Nurahman"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="id" 
      suppressHydrationWarning
      className={`
        ${pixelFont.variable} ${vt323Font.variable} ${bodyFont.variable}
        scroll-smooth
      `}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([personJsonLd, websiteJsonLd])
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#6ABF5E" />
        <link rel="canonical" href="https://didi-nurahman.dev" />
      </head>
      
      <body
        className={`
          ${bodyFont.variable} ${pixelFont.variable} ${vt323Font.variable}
          antialiased font-body
          dark:bg-dark text-light 
          transition-colors duration-300
          print:bg-white print:text-black
          focus-within:outline-none
        `}
        suppressHydrationWarning
      >
        <a 
          href="#main-content" 
          className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
          aria-label="Skip to main content"
        >
          ⏭️ Skip to main content
        </a>
        
        <a 
          href="#navigation" 
          className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 mt-16"
          aria-label="Skip to navigation"
        >
          🧭 Skip to navigation
        </a>
        
        <DayNightProvider>
          {children}
        </DayNightProvider>
      </body>
    </html>
  );
}