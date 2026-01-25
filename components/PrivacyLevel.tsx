
import React from 'react';

export const PrivacyLevel: React.FC = () => {
  return (
    <div className="space-y-4 w-56 group">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-[0.4em] font-bold">Privacy Shielding</span>
          <p className="text-[7px] text-[#B59A7D]/60 uppercase tracking-[0.2em] mono italic text-right md:text-left">Active // Encrypted</p>
        </div>
        <span className="text-[10px] text-[#E8E2D6] font-light tracking-[0.25em]">MAXIMUM</span>
      </div>
      <div className="h-[1px] w-full bg-[#B59A7D]/10 overflow-hidden relative">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#B59A7D]/40 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};
