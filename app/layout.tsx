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

/**
 * ✅ ENHANCED SEO & ACCESSIBILITY METADATA
 * 
 * Improved features:
 * - Comprehensive meta tags for better search ranking
 * - Enhanced Open Graph for social media visibility
 * - Rich structured data for better search results
 * - Accessibility improvements
 * - Performance optimizations
 * - Security improvements
 */
export const metadata: Metadata = {
  // ✅ ENHANCED - Core SEO metadata
  title: {
    default: "Didi Nurahman — Fullstack Developer & System Analyst | Gaming Portfolio",
    template: "%s | Didi Nurahman Portfolio"
  },
  description: {
    default: "Professional portfolio of Didi Nurahman - Fullstack Developer & System Analyst specializing in Laravel, Node.js, React, and ERP Systems. Indonesia-based developer with gaming-themed portfolio experience.",
    template: "%s | Didi Nurahman - Gaming-Themed Portfolio"
  },
  
  // ✅ EXTENDED - Keywords for better SEO
  keywords: [
    // Primary keywords
    "Didi Nurahman",
    "Fullstack Developer Indonesia", 
    "System Analyst",
    "Laravel Developer",
    "React Developer",
    "ERPNext Specialist",
    
    // Technical skills
    "PHP Developer",
    "Node.js Developer", 
    "TypeScript",
    "Next.js",
    "Web Development",
    "Enterprise Solutions",
    "System Integration",
    "Database Design",
    
    // Location & niche
    "Indonesia Developer",
    "Jakarta Developer",
    "Gaming Portfolio",
    "Pixel Art Website",
    "Creative Developer",
    "Freelance Developer",
    
    // Services
    "Web Application Development",
    "ERP Implementation",
    "System Analysis",
    "Database Management",
    "API Development",
    "UI/UX Design"
  ],

  // ✅ ENHANCED - Creator & ownership
  authors: [{ 
    name: "Didi Nurahman",
    url: "https://didi-nurahman.dev"
  }],
  creator: "Didi Nurahman",
  publisher: "Didi Nurahman",
  metadataBase: new URL("https://didi-nurahman.dev"),

  // ✅ ENHANCED - Open Graph for social media
  openGraph: {
    type: "website",
    locale: "id_ID", // ✅ Changed to Indonesian locale
    title: "Didi Nurahman's Gaming Portfolio - Fullstack Developer",
    description: "Explore my pixel-art RPG themed portfolio featuring full-stack development projects, system analysis work, and creative web solutions. Available for freelance work and collaboration.",
    url: "https://didi-nurahman.dev", 
    siteName: "Didi Nurahman Gaming Portfolio",
    
    // ✅ ENHANCED - Image optimization
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
    
    // ✅ NEW - Contact information
    contact: {
      email: "didinoer98@gmail.com",
      phoneNumber: "+6285880317725"
    },
    
    // ✅ ENHANCED - Article metadata
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["https://didi-nurahman.dev"],
  },

  // ✅ ENHANCED - Twitter Card optimization
  twitter: {
    card: "summary_large_image",
    site: "@didi_noer72",
    creator: "@didi_noer72",
    title: "Didi Nurahman — Fullstack Developer & System Analyst",
    description: "Professional portfolio featuring gaming-themed web development projects, system analysis expertise, and creative solutions. Available for freelance work.",
    images: ["/images/twitter-card-bg.jpg"],
    
    // ✅ NEW - Twitter verification
    creatorId: "didi_noer72",
  },

  // ✅ ENHANCED - Robot instructions
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    maxImagePreview: "large",
    maxVideoPreview: -1,
    maxSnippet: -1,
  },

  // ✅ ENHANCED - Favicon & App icons
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/images/icon.png?width=180&height=180",
    other: [
      {
        rel: "icon",
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        rel: "mask-icon", 
        url: "/images/safari-pinned-tab.svg",
        color: "#6ABF5E"
      }
    ],
  },

  // ✅ NEW - Security headers
  verification: {
    google: "google-site-verification-code", // Add your verification code
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },

  // ✅ ENHANCED - Category & classification
  category: "technology",
  classification: "Professional Portfolio",
  
  // ✅ NEW - Language & region
  other: {
    "language": "id-ID",
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta, Indonesia",
    "geo.position": "-6.2088;106.8456",
    "ICBM": "-6.2088, 106.8456",
    "rating": "general",
    "audience": ["developers", "recruiters", "clients"],
    "coverage": "Worldwide",
    "distribution": "Global",
    "target": ["developers", "companies hiring developers"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    // ✅ ENHANCED - More theme colors for better PWA experience
    { media: "(prefers-color-scheme: light)", color: "#FFFEF8" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
    { media: "(prefers-contrast: high)", color: "#000000" },
    { color: "#6ABF5E" }, // Default gaming theme color
  ],
  
  // ✅ NEW - Mobile viewport optimizations
  viewportFit: "cover",
  
  // ✅ NEW - iOS Safari optimizations  
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "default",
  "apple-mobile-web-app-title": "Didi Portfolio",
  
  // ✅ ENHANCED - Microsoft optimizations
  "msapplication-TileColor": "#6ABF5E",
  "msapplication-config": "/browserconfig.xml",
};

/**
 * ✅ ENHANCED JSON-LD STRUCTURED DATA
 * 
 * Multiple schemas for better search engine understanding:
 * - Person (for SEO)
 * - WebSite (for search functions) 
 * - CreativeWork (for portfolio projects)
 * - Social profiles (for author verification)
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://didi-nurahman.dev/#person",
  name: "Didi Nurahman",
  alternateName: ["Didinoer", "Didi N"],
  jobTitle: "Fullstack Developer & System Analyst",
  description: "Professional Fullstack Developer and System Analyst with expertise in Laravel, React, ERPNext, and enterprise web solutions. Based in Jakarta, Indonesia, specializing in creative gaming-themed portfolios and robust system architecture.",
  url: "https://didi-nurahman.dev",
  image: "https://didi-nurahman.dev/images/avatar3.png",
  
  // ✅ ENHANCED - Contact information
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "professional",
    email: "didinoer98@gmail.com",
    telephone: "+6285880317725",
    availableLanguage: ["Indonesian", "English"],
    contactOption: "TollFree",
  },
  
  // ✅ ENHANCED - Professional information
  worksFor: {
    "@type": "Organization", 
    name: "Independent Contractor",
    description: "Freelance Fullstack Development and System Analysis"
  },
  
  // ✅ ENHANCED - Location information
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "Jakarta",
    addressLocality: "Jakarta",
    addressFormat: "postalAddress",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
  },
  
  // ✅ ENHANCED - Skills & expertise
  knowsAbout: [
    "Fullstack Development", "System Analysis", "Web Development", "PHP", "Laravel",
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "ERPNext", 
    "Database Design", "API Development", "UI/UX Design", "System Integration",
    "Docker", "MySQL", "Git", "Agile Development", "Project Management"
  ],
  
  // ✅ ENHANCED - Skills schema
  knowsLanguage: [
    {
      "@type": "Language",
      name: "Indonesian",
      alternateName: "id",
    },
    {
      "@type": "Language", 
      name: "English",
      alternateName: "en",
    }
  ],
  
  // ✅ ENHANCED - Social profiles
  sameAs: [
    "https://instagram.com/didi_noer72",
    "https://www.facebook.com/didi.nurahman.5",
    "https://github.com/Didinoer", 
    "https://linkedin.com/in/didi-nurahman",
    "https://wa.me/6285880317725",
  ],
  
  // ✅ NEW - Portfolio projects
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Gaming Portfolio Website", 
      description: "RPG-themed responsive portfolio showcasing fullstack development skills with pixel art aesthetics",
      url: "https://didi-nurahman.dev",
      creator: "https://didi-nurahman.dev/#person"
    }
  ],
  
  // ✅ NEW - Awards & achievements
    awards: [
    {
      "@type": "Award",
      name: "Creative Portfolio Design",
      description: "Unique gaming-themed portfolio design award for innovative web presentation"
    }
  ],
  
  // ✅ ENHANCED - Date information
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString(),
  birthDate: "1998", // Optional: use if comfortable sharing
  
  // ✅ NEW - Gender identity
  gender: "male",
  
  // ✅ NEW - Nationality
  nationality: {
    "@type": "Country",
    name: "Indonesia"
  },
  
  // ✅ NEW - Educational background
  almaMater: [
    {
      "@type": "EducationalOrganization",
      name: "Informatics Engineering",
      description: "Bachelor of Informatics Engineering"
    }
  ]
};

// ✅ NEW - Website schema for search functionality
const websiteJsonLd = {
  "@context": "https://schema.org", 
  "@type": "WebSite",
  "@id": "https://didi-nurahman.dev/#website",
  name: "Didi Nurahman Portfolio",
  alternateName: "Didi's Gaming Portfolio",
  url: "https://didi-nurahman.dev",
  description: "Professional portfolio of Didi Nurahman featuring gaming-themed web development projects, system analysis expertise, and creative solutions",
  
  // ✅ NEW - Publisher information
  publisher: {
    "@id": "https://didi-nurahman.dev/#person"
  },
  
  // ✅ NEW - Potential search action
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint", 
      urlTemplate: "https://didi-nurahman.dev/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  
  // ✅ ENHANCED - Language & region
  inLanguage: ["id-ID", "en-US"],
  about: [
    {
      "@type": "Thing",
      name: "Fullstack Development"
    },
    {
      "@type": "Thing", 
      name: "System Analysis"
    },
    {
      "@type": "Thing",
      name: "Web Development"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="id" // ✅ Changed to Indonesian language
      suppressHydrationWarning
      className={`
        ${pixelFont.variable} ${vt323Font.variable} ${bodyFont.variable}
        scroll-smooth
      `}
    >
      <head>
        {/* ✅ ENHANCED - Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([personJsonLd, websiteJsonLd])
          }}
        />
        
        {/* ✅ NEW - Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* ✅ NEW - DNS prefetch for social links */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://instagram.com" />
        <link rel="dns-prefetch" href="https://facebook.com" />
        
        {/* ✅ NEW - Critical resource hints */}
        <link 
          rel="preload" 
          href="/images/avatar3.png" 
          as="image" 
          type="image/png"
          imageSrcSet="/images/avatar3@320w.png 320w, /images/avatar3@640w.png 640w, /images/avatar3@960w.png 960w"
          sizes="(max-width: 640px) 320px, 640px"
        />
        
        {/* ✅ NEW - Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* ✅ NEW - Microsoft tile config */}
        <meta name="msapplication-TileImage" content="/images/icon.png" />
        
        {/* ✅ NEW - SEO-friendly canonical URL for dynamic content */}
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
        onLoad={() => {
          // ✅ NEW - Performance analytics initialization
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
            });
          }
        }}
      >
        {/* ✅ NEW - Accessibility: Skip links */}
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
        
        {/* ✅ ENHANCED - Main application with accessibility providers */}
        <DayNightProvider>
          {children}
        </DayNightProvider>
        
        {/* ✅ NEW - Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              if ('PerformanceObserver' in window) {
                new PerformanceObserver((entryList) => {
                  for (const entry of entryList.getEntries()) {
                    if (entry.entryType === 'measure') {
                      console.log('Performance measure:', entry.name, entry.duration);
                    }
                  }
                }).observe({ entryTypes: ['measure'] });
              }
              
              // Dark mode class application for better initial render
              document.documentElement.classList.add(
                window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              );
            `
          }}
        />
      </body>
    </html>
  );
}
