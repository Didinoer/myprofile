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
  avatar: "/images/avatar3.png",
  resume: "/assets/Didi-Nurahman-CV.pdf",

  bio: `Hi there, I'm Didi Nurahman — a passionate Fullstack Developer and System Analyst with a knack for building powerful, elegant solutions. From crafting seamless web experiences to engineering robust ERP integrations, I love turning complex problems into clean, maintainable code.`,

  bioExtended: `With deep expertise across the full stack — PHP, Laravel, Node.js, React, ERPNext — and a systems-level mindset, I bridge the gap between business needs and technical solutions. I'm highly interested in leveraging AI to accelerate development workflows and integrate AI assistance into my daily work routines to deliver solutions faster and more efficiently.`,

  interests: ["Open Source", "ERP Systems", "AI in Workflows", "Web Automation", "UI/UX Design", "System Architecture"],

  careerGoal: "To build scalable, impactful systems that solve real-world business problems — one elegant line of code at a time.",

  contact: {
    email: "didinoer98@gmail.com",
    instagram: "https://instagram.com/didi_noer72",
    instagramHandle: "@didi_noer72",
    facebook: "https://www.facebook.com/didi.nurahman.5/",
    facebookName: "Nurahman Didi",
    github: "https://github.com/Didinoer",
    linkedin: "https://www.linkedin.com/in/didi-nurahman/",
    whatsapp: "https://wa.me/6285880317725",
  },

  stats: {
    yearsExperience: 2,
    projectsCompleted: 30,
    erpImplementations: 2,
    certifications: 4,
  },
};

export type Profile = typeof profile;
