
import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

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
                <a href="#essence" className="sans-ui text-[10px]">L'Essenza</a>
                <a href="#founder" className="sans-ui text-[10px]">Il Fondatore</a>
                <a href="#expertise" className="sans-ui text-[10px]">Competenze</a>
                <a href="#access" className="sans-ui text-[10px] text-[#C5A059]">Accesso Privato</a>
              </div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-10 md:px-24">

              {/* Hero Section */}
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
                    <img src={WATCH_IMG} alt="Luxury Detail" className="w-full grayscale opacity-40 mb-12 hover:grayscale-0 transition-all duration-1000" />
                    <a href="#access" className="button-luxury w-full text-center block">
                      Richiedi Protocollo
                    </a>
                  </RevealOnScroll>
                </div>
              </section>

              {/* Section: L'Essenza (About) */}
              <section id="essence" className="py-64 relative min-h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
                  <div className="md:col-start-2 md:col-span-6 space-y-16">
                    <RevealOnScroll className="space-y-12">
                      <h2 className="serif text-4xl md:text-8xl font-thin tracking-tighter leading-none">Architetti del Silenzio.<br />Custodi del Vostro Nome.</h2>
                      <p className="serif text-xl md:text-2xl text-[#F4F4F2]/80 leading-relaxed font-light indent-12 max-w-xl">
                        "Non siamo una struttura di consulenza ordinaria. Siamo il filtro tra la vostra ambizione e lo sguardo del mondo. Fondata sul principio dell’interposizione fiduciaria assoluta, la nostra boutique opera dove il prestigio incontra la necessità di una riservatezza senza compromessi."
                      </p>
                      <p className="serif text-lg md:text-xl text-[#F4F4F2]/40 leading-relaxed font-light max-w-xl">
                        Non gestiamo semplicemente asset; proteggiamo la libertà di possederli senza l'onere di doverli mostrare. La nostra missione è rendere invisibile la complessità, lasciando a voi solo il controllo totale, dietro le quinte.
                      </p>
                    </RevealOnScroll>
                  </div>

                  <div className="md:col-start-9 md:col-span-3 space-y-16 pt-24 md:pt-0">
                    <RevealOnScroll className="grid grid-cols-1 gap-12 border-l border-[#C5A059]/20 pl-8">
                      {[
                        { title: 'Discrezione Radicale', body: 'Ciò che accade all\'interno, non esiste all\'esterno.' },
                        { title: 'Assenza di Impronta', body: 'Ogni nostra azione è studiata per non lasciare tracce digitali o documentali superflue.' },
                        { title: 'Lealtà Fiduciaria', body: 'Il vostro interesse è l\'unico parametro della nostra esistenza.' }
                      ].map(v => (
                        <div key={v.title} className="space-y-2">
                          <p className="sans-ui text-[9px] text-[#C5A059] tracking-widest">{v.title}</p>
                          <p className="serif italic text-sm text-[#FFFFFF]/40 font-light">{v.body}</p>
                        </div>
                      ))}
                    </RevealOnScroll>
                    <div className="pt-10">
                      <p className="serif italic text-[11px] text-[#FFFFFF]/20 max-w-[200px]">
                        "Il vero potere non ha bisogno di farsi sentire, ma di essere presente ovunque."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Il Fondatore (Michael Jara) */}
              <section id="founder" ref={founderRef} className="py-64 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-32 items-center">
                  <div className="md:col-start-2 md:col-span-5 order-2 md:order-1">
                    <RevealOnScroll className="space-y-12">
                      <div className="space-y-4">
                        <span className="sans-ui text-[10px] text-[#C5A059]/60">The Visionary Principal</span>
                        <h2 className="serif text-5xl md:text-[90px] font-thin tracking-tighter leading-none">Michael Jara.<br /><span className="italic pl-12 md:pl-24">La visione dietro l'invisibilità.</span></h2>
                      </div>

                      <div className="space-y-8 max-w-lg">
                        <p className="serif text-xl text-[#FFFFFF]/70 leading-relaxed font-light first-letter:text-4xl first-letter:font-thin first-letter:text-[#C5A059] first-letter:mr-3 first-letter:float-left">
                          Architetto di strategie d'immagine e pioniere del personal branding d'avanguardia, Michael Jara ha ridefinito il concetto di presenza nell'era digitale. Fondatore di InsolitoDrive, la sua missione nasce da una convinzione profonda: il vero asset competitivo di un individuo non è ciò che mostra, ma ciò che sceglie di proteggere.
                        </p>
                        <p className="serif text-lg text-[#FFFFFF]/40 leading-relaxed font-light">
                          Con un'esperienza consolidata nel trasformare l'immagine in uno strumento strategico, Jara guida oggi un team dedicato alla salvaguardia dell'identità e alla gestione fiduciaria, offrendo ai suoi clienti l'unico lusso oggi realmente introvabile: il controllo assoluto della propria traccia nel mondo.
                        </p>
                      </div>

                      <div className="pt-12 border-t border-[#FFFFFF]/5">
                        <p className="serif italic text-2xl text-[#C5A059]/90 font-light">
                          "L'immagine più potente è quella che non ha bisogno di gridare per essere riconosciuta."
                        </p>
                        <div className="flex items-center space-x-6 mt-6">
                          <div className="w-8 h-[0.5px] bg-[#C5A059]/40" />
                          <span className="sans-ui text-[9px] tracking-[0.5em] text-[#FFFFFF]/30">M.J. Private Fiduciary Protocol</span>
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  <div className="md:col-start-8 md:col-span-4 order-1 md:order-2 flex justify-center pb-20 md:pb-0">
                    <RevealOnScroll>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-[#C5A059]/5 blur-[80px] group-hover:bg-[#C5A059]/10 transition-all duration-2000" />
                        <img
                          src={FOUNDER_IMG}
                          alt="Michael Jara"
                          className="relative w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-[3000ms] ease-in-out border border-[#FFFFFF]/5 shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none" />
                      </div>
                    </RevealOnScroll>
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
                      <h2 className="serif text-6xl md:text-9xl font-thin tracking-tighter">L’inizio della vostra invisibilità.</h2>
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
