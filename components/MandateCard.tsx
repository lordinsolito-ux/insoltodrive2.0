import React, { useState } from 'react';
import { Mandate } from '../types';
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

    // Protocol: Instant Fiduciary Verification (Static Logic)
    setTimeout(() => {
      setAppraisal({
        strategy: "Interposizione reale senza rappresentanza garantita. Isolamento totale dell'identità tramite veicoli proxy istituzionali. Piena conformità Art. 1705 C.C.",
        fiduciaryStructures: ["Holding Personale", "Trust Liquido", "Fiduciaria Professionale"],
        privacyIndex: 99
      });
      setLoading(false);
    }, 1000);
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
      case 'FUNDED': return 'text-[#B59A7D] border-[#B59A7D]/20 bg-[#B59A7D]/[0.05] shadow-[0_0_15px_rgba(181,154,125,0.1)]';
      case 'PROCUREMENT': return 'text-[#B59A7D] border-[#B59A7D]/20 bg-[#B59A7D]/[0.02] animate-pulse';
      case 'EXECUTED': return 'text-[#E8E2D6] opacity-40 border-[#E8E2D6]/10';
      case 'DELIVERED': return 'text-[#B59A7D]/60 border-[#B59A7D]/10 bg-[#B59A7D]/[0.01]';
      default: return 'text-zinc-700 border-[#B59A7D]/5 bg-[#E8E2D6]/[0.005]';
    }
  };

  return (
    <div className="bg-[#0B0B0B]/90 backdrop-blur-3xl border border-[#B59A7D]/5 p-12 rounded-sm group hover:border-[#B59A7D]/20 transition-all duration-1000 relative overflow-hidden">
      {/* 1px Vertical Accent */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#B59A7D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* Institutional Watermark */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none transform group-hover:scale-110 text-[#B59A7D]">
        <Scale size={200} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="mono text-[8px] text-[#B59A7D]/40 uppercase tracking-[0.5em]">Mandate Ledger ID: {mandate.id}</span>
              <div className="h-[1px] w-8 bg-[#B59A7D]/10" />
              <span className="mono text-[8px] text-[#B59A7D]/30 uppercase tracking-[0.4em]">{new Date(mandate.created_at).toLocaleDateString()}</span>
            </div>
            <h2 className="serif text-4xl text-[#E8E2D6]/90 font-light tracking-wide group-hover:text-[#E8E2D6] transition-colors duration-700 uppercase">{mandate.asset_subject}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-2">
              <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-widest block font-bold">Escrow Provision</span>
              <span className="text-xl font-light text-[#E8E2D6]/70 tracking-widest">€{mandate.budget_escrow.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-widest block font-bold">Fiduciary Fee (0% IVA)</span>
              <span className="text-xl font-light text-[#B59A7D]/60 tracking-widest">€{mandate.fiduciary_fee.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-widest block font-bold">Fiduciary Protocol</span>
              <span className="text-[10px] text-[#E8E2D6]/40 font-bold uppercase tracking-widest">Art. 1705 C.C.</span>
            </div>
            <div className="space-y-2 border-l border-[#B59A7D]/10 pl-8">
              <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-widest block font-bold">Current Stage</span>
              <span className={`inline-block px-5 py-2 border rounded-full text-[9px] font-bold uppercase tracking-[0.3em] ${getStatusStyle(mandate.status)}`}>
                {getStatusLabel(mandate.status)}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-80 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-[#B59A7D]/10 pt-10 lg:pt-0 lg:pl-12">
          <div className="w-full flex justify-between lg:justify-end items-center space-x-6">
            {(mandate.status === 'DELIVERED' || mandate.status === 'EXECUTED') && (
              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-3 text-[9px] text-[#B59A7D]/60 uppercase tracking-[0.3em] mb-2 font-bold">
                  <Timer size={14} className="animate-pulse" />
                  <span>Protocol Oblivion</span>
                </div>
                <p className="mono text-[#E8E2D6]/30 text-[10px] tracking-widest">47:59:59</p>
              </div>
            )}
            <div className="w-12 h-12 border border-[#B59A7D]/10 rounded-full flex items-center justify-center text-[#B59A7D]/20 group-hover:text-[#B59A7D]/60 transition-colors">
              <Shield size={20} />
            </div>
          </div>

          <button
            onClick={requestAppraisal}
            disabled={loading}
            className="flex items-center space-x-4 text-[9px] text-[#B59A7D]/60 hover:text-[#E8E2D6] transition-all uppercase tracking-[0.5em] group/btn group-hover:scale-105"
          >
            <Clock size={14} className={loading ? 'animate-spin' : 'group-hover/btn:rotate-180 transition-transform duration-1000'} />
            <span className="border-b border-transparent hover:border-[#B59A7D]/40 pb-1">{loading ? 'ANALYZING...' : appraisal ? 'PROTOCOL VERIFIED' : 'TECHNICAL ANALYSIS'}</span>
            <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {appraisal && (
        <div className="mt-16 pt-16 border-t border-[#B59A7D]/10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-[#B59A7D]/40 rounded-full shadow-[0_0_10px_#B59A7D]" />
                <span className="text-[9px] text-[#B59A7D]/60 font-bold uppercase tracking-[0.4em]">Fiduciary Interposition Strategy</span>
              </div>
              <p className="serif italic text-xl text-[#E8E2D6]/60 leading-relaxed indent-8">
                "{appraisal.strategy}"
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              <div className="space-y-6 flex-1">
                <span className="text-[9px] text-[#B59A7D]/60 font-bold uppercase tracking-[0.4em] block text-center md:text-left">Executive Proxy Structures</span>
                <div className="flex flex-wrap gap-3">
                  {appraisal.fiduciaryStructures.map((s: string) => (
                    <span key={s} className="text-[8px] px-5 py-2 border border-[#B59A7D]/10 bg-[#B59A7D]/[0.02] rounded-sm text-[#B59A7D]/60 mono tracking-[0.2em] uppercase hover:text-[#E8E2D6] hover:border-[#B59A7D]/40 transition-all">{s}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] text-[#B59A7D]/40 uppercase tracking-widest block mb-1">Privacy Integrity</span>
                <span className="text-5xl font-light text-[#B59A7D]/80 tracking-tighter shadow-sm">{appraisal.privacyIndex}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
