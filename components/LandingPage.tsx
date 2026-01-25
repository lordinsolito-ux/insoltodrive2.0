
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
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFFFFF] selection:bg-[#B59A7D] selection:text-[#0D0D0D]">

      <AnimatePresence mode="wait">
        {!ritualComplete ? (
          /* THE RITUAL: PRE-LANDING INTRO (STILL ASYMMETRICAL) */
          <motion.section
            key="ritual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-[100] bg-[#0D0D0D] flex flex-col items-center justify-center px-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 0.5 }}
              className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10"
            >
              <div className="md:col-span-8 md:text-left space-y-12">
                <h1 className="hero-title text-5xl md:text-8xl">
                  L’arte del silenzio è l’ultimo vero lusso.
                </h1>
                <div className="hero-subtitle">
                  Un privilegio concesso esclusivamente a chi ha imparato a esistere senza apparire.
                </div>
              </div>

              <div className="md:col-start-10 md:col-span-3 flex flex-col items-center md:items-end justify-center space-y-16 pt-20 md:pt-0">
                <motion.div
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-16 h-16 text-[#C5A059]/30"
                >
                  {SOLOMON_KNOT}
                </motion.div>
                <button
                  onClick={() => setRitualComplete(true)}
                  className="button-luxury"
                >
                  [ ENTRA ]
                </button>
              </div>
            </motion.div>
          </motion.section>
        ) : (
          /* THE REVELATION: FULL LANDING CONTENT (EDITORIAL LAYOUT) */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            {/* Minimalist Aristocratic Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center md:px-24">
              <div className="w-8 h-8 text-[#C5A059]/20">{SOLOMON_KNOT}</div>
              <div className="flex space-x-12 opacity-80">
                <a href="#" className="sans-ui">Philosophy</a>
                <a href="#" className="sans-ui">Protocols</a>
                <a href="#" className="sans-ui">Legal</a>
              </div>
              <div className="sans-ui text-[10px] opacity-40 hidden md:block">Michael Sergio Jara Lloctun</div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

              {/* Hero Section: Asymmetrical Editorial */}
              <section className="h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                  <RevealOnScroll className="md:col-span-9 space-y-12">
                    <span className="sans-ui text-[10px] text-[#C5A059]/60 border-l border-[#C5A059]/20 pl-4">Fiduciary Proxy Principal</span>
                    <h2 className="serif text-6xl md:text-[140px] font-thin leading-[0.85] tracking-tighter">
                      Invisibilità come <br />
                      <span className="italic opacity-80 pl-20 md:pl-60">architettura.</span>
                    </h2>
                  </RevealOnScroll>
                  <RevealOnScroll className="md:col-start-10 md:col-span-3 flex flex-col justify-end h-full pb-40">
                    <p className="serif italic text-xl text-[#FFFFFF]/30 mb-12 leading-relaxed">
                      Un sistema di interposizione legale dedicato all'eccellenza.
                    </p>
                    <button onClick={onInitialize} className="button-luxury w-full text-center">
                      Inizia Protocollo
                    </button>
                  </RevealOnScroll>
                </div>
              </section>

              {/* Section 2: The Philosophy (Meaningful Void) */}
              <section className="luxury-spacing relative">
                <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFFFFF]/5 to-transparent" />
                <RevealOnScroll className="max-w-5xl mx-auto py-20 text-center space-y-24">
                  <p className="serif italic text-3xl md:text-6xl text-[#C5A059]/90 font-light leading-snug">
                    "La trasparenza è l'illusione della sicurezza. La vera libertà d'acquisto nasce dal silenzio assoluto dell'interposizione."
                  </p>
                  <p className="serif text-xl md:text-2xl text-[#FFFFFF]/30 font-light max-w-2xl mx-auto leading-relaxed">
                    InsolitoDrive è l'architettura fiduciaria dove ogni transazione è un atto di ingegneria legale dedicato all'élite.
                  </p>
                </RevealOnScroll>
                <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFFFFF]/5 to-transparent" />
              </section>

              {/* Section 3: Protocols (Vertical Editorial List) */}
              <section className="luxury-spacing">
                <RevealOnScroll className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <div className="md:col-span-4 space-y-6">
                    <h2 className="serif text-4xl md:text-8xl font-thin tracking-tighter">Protocolli</h2>
                    <p className="sans-ui text-[10px] text-[#C5A059]/40 tracking-[0.4em] pt-6">1705 C.C. Compliance</p>
                  </div>

                  <div className="md:col-start-6 md:col-span-7 flex flex-col border-t border-[#FFFFFF]/10 mt-20 md:mt-0">
                    {[
                      { id: '01', title: 'The Mandate', desc: 'Formalizziamo l\'incarico fiduciario per blindare l\'identità del Beneficial Owner.' },
                      { id: '02', title: 'The Execution', desc: 'Gestiamo acquisizioni di asset rari in tutto il mondo tramite il nostro Executive Desk.' },
                      { id: '03', title: 'The Oblivion', desc: 'Protocollo OMEGA: distruzione certificata di ogni record digitale entro 48 ore.' }
                    ].map(item => (
                      <div key={item.id} className="group border-b border-[#FFFFFF]/10 py-16 cursor-crosshair">
                        <div className="flex justify-between items-start">
                          <div className="space-y-4">
                            <span className="mono text-[9px] text-[#C5A059]/40 tracking-[0.8em]">{item.id}</span>
                            <h3 className="serif text-4xl md:text-7xl text-[#FFFFFF]/80 group-hover:text-[#C5A059] group-hover:italic transition-all duration-1000 transform group-hover:translate-x-12">
                              {item.title}
                            </h3>
                          </div>
                          <div className="max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-1000 hidden lg:block text-right pt-20">
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

              {/* Section 4: Legal Superiority (Asymmetrical Block) */}
              <section className="luxury-spacing relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center bg-[#121212]/50 p-10 md:p-32 border border-[#FFFFFF]/5">
                  <RevealOnScroll className="lg:col-span-7 space-y-12">
                    <span className="sans-ui text-[10px] text-[#C5A059] tracking-[1em] opacity-60">Superiorità Legale Europea</span>
                    <h2 className="serif text-5xl md:text-9xl font-thin leading-none tracking-tighter">Vantaggio <br />Fiduciario.</h2>
                    <p className="serif text-2xl text-[#FFFFFF]/40 leading-relaxed font-light max-w-xl">
                      La blindatura offered dall'ordinamento italiano (Art. 1705 C.C.) garantisce un'interposizione reale impenetrabile.
                    </p>
                  </RevealOnScroll>
                  <RevealOnScroll className="lg:col-start-9 lg:col-span-4 grid grid-cols-1 gap-16 border-l border-[#C5A059]/10 pl-12 md:pl-20">
                    {[
                      { art: 'Art. 1705 C.C.', label: 'Interposizione Reale Senza Rappresentanza' },
                      { art: 'Art. 2222 C.C.', label: 'Servizi Intellettuali d\'Alta Strategia' },
                      { art: 'GDPR / OMEGA', label: 'Diritto Assoluto all\'Oblio Digitale' }
                    ].map(item => (
                      <div key={item.art} className="space-y-4 group">
                        <p className="text-[#C5A059] text-3xl serif font-light group-hover:italic transition-all duration-700">{item.art}</p>
                        <p className="sans-ui text-[10px] text-[#FFFFFF]/30 tracking-[0.4em] uppercase">{item.label}</p>
                      </div>
                    ))}
                  </RevealOnScroll>
                </div>
              </section>
            </div>

            {/* Final Call to Action (Centered Absolute Minimalism) */}
            <section className="luxury-spacing flex flex-col items-center justify-center text-center space-y-24 min-h-[90vh]">
              <RevealOnScroll className="space-y-20">
                <h2 className="serif text-6xl md:text-[160px] font-thin tracking-tighter text-[#FFFFFF] leading-none mb-10 translate-y-[-20px]">Private Access</h2>
                <div className="w-32 h-[1px] bg-[#C5A059]/20 mx-auto" />
                <p className="serif italic text-2xl md:text-4xl text-[#FFFFFF]/20 max-w-4xl mx-auto leading-relaxed px-10">
                  "L'accesso al nostro network è riservato agli eletti del patrimonio. Ogni collaborazione inizia con una valutazione di integrità."
                </p>
                <div className="pt-24">
                  <button
                    onClick={onInitialize}
                    className="button-luxury px-32"
                  >
                    Richiedi Credenziali
                  </button>
                </div>
              </RevealOnScroll>
            </section>

            {/* Footer: The Absolute Silence Signature */}
            <footer className="px-10 md:px-24 py-32 grid grid-cols-1 md:grid-cols-3 items-center opacity-40 border-t border-[#FFFFFF]/5 bg-[#080808]/80">
              <div className="sans-ui text-[9px] tracking-[0.8em] text-[#C5A059] mb-10 md:mb-0">
                Principal Michael Sergio Jara Lloctun
              </div>
              <div className="flex justify-center space-x-12 text-[#C5A059]/30">
                {SOLOMON_KNOT}
              </div>
              <div className="mono text-[8px] flex justify-end space-x-12 uppercase tracking-[0.4em] text-[#FFFFFF]/40 mt-10 md:mt-0">
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
