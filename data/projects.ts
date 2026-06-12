// ============================================================
// data/projects.ts — Portfolio projects
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  thumbnail: string;
  images?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  status: "Completed" | "In Progress" | "Maintained";
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  year: number;
}

export type ProjectCategory =
  | "ERP Systems"
  | "Web Development"
  | "Automation"
  | "Integration"
  | "Business Apps"
  | "Mobile";

export const projects: Project[] = [
  {
    id: "virtual-tryon",
    title: "Virtual Try-On",
    description: "Combines clothing body models and fabric patterns using Google's AI visual prediction model.",
    longDescription:
      "An innovative project that combines clothing body models and fabric patterns into a single matching unit. This system utilizes Google's advanced visual prediction model (Google AI model) to generate realistic virtual try-on simulations in real-time.",
    tech: ["Next Js", "Node.js", "REST API", "Docker"],
    category: "Web Development",
    thumbnail: "/images/tryon1.png",
    images: ["/images/tryon1.png", "/images/tryon2.png"],
    demoUrl: "#",
    sourceUrl: "#",
    status: "Completed",
    difficulty: "Legendary",
    year: 2025,
  },
  {
    id: "company-profile",
    title: "Company Profile Website",
    description: "Modern, responsive company profile website with CMS and SEO optimization.",
    longDescription:
      "A fully responsive company profile website built for a mid-sized enterprise. Features dynamic content management, multi-language support, blog system, service showcase, and contact management with email integration.",
    tech: ["Laravel", "MySQL", "JavaScript", "CSS", "Tailwind", "Blade", "Node js", "AI", "Next Js", "React Js", "Vue Js", "Rest API", "PHP"],
    category: "Web Development",
    thumbnail: "/images/image3.png",
    images: ["/images/image1.png", "/images/image2.png", "/images/image3.png", "/images/image4.png", "/images/image5.png", "/images/image6.png"],
    demoUrl: "https://adipragata.com",
    sourceUrl: "#",
    status: "Completed",
    difficulty: "Medium",
    year: 2026,
  },
  {
    id: "erpnext-implementation",
    title: "ERPNext Implementation",
    description: "Full ERPNext deployment with custom modules for manufacturing & accounting.",
    longDescription:
      "End-to-end ERPNext implementation for a manufacturing company. Includes custom doctypes for production tracking, custom reports for financial analysis, user training, data migration from legacy systems, and ongoing maintenance.",
    tech: ["ERPNext", "Frappe", "Python", "JavaScript", "MariaDB", "Linux"],
    category: "ERP Systems",
    thumbnail: "/images/image-erp1 (1).png",
    images: ["/images/image-erp1 (1).png", "/images/image-erp1 (2).png", "/images/image-erp1 (3).png"],
    demoUrl: "#",
    sourceUrl: "#",
    status: "Maintained",
    difficulty: "Legendary",
    year: 2023,
  },
  {
    id: "ceisa-integration",
    title: "Ceisa Integration",
    description: "Custom API integration bridge between ERP systems and Ceisa 4.0 customs platform.",
    longDescription:
      "Developed a robust integration layer between internal ERP systems and Indonesia's Ceisa 4.0 customs declaration platform. Handles automated document submission, status tracking, real-time sync, and error handling for seamless customs compliance.",
    tech: ["Node.js", "REST API", "ERPNext", "Frappe", "MySQL", "Docker"],
    category: "Integration",
    thumbnail: "/images/image-ceisa.png",
    demoUrl: "#",
    sourceUrl: "#",
    status: "Completed",
    difficulty: "Hard",
    year: 2024,
  },
  {
    id: "webscraping-engine",
    title: "Web Scraping Engine",
    description: "Scalable, distributed web scraping platform with data pipeline and dashboard.",
    longDescription:
      "A powerful web scraping engine built to collect, process, and store large volumes of data from multiple sources. Features scheduling, proxy rotation, CAPTCHA handling, real-time monitoring dashboard, and automated data export to various formats.",
    tech: ["Python", "Scrapy", "Selenium", "BeautifulSoup", "Puppeteer", "Playwright", "Json", "Csv"],
    category: "Automation",
    thumbnail: "/images/image-scrapping.png",
    demoUrl: "#",
    sourceUrl: "#",
    status: "Completed",
    difficulty: "Hard",
    year: 2023,
  },
];

export const projectCategories: ProjectCategory[] = [
  "ERP Systems",
  "Web Development",
  "Automation",
  "Integration",
  "Business Apps",
  "Mobile",
];

export const difficultyColors: Record<Project["difficulty"], string> = {
  Easy: "#00C851",
  Medium: "#FFBB33",
  Hard: "#FF4444",
  Legendary: "#AA66CC",
};
