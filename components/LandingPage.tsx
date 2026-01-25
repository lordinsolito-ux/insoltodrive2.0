
import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import IntroSplash from './IntroSplash';
import { VerticalSpine } from './VerticalSpine';
import { GhostReveal } from './GhostReveal';

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
    <div className={`min-h-screen transition-colors duration-[2000ms] ease-in-out ${isFounderInView ? 'bg-[#060606]' : 'bg-[#0D0D0D]'} text-[#FFFFFF] selection:bg-[#B59A7D] selection:text-[#0D0D0D] overflow-x-hidden`}>

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
            {/* THE SPINE: The Vertical Thread of Power */}
            <VerticalSpine />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-10 py-12 flex justify-between items-center md:px-24 pointer-events-none">
              <div className="w-8 h-8 text-[#C5A059]/20 pointer-events-auto">{SOLOMON_KNOT}</div>
              <div className="flex space-x-12 opacity-80 pointer-events-auto">
                <a href="#essence" className="sans-ui text-[10px] hidden md:block hover:text-[#C5A059] transition-colors">CONCETTO</a>
                <a href="#founder" className="sans-ui text-[10px] hidden md:block hover:text-[#C5A059] transition-colors">AUTORITÀ</a>
                <a href="#expertise" className="sans-ui text-[10px] hidden md:block hover:text-[#C5A059] transition-colors">PILASTRI</a>
                <a href="#access" className="sans-ui text-[10px] text-[#C5A059]">ACCESSO PRIVATO</a>
              </div>
            </nav>

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-24">

              {/* [ACT I: THE AWAKENING] Hero Section */}
              <section className="min-h-screen flex flex-col justify-center py-60 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                  <div className="md:col-span-12 space-y-16 pl-8 md:pl-28">
                    <div className="flex items-center space-x-10 mb-8 overflow-hidden">
                      <GhostReveal mode="char" speed="slow" delay={0.5} className="sans-ui text-[9px] text-[#C5A059] tracking-[1em] whitespace-nowrap">
                        FIDUCIARY EST. 2026
                      </GhostReveal>
                    </div>

                    <h1 className="hero-title text-6xl md:text-[140px] font-thin leading-[0.9] tracking-tighter max-w-6xl">
                      <GhostReveal mode="word" speed="medium" delay={1}>
                        L’arte del silenzio
                      </GhostReveal>
                      <br />
                      <span className="italic opacity-50 pl-10 md:pl-32">
                        <GhostReveal mode="word" speed="slow" delay={2}>
                          è l’ultimo vero lusso.
                        </GhostReveal>
                      </span>
                    </h1>

                    <div className="max-w-xl md:pl-32 pt-10 border-l border-[#C5A059]/10 pl-10">
                      <p className="serif text-xl md:text-2xl text-[#FFFFFF]/50 font-light leading-relaxed">
                        <GhostReveal mode="lines" speed="medium" delay={3}>
                          Un privilegio riservato a chi ha scelto di esistere senza il bisogno di apparire.
                        </GhostReveal>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* [ACT II: THE PASSAGE] The Value of Privacy */}
              <section id="essence" className="py-60 relative min-h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
                  <div className="md:col-start-2 md:col-span-6 space-y-24 pl-8 md:pl-16">
                    <div className="space-y-6">
                      <span className="sans-ui text-[9px] text-[#C5A059]/40 tracking-[1em] uppercase">Interposizione</span>
                      <h2 className="serif text-5xl md:text-8xl font-thin tracking-tighter leading-none">
                        <GhostReveal>Il valore della</GhostReveal><br />
                        <span className="italic text-[#C5A059]/80">
                          <GhostReveal delay={0.3}>riservatezza.</GhostReveal>
                        </span>
                      </h2>
                    </div>

                    <div className="space-y-12">
                      <p className="serif text-2xl md:text-3xl text-[#F4F4F2]/90 leading-relaxed font-light max-w-xl">
                        <GhostReveal speed="medium">
                          "InsolitoDrive opera nell'interposizione fiduciaria per garantire una presenza discreta in un mondo che non smette di osservare."
                        </GhostReveal>
                      </p>
                      <p className="serif text-lg md:text-xl text-[#F4F4F2]/40 leading-relaxed font-light max-w-xl border-l border-[#FFFFFF]/10 pl-6">
                        <GhostReveal speed="fast" delay={0.5}>
                          Creiamo lo spazio necessario affinché i vostri interessi personali e professionali rimangano protetti da un velo di assoluta distinzione.
                        </GhostReveal>
                      </p>
                    </div>
                  </div>

                  <div className="md:col-start-9 md:col-span-4 self-center">
                    <div className="relative w-full aspect-[4/5] opacity-30 mix-blend-luminosity hover:opacity-100 transition-opacity duration-[2000ms]">
                      <img src={ARCH_IMG} alt="Silence Architecture" className="object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
              </section>

              {/* [ACT III: THE FIGURE] Michael Jara */}
              <section id="founder" ref={founderRef} className="py-80 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">

                  {/* Narrative */}
                  <div className="md:col-start-2 md:col-span-5 z-10 pl-8 md:pl-16">
                    <div className="space-y-16">
                      <div className="space-y-6">
                        <h2 className="serif text-6xl md:text-[120px] font-thin tracking-tighter leading-[0.8]">
                          <GhostReveal>Michael</GhostReveal><br />
                          <GhostReveal delay={0.2}>Jara.</GhostReveal>
                        </h2>
                      </div>

                      <div className="space-y-10 max-w-lg border-l border-[#FFFFFF]/5 pl-10">
                        <p className="serif text-xl text-[#FFFFFF]/70 leading-relaxed font-light">
                          <GhostReveal>
                            "Michael Jara coordina ogni mandato con la sensibilità di chi comprende il valore inestimabile della propria traccia."
                          </GhostReveal>
                        </p>
                        <p className="serif text-base text-[#FFFFFF]/30 leading-relaxed font-light">
                          <GhostReveal delay={0.4}>
                            Fondata sui principi della fiducia e della lealtà assoluta, la visione di Michael Jara trasforma la necessità di discrezione in un'architettura di vita impeccabile.
                          </GhostReveal>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Portrait intersected by The Spine */}
                  <div className="md:col-start-8 md:col-span-5 relative mt-20 md:mt-0">
                    <div className="relative aspect-[3/4] overflow-hidden group">
                      <img
                        src={FOUNDER_IMG}
                        alt="Michael Jara - Vision"
                        className="w-full h-full object-cover grayscale contrast-[1.2] brightness-75 hover:scale-105 transition-transform duration-[3000ms]"
                      />
                      {/* Grain Overlay */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-80" />
                    </div>
                    <p className="serif italic text-[12px] text-[#C5A059]/40 mt-6 text-center">Garante Fiduciario Unico</p>
                  </div>
                </div>
              </section>

              {/* [ACT IV: THE PILLARS] Elegant Offer */}
              <section id="expertise" className="py-60 relative min-h-screen flex flex-col justify-center">
                <div className="max-w-6xl mx-auto w-full pl-8 md:pl-0">
                  <div className="mb-40 md:pl-28">
                    <span className="sans-ui text-[9px] text-[#C5A059]/40 tracking-[1em] uppercase block mb-8">Architettura</span>
                    <h2 className="serif text-5xl md:text-8xl font-thin tracking-tighter">I Pilastri del Silenzio.</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#FFFFFF]/10">
                    {[
                      { id: 'I', title: "Armonia d'Immagine", body: "Proteggere l'identità attraverso una gestione fiduciaria attenta e preventiva." },
                      { id: 'II', title: "Custodia di Asset", body: "Strutture dedicate alla detenzione di beni di valore nel massimo riserbo." },
                      { id: 'III', title: "Rappresentanza Silenziosa", body: "Agire per vostro conto nelle negoziazioni più delicate, mantenendo il vostro nome al riparo." }
                    ].map((item, index) => (
                      <div key={item.id} className="group border-r border-[#FFFFFF]/5 p-12 md:p-16 hover:bg-[#FFFFFF]/[0.02] transition-colors duration-700 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />

                        <div className="serif text-6xl text-[#FFFFFF]/10 group-hover:text-[#C5A059]/20 transition-colors duration-700 mb-10">{item.id}</div>
                        <h3 className="serif text-2xl text-[#FFFFFF] mb-6 font-light">{item.title}</h3>
                        <p className="serif text-[#FFFFFF]/40 font-light leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* [ACT V: THE THRESHOLD] Access & Ethics */}
              <section id="access" className="py-60 min-h-screen flex flex-col justify-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto w-full text-center space-y-24 relative z-10 px-6">

                  <div className="space-y-12">
                    <div className="w-[1px] h-24 bg-[#C5A059]/40 mx-auto" /> {/* Spine Termination */}
                    <h2 className="serif text-5xl md:text-8xl font-thin tracking-tighter">
                      <GhostReveal>Ogni grande alleanza</GhostReveal><br />
                      <span className="italic text-[#C5A059]">inizia con un colloquio.</span>
                    </h2>
                  </div>

                  {/* Ethical Disclaimer */}
                  <div className="max-w-2xl mx-auto border border-[#C5A059]/10 bg-[#0B0B0B] p-10 md:p-14 backdrop-blur-md">
                    <div className="w-8 h-8 text-[#C5A059]/30 mx-auto mb-8">{SOLOMON_KNOT}</div>
                    <p className="serif text-lg text-[#FFFFFF]/60 font-light leading-relaxed">
                      "Accogliamo solo incarichi che riflettono i nostri valori di integrità e trasparenza verso le istituzioni, garantendo al contempo la massima riservatezza verso i terzi."
                    </p>
                    <div className="mt-12">
                      <button className="button-luxury group">
                        [ RICHIEDI UN INCONTRO PRIVATO ]
                      </button>
                    </div>
                  </div>

                </div>
              </section>

            </div>

            {/* Footer: Absolute Silence */}
            <footer className="px-10 md:px-24 py-32 flex flex-col md:flex-row justify-between items-center opacity-30 border-t border-[#FFFFFF]/5 bg-[#060606] relative z-10">
              <div className="sans-ui text-[9px] tracking-[0.8em] text-[#C5A059]">InsolitoExperiences — Private Office</div>
              <div className="flex space-x-12 text-[#C5A059]/20 my-10 md:my-0">
                {SOLOMON_KNOT}
              </div>
              <div className="mono text-[10px] opacity-60">
                <span>Milano • Zurich • Dubai</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
