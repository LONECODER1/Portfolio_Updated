"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, Maximize2, Minimize2, Trash2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

interface CommandLog {
  id: string;
  command?: string;
  output: React.ReactNode;
}

export default function TerminalCard() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [matrixActive, setMatrixActive] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  const COMMANDS: Record<string, { desc: string; run: (args: string[]) => React.ReactNode }> = {
    help: {
      desc: "Show list of available commands",
      run: () => (
        <div className="space-y-1 text-xs md:text-sm font-mono text-emerald-300/90">
          <p className="text-emerald-400 font-semibold mb-1">Available System Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <div><span className="text-emerald-400 font-bold">whoami</span> <span className="text-emerald-700">──</span> Bio &amp; summary</div>
            <div><span className="text-emerald-400 font-bold">skills</span> <span className="text-emerald-700">──</span> Tech stack overview</div>
            <div><span className="text-emerald-400 font-bold">projects</span> <span className="text-emerald-700">──</span> Featured works</div>
            <div><span className="text-emerald-400 font-bold">socials</span> <span className="text-emerald-700">──</span> Links &amp; contact info</div>
            <div><span className="text-emerald-400 font-bold">resume</span> <span className="text-emerald-700">──</span> View / download CV</div>
            <div><span className="text-emerald-400 font-bold">matrix</span> <span className="text-emerald-700">──</span> Toggle digital rain</div>
            <div><span className="text-emerald-400 font-bold">calc &lt;exp&gt;</span> <span className="text-emerald-700">──</span> Math expression</div>
            <div><span className="text-emerald-400 font-bold">clear</span> <span className="text-emerald-700">──</span> Clear terminal</div>
          </div>
        </div>
      ),
    },
    whoami: {
      desc: "Professional overview",
      run: () => (
        <div className="space-y-1 text-xs md:text-sm font-mono text-emerald-300">
          <p className="text-emerald-400 font-bold">{siteConfig.name} / {siteConfig.handle}</p>
          <p className="text-emerald-200">{siteConfig.bio}</p>
          <p className="text-emerald-600 text-xs">Based in {siteConfig.location} • Status: {siteConfig.status}</p>
        </div>
      ),
    },
    skills: {
      desc: "Tech stack details",
      run: () => (
        <div className="space-y-1.5 text-xs md:text-sm font-mono">
          <p><span className="text-emerald-400 font-semibold">Languages:</span> <span className="text-emerald-200">{siteConfig.skills.languages.join(", ")}</span></p>
          <p><span className="text-emerald-400 font-semibold">Frontend:</span> <span className="text-emerald-200">{siteConfig.skills.frontend.join(", ")}</span></p>
          <p><span className="text-emerald-400 font-semibold">Backend:</span> <span className="text-emerald-200">{siteConfig.skills.backend.join(", ")}</span></p>
          <p><span className="text-emerald-400 font-semibold">DevOps/Cloud:</span> <span className="text-emerald-200">{siteConfig.skills.devops.join(", ")}</span></p>
        </div>
      ),
    },
    projects: {
      desc: "Featured project list",
      run: () => (
        <div className="space-y-1.5 text-xs md:text-sm font-mono">
          <p className="text-emerald-400 font-semibold">Featured Work:</p>
          <p className="text-emerald-200">• <span className="font-bold">Portfolio / Interactive Terminal OS</span> ─ Next.js 14, Tailwind</p>
          <p className="text-emerald-200">• <span className="font-bold">Full-Stack &amp; Scalable Systems</span> ─ React, Node, Database</p>
          <div className="pt-1">
            <Link href="/projects" className="inline-block text-emerald-400 underline hover:text-emerald-300">
              [Click here to view all projects →]
            </Link>
          </div>
        </div>
      ),
    },
    socials: {
      desc: "Contact links and social handles",
      run: () => (
        <div className="space-y-1 text-xs md:text-sm font-mono text-emerald-300">
          <p className="text-emerald-400 font-semibold">Connect with me:</p>
          <p>• GitHub: <a href={siteConfig.socials.github.url} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{siteConfig.socials.github.username}</a></p>
          <p>• X: <a href={siteConfig.socials.x.url} target="_blank" rel="noreferrer" className="text-emerald-400 underline">{siteConfig.socials.x.username}</a></p>
          <p>• LinkedIn: <a href={siteConfig.socials.linkedin.url} target="_blank" rel="noreferrer" className="text-emerald-400 underline">LinkedIn Profile</a></p>
          <p>• Email: <a href={siteConfig.socials.email.url} className="text-emerald-400 underline">{siteConfig.socials.email.address}</a></p>
        </div>
      ),
    },
    resume: {
      desc: "Download or view resume",
      run: () => (
        <div className="space-y-1 text-xs md:text-sm font-mono text-emerald-300">
          <p className="text-emerald-400 font-semibold">Resume document:</p>
          <p>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 underline font-bold"
            >
              [View / Download Resume PDF]
            </a>
          </p>
        </div>
      ),
    },
    matrix: {
      desc: "Toggle digital rain animation",
      run: () => {
        setMatrixActive((prev) => !prev);
        return (
          <span className="text-emerald-400 font-mono">
            Matrix protocol toggled.
          </span>
        );
      },
    },
    date: {
      desc: "Display system date and time",
      run: () => <span className="text-emerald-400 font-mono">{new Date().toString()}</span>,
    },
  };

  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      output: (
        <div className="space-y-1 font-mono text-xs md:text-sm">
          <p className="text-emerald-600 font-semibold">Initializing {siteConfig.name}OS Terminal Kernel v2.4.0...</p>
          <p className="text-emerald-300">
            Welcome! Type <span className="text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">&apos;help&apos;</span> to explore available commands.
          </p>
        </div>
      ),
    },
  ]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd === "clear") {
      setLogs([]);
      return;
    }

    let outputNode: React.ReactNode;

    if (cmd === "calc") {
      const exp = args.join(" ");
      if (!exp) {
        outputNode = <span className="text-red-400 font-mono text-xs">Usage: calc &lt;expression&gt; (e.g. calc 24 * 7)</span>;
      } else {
        try {
          const sanitized = exp.replace(/[^0-9+\-*/().%\s]/g, "");
          const result = new Function(`return ${sanitized}`)();
          outputNode = <span className="text-emerald-400 font-mono">= {result}</span>;
        } catch {
          outputNode = <span className="text-red-400 font-mono text-xs">Error: Invalid mathematical expression</span>;
        }
      }
    } else if (COMMANDS[cmd]) {
      outputNode = COMMANDS[cmd].run(args);
    } else if (cmd === "sudo") {
      outputNode = <span className="text-yellow-400 font-mono text-xs">guest is not in the sudoers file. This incident will be reported.</span>;
    } else {
      outputNode = (
        <span className="text-red-400/90 font-mono text-xs">
          Command not found: &apos;{cmd}&apos;. Type <span className="text-emerald-400">&apos;help&apos;</span> for available commands.
        </span>
      );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: trimmed,
        output: outputNode,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx] || "");
        } else {
          setHistoryIndex(-1);
          setInput("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.toLowerCase().trim();
      const allCmds = Object.keys(COMMANDS).concat(["calc", "clear", "sudo"]);
      const match = allCmds.find((c) => c.startsWith(current));
      if (match) setInput(match);
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  // Matrix canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!matrixActive) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animId: number;
    let drops: number[] = [];
    const fontSize = 13;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%#&_";

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || 600;
      canvas.height = canvas.parentElement?.offsetHeight || 380;
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastDraw = 0;
    const render = (time: number) => {
      if (time - lastDraw > 45) {
        ctx.fillStyle = "rgba(4, 13, 6, 0.12)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#34d399";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        lastDraw = time;
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [matrixActive, isExpanded]);

  return (
    <div
      className={`rounded-2xl bg-[#040d06] border border-emerald-900/60 shadow-2xl overflow-hidden relative glow-emerald flex flex-col w-full h-full min-h-[300px] lg:min-h-0 transition-all duration-300 ${
        isExpanded ? "fixed inset-3 z-50 shadow-[0_0_60px_rgba(0,0,0,0.9)]" : ""
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Matrix Canvas Layer (Always mounted for smooth instant toggling) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 ${
          matrixActive ? "opacity-30 block" : "opacity-0 hidden"
        }`}
      />

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 bg-emerald-950/40 border-b border-emerald-900/60 backdrop-blur-md select-none shrink-0">
        <div className="flex items-center gap-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setLogs([]);
            }}
            title="Clear Terminal"
            className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-400/40 hover:opacity-100 opacity-80 cursor-pointer transition-opacity"
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMatrixActive((prev) => !prev);
            }}
            title="Toggle Matrix Rain"
            className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 border border-yellow-400/40 hover:opacity-100 opacity-80 cursor-pointer transition-opacity"
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded((prev) => !prev);
            }}
            title="Toggle Size"
            className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40 hover:opacity-100 opacity-80 cursor-pointer transition-opacity"
          />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-mono">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-400/90 font-semibold">{siteConfig.name.toLowerCase()}@portfolio</span>
          <span className="text-emerald-700">:~</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMatrixActive((prev) => !prev);
            }}
            className={`p-1 rounded text-xs transition-colors ${
              matrixActive ? "text-emerald-400 bg-emerald-900/50" : "text-emerald-700 hover:text-emerald-400"
            }`}
            title="Toggle Matrix Effect"
          >
            <Sparkles className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLogs([]);
            }}
            className="p-1 rounded text-emerald-700 hover:text-emerald-400 text-xs transition-colors"
            title="Clear logs"
          >
            <Trash2 className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded((prev) => !prev);
            }}
            className="p-1 rounded text-emerald-700 hover:text-emerald-400 text-xs transition-colors"
            title="Toggle Size"
          >
            {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="relative z-10 p-3 flex-1 overflow-y-auto font-mono text-xs space-y-2.5 scrollbar-none min-h-0"
      >
        {logs.map((log) => (
          <div key={log.id} className="space-y-1">
            {log.command && (
              <div className="flex items-center gap-2 text-emerald-700 font-mono">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-emerald-600">~</span>
                <span className="text-emerald-100">{log.command}</span>
              </div>
            )}
            <div>{log.output}</div>
          </div>
        ))}

        {/* Input prompt */}
        <div className="flex items-center gap-2 pt-1 font-mono">
          <span className="text-emerald-400 font-bold select-none">➜</span>
          <span className="text-emerald-600 select-none">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-emerald-100 outline-none border-none font-mono text-xs placeholder:text-emerald-800"
            placeholder="Type 'help'..."
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>

      {/* Terminal Footer status */}
      <div className="relative z-10 px-3 py-1 bg-[#030a06]/90 border-t border-emerald-900/40 text-[10px] text-emerald-700 font-mono flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span className="text-emerald-600">CLI Ready</span>
        </div>
        <span className="text-emerald-800">Tab for Auto</span>
      </div>
    </div>
  );
}
