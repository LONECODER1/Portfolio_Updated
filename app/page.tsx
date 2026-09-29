import React from "react";
import ProfileCard from "@/components/home-page/profile-card";
import TechStackCard from "@/components/home-page/tech-stack-card";
import ToolsBoard from "@/components/home-page/tools-board";
import TerminalCard from "@/components/home-page/terminal-card";

const IndexPage = () => {
  return (
    <main className="relative w-full h-full lg:h-[calc(100vh-40px)] flex flex-col justify-center px-3 sm:px-6 lg:px-6 xl:px-8 py-2 lg:py-2.5 overflow-y-auto lg:overflow-hidden">
      {/* Rain theme backgrounds */}
      <div className="rain-bg">
        <div className="rain-bg-img" />
        <div className="rain-bg-cloudy" />
        <div className="rain-bg-overlay" />
      </div>
      <div className="cloud-overlay" />

      <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_1.9fr_1.15fr] gap-3 xl:gap-3.5 h-full items-stretch">
          {/* Left column - Tech stack */}
          <div className="order-3 lg:order-1 h-full min-h-0">
            <TechStackCard />
          </div>

          {/* Center column - Profile + Tools board */}
          <div className="order-1 lg:order-2 flex flex-col gap-2.5 xl:gap-3 w-full h-full min-h-0">
            <div className="shrink-0">
              <ProfileCard />
            </div>
            <div className="flex-1 min-h-0">
              <ToolsBoard />
            </div>
          </div>

          {/* Right column - Terminal */}
          <div className="order-2 lg:order-3 w-full h-full min-h-0 flex flex-col">
            <TerminalCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
