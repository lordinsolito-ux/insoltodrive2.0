
import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Asset Paths (Local)
const ARCH_IMG = "/assets/arch.png";
const WATCH_IMG = "/assets/watch.png";
const SHIELD_IMG = "/assets/shield.png";

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
          /* THE RITUAL: PRE-LANDING INTRO */
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
          /* THE REVELATION: FULL LANDING CONTENT */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center md:px-24">
              <div className="w-8 h-8 text-[#C5A059]/20">{SOLOMON_KNOT}</div>
              <div className="flex space-x-12 opacity-80">
                <a href="#" className="sans-ui text-[10px]">Philosophy</a>
                <a href="#" className="sans-ui text-[10px]">Pillars</a>
                <a href="#" className="sans-ui text-[10px]">Desk</a>
              </div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

              {/* Hero Section: Asymmetrical Editorial */}
              <section className="h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                  <RevealOnScroll className="md:col-span-9 space-y-12">
                    <span className="sans-ui text-[10px] text-[#C5A059]/60 border-l border-[#C5A059]/20 pl-4">Fiduciary Proxy Principal</span>
                    <h2 className="serif text-5xl md:text-[140px] font-thin leading-[0.85] tracking-tighter">
                      Invisibilità come <br />
                      <span className="italic opacity-80 pl-20 md:pl-60">architettura.</span>
                    </h2>
                  </RevealOnScroll>
                  <RevealOnScroll className="md:col-start-10 md:col-span-3 flex flex-col justify-end h-full pb-40">
                    <img src={WATCH_IMG} alt="Luxury Detail" className="w-full grayscale opacity-40 mb-12 hover:grayscale-0 transition-all duration-1000" />
                    <button onClick={onInitialize} className="button-luxury w-full text-center">
                      Inizia Protocollo
                    </button>
                  </RevealOnScroll>
                </div>
              </section>

              {/* Section: Fiduciary Interposition (The Shield Concept) */}
              <section className="py-64 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
                  <div className="md:col-span-5 space-y-16 relative">
                    {/* Vertical Gold Line */}
                    <div className="absolute -left-10 top-0 bottom-0 w-[0.5px] bg-[#C5A059]/40" />

                    <RevealOnScroll className="space-y-10">
                      <span className="sans-ui text-[10px] text-[#C5A059] tracking-[0.8em]">The Shield Concept</span>
                      <p className="serif text-3xl md:text-5xl text-[#FFFFFF]/90 font-light leading-[1.3] text-justify md:text-left">
                        "L'Interposizione Fiduciaria non è uno strumento, è uno scudo. Agiamo nell'ombra per proteggere la luce dei vostri interessi. In un mondo che esige trasparenza totale, noi garantiamo l'unico vero privilegio rimasto: l'invisibilità strategica."
                      </p>
                    </RevealOnScroll>
                  </div>
                  <div className="md:col-start-7 md:col-span-5 flex flex-col justify-center pt-24 md:pt-0">
                    <img src={ARCH_IMG} alt="Minimalist Luxury" className="w-full opacity-30 grayscale hover:opacity-100 transition-all duration-2000" />
                  </div>
                </div>
              </section>

              {/* Section: Pillars of Excellence */}
              <section className="py-64">
                <RevealOnScroll className="max-w-6xl">
                  <h2 className="serif text-4xl md:text-8xl font-thin tracking-tighter mb-24">I Pilastri</h2>

                  <div className="flex flex-col border-t border-[#FFFFFF]/5">
                    {[
                      {
                        id: '01',
                        title: 'Strategic Anonymity',
                        subtitle: 'Gestione dell\'identità e protezione dei flussi informativi.',
                        desc: 'Il diritto di operare globalmente senza lasciare impronte. Architettiamo strutture di interposizione che rendono la vostra presenza un\'opzione, mai una necessità.'
                      },
                      {
                        id: '02',
                        title: 'Asset Safeguard',
                        subtitle: 'Strutture fiduciarie per la detenzione di beni di alto valore.',
                        desc: 'Protezione assoluta per patrimoni tangibili e intangibili. Ogni asset viene blindato sotto uno scudo di interposizione reale che ne occulta il Beneficial Owner.'
                      },
                      {
                        id: '03',
                        title: 'Invisible Negotiation',
                        subtitle: 'Rappresentanza in contesti d\'acquisizione dove il vostro nome è l\'unico dato sensibile.',
                        desc: 'Operiamo come proxy nelle trattative più delicate. Il vostro intento rimane intatto, la vostra identità rimane inaccessibile.'
                      }
                    ].map(item => (
                      <div key={item.id} className="service-block group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between">
                          <div className="space-y-4">
                            <span className="service-number">{item.id}</span>
                            <h3 className="service-title">{item.title}</h3>
                            <p className="sans-ui text-[10px] text-[#FFFFFF]/30 tracking-widest">{item.subtitle}</p>
                            <p className="service-description">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </section>

              {/* Section: Legal Superiority (Asymmetrical Block) */}
              <section className="py-32 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center bg-[#121212]/50 p-10 md:p-32 border border-[#FFFFFF]/5">
                  <RevealOnScroll className="lg:col-span-7 space-y-12">
                    <span className="sans-ui text-[10px] text-[#C5A059] tracking-[1em] opacity-60">Superiorità Legale Europa</span>
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

            {/* Final Call to Action */}
            <section className="py-64 flex flex-col items-center justify-center text-center space-y-24 min-h-[100vh]">
              <RevealOnScroll className="space-y-20 relative px-10">
                <img src={SHIELD_IMG} alt="Security Seal" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-[0.03] pointer-events-none" />
                <h2 className="serif text-6xl md:text-[180px] font-thin tracking-tighter text-[#FFFFFF] leading-none mb-10">Private Access</h2>
                <p className="serif italic text-2xl md:text-4xl text-[#FFFFFF]/20 max-w-4xl mx-auto leading-relaxed">
                  "L'accesso al nostro network è riservato agli eletti del patrimonio. Ogni collaborazione inizia con una valutazione di integrità."
                </p>
                <div className="pt-24 scale-125">
                  <button onClick={onInitialize} className="button-luxury px-32">
                    Accesso Desk
                  </button>
                </div>
              </RevealOnScroll>
            </section>

            {/* Footer: The Absolute Silence Signature */}
            <footer className="footer-whisper px-10 md:px-24 py-32 flex flex-col md:flex-row justify-between items-center opacity-30 border-t border-[#FFFFFF]/5">
              <div className="sans-ui">Principal Michael Sergio Jara Lloctun</div>
              <div className="flex space-x-12 text-[#C5A059]/20 my-10 md:my-0">
                {SOLOMON_KNOT}
              </div>
              <div className="mono opacity-60">
                <span>Shield_ID: 0xD99A • © 2026</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
