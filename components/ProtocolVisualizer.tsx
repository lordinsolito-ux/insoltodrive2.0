
import React from 'react';
import { ProtocolStage } from '../types';
import { Shield, Zap, Trash2, ShieldAlert } from 'lucide-react';

interface Props {
  currentStage: ProtocolStage;
}

export const ProtocolVisualizer: React.FC<Props> = ({ currentStage }) => {
  const stages = [
    { key: ProtocolStage.ESTABLISHMENT, icon: Shield, label: 'INITIALIZED' },
    { key: ProtocolStage.PROCUREMENT, icon: Zap, label: 'PROXY ACTIVE' },
    { key: ProtocolStage.OBLIVION, icon: Trash2, label: 'OBLIVION' },
  ];

  return (
    <div className="flex items-center space-x-6">
      {stages.map((s, idx) => {
        const isActive = s.key === currentStage;
        const isPast = stages.findIndex(st => st.key === currentStage) > idx;

        return (
          <React.Fragment key={s.key}>
            <div className="flex flex-col items-center group transition-all duration-1000">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-1000
                ${isActive ? 'bg-pearl border-pearl text-obsidian shadow-[0_0_25px_rgba(245,245,245,0.15)] scale-110' :
                  isPast ? 'border-emerald-900/40 text-emerald-900/60' : 'border-white/5 text-zinc-900'}
              `}>
                <s.icon size={18} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className={`text-[7px] mt-3 font-bold tracking-[0.3em] transition-colors duration-1000 ${isActive ? 'text-pearl' : isPast ? 'text-emerald-900/40' : 'text-zinc-900'}`}>
                {s.label}
              </span>
            </div>
            {idx < stages.length - 1 && (
              <div className="flex flex-col items-center">
                <div className={`h-[1px] w-12 transition-all duration-1000 ${isPast ? 'bg-emerald-900/20' : 'bg-white/5'}`} />
              </div>
            )}
          </React.Fragment>
        );
      })}
      {currentStage === ProtocolStage.OBLIVION && (
        <div className="ml-8 pl-8 border-l border-white/5 flex items-center space-x-3 text-emerald-500/80 animate-pulse">
          <ShieldAlert size={14} />
          <span className="text-[7px] font-bold tracking-widest uppercase text-emerald-900">Encrypted Wipe Active</span>
        </div>
      )}
    </div>
  );
};