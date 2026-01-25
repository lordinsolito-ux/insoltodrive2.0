
import React from 'react';

export const PrivacyLevel: React.FC = () => {
  return (
    <div className="space-y-4 w-56 group">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <span className="sans-ui text-[9px] text-[#C5A059]/40 font-bold">Privacy Shielding</span>
          <p className="sans-ui text-[7px] text-[#C5A059]/60 italic">Active // Encrypted</p>
        </div>
        <span className="serif text-[11px] text-[#FFFFFF] font-light tracking-[0.25em]">MAXIMUM</span>
      </div>
      <div className="h-[0.5px] w-full bg-[#C5A059]/10 overflow-hidden relative">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent animate-[pulse_5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};
