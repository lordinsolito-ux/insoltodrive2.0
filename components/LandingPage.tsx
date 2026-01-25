import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import IntroSplash from './IntroSplash';

// Asset Paths (Local)
const ARCH_IMG = "/assets/arch.png";
const WATCH_IMG = "/assets/watch.png";
const SHIELD_IMG = "/assets/shield.png";
const FOUNDER_IMG = "/assets/michael.jpg";

interface Props {
  onInitialize: () => void;
}

const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
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
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  const [ritualComplete, setRitualComplete] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const { scrollYProgress } = useScroll();

  // Founder Focus Logic
  const founderRef = useRef(null);
  const isFounderInView = useInView(founderRef, { amount: 0.2 });

  useEffect(() => {
    // Generate an Imperial Session ID
    const refId = `REF-${Math.floor(Math.random() * 9000 + 1000)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
    setSessionId(refId);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-[2000ms] ease-in-out ${isFounderInView ? 'bg-[#060606]' : 'bg-[#0D0D0D]'} text-[#FFFFFF] selection:bg-[#B59A7D] selection:text-[#0D0D0D]`}>

      <AnimatePresence mode="wait">
        {!ritualComplete ? (
          <IntroSplash key="ritual" onFinish={() => setRitualComplete(true)} />
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
                <a href="#essence" className="sans-ui text-[10px]">L'Essenza</a>
                <a href="#founder" className="sans-ui text-[10px]">Il Fondatore</a>
                <a href="#expertise" className="sans-ui text-[10px]">Competenze</a>
                <a href="#access" className="sans-ui text-[10px] text-[#C5A059]">Accesso Privato</a>
              </div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

              {/* Hero Section: Asymmetric & Authority-Driven */}
              <section className="min-h-screen flex flex-col justify-center py-80">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                  <RevealOnScroll className="md:col-span-12 space-y-16">
                    <div className="flex items-center space-x-10 mb-8 overflow-hidden">
                      <span className="sans-ui text-[9px] text-[#C5A059] tracking-[1em] whitespace-nowrap">PRIVATO • ASSOLUTO • FIDUCIARIO</span>
                      <div className="w-screen h-[0.5px] bg-[#C5A059]/20" />
                    </div>
                    <h2 className="serif text-7xl md:text-[180px] font-thin leading-[0.8] tracking-tighter max-w-5xl">
                      L’arte del<br />
                      <span className="italic opacity-30 pl-20 md:pl-40">silenzio.</span>
                    </h2>
                    <div className="max-w-xl md:pl-40 pt-10">
                      <p className="serif text-xl md:text-2xl text-[#FFFFFF]/40 font-light leading-relaxed">
                        Progettiamo silenzi strategici per chi non ha più bisogno di gridare la propria presenza.
                      </p>
                    </div>
                  </RevealOnScroll>

                  {/* Absolute Asymmetry: The empty right-side is intentional whitespace */}
                </div>

                <RevealOnScroll className="mt-32 flex justify-start md:pl-40" delay={0.6}>
                  <a href="#access" className="button-luxury">
                    [ RICHIESTA ACCESSO ]
                  </a>
                </RevealOnScroll>
              </section>

              {/* Section: L'Essenza (Editorial Layout) */}
              <section id="essence" className="py-80 relative min-h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-32 items-start">
                  <div className="md:col-start-1 md:col-span-7 space-y-24">
                    <RevealOnScroll className="space-y-16">
                      <div className="space-y-6">
                        <span className="sans-ui text-[9px] text-[#C5A059]/40 tracking-[1em]">MANIFESTO</span>
                        <h2 className="serif text-5xl md:text-9xl font-thin tracking-tighter leading-none">Custodi del<br />Silenzio.</h2>
                      </div>
                      <div className="bg-[#FFFFFF]/5 w-24 h-[1px]" />
                      <p className="serif text-2xl md:text-4xl text-[#F4F4F2] leading-[1.2] font-light max-w-2xl">
                        "Siamo il filtro tra la vostra ambizione e lo sguardo del mondo."
                      </p>
                      <p className="serif text-lg md:text-xl text-[#F4F4F2]/40 leading-relaxed font-light max-w-xl indent-16">
                        In un'era di sovraesposizione, l'unico vero atto di potere è decidere chi può vedervi. Gestiamo l'interposizione fiduciaria non come un servizio tecnico, ma come un'opera d'arte negoziale.
                      </p>
                    </RevealOnScroll>
                  </div>

                  <div className="md:col-start-9 md:col-span-4 self-end pb-20">
                    <RevealOnScroll className="space-y-12">
                      <img src={ARCH_IMG} alt="Minimal Architecture" className="w-full grayscale contrast-125 opacity-20 hover:opacity-50 transition-opacity duration-1000" />
                      <p className="serif italic text-base text-[#FFFFFF]/30 leading-relaxed max-w-xs">
                        L'architettura del silenzio richiede precisione millimetrica e un'assoluta lealtà al Principale.
                      </p>
                    </RevealOnScroll>
                  </div>
                </div>
              </section>

              {/* Section: Il Fondatore (Michael Jara) - High Authority Visuals */}
              <section id="founder" ref={founderRef} className="py-80 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
                  <div className="md:col-start-1 md:col-span-6 z-10">
                    <RevealOnScroll className="space-y-16">
                      <div className="space-y-6">
                        <span className="sans-ui text-[9px] text-[#C5A059]/40 tracking-[1em]">IL FONDATORE</span>
                        <h2 className="serif text-6xl md:text-[140px] font-thin tracking-tighter leading-[0.8]">Michael<br />Jara.</h2>
                      </div>

                      <div className="space-y-10 max-w-lg md:pl-20 border-l border-[#FFFFFF]/5">
                        <p className="serif text-xl text-[#FFFFFF]/60 leading-relaxed font-light">
                          "Il vero asset competitivo non è ciò che mostri, ma ciò che scegli di proteggere."
                        </p>
                        <p className="serif text-base text-[#FFFFFF]/30 leading-relaxed font-light">
                          Michael Jara ha ridefinito la gestione dell'identità per Principal di alto profilo. Fondatore di InsolitoDrive, opera come architetto di strategie d'ombra, garantendo che il prestigio resti intatto, proteggendo il Principal dall'entropia dell'attenzione pubblica.
                        </p>
                      </div>
                    </RevealOnScroll>
                  </div>

                  <div className="md:col-start-7 md:col-span-6 relative mt-40 md:mt-0">
                    <RevealOnScroll>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={FOUNDER_IMG}
                          alt="Michael Jara - Vision"
                          className="w-full h-full object-cover grayscale contrast-150 brightness-50 hover:brightness-75 transition-all duration-[3000ms] scale-110 hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent" />
                      </div>
                    </RevealOnScroll>
                    <div className="absolute -bottom-10 -left-10 md:hidden block">
                      <p className="sans-ui text-[8px] text-[#C5A059] vertical-text tracking-[1em]">M. JARA</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Domini di Competenza (Strategic Expertise) */}
              <section id="expertise" className="py-64 relative min-h-screen flex flex-col justify-center">
                <div className="max-w-6xl mx-auto w-full">
                  <RevealOnScroll className="mb-40 text-center">
                    <h2 className="serif text-4xl md:text-8xl font-thin tracking-tighter">Domini di Competenza.</h2>
                    <p className="sans-ui text-[11px] text-[#C5A059] tracking-[1.2em] mt-8">ALTA CHIRURGIA STRATEGICA</p>
                  </RevealOnScroll>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { id: 'I', title: 'Identità Architetturale', body: 'Costruzione di figure pubbliche o private con profondità strategica e protezione dell\'essenza reale.' },
                      { id: 'II', title: 'Interposizione Fiduciaria', body: 'Schermatura completa di interessi patrimoniali e transazioni attraverso protocolli di discrezione assoluta.' },
                      { id: 'III', title: 'Diplomazia del Silenzio', body: 'Gestione di crisi reputazionali e negoziazioni ad alto rischio dove l\'assenza di rumore è il primo requisito.' },
                      { id: 'IV', title: 'Ingegneria Navale & Yachting', body: 'Supporto tecnico e burocratico per l\'acquisizione e la gestione di asset marittimi di prestigio mondiale.' },
                      { id: 'V', title: 'Strategic Intelligence', body: 'Analisi predittiva e intelligence privata per la tutela dell\'integrità fisica e digitale del Principal.' },
                      { id: 'VI', title: 'Crisis Shielding', body: 'Protocolli di emergenza per la neutralizzazione immediata di minacce reputazionali e operative.' }
                    ].map((item, index) => (
                      <RevealOnScroll
                        key={item.id}
                        delay={index * 0.15}
                        className="expertise-card"
                      >
                        <div className="roman-number">{item.id}</div>
                        <div className="space-y-6 relative z-10">
                          <h3 className="serif text-2xl md:text-3xl font-light text-[#FFFFFF]/90 leading-tight">{item.title}</h3>
                          <p className="serif text-base text-[#FFFFFF]/40 font-light leading-relaxed">
                            {item.body}
                          </p>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>

                  <RevealOnScroll className="mt-40 text-center" delay={0.8}>
                    <p className="serif italic text-xl md:text-2xl text-[#FFFFFF]/30 font-light max-w-2xl mx-auto border-t border-[#FFFFFF]/5 pt-12">
                      "La discrezione non è un limite all'azione, ma un moltiplicatore di potere."
                    </p>
                  </RevealOnScroll>
                </div>
              </section>

              {/* Section: Accesso Privato (The Portal) */}
              <section id="access" className="py-64 min-h-screen flex flex-col justify-center relative overflow-hidden">
                <motion.div
                  style={{ opacity: 0.05 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden"
                >
                  <img src={SHIELD_IMG} alt="Shield Watermark" className="w-full h-full object-contain scale-150 rotate-12" />
                </motion.div>

                <div className="max-w-4xl mx-auto w-full text-center space-y-24 relative z-10 px-6">
                  <RevealOnScroll className="space-y-12">
                    <div className="space-y-6">
                      <h2 className="serif text-6xl md:text-9xl font-thin tracking-tighter">L’inizio del silenzio.</h2>
                      <p className="sans-ui text-[11px] text-[#C5A059] tracking-[1.2em]">RICHIESTA DI ACCESSO AI SERVIZI FIDUCIARI</p>
                    </div>
                    <p className="serif italic text-xl md:text-2xl text-[#FFFFFF]/30 font-light max-w-2xl mx-auto leading-relaxed">
                      "La nostra selezione è rigorosa quanto la nostra discrezione. Ogni nuova alleanza inizia con un dialogo riservato. Inserite un riferimento; sarete ricontattati attraverso i canali più consoni alla vostra posizione."
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll className="w-full max-w-xl mx-auto mt-20">
                    <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-12">
                        <div className="group">
                          <label className="sans-ui text-[8px] text-[#FFFFFF]/30 block text-left mb-2 tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">Nome o Riferimento Identificativo</label>
                          <input type="text" placeholder="NOME O RIFERIMENTO IDENTIFICATIVO" className="portal-input" />
                        </div>
                        <div className="group">
                          <label className="sans-ui text-[8px] text-[#FFFFFF]/30 block text-left mb-2 tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">Canale di Comunicazione Preferito</label>
                          <input type="text" placeholder="CANALE DI COMUNICAZIONE PREFERITO (EMAIL / CRIPTATO)" className="portal-input" />
                        </div>
                        <div className="group">
                          <label className="sans-ui text-[8px] text-[#FFFFFF]/30 block text-left mb-2 tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">Natura della Richiesta</label>
                          <textarea rows={2} placeholder="NATURA DELLA RICHIESTA (BREVE ACCENNO)" className="portal-input resize-none" />
                        </div>
                      </div>

                      <div className="pt-16 space-y-10">
                        <button className="button-luxury w-full group overflow-hidden relative">
                          <span className="relative z-10">Sottoponi alla Direzione</span>
                        </button>
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-12 h-[0.5px] bg-[#C5A059]/20" />
                          <p className="mono text-[8px] text-[#FFFFFF]/20 tracking-[0.6em]">RECEPTION_MODULE_ACTIVE // NO_TRACE_LOG_V1</p>
                          <p className="mono text-[9px] text-[#C5A059]/40 tracking-[0.4em] font-bold">{sessionId}</p>
                        </div>
                      </div>
                    </form>
                  </RevealOnScroll>
                </div>
              </section>

            </div>

            {/* Footer: The Absolute Silence Signature */}
            <footer className="px-10 md:px-24 py-32 flex flex-col md:flex-row justify-between items-center opacity-30 border-t border-[#FFFFFF]/5 bg-[#060606]">
              <div className="sans-ui text-[9px] tracking-[0.8em] text-[#C5A059]">Michael Sergio Jara Lloctun — Private Principal</div>
              <div className="flex space-x-12 text-[#C5A059]/20 my-10 md:my-0">
                {SOLOMON_KNOT}
              </div>
              <div className="mono text-[10px] opacity-60">
                <span>Shield_ID: 0xD99A • © 2026</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
