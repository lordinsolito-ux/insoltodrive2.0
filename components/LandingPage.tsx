
import React from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  onInitialize: () => void;
}

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#0D0D0D] text-[#E8E2D6] overflow-hidden">
      {/* Cinematic Background Elements - Soft & Silky */}
      <motion.div
        animate={{
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-[#B59A7D]/5 via-transparent to-transparent pointer-events-none"
      />

      {/* Structural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #B59A7D 1px, transparent 1px), linear-gradient(to bottom, #B59A7D 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl w-full relative z-10 px-6 md:px-20 py-20 lg:py-40 flex flex-col space-y-40">

        {/* Section 1: The Entrance Hall (Hero) */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-12"
        >
          <div className="w-12 h-12 mx-auto text-[#B59A7D]/20 mb-16">
            {SOLOMON_KNOT}
          </div>

          <div className="space-y-6">
            <p className="mono text-[10px] uppercase tracking-[1em] text-[#B59A7D] font-light">
              Michael Sergio Jara Lloctun — Private Fiduciary Principal
            </p>
            <h1 className="serif text-5xl md:text-8xl font-light tracking-tight leading-tight">
              Il vostro nome è il vostro asset più caro.<br />
              <span className="italic opacity-90 italic">Proteggetelo con la nostra interposizione.</span>
            </h1>
          </div>

          <p className="max-w-3xl mx-auto serif italic text-xl md:text-3xl text-[#E8E2D6]/60 leading-relaxed font-light px-4">
            "La privacy non è un diritto, è un'architettura. Operiamo nell'ombra per proteggere la vostra luce."
          </p>

          <div className="pt-20">
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: '0.8em', backgroundColor: 'transparent', color: '#B59A7D', borderColor: '#B59A7D' }}
              whileTap={{ scale: 0.98 }}
              onClick={onInitialize}
              className="px-24 py-8 text-[11px] font-semibold uppercase tracking-[0.6em] rounded-sm transition-all duration-1000 bg-[#E8E2D6] text-[#0D0D0D] border border-[#E8E2D6] shadow-2xl"
            >
              Inizia Protocollo di Consultazione
            </motion.button>
            <p className="mt-8 mono text-[8px] uppercase tracking-[0.6em] text-[#B59A7D]/40">
              Secured Connection • P2P Fiduciary Proxy
            </p>
          </div>
        </motion.header>

        {/* Section 2: The Manifesto (Philosophy) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="max-w-4xl mx-auto text-center space-y-16 py-32 border-y border-[#B59A7D]/5"
        >
          <h2 className="serif italic text-3xl md:text-5xl text-[#B59A7D]/80">L'Arte dell'Invisibilità</h2>
          <p className="serif text-xl md:text-2xl text-[#E8E2D6]/80 leading-relaxed font-light">
            "Nel 2026, l'unico vero lusso è l'invisibilità. In un'era di trasparenza forzata, il silenzio è diventato il bene più prezioso. Non siamo qui per nascondere, ma per proteggere. Non siamo qui per evadere, ma per elevare la vostra libertà di agire senza essere osservati."
          </p>
          <p className="mono text-[9px] uppercase tracking-[0.8em] text-[#B59A7D]/60 italic font-bold">InsolitoDrive — Fiduciary Architecture</p>
        </motion.section>

        {/* Section 3: The Trust Pillars (DNA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#B59A7D]/10 bg-[#E8E2D6]/[0.02] backdrop-blur-3xl overflow-hidden rounded-sm">
          {[
            {
              step: '01',
              title: 'ESTABLISH',
              subtitle: 'The Mandate',
              desc: 'La nascita della vostra ombra. Formalizziamo un incarico fiduciario ex Art. 1705 C.C. dove la nostra identità diventa il vostro scudo legale.'
            },
            {
              step: '02',
              title: 'EXECUTE',
              subtitle: 'The Proxy Execution',
              desc: 'L\'azione senza traccia. Gestiamo acquisizioni di asset rari e logistica complessa tramite il nostro Executive Desk. Voi siete il proprietario, noi siamo il volto.'
            },
            {
              step: '03',
              title: 'ERASE',
              subtitle: 'The Digital Oblivion',
              desc: 'Il ritorno al silenzio. Protocollo Omega: 48 ore dopo l\'esecuzione, ogni record digitale svanisce. Il dato che non esiste non può essere violato.'
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.3 }}
              className={`p-16 space-y-10 group hover:bg-[#B59A7D]/[0.03] transition-all duration-1000 ${idx < 2 ? 'md:border-r border-[#B59A7D]/10 border-b md:border-b-0' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className="mono text-[9px] text-[#B59A7D]/40 group-hover:text-[#B59A7D] transition-colors uppercase tracking-widest">Pillar {item.step}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#B59A7D]/20 animate-pulse" />
              </div>
              <div className="space-y-6">
                <h3 className="serif text-4xl text-[#E8E2D6]/90 tracking-wide">{item.title}</h3>
                <p className="mono text-[10px] text-[#B59A7D] uppercase tracking-[0.4em] font-bold">{item.subtitle}</p>
                <p className="text-[15px] text-[#E8E2D6]/50 font-light leading-relaxed serif italic">"{item.desc}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 4: The Superiority (Legal) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 py-40 px-10 md:px-20 bg-[#121212] luxury-border border rounded-sm"
        >
          <div className="space-y-10">
            <span className="mono text-[9px] text-[#B59A7D] uppercase tracking-[1em]">Superiorità Legale Europea</span>
            <h2 className="serif text-5xl font-light">Il Vantaggio Fiduciario</h2>
            <p className="serif text-xl text-[#E8E2D6]/60 leading-relaxed">
              La blindatura offerta dall'ordinamento italiano (Art. 1705 e 2222 C.C.) garantisce un'interposizione reale superiore ai modelli anglosassoni, unita alla massima efficienza fiscale per ogni incarico strategico.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {[
              { art: 'Art. 1705 C.C.', label: 'Interposizione Reale Senza Rappresentanza' },
              { art: 'Art. 2222 C.C.', label: 'Servizi Intellettuali d\'Alta Strategia' },
              { art: 'GDPR / OMEGA', label: 'Diritto Assoluto all\'Oblio Digitale' }
            ].map(item => (
              <div key={item.art} className="border-b border-[#B59A7D]/10 pb-6 flex justify-between items-end group cursor-help">
                <div>
                  <p className="text-[#B59A7D] text-lg serif group-hover:italic transition-all">{item.art}</p>
                  <p className="text-[9px] text-[#E8E2D6]/40 uppercase tracking-widest font-bold">{item.label}</p>
                </div>
                <div className="w-2 h-2 rounded-full border border-[#B59A7D]/40 group-hover:bg-[#B59A7D] transition-all" />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 5: Private Access */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-center space-y-16 pb-20"
        >
          <div className="space-y-6">
            <h2 className="serif text-5xl md:text-7xl font-light">Private Access</h2>
            <p className="serif italic text-2xl text-[#E8E2D6]/40">"L'accesso al nostro network è riservato. Ogni collaborazione inizia con una valutazione di integrità."</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
            onClick={onInitialize}
            className="px-20 py-6 text-[10px] uppercase tracking-[0.3em] border border-[#B59A7D]/40 text-[#B59A7D] hover:bg-[#B59A7D] hover:text-[#0D0D0D] transition-all duration-700 rounded-sm"
          >
            Richiedi Credenziali d'Accesso
          </motion.button>
        </motion.section>

      </div>

      <footer className="w-full px-12 py-12 flex flex-col md:flex-row justify-between items-center bg-[#080808] border-t border-[#B59A7D]/5 space-y-6 md:space-y-0">
        <span className="text-[9px] uppercase tracking-[0.8em] text-[#B59A7D]/40 font-light">
          InsolitoDrive Master Ledger • Private Fiduciary Principal
        </span>
        <div className="flex space-x-12 mono text-[8px] text-[#E8E2D6]/20">
          <span>SEC-ID: 0xD99A-TRUST</span>
          <span>EST. 2026</span>
        </div>
      </footer>
    </div>
  );
};
