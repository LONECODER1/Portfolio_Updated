"use client";

import { Github, Linkedin } from "lucide-react";
import React from "react";
import { SiDiscord, SiGmail, SiX, SiMedium, SiInstagram } from "react-icons/si";
import { siteConfig } from "@/data/siteConfig";

type LinkBtnProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export default function LinksCard() {
  const LinkBtn = ({ href, title, children }: LinkBtnProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="bg-emerald-950/60 border border-emerald-900/70 hover:border-emerald-600 rounded-2xl p-4 flex items-center justify-center text-emerald-700 hover:text-emerald-300 hover:bg-emerald-900/30 transition-all duration-300 shadow-md hover:shadow-emerald-900/30 shrink-0 min-w-[56px] min-h-[56px]"
    >
      {children}
    </a>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-[#040d06] border border-emerald-900/60 rounded-2xl p-4 md:p-6 shadow-xl glow-emerald">
        {/* Title */}
        <div className="text-4xl md:text-6xl font-extrabold leading-none tracking-tighter text-emerald-400 text-center md:text-left drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">
          <div className="md:hidden">LINKS.</div>
          <div className="hidden md:block">LIN</div>
          <div className="hidden md:block">KS.</div>
        </div>

        {/* Icons - single row on mobile, 2-col grid on desktop */}
        <div className="flex flex-row flex-wrap justify-center md:grid md:grid-cols-2 gap-3 md:gap-4">
          <LinkBtn href={siteConfig.socials.github.url} title="GitHub">
            <Github size={26} />
          </LinkBtn>
          <LinkBtn href={siteConfig.socials.x.url} title="X (Twitter)">
            <SiX size={22} />
          </LinkBtn>
          <LinkBtn href={siteConfig.socials.email.url} title="Gmail">
            <SiGmail size={22} className="text-[#EA4335]" />
          </LinkBtn>
          <LinkBtn href={siteConfig.socials.discord.url} title="Discord">
            <SiDiscord size={22} className="text-[#5865F2]" />
          </LinkBtn>
          <LinkBtn href={siteConfig.socials.linkedin.url} title="LinkedIn">
            <Linkedin size={24} className="text-[#0A66C2]" />
          </LinkBtn>
          {siteConfig.socials.medium?.url && (
            <LinkBtn href={siteConfig.socials.medium.url} title="Medium">
              <SiMedium size={22} />
            </LinkBtn>
          )}
          {siteConfig.socials.instagram?.url && (
            <LinkBtn href={siteConfig.socials.instagram.url} title="Instagram">
              <SiInstagram size={22} className="text-[#E4405F]" />
            </LinkBtn>
          )}
        </div>
      </div>
    </div>
  );
}
