import React from 'react';
import { motion } from 'framer-motion';

const SCENARIOS = [
    {
        kicker: "PRIVATO (< 15K)",
        title: "Il Gesto Invisibile",
        desc: "Per chi desidera vivere o donare esperienze senza lasciare tracce documentali compromettenti.",
        problem: "L'estratto conto familiare è uno specchio pubblico.",
        solution: "Noi fatturiamo 'Servizi Logistici'. Il regalo (Borsa, Viaggio) sparisce dal radar.",
        action: "Usa Smart Invoice",
        delay: 0.2
    },
    {
        kicker: "CORPORATE (B2B)",
        title: "L'Ombra Aziendale",
        desc: "Per CEO e Professionisti che necessitano di efficienza e giustificazione fiscale impeccabile.",
        problem: "Il Board chiede spiegazioni per ogni spesa di rappresentanza.",
        solution: "Centralizziamo tutto sotto 'Consulenza Organizzativa'. Perfettamente deducibile.",
        action: "Usa Fast Track",
        delay: 0.4
    },
    {
        kicker: "WEALTH (> 15K)",
        title: "Lo Scudo Sovrano",
        desc: "Per chi muove capitali importanti (Auto, Orologi) e teme l'esposizione AML.",
        problem: "Grandi movimenti attirano grandi controlli.",
        solution: "Mandato Fiduciario (Art. 1705) + SPID. Il bene è nostro legalmente, tuo realmente.",
        action: "Usa Fiduciary Vault",
        delay: 0.6
    }
];

export const TacticalScenarios: React.FC = () => {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-[#FFFFFF]/5">

            {/* HEADER */}
            <div className="text-center mb-24">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="serif text-2xl text-[#C5A059] tracking-widest mb-4"
                >
                    L'ARTE DELLA DISCREZIONE
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="sans-ui text-[10px] text-[#FFFFFF]/40 uppercase tracking-[0.2em]"
                >
                    Tre protocolli per tre livelli di invisibilità
                </motion.p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {SCENARIOS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: item.delay }}
                        className="group relative"
                    >
                        {/* HOVER BORDER */}
                        <div className="absolute inset-0 border border-[#FFFFFF]/10 group-hover:border-[#C5A059]/30 transition-colors duration-500 bg-[#060606]" />

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="mono text-[9px] text-[#C5A059] mb-6 border-b border-[#C5A059]/20 pb-2 inline-block self-start">
                                {item.kicker}
                            </div>

                            <h4 className="serif text-xl text-[#FFFFFF] mb-4 group-hover:text-[#C5A059] transition-colors duration-500">
                                {item.title}
                            </h4>

                            <p className="sans-ui text-[12px] text-[#FFFFFF]/60 leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>

                            <div className="space-y-4 border-t border-[#FFFFFF]/5 pt-6">
                                <div>
                                    <div className="text-[9px] text-[#FFFFFF]/30 uppercase tracking-widest mb-1">Problema</div>
                                    <div className="text-[11px] text-[#FFFFFF]/80 italic">"{item.problem}"</div>
                                </div>
                                <div>
                                    <div className="text-[9px] text-[#C5A059]/60 uppercase tracking-widest mb-1">Soluzione Insolito</div>
                                    <div className="text-[11px] text-[#FFFFFF]">{item.solution}</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-4 border-t border-[#FFFFFF]/5 text-center">
                                <span className="mono text-[9px] text-[#FFFFFF]/20 group-hover:text-[#FFFFFF]/60 transition-colors uppercase cursor-help">
                                    {item.action} →
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};
