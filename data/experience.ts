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
    company: "PT Textilindo",
    position: "System Analyst",
    type: "Full-time",
    startDate: "Feb 2026",
    endDate: "Present",
    location: "Indonesia",
    responsibilities: [
      "Analyze complex business requirements and design robust system architectures",
      "Create detailed technical specifications, flowcharts, and system diagrams for developers",
      "Bridge the gap between business needs and technical implementation through modeling",
      "Monitor system project progression to ensure compliance with design specifications",
    ],
    achievements: [
      "Streamlined system design processes for manufacturing and e-commerce integrations",
    ],
    tech: ["System Analysis", "UML", "MySQL", "PostgreSQL", "Next.js"],
    icon: "📊",
  },
  {
    id: "exp-2",
    company: "PT Textilindo",
    position: "Full Stack Engineer",
    type: "Full-time",
    startDate: "Oct 2025",
    endDate: "May 2026",
    location: "Indonesia",
    responsibilities: [
      "Developed and optimized web applications and REST APIs using modern frameworks",
      "Implemented responsive and high-performance frontend interfaces",
      "Managed databases and optimized queries for scalability and efficiency",
      "Built and maintained robust server-side systems and Docker containers",
    ],
    achievements: [
      "Optimized query performance and reduced server response times",
      "Delivered key features for clothing modeling and matching platform on schedule",
    ],
    tech: ["Next.js", "Node.js", "React", "Laravel", "REST API", "Docker"],
    icon: "💻",
  },
  {
    id: "exp-3",
    company: "Merry Riana Group",
    position: "Programmer",
    type: "Full-time",
    startDate: "Feb 2024",
    endDate: "Feb 2025",
    location: "West Jakarta, Jakarta, Indonesia",
    responsibilities: [
      "Website Maintenance: Managed and enhanced sales websites using frameworks like Laravel, CodeIgniter, and React.js",
      "Oversaw payment integrations and transaction dashboards to ensure smooth operations",
      "Optimized website performance for a seamless user experience",
      "Event Management Systems: Developed and maintained systems for ticket sales, participant registration, and barcode scanning for events",
      "Created and monitored dashboards for sales analytics and registration data",
      "Mobile App Maintenance: Maintained and improved Android and iOS applications built with the Ionic framework",
      "Technical Collaboration: Collaborated with cross-functional teams to ensure successful project delivery from planning to deployment",
      "Troubleshot and resolved system issues to maintain system reliability and stability",
      "Full Stack Development Expertise: Built robust backend systems using PHP, Laravel, and CodeIgniter",
      "Designed and developed responsive user interfaces with HTML, CSS, JavaScript, and React.js",
    ],
    achievements: [
      "Maintained and improved multiple high-traffic sales and registration platforms",
      "Integrated secure payment gateways and interactive sales transaction dashboards",
      "Successfully deployed and optimized mobile applications on Android and iOS",
    ],
    tech: ["Laravel", "CodeIgniter", "React.js", "Ionic", "PHP", "JavaScript", "HTML", "CSS"],
    icon: "🏢",
  },
  {
    id: "exp-4",
    company: "PT. TELKOM AKSES",
    position: "Teknisi",
    type: "Full-time",
    startDate: "Jun 2018",
    endDate: "Aug 2019",
    location: "Area DKI Jakarta",
    responsibilities: [
      "Performed hardware installation and network setup directly at customer locations",
      "Troubleshot and resolved physical connection and hardware configuration issues",
    ],
    achievements: [
      "Delivered reliable and high-quality installations for home and corporate customers",
    ],
    tech: ["Hardware Installation", "Networking", "Troubleshooting"],
    icon: "🛠️",
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
