"use client";
/**
 * ✅ ENHANCED SEO & ACCESSIBILITY COMPONENT
 * 
 * Features:
 * - Dynamic meta tags for better search visibility
 * - Structured data injection
 * - Social media sharing optimization
 * - Performance tracking
 * - Accessibility landmarks
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Extend Window interface to include analytics
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (action: string, event: string, params?: any) => void;
  }
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

export default function SEOHead({
  title = "Didi Nurahman — Fullstack Developer & System Analyst | Gaming Portfolio",
  description = "Professional gaming-themed portfolio of Didi Nurahman featuring fullstack development projects, system analysis expertise, and creative pixel art aesthetics. Available for freelance work.",
  keywords = [
    "Didi Nurahman", "Fullstack Developer Indonesia", "System Analyst", 
    "Laravel Developer", "React Developer", "Gaming Portfolio", 
    "Pixel Art Website", "Jakarta Developer", "Web Development"
  ],
  image = "/images/og-image-portfolio.jpg",
  url = "https://didi-nurahman.dev",
  type = "website",
  publishedTime,
  modifiedTime = new Date().toISOString(),
  author = "Didi Nurahman",
  section,
  tags,
  locale = "id_ID",
  noindex = false,
  children
}: SEOHeadProps) {
  const pathname = usePathname();
  const fullUrl = url + pathname;

  // ✅ ENHANCED - Update document title dynamically
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);

    // ✅ ENHANCED - Update Open Graph tags dynamically
    const updateOGTag = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph tags
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', image);
    updateOGTag('og:url', fullUrl);
    updateOGTag('og:type', type);
    updateOGTag('og:locale', locale);
    
    // ✅ Twitter Card tags
    updateOGTag('twitter:card', 'summary_large_image', false);
    updateOGTag('twitter:title', title, false);
    updateOGTag('twitter:description', description, false);
    updateOGTag('twitter:image', image, false);

    // ✅ Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // ✅ Robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // ✅ Enhanced viewport meta for mobile
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
      document.head.appendChild(viewportMeta);
    }
  }, [title, description, image, fullUrl, type, locale, noindex]);

  // ✅ ENHANCED - Performance and analytics tracking
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: fullUrl,
        content_group1: section || 'portfolio',
        custom_map: {
          'custom_parameter_1': 'user_type'
        }
      });
    }

    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Measure First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(entry.startTime),
              custom_parameter_1: 'First Contentful Paint'
            });
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Measure Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
            custom_parameter_1: 'Largest Contentful Paint'
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // ✅ ENHANCED - Social media tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView', {
        content_name: title,
        content_category: section || 'portfolio'
      });
    }
  }, [fullUrl, title, section]);

  return (
    <>
      {/* ✅ Enhanced Structured Data */}
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
         name: title,
          description: description,
          url: fullUrl,
          author: {
            "@type": "Person",
            name: author,
            url: "https://didi-nurahman.dev"
          },
          publisher: {
            "@type": "Person",
            name: "Didi Nurahman",
            url: "https://didi-nurahman.dev"
          },
          image: image,
          datePublished: publishedTime,
          dateModified: modifiedTime,
          mainEntityOfPage: fullUrl,
          about: keywords,
          keywords: keywords?.join(", "),
          genre: "Professional Portfolio",
          audience: {
            "@type": "Audience",
            audienceType: "Technology professionals, recruiters, potential clients"
          },
          inLanguage: locale,
          isAccessibleForFree: true,
          isFamilyFriendly: true,
          license: "https://creativecommons.org/licenses/by/4.0/",
          copyrightHolder: {
            "@type": "Person",
            name: "Didi Nurahman"
          },
          copyrightYear: new Date().getFullYear(),
          // ✅ Gaming-themed extensions
          gameItem: {
            "@type": "GameServer",
            serverName: "Didi's Gaming Portfolio",
            serverType: "Portfolio",
            version: "2025.1.0",
            serverStatus: "Online"
          },
          videoGame: {
            "@type": "VideoGame",
            name: "Web Development Adventure",
            gamePlatform: ["Web Browser"],
            playMode: "SinglePlayer",
            genre: ["Educational", "Portfolio"],
            url: fullUrl
          }
        })}
      </Script>

      {/* ✅ Performance monitoring script */}
      <Script id="performance-monitoring">
        {`
          // Monitor loading performance
          window.addEventListener('load', function() {
            setTimeout(function() {
              const perfData = performance.getEntriesByType('navigation')[0];
              const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
              
              if (window.gtag) {
                window.gtag('event', 'page_load_time', {
                  event_category: 'Performance',
                  event_label: 'Page Load Time',
                  value: Math.round(loadTime),
                  custom_parameter_1: 'Page Load Performance'
                });
              }
              
              console.log('Page Load Time:', loadTime + 'ms');
            }, 0);
          });

          // Monitor user interactions for engagement
          let interactionCount = 0;
          const incrementInteraction = () => interactionCount++;
          
          ['click', 'scroll', 'keydown'].forEach(event => {
            document.addEventListener(event, incrementInteraction, { passive: true });
          });

          // Track interactions after 10 seconds
          setTimeout(() => {
            if (interactionCount > 5 && window.gtag) {
              window.gtag('event', 'user_engagement', {
                event_category: 'Engagement',
                event_label: 'High Engagement User',
                value: interactionCount,
                custom_parameter_1: 'User Interaction Count'
              });
            }
          }, 10000);
        `}
      </Script>

      {/* ✅ PWA installation prompt */}
      <Script id="pwa-prompt">
        {`
          let deferredPrompt;
          
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Show custom install button after 30 seconds if user hasn't installed
            setTimeout(() => {
              if (deferredPrompt && !window.matchMedia('(display-mode: standalone)').matches) {
                const installBanner = document.createElement('div');
                installBanner.innerHTML = \`
                  <div style="
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #6ABF5E, #00C851);
                    color: white;
                    padding: 16px;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    z-index: 1000;
                    max-width: 300px;
                    font-family: 'Nunito', sans-serif;
                  ">
                    <h4 style="margin: 0 0 8px 0; font-weight: 600;">📱 Install Didi's Portfolio!</h4>
                    <p style="margin: 0 0 12px 0; font-size: 14px;">Install for offline access and faster loading</p>
                    <button id="install-btn" style="
                      background: white;
                      color: #6ABF5E;
                      border: none;
                      padding: 8px 16px;
                      border-radius: 4px;
                      font-weight: 600;
                      cursor: pointer;
                      margin-right: 8px;
                    ">Install</button>
                    <button id="dismiss-btn" style="
                      background: transparent;
                      color: white;
                      border: 1px solid white;
                      padding: 8px 16px;
                      border-radius: 4px;
                      cursor: pointer;
                    ">Later</button>
                  </div>
                \`;
                document.body.appendChild(installBanner);
                
                document.getElementById('install-btn').onclick = () => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted' && window.gtag) {
                      window.gtag('event', 'pwa_install', {
                        event_category: 'PWA',
                        event_label: 'App Installed'
                      });
                    }
                  });
                  deferredPrompt = null;
                  installBanner.remove();
                };
                
                document.getElementById('dismiss-btn').onclick = () => {
                  installBanner.remove();
                };
              }
            }, 30000);
          });
        `}
      </Script>

      {/* ✅ Custom children for additional meta tags */}
      {children}
    </>
  );
}