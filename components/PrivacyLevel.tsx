
import React from 'react';

export const PrivacyLevel: React.FC = () => {
  return (
    <div className="space-y-4 w-56 group">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-[7px] text-zinc-800 uppercase tracking-[0.4em] font-bold">Privacy Shielding</span>
          <p className="text-[6px] text-emerald-900/50 uppercase tracking-[0.2em] mono">Active / Encrypted</p>
        </div>
        <span className="text-[10px] text-pearl font-light tracking-widest">MAXIMUM</span>
      </div>
      <div className="h-[1px] w-full bg-white/5 overflow-hidden relative">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-pearl/40 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};
