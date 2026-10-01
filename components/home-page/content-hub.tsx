"use client";

import React from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { ExternalLink } from "lucide-react";


const hubItems = [
  {
    key: "experience",
    label: "Experience",
    emoji: "💼",
    bg: "bg-emerald-800",
    content: <ExperienceOnly />,
  },
  {
    key: "achievements",
    label: "Achievements",
    emoji: "🏆",
    bg: "bg-teal-700",
    content: <AchievementsOnly />,
  },
];

export default function ContentHub() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-emerald-950/80 via-[#030a06]/90 to-emerald-950/80 shadow-xl border border-emerald-900/60 px-4 py-4 md:px-6 md:py-6 backdrop-blur-md w-full">
      <div className="text-3xl md:text-4xl font-extrabold text-emerald-50 tracking-tight leading-tight mb-2 font-mono">
        DAILY<br />Tool<br />
        <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">STACK.</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {hubItems.map((item) => (
          <AlertDialog key={item.key}>
            <AlertDialogTrigger asChild>
              <button className={`rounded-2xl ${item.bg}/90 text-left px-4 py-6 shadow border border-emerald-900/40 hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-between`}>
                <span className="text-emerald-50 font-extrabold text-lg font-mono">{item.label}</span>
                <span className="text-2xl" aria-hidden>
                  {item.emoji}
                </span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[80vh] overflow-y-auto bg-[#030a06] border-emerald-900/60">
              <AlertDialogHeader>
                <div className="flex items-center justify-between">
                  <AlertDialogTitle className="text-emerald-50 font-mono">{item.label}</AlertDialogTitle>
                  <AlertDialogCancel className="h-8 w-8 rounded-full border border-emerald-900/60 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/40">✕</AlertDialogCancel>
                </div>
              </AlertDialogHeader>
              <div>{item.content}</div>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </div>
      {/* Tools scroller at the bottom */}
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-3 min-w-max pb-1">
          {['VS Code', 'Vercel', 'Figma', 'Notion', 'Linear', 'GitHub', 'Postman'].map((tool) => (
            <span key={tool} className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 text-sm border border-emerald-900/50 whitespace-nowrap font-mono hover:border-emerald-700 hover:text-emerald-300 transition-colors">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

import { experienceData, achievementsData } from "@/constants";

function ExperienceOnly() {
  return (
    <div className="space-y-4 p-2">
      <div className="relative px-4">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-emerald-900 rounded-full"></div>
        <div className="flex flex-col gap-6 pt-6 pb-2">
          {experienceData.map((exp, idx) => (
            <div key={exp.id || idx} className="relative flex items-start gap-4">
              <div className="absolute left-6 top-2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#030a06] shadow-[0_0_6px_rgba(52,211,153,0.6)]"></div>
              <div className="ml-12 rounded-xl bg-emerald-950/80 border border-emerald-900/60 shadow p-4 w-full">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h2 className="font-semibold text-base text-emerald-50 font-mono">{exp.title}</h2>
                  <span className="text-xs text-emerald-700 font-mono">{exp.duration}</span>
                </div>
                <p className="text-emerald-400 text-xs font-medium font-mono mt-0.5">{exp.company}</p>
                <p className="text-emerald-700 mt-1 text-xs leading-relaxed font-mono">{exp.description[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementsOnly() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2">
      {achievementsData.map((item, idx) => (
        <div key={item.id || idx} className="rounded-xl bg-emerald-950/80 border border-emerald-900/60 shadow p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{item.type === "Winner" ? "🏆" : item.type === "Finalist" ? "🥈" : "💻"}</span>
            <h3 className="font-semibold text-emerald-50 font-mono text-sm">{item.title}</h3>
            <span className="text-xs text-emerald-700 font-mono ml-auto">{item.year}</span>
          </div>
          <div className="flex items-center justify-between gap-2 mt-1">
            <div className="flex flex-col">
              {item.organizer && <span className="text-emerald-400 text-[11px] font-mono font-medium">{item.organizer}</span>}
              <p className="text-emerald-700 text-xs font-mono">{item.subtitle}</p>
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-900/60 text-emerald-400 hover:text-emerald-300 text-[11px] font-mono shrink-0 transition-colors"
              >
                <ExternalLink size={10} />
                <span>Link</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
