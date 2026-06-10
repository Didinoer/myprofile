// ============================================================
// data/experience.ts — Work history timeline
// ============================================================

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: "Full-time" | "Freelance" | "Contract" | "Part-time";
  startDate: string;
  endDate: string | "Present";
  location: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Ventures Indonesia",
    position: "Senior Fullstack Developer",
    type: "Full-time",
    startDate: "2023",
    endDate: "Present",
    location: "Indonesia",
    responsibilities: [
      "Lead development of enterprise web applications and ERP systems",
      "Architect scalable backend solutions using Laravel and Node.js",
      "Integrate custom modules into ERPNext for manufacturing clients",
      "Mentor junior developers and conduct code reviews",
    ],
    achievements: [
      "Reduced system processing time by 40% through query optimization",
      "Successfully deployed 3 full ERPNext implementations",
      "Built Ceisa 4.0 integration saving 10+ hours/week manual work",
    ],
    tech: ["Laravel", "ERPNext", "React", "Node.js", "Docker", "MySQL"],
    icon: "🏢",
  },
  {
    id: "exp-2",
    company: "Digital Solutions Co.",
    position: "Fullstack Developer",
    type: "Full-time",
    startDate: "2021",
    endDate: "2023",
    location: "Indonesia",
    responsibilities: [
      "Developed and maintained multiple client web projects",
      "Built RESTful APIs for mobile and web frontend consumption",
      "Implemented web scraping pipelines for data collection",
      "Managed Linux servers and Docker containerized deployments",
    ],
    achievements: [
      "Delivered 15+ web projects on time and within budget",
      "Built automated data collection system processing 50k+ records daily",
      "Improved site load performance by 60% across all projects",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "MySQL", "Python", "Linux"],
    icon: "💻",
  },
  {
    id: "exp-3",
    company: "Freelance / Independent",
    position: "Fullstack Developer & System Analyst",
    type: "Freelance",
    startDate: "2019",
    endDate: "2021",
    location: "Remote",
    responsibilities: [
      "Delivered custom web solutions for small and medium businesses",
      "Analyzed client business processes and designed system solutions",
      "Built company profile websites with CMS functionality",
      "Provided technical consultation and training to clients",
    ],
    achievements: [
      "Served 10+ satisfied clients across various industries",
      "Built virtual try-on MVP prototype using computer vision",
      "100% on-time delivery rate across all freelance projects",
    ],
    tech: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "HTML", "CSS"],
    icon: "🚀",
  },
];

export const achievements = [
  { id: "a1", title: "Code Warrior", description: "Completed 30+ projects", icon: "⚔️", unlocked: true },
  { id: "a2", title: "ERP Master", description: "8 ERP implementations delivered", icon: "⚙️", unlocked: true },
  { id: "a3", title: "Speed Coder", description: "Optimized system performance by 40%+", icon: "⚡", unlocked: true },
  { id: "a4", title: "Full Stack Hero", description: "Mastered both frontend & backend", icon: "🦸", unlocked: true },
  { id: "a5", title: "Open Source Knight", description: "Active contributor to open source", icon: "🛡️", unlocked: true },
  { id: "a6", title: "System Architect", description: "Designed 5+ enterprise systems", icon: "🏛️", unlocked: true },
  { id: "a7", title: "API Wizard", description: "Built 20+ REST API integrations", icon: "🔮", unlocked: true },
  { id: "a8", title: "DevOps Ranger", description: "Deployed apps with Docker & Linux", icon: "🐳", unlocked: true },
];
