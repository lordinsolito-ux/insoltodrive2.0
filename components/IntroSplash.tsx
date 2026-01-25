
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLOMON_KNOT } from '../constants';

interface IntroSplashProps {
    onFinish: () => void;
}

/**
 * THE RITUAL OF SILENCE
 * A multi-stage ritual designed to establish fiduciary authority.
 */
const IntroSplash: React.FC<IntroSplashProps> = ({ onFinish }) => {
    const [step, setStep] = useState(0); // 0: Start, 1: Black Silence, 2: Typewriter, 3: Logo Reveal, 4: Finish
    const [displayText, setDisplayText] = useState("");
    const fullText = "L’arte del silenzio è l’ultimo vero lusso. Un privilegio concesso esclusivamente a chi ha imparato a esistere senza apparire.";
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioSrc = "https://www.dropbox.com/scl/fi/trkgfjejfgayjdkgqvt75/Drive-in-Style.mp3?rlkey=ep7dkuq7hl7swnpys0m1p7c6a&e=1&st=ccy55v2q&raw=1";

    useEffect(() => {
        if (step === 1) {
            // THE RITUAL OF SILENCE: 3 seconds of absolute obsidian
            const timer = setTimeout(() => setStep(2), 3000);
            return () => clearTimeout(timer);
        }
        if (step === 2) {
            // THE TYPEWRITER: Editorial manifestation
            let i = 0;
            const interval = setInterval(() => {
                setDisplayText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => setStep(3), 2500);
                }
            }, 80); // Slightly slower for better readability
            return () => clearInterval(interval);
        }
        if (step === 3) {
            // THE REVELATION: Imperial logo display
            setTimeout(() => {
                setStep(4);
                setTimeout(onFinish, 2000);
            }, 4500);
        }
    }, [step, onFinish]);

    const handleStart = async () => {
        setStep(1);
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            try {
                await audioRef.current.play();
            } catch (err) {
                console.error("Audio protocol blocked by browser interaction policy.", err);
            }
        }
    };

    return (
        <div className={`fixed inset-0 z-[500] bg-[#060606] flex flex-col items-center justify-center transition-opacity duration-[2500ms] ${step === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <audio ref={audioRef} src={audioSrc} preload="auto" />

            {/* THE NOISE: Subtle imperial grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay overflow-hidden">
                <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"></div>
            </div>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.button
                        key="start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 2 }}
                        onClick={handleStart}
                        className="group relative z-10 flex flex-col items-center space-y-16"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-all duration-1000 ease-out">
                            {SOLOMON_KNOT}
                        </div>

                        <div className="flex flex-col items-center space-y-6">
                            <span className="sans-ui text-[9px] text-[#C5A059]/40 tracking-[1.2em] uppercase">Private Fiduciary Access</span>
                            <div className="button-luxury">
                                [ ENTRA ]
                            </div>
                        </div>
                    </motion.button>
                )}

                {step === 2 && (
                    <motion.div
                        key="typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-3xl px-12 text-center"
                    >
                        <p className="serif text-2xl md:text-4xl text-white/80 leading-relaxed font-thin italic">
                            {displayText}
                            <span className="w-[1px] h-8 md:h-10 bg-[#C5A059]/50 inline-block ml-2 align-middle animate-pulse" />
                        </p>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center space-y-16"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 text-[#C5A059]/60">
                            {SOLOMON_KNOT}
                        </div>

                        <div className="text-center space-y-4">
                            <h1 className="serif text-5xl md:text-8xl tracking-[-0.05em] font-light text-white">InsolitoDrive.</h1>
                            <div className="w-24 h-[0.5px] bg-[#C5A059]/20 mx-auto" />
                            <p className="sans-ui text-[10px] text-[#C5A059]/60 tracking-[1.5em] uppercase mt-6">L’arte del silenzio</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes grain {
                    0%, 100% { transform:translate(0, 0) }
                    10% { transform:translate(-5%, -10%) }
                    20% { transform:translate(-15%, 5%) }
                    30% { transform:translate(7%, -25%) }
                    40% { transform:translate(-5%, 25%) }
                    50% { transform:translate(-15%, 10%) }
                    60% { transform:translate(15%, 0) }
                    70% { transform:translate(0, 15%) }
                    80% { transform:translate(3%, 35%) }
                    100% { transform:translate(-10%, 10%) }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                }
            `}</style>
        </div>
    );
};

export default IntroSplash;
