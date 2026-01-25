
import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface Props {
  onInitialize: () => void;
}

const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  const [ritualComplete, setRitualComplete] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFFFFF] selection:bg-[#C5A059] selection:text-[#0D0D0D]">

      <AnimatePresence mode="wait">
        {!ritualComplete ? (
          /* THE RITUAL: PRE-LANDING INTRO */
          <motion.section
            key="ritual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-[100] bg-[#0D0D0D] flex flex-col items-center justify-center text-center px-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 0.5 }}
              className="space-y-16"
            >
              <div className="space-y-8">
                <h1 className="hero-title text-4xl md:text-7xl leading-tight">
                  L’arte del silenzio è l’ultimo vero lusso.
                </h1>
                <div className="hero-subtitle">
                  Un privilegio concesso esclusivamente a chi ha imparato a esistere senza apparire.
                </div>
              </div>

              <div className="flex flex-col items-center space-y-12 pt-12">
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-12 h-12 text-[#C5A059]/40"
                >
                  {SOLOMON_KNOT}
                </motion.div>

                <button
                  onClick={() => setRitualComplete(true)}
                  className="sans-ui text-[12px] text-[#FFFFFF]/40 hover:text-[#C5A059] transition-all duration-1000 tracking-[1.2em] border-b border-[#C5A059]/0 hover:border-[#C5A059]/40 pb-2"
                >
                  [ ENTRA ]
                </button>
              </div>
            </motion.div>
          </motion.section>
        ) : (
          /* THE REVELATION: FULL LANDING CONTENT */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            {/* Minimalist Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center md:px-24">
              <div className="w-8 h-8 text-[#C5A059]/20">{SOLOMON_KNOT}</div>
              <span className="serif text-[10px] uppercase tracking-[0.6em] text-[#C5A059]/40">Michael Sergio Jara Lloctun</span>
              <div className="w-10 h-10 flex flex-col justify-center items-end space-y-1.5 opacity-30">
                <div className="w-6 h-[0.5px] bg-[#FFFFFF]" />
                <div className="w-4 h-[0.5px] bg-[#FFFFFF]" />
              </div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

              {/* Hero Section of the Landing Page */}
              <section className="h-screen flex flex-col items-center justify-center text-center">
                <RevealOnScroll className="space-y-12">
                  <p className="sans-ui text-[10px] text-[#C5A059]/60">Fiduciary Interposition</p>
                  <h2 className="serif text-6xl md:text-9xl font-thin tracking-tighter leading-none">
                    Invisibilità come <br />
                    <span className="italic opacity-80 decoration-[#C5A059]/20 underline underline-offset-[20px]">Architettura.</span>
                  </h2>
                  <div className="pt-24">
                    <button onClick={onInitialize} className="button-luxury">
                      Richiedi Credenziali
                    </button>
                  </div>
                </RevealOnScroll>
              </section>

              {/* Section 2: The Philosophy */}
              <section className="luxury-spacing border-t border-[#FFFFFF]/5">
                <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-24">
                  <div className="w-12 h-[0.5px] bg-[#C5A059]/40 mx-auto" />
                  <p className="serif italic text-3xl md:text-6xl text-[#C5A059]/90 font-light leading-snug">
                    "La trasparenza è l'illusione della sicurezza. La libertà nasce dal silenzio."
                  </p>
                  <p className="serif text-xl md:text-2xl text-[#FFFFFF]/40 font-light max-w-2xl mx-auto leading-relaxed">
                    InsolitoDrive è l'architettura fiduciaria dove ogni transazione è un atto di ingegneria legale dedicato all'élite.
                  </p>
                </RevealOnScroll>
              </section>

              {/* Section 3: Vertical Services */}
              <section className="luxury-spacing">
                <RevealOnScroll className="space-y-40">
                  <div className="flex justify-between items-end border-b border-[#FFFFFF]/5 pb-10">
                    <h2 className="serif text-4xl md:text-7xl font-thin tracking-tighter">Protocolli</h2>
                    <span className="sans-ui text-[8px] text-[#C5A059]/40 tracking-[0.4em]">1705 C.C. Compliance</span>
                  </div>

                  <div className="flex flex-col border-t border-[#FFFFFF]/10">
                    {[
                      { id: '01', title: 'The Mandate', desc: 'Formalizziamo l\'incarico fiduciario per blindare l\'identità del Beneficial Owner.' },
                      { id: '02', title: 'The Execution', desc: 'Gestiamo acquisizioni di asset rari in tutto il mondo tramite il nostro Executive Desk.' },
                      { id: '03', title: 'The Oblivion', desc: 'Protocollo OMEGA: distruzione certificata di ogni record digitale entro 48 ore.' }
                    ].map(item => (
                      <div key={item.id} className="group border-b border-[#FFFFFF]/10 py-24 cursor-crosshair">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-16">
                            <span className="mono text-[10px] text-[#C5A059]/40 tracking-[0.8em]">{item.id}</span>
                            <h3 className="serif text-4xl md:text-7xl text-[#FFFFFF]/80 group-hover:text-[#C5A059] group-hover:italic transition-all duration-1000 transform group-hover:translate-x-8">
                              {item.title}
                            </h3>
                          </div>
                          <div className="max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-1000 hidden lg:block text-right">
                            <p className="serif text-lg italic text-[#FFFFFF]/40 font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </section>

              {/* Section 4: Legal Superiority */}
              <section className="luxury-spacing bg-[#121212] px-10 md:p-32 rounded-sm border border-[#C5A059]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/[0.02] blur-[120px]" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                  <RevealOnScroll className="space-y-12">
                    <span className="sans-ui text-[9px] text-[#C5A059] tracking-[1em] opacity-60">Superiorità Legale Europa</span>
                    <h2 className="serif text-5xl md:text-8xl font-thin leading-none">Vantaggio <br />Fiduciario.</h2>
                    <p className="serif text-xl md:text-2xl text-[#FFFFFF]/60 leading-relaxed font-light">
                      La blindatura offered dall'ordinamento italiano (Art. 1705 C.C.) garantisce un'interposizione reale impenetrabile.
                    </p>
                  </RevealOnScroll>
                  <RevealOnScroll className="grid grid-cols-1 gap-12 border-l border-[#C5A059]/10 pl-12 md:pl-24">
                    {[
                      { art: 'Art. 1705 C.C.', label: 'Interposizione Reale Senza Rappresentanza' },
                      { art: 'Art. 2222 C.C.', label: 'Servizi Intellettuali d\'Alta Strategia' },
                      { art: 'GDPR / OMEGA', label: 'Diritto Assoluto all\'Oblio Digitale' }
                    ].map(item => (
                      <div key={item.art} className="space-y-2 group">
                        <p className="text-[#C5A059] text-3xl serif font-light group-hover:italic transition-all duration-700">{item.art}</p>
                        <p className="sans-ui text-[9px] text-[#FFFFFF]/30 tracking-[0.4em] uppercase">{item.label}</p>
                      </div>
                    ))}
                  </RevealOnScroll>
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="px-10 md:px-24 py-20 flex flex-col md:flex-row justify-between items-center opacity-40 border-t border-[#FFFFFF]/5 bg-[#080808]/50 mt-40">
              <span className="sans-ui text-[8px] tracking-[0.8em] text-[#C5A059]">Michael Sergio Jara Lloctun — Principal</span>
              <div className="mono text-[8px] flex space-x-12 uppercase tracking-[0.4em] text-[#FFFFFF]/40 mt-10 md:mt-0">
                <span>Shield_ID: 0xD99A</span>
                <span>© 2026</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
