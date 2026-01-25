
import React from 'react';
import { Mandate } from '../types';
import { SOLOMON_KNOT } from '../constants';
import { MandateCard } from './MandateCard';
import { PrivacyLevel } from './PrivacyLevel';
import {
  Briefcase,
  Layers,
  ShieldCheck,
  Plus,
  EyeOff,
  UserCircle,
  Clock,
  Trash2,
  Zap
} from 'lucide-react';

interface Props {
  mandates: Mandate[];
  onNewMandate: () => void;
}

export const ExecutiveDesk: React.FC<Props> = ({ mandates, onNewMandate }) => {
  const [isWiping, setIsWiping] = React.useState(false);

  const handlePanic = () => {
    if (confirm("INITIALIZE OBLIVION? This will atomize all local session data and connection logs.")) {
      setIsWiping(true);
      setTimeout(() => {
        window.location.href = '/'; // Protocol: Return to shadow
      }, 3000);
    }
  };

  if (isWiping) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center space-y-8 animate-pulse">
        <div className="w-16 h-16 text-emerald-900">
          <Zap size={64} className="animate-bounce" />
        </div>
        <p className="mono text-[10px] text-emerald-900 uppercase tracking-[1em]">Protocol OMEGA Active: Atomizing Data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0D0D0D] text-[#E8E2D6] font-light relative">
      {/* Mobile Panic Button (Floating) */}
      <div className="fixed bottom-32 right-6 lg:hidden z-50">
        <button
          onClick={handlePanic}
          className="w-14 h-14 bg-red-900/10 border border-red-900/40 rounded-full flex items-center justify-center text-red-900 shadow-[0_0_20px_rgba(153,27,27,0.2)]"
        >
          <Trash2 size={24} />
        </button>
      </div>

      {/* Institutional Navigation Sidebar */}
      <aside className="w-24 border-r border-[#B59A7D]/10 flex flex-col items-center py-12 space-y-16 bg-[#0B0B0B]/80 backdrop-blur-xl">
        <div className="w-12 h-12 text-[#B59A7D]/40 hover:text-[#B59A7D]/80 transition-all duration-1000 cursor-pointer">
          {SOLOMON_KNOT}
        </div>
        <nav className="flex flex-col space-y-12 text-zinc-800">
          <Briefcase size={20} className="text-[#B59A7D]/90 transition-transform hover:scale-110 cursor-pointer" />
          <Layers size={20} className="hover:text-[#B59A7D]/40 cursor-pointer transition-all" />
          <ShieldCheck size={20} className="hover:text-[#B59A7D]/40 cursor-pointer transition-all" />
          <div className="flex-grow" />
          <UserCircle size={20} className="hover:text-[#B59A7D]/40 cursor-pointer transition-all" />
        </nav>
      </aside>

      {/* Primary Intelligence Workspace */}
      <main className="flex-1 overflow-y-auto px-10 md:px-20 py-16 max-w-[1600px] mx-auto w-full relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B59A7D]/[0.02] blur-[150px] pointer-events-none" />

        <header className="flex flex-col lg:row justify-between items-start lg:items-end mb-24 border-b border-[#B59A7D]/10 pb-16 space-y-10 lg:space-y-0 relative z-10">
          <div className="space-y-6">
            <h1 className="serif text-5xl md:text-6xl font-light tracking-tight text-[#E8E2D6]/90 uppercase">Executive Desk</h1>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center space-x-3">
                <span className="w-1 h-1 bg-[#B59A7D] rounded-full shadow-[0_0_10px_rgba(181,154,125,0.3)] animate-pulse" />
                <p className="mono text-[8px] text-[#B59A7D]/60 uppercase tracking-[0.4em]">Node: Zurich_Fiduciary_Principal</p>
              </div>
              <p className="mono text-[8px] text-[#B59A7D]/40 uppercase tracking-[0.4em] hidden md:block border-l border-[#B59A7D]/10 pl-8">Protocol Art. 1705 C.C. Active</p>
            </div>
          </div>

          <div className="flex items-center space-x-12">
            <PrivacyLevel />
            <button
              onClick={onNewMandate}
              className="group flex items-center space-x-4 border border-[#B59A7D]/20 px-10 py-5 text-[10px] uppercase tracking-[0.4em] text-[#B59A7D]/60 hover:text-[#E8E2D6] hover:border-[#B59A7D]/40 transition-all duration-1000 rounded-sm bg-[#B59A7D]/[0.02] hover:bg-[#B59A7D]/[0.05]"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-700" />
              <span>New Interposition</span>
            </button>
          </div>
        </header>

        <section className="space-y-12 pb-48 relative z-10">
          {mandates.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {mandates.map((mandate) => (
                <MandateCard key={mandate.id} mandate={mandate} />
              ))}
            </div>
          ) : (
            <div className="py-64 text-center border border-dashed border-[#B59A7D]/10 rounded-sm bg-[#E8E2D6]/[0.01]">
              <EyeOff size={40} className="mx-auto text-[#B59A7D]/20 mb-10 opacity-20" />
              <p className="serif italic text-[#E8E2D6]/40 text-3xl font-light">The ledger is currently blank.</p>
              <p className="text-[9px] uppercase tracking-[0.8em] text-[#B59A7D]/40 mt-6">Awaiting Fiduciary Instructions</p>
            </div>
          )}
        </section>

        {/* Imperial Financial Ledger Status */}
        <div className="fixed bottom-0 right-0 left-24 bg-[#0D0D0D]/95 backdrop-blur-3xl border-t border-[#B59A7D]/10 h-24 px-12 md:px-20 flex items-center justify-between z-30">
          <div className="flex space-x-16 md:space-x-24">
            <div className="flex flex-col">
              <span className="text-[7px] text-[#B59A7D]/40 uppercase tracking-[0.4em] mb-2 font-bold">Escrow Provision (Neutral)</span>
              <span className="text-lg text-[#E8E2D6]/80 font-light tracking-widest">€{mandates.reduce((acc, m) => acc + m.budget_escrow, 0).toLocaleString()}</span>
            </div>
            <div className="flex flex-col border-l border-[#B59A7D]/10 pl-16 md:pl-24">
              <span className="text-[7px] text-[#B59A7D]/60 uppercase tracking-[0.4em] mb-2 font-bold italic">Net Fiduciary Fee (0% IVA)</span>
              <span className="text-lg text-[#B59A7D] font-light tracking-widest">€{mandates.reduce((acc, m) => acc + m.fiduciary_fee, 0).toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center space-x-12 hidden md:flex">
            <div className="text-right">
              <p className="text-[8px] text-[#B59A7D]/60 uppercase tracking-[0.6em] font-light mb-1 italic">Michael Sergio Jara Lloctun</p>
              <p className="text-[7px] text-[#B59A7D]/40 uppercase tracking-[0.4em]">Confidential Fiduciary Gateway</p>
            </div>
            <div className="w-10 h-10 border border-[#B59A7D]/10 rounded-full flex items-center justify-center text-[#B59A7D]/40">
              <Clock size={16} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
