// ============================================================
// data/profile.ts — Central personal information config
// ============================================================

export const profile = {
  name: "Didi Nurahman",
  title: "Fullstack Developer + System Analyst",
  tagline: "you are special",
  location: "Indonesia",
  education: "Bachelor of Informatics Engineering",
  currentPosition: "Fullstack Developer & System Analyst",
  avatar: "/images/avatar.png",
  resume: "/resume.pdf",

  bio: `Hi there, I'm Didi Nurahman — a passionate Fullstack Developer and System Analyst with a knack for building powerful, elegant solutions. From crafting seamless web experiences to engineering robust ERP integrations, I love turning complex problems into clean, maintainable code.`,

  bioExtended: `With deep expertise across the full stack — PHP, Laravel, Node.js, React, ERPNext — and a systems-level mindset, I bridge the gap between business needs and technical solutions. Every project is a new adventure waiting to be conquered.`,

  interests: ["Open Source", "ERP Systems", "Web Automation", "UI/UX Design", "System Architecture"],

  careerGoal: "To build scalable, impactful systems that solve real-world business problems — one elegant line of code at a time.",

  contact: {
    email: "didi.nurahman@email.com",
    instagram: "https://instagram.com/didi_noer72",
    instagramHandle: "@didi_noer72",
    facebook: "https://facebook.com/nurahman.didi",
    facebookName: "nurahman didi",
    github: "https://github.com/didi-nurahman",
    linkedin: "https://linkedin.com/in/didi-nurahman",
    whatsapp: "https://wa.me/62",
  },

  stats: {
    yearsExperience: 5,
    projectsCompleted: 30,
    happyClients: 20,
    erpImplementations: 8,
    certifications: 4,
  },
};

export type Profile = typeof profile;
