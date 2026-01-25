
import React, { useEffect, useState, useRef } from 'react';

interface TerminalOutputProps {
  logs: string[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ logs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      ref={scrollRef}
      className="bg-[#050505]/40 backdrop-blur-xl border border-white/5 p-6 h-64 overflow-y-auto font-mono text-[10px] text-zinc-500 leading-relaxed rounded-sm transition-all duration-1000"
    >
      {logs.map((log, i) => (
        <div key={i} className="mb-2 flex items-start space-x-4 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-zinc-800 shrink-0">[{new Date().toLocaleTimeString()}]</span>
          <span className="tracking-wide">{log}</span>
        </div>
      ))}
      <div className="animate-pulse text-pearl/20 text-xs text-center border-t border-white/5 mt-4 pt-4 tracking-[1em] uppercase">System Operational</div>
    </div>
  );
};
