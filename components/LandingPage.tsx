
import React from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  onInitialize: () => void;
}

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 relative bg-[#050505] overflow-hidden">
      {/* Cinematic Background Elements */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          opacity: [0.01, 0.02, 0.01]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-white blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.005, 0.01, 0.005]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white blur-[120px] pointer-events-none"
      />

      {/* 1px Border Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-6xl w-full space-y-32 fade-in relative z-10 py-20 pb-40">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-16"
        >
          <div className="w-16 h-16 mx-auto text-pearl/10 mb-12 animate-[pulse_6s_ease-in-out_infinite]">
            {SOLOMON_KNOT}
          </div>

          <div className="space-y-8">
            <h1 className="serif text-4xl md:text-8xl font-light tracking-tight text-pearl leading-tight">
              Nel 2026, l'unico vero <br />
              <span className="italic opacity-80 underline decoration-white/5 underline-offset-8">lusso è l'invisibilità.</span>
            </h1>
            <p className="mono text-[9px] uppercase tracking-[0.8em] text-zinc-600 font-light">
              InsolitoDrive // Transactional Proxy Infrastructure
            </p>
          </div>

          <p className="max-w-3xl mx-auto serif italic text-xl md:text-3xl text-zinc-500 leading-relaxed font-light px-4">
            "La privacy non è un diritto, è un'architettura. Operiamo nell'ombra per proteggere la vostra luce."
          </p>

          <div className="pt-16">
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: '0.7em' }}
              whileTap={{ scale: 0.98 }}
              onClick={onInitialize}
              className="btn-fiduciary px-20 py-6 text-[11px] font-semibold uppercase tracking-[0.6em] rounded-sm transition-all duration-700"
            >
              Initiate Interposition
            </motion.button>
            <p className="mt-8 mono text-[7px] uppercase tracking-[0.5em] text-zinc-800">
              Secured Connection • P2P Fiduciary Protocol
            </p>
          </div>
        </motion.header>

        {/* The DNA Section: Establish-Execute-Erase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden rounded-sm">
          {[
            {
              step: '01',
              title: 'ESTABLISH',
              subtitle: 'Mandato Fiduciario',
              desc: 'Formalizzazione istantanea del mandato senza rappresentanza ex Art. 1705 C.C. Blindatura legale immediata.'
            },
            {
              step: '02',
              title: 'EXECUTE',
              subtitle: 'Interposizione Reale',
              desc: 'Acquisizione dell\'asset tramite l\'Executive Desk. Noi siamo il volto, voi siete il proprietario.'
            },
            {
              step: '03',
              title: 'ERASE',
              subtitle: 'Protocollo Oblio',
              desc: 'Cancellazione certificata di ogni traccia digitale entro 48 ore dalla missione. Il dato che non esiste non può essere rubato.'
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx === 0 ? -50 : idx === 2 ? 50 : 0, y: idx === 1 ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 space-y-8 group hover:bg-white/[0.02] transition-all duration-700 ${idx < 2 ? 'md:border-r border-white/5 border-b md:border-b-0' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className="mono text-[8px] text-zinc-700 group-hover:text-pearl/40 transition-colors uppercase tracking-widest">Stage {item.step}</span>
                <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-pearl/20 transition-colors" />
              </div>
              <div className="space-y-4">
                <h3 className="serif text-3xl text-pearl/90 tracking-wide">{item.title}</h3>
                <p className="mono text-[9px] text-zinc-600 uppercase tracking-widest">{item.subtitle}</p>
                <p className="text-[13px] text-zinc-500 font-light leading-relaxed serif italic">"{item.desc}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-center space-y-12 py-20 border-t border-white/5"
        >
          <span className="mono text-[8px] text-zinc-700 uppercase tracking-[1em]">Superiorità Legale Europea</span>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
            <div className="space-y-2 group cursor-help">
              <p className="text-pearl/60 text-lg serif group-hover:text-pearl transition-colors">Art. 1705 C.C.</p>
              <p className="text-[8px] text-zinc-600 uppercase tracking-widest font-bold">Interposizione Reale</p>
            </div>
            <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
            <div className="space-y-2 group cursor-help">
              <p className="text-pearl/60 text-lg serif group-hover:text-pearl transition-colors">Art. 2222 C.C.</p>
              <p className="text-[8px] text-zinc-600 uppercase tracking-widest font-bold">Consulenza Strategica</p>
            </div>
            <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
            <div className="space-y-2 group cursor-help">
              <p className="text-pearl/60 text-lg serif group-hover:text-pearl transition-colors">GDPR / OMEGA</p>
              <p className="text-[8px] text-zinc-600 uppercase tracking-widest font-bold">Diritto all'Oblio</p>
            </div>
          </div>
        </motion.section>
      </div>

      <footer className="absolute bottom-10 w-full px-12 flex justify-between items-center">
        <span className="text-[8px] uppercase tracking-[0.8em] text-zinc-800 font-light">
          InsolitoDrive Ledger • Zurich / Milan Nodes
        </span>
        <span className="mono text-[7px] text-zinc-900">
          SEC-ID: 0x992B-2026
        </span>
      </footer>
    </div>
  );
};
