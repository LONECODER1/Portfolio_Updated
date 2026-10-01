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
    medium?: SocialLink;
    instagram?: SocialLink;
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
  organizer?: string;
  year: string;
  type: string;
  link?: string;
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
      username: "Aditya Gupta",
      url: "https://x.com/adityag51580955",
    },
    linkedin: {
      url: "http://www.linkedin.com/in/aditya-gupta-iiitbh",
    },
    email: {
      address: "adityagupta1112004vns@gmail.com",
      url: "mailto:adityagupta1112004vns@gmail.com",
    },
    discord: {
      url: "https://discord.com/users/1220399255752015989",
    },
    medium: {
      username: "Aditya Gupta",
      url: "https://medium.com/@adityagupta1112004vns",
    },
    instagram: {
      username: "adityagupta_v1",
      url: "https://www.instagram.com/adityagupta_v1?stkn=NnpxanVydXk3MDN4",
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
    title: "Hacktopia 24-Hour Hackathon",
    subtitle: "1st Position Winner",
    organizer: "Training & Placement Cell",
    year: "2025",
    type: "Winner",
    link: "https://drive.google.com/file/d/12nGgaR1rW2O4CIU5M6Sxd1zQzK0PLZug/view",
    technologies: ["Next.js", "TypeScript", "Node.js", "Full Stack", "Agentic AI", "Blockchain"],
    description: [
      "Led team BUILDANYTHING and secured 1st position among 90+ participating teams.",
    ],
  },
  {
    id: 2,
    title: "Shaastra Programming Contest",
    subtitle: "National Level Finalist",
    organizer: "IIT Madras",
    year: "2024",
    type: "Finalist",
    link: "https://drive.google.com/file/d/1XEzsRA5P9DpS9KPpWll7Y5O2B7MD2XbC/view",
    technologies: ["C++", "DSA", "Algorithms", "Optimization"],
    description: [
      "Finalist at national level; ranked in top 1% among 15,000+ participants.",
    ],
  },
  {
    id: 3,
    title: "OPCODE Open Spring Fest",
    subtitle: "Rank 7 - Open Source Contribution",
    organizer: "IIIT Bhagalpur Open Source Community",
    year: "2025",
    type: "Contributor",
    link: "https://drive.google.com/file/d/1dFc8RyfkQLqzSQGdlOXFd3cl7xZBqxhq/view",
    technologies: ["Git", "GitHub", "Full Stack", "Gen AI"],
    description: [
      "Secured Rank 7 among 400+ participants.",
      "Contributed to 4 projects with 14 accepted PRs.",
    ],
  },

  {
    id: 4,
    title: "A2Z DSA Challenge",
    subtitle: "AlgoZenith Challenge",
    organizer: "AlgoZenith",
    year: "2024",
    type: "Finalist",
    link: "https://drive.google.com/file/d/1Pl_BzvhJ5E8VHfQloRqZdjbrQaRKn9B2/view",
    technologies: ["C++", "DSA", "Algorithms", "Problem Solving"],
    description: [
      "Achieved 6th rank among 20+ participants in AlgoZenith's A2Z DSA Challenge.",
    ],
  },
];

// Aliases for convenient importing
export const SITE_CONFIG = siteConfig;
export const PROJECTS_DATA = projectData;
export const EXPERIENCE_DATA = experienceData;
export const ACHIEVEMENTS_DATA = achievementsData;
