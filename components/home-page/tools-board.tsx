/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { FileText, Monitor, Linkedin } from "lucide-react";
import { siteConfig, experienceData, achievementsData } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 🎨 React Icons Imports
import { SiGithub, SiDiscord, SiGmail, SiX } from "react-icons/si";

type RailItem = {
  label: string;
  icon: React.ReactNode;
  link: string;
  hoverColor?: string;
};

const rail: RailItem[] = [
  {
    label: "GitHub",
    icon: <SiGithub size={22} />,
    link: siteConfig.socials.github.url,
    hoverColor: "hover:text-emerald-300",
  },
  {
    label: "X (Twitter)",
    icon: <SiX size={20} />,
    link: siteConfig.socials.x.url,
    hoverColor: "hover:text-emerald-100",
  },
  {
    label: "Gmail",
    icon: <SiGmail size={20} className="text-[#EA4335]" />,
    link: siteConfig.socials.email.url,
    hoverColor: "hover:text-[#EA4335]",
  },
  {
    label: "Discord",
    icon: <SiDiscord size={20} className="text-[#5865F2]" />,
    link: siteConfig.socials.discord.url,
    hoverColor: "hover:text-[#5865F2]",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin size={22} className="text-[#0A66C2]" />,
    link: siteConfig.socials.linkedin.url,
    hoverColor: "hover:text-[#0A66C2]",
  },
];

export default function ToolsBoard() {
  return (
    <div className="rounded-2xl bg-[#040d06] shadow-xl border border-emerald-900/60 p-3.5 md:p-4 w-full h-full flex flex-col">
      <div className="flex flex-col md:flex-row gap-3 md:gap-3.5 grow min-h-0 overflow-hidden">
        {/* Left Tool Rail - Horizontal on mobile, vertical on desktop */}
        <div className="rounded-[20px] bg-emerald-950/40 border border-emerald-900/50 px-2 py-2 md:py-3 flex flex-row md:flex-col gap-2 w-full md:w-[60px] md:min-w-[60px] items-center shadow-inner overflow-x-auto md:overflow-y-auto md:overflow-x-hidden scrollbar-none shrink-0">
          {rail.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              title={r.label}
              className={`w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-900/60 flex items-center justify-center text-emerald-800 ${r.hoverColor ?? ""} hover:bg-emerald-900/40 hover:border-emerald-700 transition-all duration-250 shrink-0`}
            >
              {r.icon}
            </a>
          ))}
        </div>

        {/* Main Content (Non-scrollable, fitted to viewport) */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">

            {/* --- LEFT COLUMN --- */}
            <div className="flex flex-col justify-between h-full gap-2.5 min-h-0">
              {/* Daily Tool Stack */}
              <div className="leading-[0.95] shrink-0">
                <div className="text-3xl font-extrabold text-emerald-50">DAILY</div>
                <div className="text-xl font-semibold text-emerald-300 mt-0.5 font-mono">Tool</div>
                <div className="text-3xl font-extrabold text-emerald-50 mt-0.5">
                  STACK<span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">.</span>
                </div>
              </div>

              {/* Projects Vinyl Link */}
              <Link
                href="/projects"
                className="flex items-center justify-between rounded-2xl h-[96px] px-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative overflow-hidden group shrink-0"
                style={{ background: "linear-gradient(135deg, #071a0a 0%, #040d06 100%)", boxShadow: "0 4px 15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(52,211,153,0.08)" }}
              >
                {/* Decorative circles */}
                <div className="absolute -left-16 -bottom-16 opacity-20">
                  <div className="w-40 h-40 rounded-full border border-emerald-800" />
                </div>
                <div className="absolute -left-8 -bottom-8 opacity-15">
                  <div className="w-24 h-24 rounded-full border border-emerald-800" />
                </div>
                {/* Vinyl disc */}
                <div className="absolute -left-12 w-40 h-40 rounded-full" style={{ background: "radial-gradient(circle at 35% 35%, #1a2e1a, #050d05 40%, #0a1a0a 60%, #111 80%, #050d05 100%)", boxShadow: "inset 0 0 30px rgba(0,0,0,0.8), inset 0 2px 4px rgba(52,211,153,0.06)" }}>
                  {/* Grooves */}
                  <div className="absolute inset-0 rounded-full" style={{ background: "repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(52,211,153,0.03) 2px, rgba(52,211,153,0.03) 3px)" }} />
                  {/* Light reflection */}
                  <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)" }} />
                  {/* Label */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700" style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.3)" }}>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#040d06]" />
                    </div>
                  </div>
                  {/* Edge highlight */}
                  <div className="absolute inset-0 rounded-full border border-emerald-900/30" />
                </div>

                {/* Projects Text Content */}
                <div className="relative z-10 ml-auto pr-5 flex flex-col justify-center text-right select-none">
                  <div className="text-xl font-extrabold text-emerald-50 tracking-tight font-mono leading-tight">
                    PROJ<br />
                    <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">ECTS.</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-mono mt-0.5 group-hover:text-emerald-400 transition-colors">
                    explore work →
                  </span>
                </div>

                {/* Equalizer bars */}
                <div className="absolute right-3 bottom-2.5 flex items-end gap-[2px] opacity-40 group-hover:opacity-80 transition-opacity">
                  <div className="w-1 bg-emerald-500 rounded-t" style={{ height: "8px", animation: "bounce 0.5s ease-in-out infinite alternate" }} />
                  <div className="w-1 bg-emerald-400 rounded-t" style={{ height: "12px", animation: "bounce 0.7s ease-in-out infinite alternate" }} />
                  <div className="w-1 bg-teal-500 rounded-t" style={{ height: "6px", animation: "bounce 0.4s ease-in-out infinite alternate" }} />
                  <div className="w-1 bg-emerald-400 rounded-t" style={{ height: "14px", animation: "bounce 0.6s ease-in-out infinite alternate" }} />
                  <div className="w-1 bg-emerald-500 rounded-t" style={{ height: "10px", animation: "bounce 0.5s ease-in-out infinite alternate" }} />
                </div>
              </Link>

              {/* Expanded System Specs to fill space before CP */}
              <Link href="/" className="relative rounded-xl overflow-hidden group shadow flex flex-col justify-between cursor-pointer flex-1 min-h-[90px]">
                <div className="relative flex flex-col p-3 rounded-xl h-full justify-between z-10" style={{ background: "linear-gradient(145deg, #071a0a 0%, #040d06 50%, #071a0a 100%)" }}>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-900/50 text-emerald-700 group-hover:text-emerald-400 transition-colors duration-300">
                      <Monitor size={14} />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-extrabold text-emerald-50 font-mono">SYSTEM<span className="text-emerald-400">.</span></div>
                      <div className="text-[10px] text-emerald-700 font-mono">Gear &amp; Specs</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                    <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-950/50 text-emerald-300 border border-emerald-900/50">M3 (8-512)</span>
                    <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-950/50 text-emerald-300 border border-emerald-900/50">Snapdragon Gen 7s</span>
                    <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-emerald-950/50 text-emerald-300 border border-emerald-900/50">Dimensity 7000</span>
                  </div>
                </div>
              </Link>

              {/* Compact CP Tab - Anchored at the bottom */}
              <a
                href="https://codolio.com/profile/Lonecoder1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-900/50 flex items-center gap-2 justify-center shadow hover:bg-emerald-900/30 hover:border-emerald-700 transition-colors cursor-pointer shrink-0 mt-auto"
              >
                <img src="/favicon.png" alt="Lonecoder1" className="w-5 h-5 rounded-full border border-emerald-800 object-cover" />
                <span className="text-lg font-extrabold leading-none tracking-tighter text-emerald-100">CP</span>
                <span className="text-[10px] text-emerald-700 font-semibold font-mono">Codolio Profile</span>
              </a>
            </div>

            {/* --- RIGHT COLUMN --- */}
            <div className="flex flex-col justify-between h-full gap-2.5 min-h-0">
              {/* Compact Resume Button */}
              <div
                className="flex items-center justify-center gap-1.5 bg-emerald-950/40 border border-emerald-900/60 hover:border-emerald-600 rounded-xl p-2.5 text-emerald-600 hover:text-emerald-300 hover:bg-emerald-900/30 transition-all duration-300 shadow cursor-pointer select-none font-mono shrink-0"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = siteConfig.resumeUrl;
                  link.download = siteConfig.resumeFileName;
                  link.click();
                }}
              >
                <FileText size={14} />
                <span className="font-extrabold text-xs">_RESUME.</span>
              </div>

              {/* Excellence Tabs with Interactive Modals */}
              <div className="rounded-xl overflow-hidden border border-emerald-900/60 bg-[#040d06] shadow shrink-0">
                <div className="p-2 border-b border-emerald-900/40">
                  <div className="grid grid-cols-2 gap-1.5">
                    {/* Experience Dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="block w-full relative overflow-hidden text-left cursor-pointer group">
                          <div className="absolute -right-6 -bottom-6 opacity-20">
                            <div className="w-16 h-16 rounded-full border-2 border-emerald-800" />
                          </div>
                          <div className="absolute -right-2 -bottom-2 opacity-15">
                            <div className="w-10 h-10 rounded-full border-2 border-emerald-800" />
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-950/50 border border-emerald-900/60 group-hover:bg-emerald-900/40 group-hover:border-emerald-600 transition-all text-center relative z-10">
                            <div className="text-xs sm:text-sm font-extrabold leading-tight text-emerald-100 tracking-tight font-mono">
                              EXPER<br />IENCE.
                            </div>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto bg-[#030a06] border border-emerald-900/80 text-emerald-50 p-6 scrollbar-none glow-emerald">
                        <DialogHeader>
                          <div className="flex items-center justify-between pb-2 border-b border-emerald-900/50">
                            <DialogTitle className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                              <span>💼</span> Work Experience
                            </DialogTitle>
                            <Link
                              href="/experience"
                              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline"
                            >
                              [Open Dedicated Page →]
                            </Link>
                          </div>
                        </DialogHeader>
                        <div className="space-y-6 pt-4 font-mono">
                          {experienceData.map((exp) => (
                            <div
                              key={exp.id}
                              className="rounded-xl bg-emerald-950/40 border border-emerald-900/60 p-4 space-y-2 shadow-inner"
                            >
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="text-base font-bold text-emerald-100">{exp.title}</h3>
                                <span className="text-xs text-emerald-600 font-semibold">{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                                <span>{exp.company}</span>
                                <span className="text-emerald-800">•</span>
                                <span className="text-emerald-600">{exp.location}</span>
                              </div>
                              <ul className="space-y-1.5 pt-1 text-xs text-emerald-300/80 leading-relaxed">
                                {exp.description.map((desc, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-emerald-500 font-bold">›</span>
                                    <span>{desc}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5 pt-2">
                                {exp.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 text-[10px] rounded bg-emerald-950 border border-emerald-900/60 text-emerald-400"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Achievements Dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="block w-full relative overflow-hidden text-left cursor-pointer group">
                          <div className="absolute -right-6 -bottom-6 opacity-20">
                            <div className="w-16 h-16 rounded-full border-2 border-emerald-800" />
                          </div>
                          <div className="absolute -right-2 -bottom-2 opacity-15">
                            <div className="w-10 h-10 rounded-full border-2 border-emerald-800" />
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-950/50 border border-emerald-900/60 group-hover:bg-emerald-900/40 group-hover:border-emerald-600 transition-all text-center relative z-10">
                            <div className="text-xs sm:text-sm font-extrabold leading-tight text-emerald-100 tracking-tight font-mono">
                              ACHIEV<br />EMENT.
                            </div>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto bg-[#030a06] border border-emerald-900/80 text-emerald-50 p-6 scrollbar-none glow-emerald">
                        <DialogHeader>
                          <div className="flex items-center justify-between pb-2 border-b border-emerald-900/50">
                            <DialogTitle className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                              <span>🏆</span> Achievements &amp; Awards
                            </DialogTitle>
                            <Link
                              href="/achievements"
                              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline"
                            >
                              [Open Dedicated Page →]
                            </Link>
                          </div>
                        </DialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono">
                          {achievementsData.map((item) => (
                            <div
                              key={item.id}
                              className="rounded-xl bg-emerald-950/40 border border-emerald-900/60 p-4 space-y-2 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xl">
                                    {item.type === "Winner" ? "🏆" : item.type === "Finalist" ? "🥈" : "💻"}
                                  </span>
                                  <span className="text-[11px] text-emerald-600">{item.year}</span>
                                </div>
                                <h3 className="text-sm font-bold text-emerald-100 mt-1">{item.title}</h3>
                                <p className="text-xs text-emerald-400 font-semibold">{item.subtitle}</p>
                                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                                  {item.description[0]}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-1 pt-2">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-1.5 py-0.5 text-[9px] rounded bg-emerald-950 border border-emerald-900/50 text-emerald-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="px-2 py-1 text-[9px] text-emerald-800 font-mono">
                  from excellences: <span className="font-mono text-emerald-700">2023 onwards</span>
                </div>
              </div>

              {/* Quote */}
              <div className="px-1 text-center shrink-0">
                <div className="text-emerald-500 text-sm font-medium italic tracking-wide font-mono drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]">&ldquo;Into the Unknown&rdquo;</div>
              </div>

              {/* Image card */}
              <div className="rounded-xl overflow-hidden border border-emerald-900/60 bg-emerald-950/40 shadow flex-1 min-h-[80px]">
                <img src="/anime.jpg" alt="Card Image" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}