
import React from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  onInitialize: () => void;
}

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  const liquidTransition = { duration: 2.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#E8E2D6] selection:bg-[#B59A7D] selection:text-[#0D0D0D]">

      {/* Dynamic Background - Almost Static Luxury */}
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="fixed inset-0 bg-gradient-to-b from-[#B59A7D]/5 to-transparent pointer-events-none z-0"
      />

      {/* Main Editorial Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

        {/* Section 1: The Entrance (Hero) - Radical Minimalism */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={liquidTransition}
          className="min-h-screen flex flex-col justify-center space-y-32 py-40"
        >
          <div className="space-y-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 4 }}
              className="w-16 h-16 text-[#B59A7D]"
            >
              {SOLOMON_KNOT}
            </motion.div>

            <div className="space-y-4">
              <p className="mono text-[9px] uppercase tracking-[1.2em] text-[#B59A7D]/60 font-medium">
                Michael Sergio Jara Lloctun — Private Fiduciary Principal
              </p>
              <h1 className="serif text-6xl md:text-[120px] font-thin tracking-tighter leading-[0.9] text-[#E8E2D6]">
                Invisibilità <br />
                <span className="italic opacity-60 ml-20 md:ml-60 underline decoration-[#B59A7D]/10 underline-offset-8">come Architettura.</span>
              </h1>
            </div>
          </div>

          <div className="flex justify-end pr-10 md:pr-40">
            <div className="max-w-md space-y-12">
              <p className="serif italic text-2xl md:text-3xl text-[#B59A7D]/80 leading-relaxed font-light">
                "Nel 2026, l'unico vero lusso è poter agire senza essere osservati."
              </p>
              <motion.button
                whileHover={{ scale: 1.02, letterSpacing: '0.6em', color: '#B59A7D' }}
                onClick={onInitialize}
                className="text-[10px] uppercase tracking-[0.4em] text-[#E8E2D6]/40 border-b border-[#B59A7D]/20 pb-2 transition-all duration-1000"
              >
                Richiedi Protocollo d'Accesso
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Fiduciary Divider */}
        <div className="fiduciary-line-bronze opacity-20" />

        {/* Section 2: The Manifesto - Asymmetrical Philosophy */}
        <section className="concierge-spacing grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={liquidTransition}
            className="md:col-start-2 md:col-span-10 space-y-24"
          >
            <h2 className="serif text-5xl md:text-8xl text-[#B59A7D]/10 absolute -top-10 -left-10 pointer-events-none uppercase tracking-tighter select-none">Philosophy</h2>
            <div className="space-y-16 relative z-10">
              <p className="serif text-3xl md:text-5xl text-[#E8E2D6]/90 leading-[1.4] font-light max-w-5xl">
                Operiamo nell'ombra per proteggere la vostra luce. InsolitoDrive è il punto di interposizione fiduciaria dove la privacy non è una promessa, ma un'opera di ingegneria legale.
              </p>
              <div className="flex items-center space-x-8">
                <div className="w-20 h-[0.5px] bg-[#B59A7D]/30" />
                <span className="mono text-[8px] uppercase tracking-[0.8em] text-[#B59A7D]/60 italic font-bold">The Art of Invisibility</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: The Trust Pillars - Editorial Displacement */}
        <section className="concierge-spacing space-y-96 relative">

          {/* Pillar 01 - Establish - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={liquidTransition}
            className="grid grid-cols-1 md:grid-cols-12"
          >
            <div className="md:col-span-6 space-y-10 group">
              <span className="mono text-[9px] text-[#B59A7D] tracking-[0.6em] block mb-4 uppercase">Stage 01 // The Mandate</span>
              <h3 className="serif text-5xl md:text-7xl font-light text-[#E8E2D6] group-hover:italic transition-all duration-1000">ESTABLISH</h3>
              <div className="fiduciary-line-bronze opacity-20 my-10" />
              <p className="serif text-xl border-l border-[#B59A7D]/10 pl-8 italic text-[#E8E2D6]/50 leading-relaxed font-light">
                "La formalizzazione istantanea del mandato senza rappresentanza (Art. 1705 C.C.). Qui, la nostra identità diventa il vostro scudo legale primario."
              </p>
            </div>
          </motion.div>

          {/* Pillar 02 - Execute - Center/Right Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={liquidTransition}
            className="grid grid-cols-1 md:grid-cols-12"
          >
            <div className="md:col-start-7 md:col-span-6 space-y-10 group text-right flex flex-col items-end">
              <span className="mono text-[9px] text-[#B59A7D] tracking-[0.6em] block mb-4 uppercase">Stage 02 // The Execution</span>
              <h3 className="serif text-5xl md:text-7xl font-light text-[#E8E2D6] group-hover:italic transition-all duration-1000">EXECUTE</h3>
              <div className="fiduciary-line-bronze opacity-20 my-10" />
              <p className="serif text-xl border-r border-[#B59A7D]/10 pr-8 italic text-[#E8E2D6]/50 leading-relaxed font-light">
                "Gestione di acquisizioni di asset rari tramite l'Executive Desk. Il mondo vede il volto del Principal, mentre voi detenete il potere assoluto dell'asset."
              </p>
            </div>
          </motion.div>

          {/* Pillar 03 - Erase - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={liquidTransition}
            className="flex flex-col items-center text-center space-y-10 group"
          >
            <span className="mono text-[9px] text-[#B59A7D] tracking-[0.6em] block mb-4 uppercase">Stage 03 // The Oblivion</span>
            <h3 className="serif text-5xl md:text-8xl font-light text-[#E8E2D6] group-hover:italic transition-all duration-1000 tracking-tighter">ERASE</h3>
            <div className="w-1/3 fiduciary-line-bronze opacity-20 my-10" />
            <p className="serif text-2xl italic text-[#E8E2D6]/50 leading-relaxed font-light max-w-2xl">
              "Il ritorno al silenzio originario. Protocollo OMEGA: distruzione certificata di ogni traccia digitale entro 48 ore dalla missione."
            </p>
          </motion.div>
        </section>

        {/* Section 4: The Superiority (Legal) - Charcoal Block */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="concierge-spacing"
        >
          <div className="bg-[#121212] p-10 md:p-32 luxury-border border grid grid-cols-1 md:grid-cols-2 gap-32">
            <div className="space-y-12">
              <span className="mono text-[9px] text-[#B59A7D] uppercase tracking-[1em]">Superiorità Legale Europea</span>
              <h2 className="serif text-5xl md:text-7xl font-light leading-tight text-[#E8E2D6]">Vantaggio <br /><span className="italic opacity-70 italic">Fiduciario</span></h2>
              <p className="serif text-xl text-[#E8E2D6]/40 leading-relaxed font-light">
                L'Articolo 1705 del Codice Civile italiano offre una blindatura dell'identità che supera la flessibilità dei trust anglosassoni, garantendo un'interposizione reale e impenetrabile.
              </p>
            </div>
            <div className="space-y-16">
              {[
                { art: 'Art. 1705 C.C.', label: 'Interposizione Reale Senza Rappresentanza' },
                { art: 'Art. 2222 C.C.', label: 'Consulenza Strategica ad Alto Profilo' },
                { art: 'GDPR / OMEGA', label: 'Protocollo di Estinzione Dati Certificata' }
              ].map(item => (
                <div key={item.art} className="border-b border-[#B59A7D]/10 pb-8 flex justify-between items-end group">
                  <div>
                    <p className="text-[#B59A7D] text-2xl serif font-light group-hover:italic transition-all">{item.art}</p>
                    <p className="text-[10px] text-[#E8E2D6]/40 uppercase tracking-[0.4em] font-medium mt-2">{item.label}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full border border-[#B59A7D]/40 group-hover:bg-[#B59A7D] transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: The Final Access - The Call */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
          className="min-h-screen flex flex-col items-center justify-center space-y-24 py-40 text-center"
        >
          <div className="space-y-12">
            <h2 className="serif text-6xl md:text-9xl font-thin tracking-tighter text-[#E8E2D6]">Private Access</h2>
            <p className="serif italic text-2xl md:text-4xl text-[#E8E2D6]/30 max-w-4xl mx-auto leading-relaxed">
              "L'accesso al nostro network è riservato per invito o valutazione di integrità. Iniziate oggi il vostro percorso verso l'invisibilità."
            </p>
          </div>

          <div className="flex flex-col items-center space-y-10">
            <motion.button
              whileHover={{ scale: 1.05, letterSpacing: '0.8em', backgroundColor: '#E8E2D6', color: '#0D0D0D' }}
              onClick={onInitialize}
              className="px-32 py-8 text-[11px] font-semibold uppercase tracking-[0.5em] border border-[#B59A7D]/30 text-[#B59A7D] transition-all duration-1000"
            >
              Inizia Consultazione
            </motion.button>
            <p className="mono text-[8px] uppercase tracking-[0.6em] text-[#B59A7D]/20">
              End-to-End Encryption Enabled • Node: Zurich_Principal
            </p>
          </div>
        </motion.section>

      </div>

      {/* Institutional Footer */}
      <footer className="relative z-10 px-10 md:px-24 py-24 flex flex-col md:flex-row justify-between items-center border-t border-[#B59A7D]/5 bg-[#0A0A0A]/40 backdrop-blur-3xl space-y-10 md:space-y-0">
        <div className="flex items-center space-x-8">
          <div className="w-8 h-[0.5px] bg-[#B59A7D]/40" />
          <span className="mono text-[9px] uppercase tracking-[0.6em] text-[#B59A7D]/50 font-medium">Michael Sergio Jara Lloctun — Principal</span>
        </div>
        <div className="mono text-[8px] text-[#E8E2D6]/10 flex space-x-12 uppercase tracking-[0.3em]">
          <span>SECURE_ID_0xD99A</span>
          <span className="text-[#B59A7D]/20">Establish // Execute // Erase</span>
          <span>© 2026</span>
        </div>
      </footer>

    </div>
  );
};
