"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi,
  SiNpm, SiCloudflare, SiDocker, SiPostman, SiPostgresql, SiPrisma,
  SiMongodb, SiRedis, SiCplusplus, SiPython, SiGo, SiRust, SiNestjs,
  SiShadcnui, SiTanstack,
} from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

export default function TechStackCard() {
  const getIcon = (text: string) => {
    switch (text) {
      case "React": return <SiReact size={14} className="text-sky-400" />;
      case "Nextjs": return <SiNextdotjs size={14} className="text-emerald-100" />;
      case "Shadcn": return <SiShadcnui size={14} className="text-emerald-100" />;
      case "Tanstack": return <SiTanstack size={14} className="text-red-500" />;
      case "Tailwindcss": return <SiTailwindcss size={14} className="text-teal-400" />;
      case "Nestjs": return <SiNestjs size={14} className="text-red-500" />;
      case "Nodejs": return <SiNodedotjs size={14} className="text-green-500" />;
      case "Express": return <SiExpress size={14} className="text-emerald-200" />;
      case "FastAPI": return <SiFastapi size={14} className="text-teal-400" />;
      case "NPM": return <SiNpm size={14} className="text-red-500" />;
      case "Cloudflare Workers": return <SiCloudflare size={14} className="text-orange-400" />;
      case "Docker": return <SiDocker size={14} className="text-blue-400" />;
      case "Postman": return <SiPostman size={14} className="text-orange-400" />;
      case "Postgres": return <SiPostgresql size={14} className="text-blue-400" />;
      case "Prisma ORM": return <SiPrisma size={14} className="text-emerald-200" />;
      case "MongoDB": return <SiMongodb size={14} className="text-green-500" />;
      case "Redis": return <SiRedis size={14} className="text-red-500" />;
      case "C++": return <SiCplusplus size={14} className="text-blue-400" />;
      case "Python": return <SiPython size={14} className="text-yellow-400" />;
      case "GO": return <SiGo size={14} className="text-cyan-400" />;
      case "Rust": return <SiRust size={14} className="text-orange-400" />;
      default: return <VscTerminal size={14} className="text-emerald-600" />;
    }
  };

  const getBadgeVariants = (text: string) => {
    const rotation = text.length % 2 === 0 ? 3 : -3;
    return {
      hover: {
        scale: 1.15,
        rotate: rotation,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
      tap: { scale: 0.9 },
    };
  };

  const renderBadge = (text: string) => (
    <motion.div
      key={text}
      variants={getBadgeVariants(text)}
      whileHover="hover"
      whileTap="tap"
      className="border border-dashed border-emerald-900 bg-emerald-950/50 text-emerald-200 px-2 py-1 rounded-lg text-xs font-mono cursor-pointer shadow-sm backdrop-blur-sm flex items-center justify-center gap-1.5 select-none hover:border-emerald-600 hover:bg-emerald-900/30 hover:text-emerald-100 transition-colors"
    >
      <span>{getIcon(text)}</span>
      <span>{text}</span>
    </motion.div>
  );

  const SectionLabel = ({ label }: { label: string }) => (
    <div className="text-[10px] xl:text-[11px] font-semibold text-emerald-700 mb-1.5 uppercase tracking-[0.15em] font-mono flex items-center gap-1.5">
      <span className="text-emerald-500">▸</span> {label}
    </div>
  );

  return (
    <div className="rounded-2xl bg-[#040d06] shadow-xl border border-emerald-900/60 p-3.5 xl:p-4 h-full flex flex-col justify-between overflow-y-auto scrollbar-none">
      <div className="text-2xl xl:text-3xl font-serif text-emerald-50 mb-2.5 tracking-tight shrink-0">
        Skills <span className="text-emerald-800">#</span>
      </div>

      <div className="space-y-2.5 xl:space-y-3 flex-1 flex flex-col justify-around">
        <div>
          <SectionLabel label="Frontend" />
          <div className="flex flex-wrap gap-1.5">
            {["React", "Nextjs", "Shadcn", "Tailwindcss", "Tanstack"].map(renderBadge)}
          </div>
        </div>

        <div>
          <SectionLabel label="Backend" />
          <div className="flex flex-wrap gap-1.5">
            {["Nestjs", "Nodejs", "Express", "FastAPI", "NPM"].map(renderBadge)}
          </div>
        </div>

        <div>
          <SectionLabel label="DB & Services" />
          <div className="flex flex-wrap gap-1.5">
            {["Cloudflare Workers", "Docker", "Postman", "Postgres", "Prisma ORM", "MongoDB", "Redis"].map(renderBadge)}
          </div>
        </div>

        <div>
          <SectionLabel label="Others" />
          <div className="flex flex-wrap gap-1.5">
            {["C++", "Python", "GO", "Rust"].map(renderBadge)}
          </div>
        </div>
      </div>
    </div>
  );
}
