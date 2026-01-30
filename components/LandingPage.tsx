import React, { useEffect, useRef, useState } from 'react';
import { SOLOMON_KNOT, CONTENT } from '../constants';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import IntroSplash from './IntroSplash';
import { VerticalSpine } from './VerticalSpine';
import { GhostReveal } from './GhostReveal';
import { GhostNav } from './GhostNav';
import { SignatureModal } from './SignatureModal';

// Asset Paths (Local)
const ARCH_IMG = "/assets/arch.png";
const WATCH_IMG = "/assets/watch.png";
const SHIELD_IMG = "/assets/shield.png";
const FOUNDER_IMG = "/assets/michael.jpg";

interface Props {
  onInitialize: () => void;
}

export const LandingPage: React.FC<Props> = ({ onInitialize }) => {
  const [ritualComplete, setRitualComplete] = useState(false);
  const [isSignatureOpen, setIsSignatureOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Founder Focus Logic
  const founderRef = useRef(null);
  const isFounderInView = useInView(founderRef, { amount: 0.2 });

  return (
    <div className={`min-h-screen transition-colors duration-[2000ms] ease-in-out ${isFounderInView ? 'bg-[#060606]' : 'bg-[#0D0D0D]'} text-[#FFFFFF] selection:bg-[#B59A7D] selection:text-[#0D0D0D] overflow-x-hidden`}>

      <SignatureModal isOpen={isSignatureOpen} onClose={() => setIsSignatureOpen(false)} />

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

            {/* THE GHOST NAV: Scroll-Intelligent Navigation */}
            <GhostNav />

            <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-24">

              {/* [ACT I: THE AWAKENING] Hero Section */}
              <section className="min-h-screen flex flex-col justify-center py-60 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
                  <div className="md:col-span-12 space-y-16 pl-8 md:pl-28">

                    <h1 className="hero-title text-5xl md:text-[120px] font-thin leading-[0.9] tracking-tighter max-w-6xl">
                      <GhostReveal mode="word" speed="medium" delay={0.5}>
                        {CONTENT.HERO.TITLE_LIN_1}
                      </GhostReveal>
                      <br />
                      <span className="italic opacity-50 pl-10 md:pl-32">
                        <GhostReveal mode="word" speed="slow" delay={1.5}>
                          {CONTENT.HERO.TITLE_LIN_2}
                        </GhostReveal>
                      </span>
                    </h1>

                    <div className="max-w-xl md:pl-32 pt-10 border-l border-[#C5A059]/10 pl-10">
                      <p className="sans-ui text-[10px] md:text-[11px] text-[#FFFFFF]/40 tracking-[0.2em] font-light leading-relaxed uppercase">
                        <GhostReveal mode="lines" speed="medium" delay={2.5}>
                          {CONTENT.HERO.CAPTION}
                        </GhostReveal>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* [ACT II: THE PHILOSOPHY] The Soul of the Brand */}
              <section id="essence" className="py-60 relative min-h-screen flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
                  <div className="md:col-start-2 md:col-span-7 space-y-20 pl-8 md:pl-16">

                    <div className="space-y-12">
                      <p className="serif text-3xl md:text-5xl text-[#F4F4F2]/90 leading-tight font-thin">
                        <GhostReveal speed="medium">
                          {CONTENT.ESSENCE.QUOTE}
                        </GhostReveal>
                      </p>

                      <div className="w-24 h-[1px] bg-[#C5A059]/30" />

                      <p className="serif text-xl md:text-2xl text-[#F4F4F2]/50 leading-relaxed font-light max-w-2xl">
                        <GhostReveal speed="fast" delay={0.5}>
                          {CONTENT.ESSENCE.BODY}
                        </GhostReveal>
                      </p>
                    </div>
                  </div>

                  {/* Visual Storytelling: Rule of Thirds */}
                  <div className="md:col-start-10 md:col-span-3 self-center hidden md:block">
                    <div className="relative w-full aspect-[2/3] opacity-40 hover:opacity-100 transition-opacity duration-[2000ms] overflow-hidden">
                      <img src={ARCH_IMG} alt="Rarefied Horizon" className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-[3000ms] grayscale contrast-125" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-50" />
                    </div>
                  </div>
                </div>
              </section>

              {/* [ACT III: THE PILLARS] Elegant Offer */}
              <section id="expertise" className="py-40 relative flex flex-col justify-center">
                <div className="max-w-6xl mx-auto w-full pl-8 md:pl-0">
                  <div className="mb-32 md:pl-28">
                    <h2 className="serif text-4xl md:text-6xl font-thin tracking-tighter opacity-80">
                      {CONTENT.PILLARS.TITLE}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#FFFFFF]/10">
                    {CONTENT.PILLARS.ITEMS.map((item, index) => (
                      <div key={item.id} className="group border-r border-[#FFFFFF]/5 p-12 hover:bg-[#FFFFFF]/[0.02] transition-colors duration-700 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />

                        <div className="serif text-5xl text-[#FFFFFF]/10 group-hover:text-[#C5A059]/20 transition-colors duration-700 mb-8">{item.id}</div>
                        <h3 className="serif text-xl text-[#FFFFFF] mb-4 font-light">{item.title}</h3>
                        <p className="serif text-base text-[#FFFFFF]/40 font-light leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* [ACT IV: THE SIGNATURE] Michael Jara */}
              <section id="founder" ref={founderRef} className="py-60 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">

                  <div className="md:col-start-2 md:col-span-8 z-10 pl-8 md:pl-16 space-y-12">
                    <h2 className="serif text-4xl md:text-6xl font-thin tracking-tighter text-[#FFFFFF]/80">
                      <GhostReveal>{CONTENT.FOUNDER.NAME}</GhostReveal>
                    </h2>

                    <div className="space-y-8 max-w-2xl border-l border-[#FFFFFF]/5 pl-10">
                      <p className="serif text-xl text-[#FFFFFF]/60 leading-relaxed font-light">
                        <GhostReveal delay={0.2}>
                          {CONTENT.FOUNDER.QUOTE}
                        </GhostReveal>
                      </p>

                      {/* THE SIGNATURE TRIGGER */}
                      <div
                        className="pt-8 cursor-pointer group inline-block"
                        onClick={() => setIsSignatureOpen(true)}
                      >
                        <p className="script-font text-3xl md:text-4xl text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors duration-500 transform group-hover:scale-105 origin-left" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                          {CONTENT.FOUNDER.SIGNATURE}
                        </p>
                        <p className="sans-ui text-[8px] text-[#FFFFFF]/20 mt-2 tracking-[0.2em] group-hover:text-[#FFFFFF]/40 transition-colors uppercase">
                          {CONTENT.FOUNDER.SIGNATURE_LABEL}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* [ACT V: THE THRESHOLD] Access & Legal Footer */}
              <section id="access" className="py-40 min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto w-full text-center space-y-20 relative z-10 px-6">

                  <div className="space-y-8">
                    <h2 className="serif text-3xl md:text-5xl font-thin tracking-tight opacity-90">
                      <GhostReveal>{CONTENT.ACCESS.TITLE_1}</GhostReveal><br />
                      <span className="italic text-[#C5A059]">{CONTENT.ACCESS.TITLE_2}</span>
                    </h2>
                  </div>

                  <div className="mt-12">
                    <button className="button-luxury group">
                      {CONTENT.ACCESS.BUTTON}
                    </button>
                  </div>

                  {/* Minimal Legal Footer */}
                  <div className="pt-32 border-t border-[#FFFFFF]/5 mt-32 flex flex-col items-center space-y-4 opacity-30 hover:opacity-60 transition-opacity">
                    <div className="serif text-[10px] text-[#FFFFFF] font-light text-center">
                      {CONTENT.ACCESS.LEGAL_1}<br />
                      {CONTENT.ACCESS.LEGAL_2}
                    </div>
                    <div className="mono text-[9px] text-[#C5A059]">{CONTENT.ACCESS.COPYRIGHT}</div>
                  </div>

                </div>
              </section>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
