import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLOMON_KNOT } from '../constants';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAuthenticated: () => void;
}

export const FiduciaryLogin: React.FC<Props> = ({ isOpen, onClose, onAuthenticated }) => {
    const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'VERIFIED' | 'ERROR'>('IDLE');

    const handleSovereignCheck = () => {
        setStatus('SCANNING');
        // Simulate API call to AgID / Namirial
        setTimeout(() => {
            setStatus('VERIFIED');
            setTimeout(onAuthenticated, 1500);
        }, 2500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]/90 backdrop-blur-xl"
            >
                <div className="w-full max-w-md p-10 border border-[#C5A059]/30 bg-[#060606] relative overflow-hidden">

                    {/* DECORATIVE SCAN LINE */}
                    {status === 'SCANNING' && (
                        <motion.div
                            className="absolute top-0 left-0 w-full h-[2px] bg-[#C5A059] shadow-[0_0_20px_#C5A059]"
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    )}

                    <div className="text-center space-y-8">
                        <div className="text-[#C5A059] text-4xl flex justify-center animate-pulse">
                            {SOLOMON_KNOT}
                        </div>

                        <h2 className="serif text-2xl text-[#FFFFFF] tracking-widest">
                            FIDUCIARY VAULT
                        </h2>

                        <p className="sans-ui text-[10px] text-[#FFFFFF]/50 uppercase tracking-[0.2em]">
                            Accesso Riservato ai soli Titolari Effettivi (Art. 1705)
                        </p>

                        {/* STATUS DISPLAY */}
                        <div className="h-16 flex items-center justify-center">
                            {status === 'IDLE' && (
                                <button
                                    onClick={handleSovereignCheck}
                                    className="px-8 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#000000] transition-colors uppercase text-[10px] tracking-widest"
                                >
                                    [ VERIFICA IDENTITÀ SOVRANA ]
                                </button>
                            )}

                            {status === 'SCANNING' && (
                                <div className="text-[#C5A059] mono text-xs animate-pulse">
                                    ESTABLISHING SECURE CHANNEL WITH AgID...
                                </div>
                            )}

                            {status === 'VERIFIED' && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-[#00FF00] mono text-xs border border-[#00FF00]/30 px-4 py-2 bg-[#00FF00]/10"
                                >
                                    IDENTITY CONFIRMED. ACCESS GRANTED.
                                </motion.div>
                            )}
                        </div>

                        <p className="serif text-[8px] text-[#FFFFFF]/20 mt-8">
                            Protocollo Crittografico E2EE Attivo. Ogni tentativo di accesso non autorizzato verrà segnalato alle autorità competenti.
                        </p>
                    </div>

                    {/* CLOSE BTN */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-[#FFFFFF]/20 hover:text-[#FFFFFF] transition-colors">
                        ✕
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
