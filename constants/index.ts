// ==========================================
// 🌟 ALL PORTFOLIO CONSTANTS & CONFIGURATION
// Edit this single file to customize all personal data,
// projects, skills, socials, experience, and tools.
// ==========================================

export interface SocialLink {
  username?: string;
  url: string;
  address?: string;
}

export interface SiteConfig {
  name: string;
  handle: string;
  title: string;
  bio: string;
  location: string;
  status: string;
  avatar: string;
  resumeUrl: string;
  resumeFileName: string;
  rotatingWords: string[];
  socials: {
    github: SocialLink;
    x: SocialLink;
    linkedin: SocialLink;
    email: SocialLink;
    discord: SocialLink;
  };
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    devops: string[];
  };
}

export interface ProjectItem {
  image: string;
  title: string;
  description: string;
  url: string;
  live?: string;
  tech: string[];
  category: string[];
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  technologies: string[];
  description: string[];
  links?: {
    website?: string;
  };
}

export interface AchievementItem {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  technologies: string[];
  description: string[];
}

// ------------------------------------------
// 👤 1. PERSONAL PROFILE & SITE CONFIG
// ------------------------------------------
export const siteConfig: SiteConfig = {
  name: "Aditya",
  handle: "@lonecoder1",
  title: "Full-Stack Engineer",
  bio: "Full-Stack Engineer building modern, performant web applications and scalable backend systems.",
  location: "India",
  status: "Available for work",
  avatar: "/favicon.png",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Aditya_Resume.pdf",
  rotatingWords: [
    "backends",
    "frontends",
    "scalable-systems",
    "AI applications",
  ],

  socials: {
    github: {
      username: "lonecoder1",
      url: "https://github.com/lonecoder1",
    },
    x: {
      username: "lonecoder1",
      url: "https://x.com/lonecoder1",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/lonecoder1/",
    },
    email: {
      address: "contact@lonecoder.dev",
      url: "mailto:contact@lonecoder.dev",
    },
    discord: {
      url: "https://discord.com",
    },
  },

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "C++", "Go", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    backend: ["Node.js", "Express", "FastAPI", "NestJS", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
    devops: ["Docker", "Linux", "Git", "Cloudflare Workers", "AWS"],
  },
};

// ------------------------------------------
// 💻 2. PROJECTS DATA
// ------------------------------------------
export const projectData: ProjectItem[] = [
  {
    image: "/codeweb.png",
    title: "CodeWeb IDE",
    description: "Cloud-based collaborative web IDE and interactive coding environment.",
    url: "https://github.com/lonecoder1/codeweb",
    live: "https://codeweb-frontend.vercel.app",
    tech: ["React", "Monaco Editor", "Node.js", "Socket.io", "Tailwindcss"],
    category: ["web", "fullstack"],
  },
  {
    image: "/fikc.png",
    title: "AI Traffic Optimization",
    description: "Reinforcement learning traffic control optimization simulated in SUMO.",
    url: "https://github.com/lonecoder1/fikc",
    live: "https://fikc.vercel.app/",
    tech: ["Python", "SUMO", "RL", "Streamlit", "FastAPI"],
    category: ["ai", "hackathon"],
  },
  {
    image: "/medivision.png",
    title: "MediVision AI",
    description: "Intelligent diagnostic assistant for analyzing radiological scans and generating clinical summaries.",
    url: "https://github.com/lonecoder1/medivision",
    live: "https://github.com/lonecoder1/medivision",
    tech: ["Python", "FastAPI", "React", "PyTorch", "Tailwindcss"],
    category: ["ai", "healthcare"],
  },
  {
    image: "/enhance.png",
    title: "Image Enhancer & Vectorizer",
    description: "Neural-network image upscaler and raster-to-vector tracing utility.",
    url: "https://github.com/lonecoder1/enhance",
    live: "https://github.com/lonecoder1/enhance",
    tech: ["Next.js", "TypeScript", "Canvas API", "WebGL"],
    category: ["web", "tools"],
  },
  {
    image: "/quickdesk.png",
    title: "QuickDesk Workflow",
    description: "Real-time task synchronization dashboard with offline persistence and keyboard-driven shortcuts.",
    url: "https://github.com/lonecoder1/quickdesk",
    live: "https://github.com/lonecoder1/quickdesk",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwindcss"],
    category: ["web", "productivity"],
  },
  {
    image: "/nodal.png",
    title: "Nodal Network Graph",
    description: "Interactive graph visualizer for exploring complex relational networks in real-time.",
    url: "https://github.com/lonecoder1/nodal",
    live: "https://github.com/lonecoder1/nodal",
    tech: ["TypeScript", "D3.js", "React", "Tailwindcss"],
    category: ["tools", "visualization"],
  },
];

// ------------------------------------------
// 💼 3. EXPERIENCE DATA
// ------------------------------------------
export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Full-Stack Software Engineer",
    company: "Tech Systems",
    type: "Current",
    duration: "2025 - Present",
    location: "Remote",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    description: [
      "Architecting scalable full-stack web applications and microservices handling high concurrency.",
      "Optimizing database queries and cache layers to reduce p99 response latencies by 40%.",
      "Building responsive, accessible frontend interfaces and internal automation tooling.",
    ],
    links: {
      website: "#",
    },
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Innovation Labs",
    type: "Completed",
    duration: "2024 - 2025",
    location: "Remote / Onsite",
    technologies: ["React", "FastAPI", "MongoDB", "Redis", "TypeScript"],
    description: [
      "Developed RESTful APIs and real-time WebSocket communication pipelines.",
      "Migrated critical frontend components to modern TypeScript and React patterns.",
      "Collaborated in agile sprint cycles with cross-functional design and product teams.",
    ],
    links: {
      website: "#",
    },
  },
];

// ------------------------------------------
// 🏆 4. ACHIEVEMENTS & HACKATHONS DATA
// ------------------------------------------
export const achievementsData: AchievementItem[] = [
  {
    id: 1,
    title: "Hackathon Grand Finalist",
    subtitle: "National Innovation Challenge",
    year: "2024",
    type: "Finalist",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    description: [
      "Built an automated optimization pipeline addressing real-world civic challenges.",
      "Presented working prototypes to an expert panel of industry judges.",
    ],
  },
  {
    id: 2,
    title: "Hackathon Winner",
    subtitle: "AI & Web Innovation Summit",
    year: "2025",
    type: "Winner",
    technologies: ["TypeScript", "FastAPI", "React", "AI/LLMs"],
    description: [
      "Awarded 1st place for developing an intelligent assistive workflow application.",
      "Integrated end-to-end authentication, AI processing, and real-time UI dashboards.",
    ],
  },
  {
    id: 3,
    title: "Open Source Contributor",
    subtitle: "Developer Community",
    year: "Active",
    type: "Contributor",
    technologies: ["TypeScript", "React", "Node.js", "Python"],
    description: [
      "Actively maintaining and contributing to modern developer tools and open-source packages.",
      "Sharing technical insights and code repositories with developer communities.",
    ],
  },
];

// Aliases for convenient importing
export const SITE_CONFIG = siteConfig;
export const PROJECTS_DATA = projectData;
export const EXPERIENCE_DATA = experienceData;
export const ACHIEVEMENTS_DATA = achievementsData;
