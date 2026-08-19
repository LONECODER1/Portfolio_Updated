/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function ProfileCard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");
  const [mounted, setMounted] = useState(false);
  const [rainyTheme, setRainyTheme] = useState(false);

  const rotatingWords = siteConfig.rotatingWords;

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("rainyTheme");
    if (savedTheme === "true") {
      setRainyTheme(true);
      document.documentElement.classList.add("rainy");
    }

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const wordTimer = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeState("fade-in");
      }, 400);
    }, 2500);

    return () => {
      clearInterval(timerId);
      clearInterval(wordTimer);
    };
  }, []);

  useEffect(() => {
    if (rainyTheme) {
      document.documentElement.classList.add("rainy");
    } else {
      document.documentElement.classList.remove("rainy");
    }
    localStorage.setItem("rainyTheme", String(rainyTheme));
  }, [rainyTheme]);

  const formattedTime = currentTime
    .toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(",", "");

  return (
    <div className="rounded-2xl bg-[#040d06] shadow-2xl border border-emerald-900/60 px-7 md:px-10 py-7 md:py-5 w-full h-full flex flex-col relative z-20 glow-emerald">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md" />
          <img
            src={siteConfig.avatar}
            alt={siteConfig.name}
            className="relative w-[72px] h-[72px] rounded-full border-2 border-emerald-800 object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-emerald-50 tracking-tight">{siteConfig.name.toLowerCase()}</div>
              <div className="text-sm text-emerald-700 font-mono">{siteConfig.handle}</div>
            </div>

            <button
              onClick={() => setRainyTheme(!rainyTheme)}
              className={`p-2 text-xs font-bold transition-all duration-300 hover:scale-110 ${
                rainyTheme
                  ? "text-teal-300 drop-shadow-[0_0_8px_rgba(94,234,212,0.6)]"
                  : "text-emerald-800 hover:text-emerald-400"
              }`}
            >
              猫
            </button>
          </div>

          <p className="text-emerald-100 mt-4 text-lg">
            I build{" "}
            <span
              className={`font-bold text-emerald-400 transition-all duration-700 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] ${
                fadeState === "fade-in"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </p>

          <p className="text-emerald-700 mt-2 text-sm font-mono">
            {siteConfig.bio}
          </p>
        </div>
      </div>

      <div className="mt-auto border-t border-emerald-900/40 pt-3 text-xs text-emerald-700 flex items-center font-mono">
        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 shadow-[0_0_6px_rgba(52,211,153,0.8)]"></span>
        <span className="text-emerald-500">available for work</span>
        <span className="ml-auto text-emerald-700">{mounted ? formattedTime : ""}</span>
      </div>
    </div>
  );
}
