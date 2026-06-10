// ============================================================
// data/skills.ts — Skill definitions with XP levels
// ============================================================

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-10
  xp: number; // 0-100
  category: SkillCategory;
  color: string;
}

export type SkillCategory = "Backend" | "Frontend" | "Database" | "DevOps" | "ERP";

export const skills: Skill[] = [
  // Backend
  { name: "PHP", icon: "🐘", level: 9, xp: 90, category: "Backend", color: "#7B7FB5" },
  { name: "Laravel", icon: "🔴", level: 9, xp: 88, category: "Backend", color: "#FF2D20" },
  { name: "CodeIgniter", icon: "🔥", level: 8, xp: 80, category: "Backend", color: "#EE4323" },
  { name: "Node.js", icon: "🟢", level: 7, xp: 72, category: "Backend", color: "#339933" },
  { name: "Python", icon: "🐍", level: 6, xp: 62, category: "Backend", color: "#3776AB" },

  // ERP
  { name: "ERPNext", icon: "⚙️", level: 9, xp: 92, category: "ERP", color: "#0089FF" },
  { name: "Frappe", icon: "🏗️", level: 9, xp: 88, category: "ERP", color: "#00BCD4" },
  { name: "System Analysis", icon: "📊", level: 8, xp: 85, category: "ERP", color: "#FF8800" },

  // Frontend
  { name: "HTML", icon: "🌐", level: 9, xp: 95, category: "Frontend", color: "#E34C26" },
  { name: "CSS", icon: "🎨", level: 8, xp: 82, category: "Frontend", color: "#264DE4" },
  { name: "JavaScript", icon: "✨", level: 8, xp: 80, category: "Frontend", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", level: 7, xp: 75, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", level: 7, xp: 70, category: "Frontend", color: "#000000" },
  { name: "TypeScript", icon: "📘", level: 7, xp: 70, category: "Frontend", color: "#3178C6" },

  // Database
  { name: "MySQL", icon: "🐬", level: 9, xp: 90, category: "Database", color: "#4479A1" },
  { name: "PostgreSQL", icon: "🐘", level: 7, xp: 72, category: "Database", color: "#336791" },
  { name: "MariaDB", icon: "🦭", level: 7, xp: 68, category: "Database", color: "#003545" },

  // DevOps
  { name: "Linux", icon: "🐧", level: 8, xp: 82, category: "DevOps", color: "#FCC624" },
  { name: "Docker", icon: "🐳", level: 7, xp: 70, category: "DevOps", color: "#2496ED" },
  { name: "Git", icon: "🌿", level: 8, xp: 85, category: "DevOps", color: "#F05032" },
  { name: "REST API", icon: "🔗", level: 9, xp: 90, category: "DevOps", color: "#00C851" },
  { name: "Cloud Deploy", icon: "☁️", level: 6, xp: 62, category: "DevOps", color: "#FF9900" },
];

export const skillCategories: SkillCategory[] = ["Backend", "ERP", "Frontend", "Database", "DevOps"];

export const techInventory = [
  { name: "Laravel", icon: "🔴", description: "Elegant PHP web framework for artisans", rarity: "Epic" },
  { name: "ERPNext", icon: "⚙️", description: "Open-source ERP system for growing businesses", rarity: "Legendary" },
  { name: "MySQL", icon: "🐬", description: "World's most popular relational database", rarity: "Rare" },
  { name: "React", icon: "⚛️", description: "JavaScript library for building user interfaces", rarity: "Epic" },
  { name: "Docker", icon: "🐳", description: "Containerization platform for apps", rarity: "Rare" },
  { name: "Git", icon: "🌿", description: "Distributed version control system", rarity: "Common" },
  { name: "Linux", icon: "🐧", description: "Open-source operating system kernel", rarity: "Rare" },
  { name: "Node.js", icon: "🟢", description: "JavaScript runtime built on Chrome's V8", rarity: "Epic" },
  { name: "Frappe", icon: "🏗️", description: "Full-stack web framework powering ERPNext", rarity: "Legendary" },
  { name: "Python", icon: "🐍", description: "High-level, general-purpose programming language", rarity: "Rare" },
  { name: "REST API", icon: "🔗", description: "Architecture for distributed hypermedia systems", rarity: "Common" },
  { name: "PostgreSQL", icon: "🐘", description: "Advanced open-source relational database", rarity: "Rare" },
];

export type ItemRarity = "Common" | "Rare" | "Epic" | "Legendary";

export const rarityColors: Record<ItemRarity, string> = {
  Common: "#9B9B9B",
  Rare: "#33B5E5",
  Epic: "#AA66CC",
  Legendary: "#FFD700",
};
