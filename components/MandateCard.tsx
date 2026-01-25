
import React, { useState } from 'react';
import { Mandate } from '../types';
import { conductFiduciaryAppraisal } from '../services/geminiService';
import { Shield, ChevronRight, Clock, Scale, Timer } from 'lucide-react';

interface Props {
  mandate: Mandate;
}

export const MandateCard: React.FC<Props> = ({ mandate }) => {
  const [appraisal, setAppraisal] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const requestAppraisal = async () => {
    if (appraisal) return;
    setLoading(true);
    try {
      const data = await conductFiduciaryAppraisal(mandate.asset_subject, mandate.budget_escrow);
      setAppraisal(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'PENDING': return 'INITIALIZED';
      case 'FUNDED': return 'FUNDS SECURED';
      case 'PROCUREMENT': return 'PROXY ACTIVE';
      case 'EXECUTED': return 'MISSION SUCCESS';
      case 'DELIVERED': return 'TRANSFERRED';
      case 'WIPED': return 'OBLIVION';
      default: return status;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'FUNDED': return 'text-emerald-500 border-emerald-500/10 bg-emerald-500/[0.02] shadow-[0_0_15px_rgba(16,185,129,0.1)]';
      case 'PROCUREMENT': return 'text-amber-500 border-amber-500/10 bg-amber-500/[0.02] animate-pulse';
      case 'EXECUTED': return 'text-pearl opacity-40 border-pearl/5';
      case 'DELIVERED': return 'text-blue-400 border-blue-400/10 bg-blue-400/[0.02]';
      default: return 'text-zinc-700 border-zinc-900 bg-white/[0.005]';
    }
  };

  return (
    <div className="bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 p-12 rounded-sm group hover:border-white/10 transition-all duration-1000 relative overflow-hidden">
      {/* 1px Vertical Accent */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-pearl/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Institutional Watermark */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none transform group-hover:scale-110">
        <Scale size={200} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="mono text-[7px] text-zinc-700 uppercase tracking-[0.5em]">ID: {mandate.id}</span>
              <div className="h-[1px] w-8 bg-white/5" />
              <span className="mono text-[7px] text-zinc-800 uppercase tracking-[0.4em]">{new Date(mandate.created_at).toLocaleDateString()}</span>
            </div>
            <h2 className="serif text-4xl text-pearl/90 font-light tracking-wide group-hover:text-pearl transition-colors duration-700">{mandate.asset_subject}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-2">
              <span className="text-[7px] text-zinc-700 uppercase tracking-widest block font-bold">Escrow Allocation</span>
              <span className="text-lg font-light text-pearl/70">€{mandate.budget_escrow.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <span className="text-[7px] text-zinc-700 uppercase tracking-widest block font-bold">Service Fee (0% IVA)</span>
              <span className="text-lg font-light text-zinc-500">€{mandate.fiduciary_fee.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <span className="text-[7px] text-zinc-700 uppercase tracking-widest block font-bold">Legal Shield</span>
              <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Art. 1705 C.C.</span>
            </div>
            <div className="space-y-2 border-l border-white/5 pl-8">
              <span className="text-[7px] text-zinc-700 uppercase tracking-widest block font-bold">Status</span>
              <span className={`inline-block px-4 py-1.5 border rounded-full text-[9px] font-bold uppercase tracking-[0.2em] ${getStatusStyle(mandate.status)}`}>
                {getStatusLabel(mandate.status)}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-80 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0 lg:pl-12">
          <div className="w-full flex justify-between lg:justify-end items-center space-x-6">
            {(mandate.status === 'DELIVERED' || mandate.status === 'EXECUTED') && (
              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-3 text-[9px] text-emerald-900/60 uppercase tracking-[0.3em] mb-2">
                  <Timer size={14} className="animate-pulse" />
                  <span>Oblivion Protocol</span>
                </div>
                <p className="mono text-pearl/30 text-[10px] tracking-widest">47:59:59</p>
              </div>
            )}
            <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center text-zinc-800 group-hover:text-pearl/20 transition-colors">
              <Shield size={20} />
            </div>
          </div>

          <button
            onClick={requestAppraisal}
            disabled={loading}
            className="flex items-center space-x-4 text-[9px] text-zinc-600 hover:text-pearl transition-all uppercase tracking-[0.5em] group/btn group-hover:scale-105"
          >
            <Clock size={14} className={loading ? 'animate-spin' : 'group-hover/btn:rotate-180 transition-transform duration-1000'} />
            <span className="border-b border-transparent hover:border-pearl/20 pb-1">{loading ? 'ANALYZING...' : appraisal ? 'PROTOCOL VERIFIED' : 'TECHNICAL ANALYSIS'}</span>
            <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {appraisal && (
        <div className="mt-16 pt-16 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-pearl/20 rounded-full" />
                <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.4em]">Interposition Strategy</span>
              </div>
              <p className="serif italic text-xl text-zinc-400 leading-relaxed indent-8">
                "{appraisal.strategy}"
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              <div className="space-y-6 flex-1">
                <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.4em] block">Proxy Structures</span>
                <div className="flex flex-wrap gap-3">
                  {appraisal.fiduciaryStructures.map((s: string) => (
                    <span key={s} className="text-[8px] px-4 py-1.5 border border-white/5 bg-white/[0.01] rounded-sm text-zinc-500 mono tracking-widest uppercase hover:text-pearl transition-colors">{s}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[7px] text-zinc-700 uppercase tracking-widest block mb-1">Privacy Integrity</span>
                <span className="text-4xl font-light text-pearl/80 tracking-tighter">{appraisal.privacyIndex}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
