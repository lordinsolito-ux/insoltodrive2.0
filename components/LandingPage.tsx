
import React, { useEffect, useRef } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

  // Parallax effects for the intro
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const doorOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.5], [0, 1, 0.2]);
  const doorScale = useTransform(scrollYProgress, [0.2, 0.4], [0.95, 1]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFFFFF] selection:bg-[#C5A059] selection:text-[#0D0D0D]">

      {/* Universal Institutional Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center md:px-24"
      >
        <div className="w-8 h-8 text-[#C5A059]/20 hover:text-[#C5A059]/80 transition-all duration-1000 cursor-pointer">
          {SOLOMON_KNOT}
        </div>
        <div className="flex flex-col items-center">
          <span className="serif text-[9px] uppercase tracking-[0.6em] text-[#C5A059]/40">Michael Sergio Jara Lloctun</span>
        </div>
        <div className="w-10 h-10 flex flex-col justify-center items-end space-y-1.5 cursor-pointer opacity-30 hover:opacity-80 transition-all">
          <div className="w-6 h-[0.5px] bg-[#FFFFFF]" />
          <div className="w-4 h-[0.5px] bg-[#FFFFFF]" />
        </div>
      </motion.nav>

      {/* STAGE 1: THE MANIFESTO (Radical Silence) */}
      <section className="h-[120vh] flex flex-col items-center justify-center relative overflow-hidden px-6">
        <motion.div
          style={{ opacity: opacityFade, y: titleY }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="text-center space-y-10"
        >
          <h1 className="hero-title text-5xl md:text-8xl">
            L’arte del silenzio è l’ultimo vero lusso.
          </h1>
          <motion.div
            style={{ y: subtitleY }}
            className="hero-subtitle"
          >
            Un privilegio concesso esclusivamente a chi ha imparato a esistere senza apparire.
          </motion.div>
        </motion.div>
      </section>

      {/* STAGE 2: THE DOOR (Absolute Void) */}
      <section className="h-screen flex flex-col items-center justify-center relative bg-[#0D0D0D]">
        <motion.div
          style={{ opacity: doorOpacity, scale: doorScale }}
          className="flex flex-col items-center space-y-16"
        >
          <div className="w-16 h-16 text-[#C5A059] opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {SOLOMON_KNOT}
          </div>
          <button
            onClick={onInitialize}
            className="sans-ui text-[11px] text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-all duration-1000 tracking-[1em] border-b border-[#C5A059]/0 hover:border-[#C5A059]/40 pb-2"
          >
            [ ENTRA ]
          </button>
        </motion.div>
      </section>

      {/* THE EMPYREAN (Content Layers) */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

        {/* Section 3: The Concept (Whitespace) */}
        <section className="luxury-spacing flex flex-col items-center justify-center">
          <RevealOnScroll className="max-w-4xl px-8 text-center space-y-24">
            <div className="w-12 h-[0.5px] bg-[#C5A059]/40 mx-auto" />
            <p className="serif italic text-3xl md:text-6xl text-[#C5A059]/90 font-light leading-snug">
              "La trasparenza è l'illusione della sicurezza. La vera libertà d'acquisto nasce dal silenzio assoluto dell'interposizione."
            </p>
            <p className="serif text-xl md:text-2xl text-[#FFFFFF]/40 leading-relaxed font-light max-w-2xl mx-auto">
              InsolitoDrive è l'architettura di interposizione fiduciaria dove ogni transazione è un atto di ingegneria legale dedicato all'élite.
            </p>
          </RevealOnScroll>
        </section>

        {/* Section 4: Vertical Services (Asymmetrical Reveal) */}
        <section className="luxury-spacing">
          <RevealOnScroll className="space-y-40">
            <div className="flex justify-between items-end border-b border-[#FFFFFF]/5 pb-10">
              <h2 className="serif text-4xl md:text-7xl font-thin tracking-tighter">I Protocolli</h2>
              <span className="sans-ui text-[8px] text-[#C5A059]/40 tracking-[0.4em]">Fiduciary Interposition // 1705 C.C.</span>
            </div>

            <div className="flex flex-col border-t border-[#FFFFFF]/10">
              {[
                { id: '01', title: 'The Mandate', desc: 'La nascita della vostra ombra legale. Formalizziamo l\'incarico fiduciario per blindare l\'identità del Beneficial Owner.' },
                { id: '02', title: 'The Execution', desc: 'L\'azione senza traccia. Gestiamo acquisizioni di asset rari in tutto il mondo tramite il nostro Executive Desk fiduciario.' },
                { id: '03', title: 'The Oblivion', desc: 'Il ritorno al silenzio. Protocollo OMEGA: distruzione certificata di ogni record digitale entro 48 ore dalla missione.' }
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

        {/* Section 5: Legal Superiority */}
        <section className="luxury-spacing bg-[#121212] px-10 md:p-32 rounded-sm border border-[#C5A059]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/[0.02] blur-[120px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <RevealOnScroll className="space-y-12">
              <span className="sans-ui text-[9px] text-[#C5A059] tracking-[1em] opacity-60">Superiorità Legale Europea</span>
              <h2 className="serif text-5xl md:text-8xl font-thin leading-none">Il Vantaggio<br />Fiduciario.</h2>
              <p className="serif text-xl md:text-2xl text-[#FFFFFF]/60 leading-relaxed font-light">
                La blindatura offerta dall'ordinamento italiano (Art. 1705 e 2222 C.C.) garantisce un'interposizione reale impenetrabile.
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

        {/* Section 6: Private Access */}
        <section className="luxury-spacing flex flex-col items-center justify-center text-center space-y-24 min-h-[80vh]">
          <RevealOnScroll className="space-y-16">
            <h2 className="serif text-6xl md:text-[140px] font-thin tracking-tighter text-[#FFFFFF] leading-none mb-10">Private Access</h2>
            <p className="serif italic text-2xl md:text-4xl text-[#FFFFFF]/30 max-w-4xl mx-auto leading-relaxed">
              "L'accesso al nostro network è riservato. Ogni collaborazione inizia con una valutazione di integrità."
            </p>
            <div className="pt-20">
              <button
                onClick={onInitialize}
                className="button-luxury"
              >
                Richiedi Credenziali
              </button>
            </div>
            <p className="mono text-[8px] uppercase tracking-[1em] text-[#C5A059]/20 pt-10">
              Zurich_Principal_Connection // Secured
            </p>
          </RevealOnScroll>
        </section>

      </div>

      {/* Footer: Absolute Silence */}
      <footer className="px-10 md:px-24 py-20 flex flex-col md:flex-row justify-between items-center opacity-40 border-t border-[#FFFFFF]/5 bg-[#080808]/50 backdrop-blur-xl">
        <div className="flex items-center space-x-8">
          <div className="w-12 h-[0.5px] bg-[#C5A059]/40" />
          <span className="sans-ui text-[8px] tracking-[0.8em] text-[#C5A059]">Michael Sergio Jara Lloctun — Principal</span>
        </div>
        <div className="mono text-[8px] flex space-x-12 uppercase tracking-[0.4em] text-[#FFFFFF]/40 mt-10 md:mt-0">
          <span>Shield_ID: 0xD99A</span>
          <span>Security Protocol 1.1</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
};
