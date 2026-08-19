import { Container, Main, Section } from "@/components/craft";
import React from "react";
import ProfileCard from "@/components/home-page/profile-card";
import TechStackCard from "@/components/home-page/tech-stack-card";
import ToolsBoard from "@/components/home-page/tools-board";
import TerminalCard from "@/components/home-page/terminal-card";

const IndexPage = () => {
  return (
    <Main className="min-h-screen relative">
      {/* Rain theme backgrounds */}
      <div className="rain-bg">
        <div className="rain-bg-img" />
        <div className="rain-bg-cloudy" />
        <div className="rain-bg-overlay" />
      </div>
      <div className="cloud-overlay" />
      
      <Section>
        <Container className="w-full max-w-[1400px] mx-auto px-2 md:px-8 py-2 md:py-6">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-8">
            {/* Left column - Tech stack */}
            <div className="order-3 md:order-1">
              <TechStackCard />
            </div>

            {/* Center column - Profile + Tools board */}
            <div className="order-1 md:order-2 flex flex-col gap-6 w-full h-full">
              <div className="flex-grow w-full">
                <ProfileCard />
              </div>
              <div className="flex-grow w-full">
                <ToolsBoard />
              </div>
            </div>

            {/* Right column - Terminal */}
            <div className="order-2 md:order-3 w-full h-full flex flex-col">
              <TerminalCard />
            </div>
          </div>
        </Container>
      </Section>
    </Main>
  );
};

export default IndexPage;
