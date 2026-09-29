"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants";

const routeConfig: Record<string, { section: string; color: string }> = {
  "/projects": { section: "projects", color: "text-sky-400" },
  "/achievements": { section: "achievements", color: "text-teal-400" },
  "/experience": { section: "experience", color: "text-emerald-400" },
};

const Footer = () => {
  const pathname = usePathname();
  const route = routeConfig[pathname] || { section: "portfolio", color: "text-emerald-400" };

  return (
    <footer className="w-full h-[40px] py-1.5 px-4 border-t border-emerald-900/30 bg-[#030a06]/90 backdrop-blur-sm text-emerald-800 text-[11px] font-mono shrink-0 flex items-center">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left - CLI Style */}
        <div className="flex items-center gap-2">
          <span className="text-emerald-500">❯</span>
          <span className="text-emerald-600">{siteConfig.name.toLowerCase()}</span>
          <span className="text-emerald-900">•</span>
          <span className={route.color}>{route.section}</span>
          <span className="text-emerald-900">•</span>
          <span className="text-emerald-700">main</span>
        </div>

        {/* Center - Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700">online</span>
          </div>
          <span className="text-emerald-900">|</span>
          <span className="text-emerald-800">© {new Date().getFullYear()}</span>
        </div>

        {/* Right - Links */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 hover:text-emerald-300 transition-colors duration-200"
          >
            gh
          </a>
          <a
            href={siteConfig.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 hover:text-[#0A66C2] transition-colors duration-200"
          >
            in
          </a>
          <a
            href={siteConfig.socials.email.url}
            className="text-emerald-800 hover:text-[#EA4335] transition-colors duration-200"
          >
            mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
