
import React, { useEffect, useRef } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFFFFF] selection:bg-[#C5A059] selection:text-[#0D0D0D]">

      {/* Absolute Minimalism Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center px-10 md:px-24">
        <div className="w-8 h-8 text-[#C5A059]/40">{SOLOMON_KNOT}</div>
        <div className="flex flex-col items-center">
          <span className="serif text-[10px] uppercase tracking-[0.5em] text-[#C5A059]">Insolito Drive</span>
        </div>
        <button className="sans-ui text-[10px] text-[#FFFFFF]/40 hover:text-[#C5A059] transition-all">
          Menu
        </button>
      </nav>

      {/* Hero Section: The Impression */}
      <motion.section
        style={{ opacity }}
        className="h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <RevealOnScroll className="space-y-12">
          <p className="sans-ui text-[9px] text-[#C5A059]/80 mb-6">Michael Sergio Jara Lloctun — Principal</p>
          <h1 className="serif text-6xl md:text-[110px] font-thin leading-none tracking-tighter">
            Invisibilità come Architettura di<br />
            <span className="italic opacity-80 serif">Puro Potere.</span>
          </h1>
          <div className="pt-16">
            <button
              onClick={onInitialize}
              className="button-luxury"
            >
              Inizia Protocollo
            </button>
          </div>
        </RevealOnScroll>
      </motion.section>

      {/* Section 2: The Concept (Centered whitespace) */}
      <section className="luxury-spacing flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 w-full h-[0.5px] bg-[#FFFFFF]/10" />
        <RevealOnScroll className="max-w-4xl px-8 text-center space-y-20">
          <p className="serif italic text-3xl md:text-5xl text-[#C5A059]/90 font-light leading-relaxed">
            "La trasparenza è l'illusione della sicurezza. La vera libertà d'acquisto nasce dal silenzio assoluto dell'interposizione."
          </p>
          <div className="w-20 h-[0.5px] bg-[#C5A059]/40 mx-auto" />
          <p className="serif text-xl md:text-2xl text-[#FFFFFF]/60 leading-relaxed font-light max-w-2xl mx-auto">
            Operiamo nell'ombra per proteggere la vostra luce. InsolitoDrive è il punto di interposizione fiduciaria dove ogni transazione è un atto di ingegneria legale dedicato all'élite.
          </p>
        </RevealOnScroll>
        <div className="absolute bottom-0 w-full h-[0.5px] bg-[#FFFFFF]/10" />
      </section>

      {/* Section 3: The Services (Vertical Reveal List) */}
      <section className="luxury-spacing px-10 md:px-24">
        <RevealOnScroll className="space-y-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="serif text-5xl md:text-8xl font-thin tracking-tighter">I Pilastri</h2>
            <span className="sans-ui text-[9px] text-[#C5A059]/40 border-b border-[#C5A059]/20 pb-2">Art. 1705 C.C. Compliance</span>
          </div>

          <div className="flex flex-col border-t border-[#FFFFFF]/10">
            {[
              { id: '01', title: 'The Mandate', desc: 'La nascita della vostra ombra legale. Formalizziamo l\'incarico fiduciario per blindare l\'identità del Beneficial Owner.' },
              { id: '02', title: 'The Proxy', desc: 'L\'azione senza traccia. Gestiamo acquisizioni di asset rari in tutto il mondo tramite il nostro Executive Desk fiduciario.' },
              { id: '03', title: 'The Oblivion', desc: 'Il ritorno al silenzio. Protocollo OMEGA: distruzione certificata di ogni record digitale entro 48 ore dalla missione.' }
            ].map(item => (
              <div key={item.id} className="group border-b border-[#FFFFFF]/10 py-20 cursor-crosshair">
                <div className="flex justify-between items-center overflow-hidden">
                  <div className="flex items-center space-x-12">
                    <span className="mono text-[10px] text-[#C5A059]/40 font-bold tracking-widest">{item.id}</span>
                    <h3 className="serif text-4xl md:text-6xl text-[#FFFFFF]/80 group-hover:text-[#C5A059] group-hover:italic transition-all duration-1000 group-hover:translate-x-10 transform">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-0 group-hover:w-full max-w-md transition-all duration-1000 opacity-0 group-hover:opacity-100 pr-10 hidden md:block">
                    <p className="serif text-lg italic text-[#FFFFFF]/40 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* Mobile Desc (Always visible but subtle) */}
                <p className="md:hidden mt-10 serif italic text-[#FFFFFF]/30 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* Section 4: The Principal (Superiorità Legale) */}
      <section className="luxury-spacing bg-[#121212] px-10 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <RevealOnScroll className="space-y-12">
            <span className="sans-ui text-[9px] text-[#C5A059] tracking-[1em]">Superiorità Legale Europa</span>
            <h2 className="serif text-5xl md:text-7xl font-thin leading-tight">Il Vantaggio<br />Fiduciario.</h2>
            <p className="serif text-xl text-[#FFFFFF]/60 leading-relaxed font-light">
              La blindatura offerta dall'ordinamento italiano (Art. 1705 e 2222 C.C.) garantisce un'interposizione reale e impenetrabile, superiore a qualsiasi modello anglosassone.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="grid grid-cols-1 gap-12 border-l border-[#C5A059]/10 pl-12 md:pl-24">
            {[
              { art: 'Art. 1705 C.C.', label: 'Interposizione Reale Senza Rappresentanza' },
              { art: 'Art. 2222 C.C.', label: 'Servizi Intellettuali d\'Alta Strategia' },
              { art: 'GDPR / OMEGA', label: 'Diritto Assoluto all\'Oblio Digitale' }
            ].map(item => (
              <div key={item.art} className="space-y-2 group">
                <p className="text-[#C5A059] text-2xl serif font-light group-hover:italic transition-all duration-700">{item.art}</p>
                <p className="sans-ui text-[9px] text-[#FFFFFF]/30 tracking-widest">{item.label}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 5: The Final Access (Minimalist Call) */}
      <section className="luxury-spacing flex flex-col items-center justify-center text-center space-y-24 px-6 min-h-[80vh]">
        <RevealOnScroll className="space-y-16">
          <h2 className="serif text-6xl md:text-9xl font-thin tracking-tighter">Private Access</h2>
          <p className="serif italic text-2xl md:text-3xl text-[#FFFFFF]/30 max-w-3xl mx-auto leading-relaxed">
            "Ogni collaborazione inizia con una valutazione di integrità. L'accesso al nostro network è riservato agli eletti del patrimonio."
          </p>
          <div className="pt-12">
            <button
              onClick={onInitialize}
              className="button-luxury"
            >
              Inizia Valutazione
            </button>
          </div>
          <p className="mono text-[8px] uppercase tracking-[0.8em] text-[#C5A059]/30 pt-10">
            Secured Fiduciary Connection • Est. 2026
          </p>
        </RevealOnScroll>
      </section>

      {/* Footer: Absolute Silence */}
      <footer className="px-10 md:px-24 py-16 flex flex-col md:flex-row justify-between items-center opacity-30 border-t border-[#FFFFFF]/5">
        <span className="sans-ui text-[8px] tracking-[0.6em] text-[#C5A059]">Michael Sergio Jara Lloctun — Principal</span>
        <div className="mono text-[8px] flex space-x-12 uppercase tracking-widest mt-10 md:mt-0">
          <span>Shield_ID: 0xD99A</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
};
