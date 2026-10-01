"use client";

import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/tech-badge";
import { motion } from "framer-motion";
import { Calendar, Trophy, Rocket, Code, Award, ArrowLeft, Building2, ExternalLink } from "lucide-react";
import { achievementsData } from "@/constants";

const getAchievementIcon = (type: string) => {
  switch (type) {
    case "Winner":
      return <Award size={18} className="text-yellow-400" />;
    case "Finalist":
      return <Trophy size={18} className="text-orange-400" />;
    case "Contributor":
      return <Code size={18} className="text-blue-400" />;
    default:
      return <Rocket size={18} className="text-purple-400" />;
  }
};

export default function AchievementsPage() {
  return (
    <Section className="min-h-screen bg-[#030a06] text-white selection:bg-emerald-900 selection:text-white">
      <Container className="max-w-4xl mx-auto px-6 py-8 sm:py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-sm mb-8 transition-colors p-2 rounded-lg bg-emerald-950/40 border border-emerald-900/50 hover:bg-emerald-900/30"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-emerald-50 font-mono">Achievements</h1>
          <p className="text-emerald-700 text-lg font-mono">
            My achievements and recognitions across competitions and projects.
          </p>
        </motion.div>

        {/* Achievements List */}
        <div className="space-y-20">
          {achievementsData.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Top Row: Title & Subtitle & Badge & Year */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {getAchievementIcon(achievement.type)}
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{achievement.title}</span>
                    {achievement.type === "Winner" && (
                      <Badge className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 px-2.5 py-0.5 rounded-full">
                        Winner
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 font-medium">
                    <span className="text-zinc-200">{achievement.subtitle}</span>
                    {achievement.organizer && (
                      <div className="flex items-center gap-1.5 text-sm text-emerald-400 font-mono">
                        <Building2 size={14} className="text-emerald-500" />
                        <span>{achievement.organizer}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col md:items-end gap-2.5 text-zinc-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{achievement.year}</span>
                  </div>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-900/60 text-emerald-400 hover:text-emerald-300 hover:border-emerald-700 text-xs font-mono transition-colors"
                    >
                      <ExternalLink size={12} />
                      <span>Certificate</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-8">
                <h4 className="text-[13px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {achievement.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h4 className="text-[13px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Impact & Contributions</h4>
                <ul className="space-y-4">
                  {achievement.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-sm bg-zinc-700 group-hover:bg-zinc-500 transition-colors shrink-0"></span>
                      <p className="text-zinc-300 leading-relaxed font-normal">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separator */}
              {i !== achievementsData.length - 1 && (
                <div className="absolute -bottom-10 left-0 right-0 h-px bg-zinc-900"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}