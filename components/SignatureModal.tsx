
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLOMON_KNOT } from '../constants';
import { GhostReveal } from './GhostReveal';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const SignatureModal: React.FC<Props> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] bg-[#060606]/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20"
                    onClick={onClose}
                >
                    {/* Close Hint */}
                    <div className="absolute top-10 right-10 cursor-pointer text-[#C5A059]/40 hover:text-[#C5A059] transition-colors sans-ui text-[9px] tracking-[0.2em] uppercase">
                        [ CHIUDI ]
                    </div>

                    <div
                        className="max-w-3xl w-full border-l border-[#C5A059]/20 pl-10 md:pl-20 py-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-12 h-12 text-[#C5A059]/20 mb-12">{SOLOMON_KNOT}</div>

                        <h2 className="serif text-4xl md:text-5xl text-[#C5A059] mb-12 font-thin tracking-tight">
                            Perché ho creato InsolitoDrive.
                        </h2>

                        <div className="space-y-8">
                            <p className="serif text-xl md:text-2xl text-[#FFFFFF]/80 font-light leading-relaxed">
                                "Ho osservato come il successo esponga le persone a un rumore costante. Ho deciso di mettere la mia esperienza al servizio di chi, come me, crede che il vero potere risieda nella capacità di gestire la propria presenza senza mai subire l'esposizione."
                            </p>
                            <p className="serif text-lg text-[#FFFFFF]/40 font-light leading-relaxed">
                                Insolito Experiences è la mia promessa di lealtà e protezione.
                            </p>
                        </div>

                        {/* Legal Identity - High Authority */}
                        <div className="mt-20 pt-10 border-t border-[#FFFFFF]/5 flex flex-col space-y-4">
                            <p className="sans-ui text-[10px] tracking-[0.1em] text-[#C5A059]/60">DITTA INDIVIDUALE</p>
                            <p className="serif text-base text-[#FFFFFF]/60">Insolito Experiences di Jara Lloctun Michael Sergio</p>
                            <div className="flex space-x-8 text-[10px] mono text-[#FFFFFF]/20">
                                <span>P.IVA 14379200968</span>
                                <span>Sede: Cernusco sul Naviglio</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
