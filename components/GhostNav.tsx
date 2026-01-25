
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLOMON_KNOT } from '../constants';

export const GhostNav: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if we are at the top
            if (currentScrollY < 50) {
                setIsScrolled(false);
                setIsVisible(true);
            } else {
                setIsScrolled(true);
                // Smart Hide Logic: scroll down -> hide, scroll up -> show
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0,
                    backgroundColor: isScrolled ? 'rgba(6, 6, 6, 0.8)' : 'rgba(6, 6, 6, 0)',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
                    borderBottom: isScrolled ? '1px solid rgba(197, 160, 89, 0.1)' : '1px solid transparent'
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-10 py-6 md:py-8 flex justify-between items-center md:px-24"
            >
                <div className={`w-8 h-8 text-[#C5A059] ${isScrolled ? 'opacity-100' : 'opacity-40'} transition-opacity duration-500`}>
                    {SOLOMON_KNOT}
                </div>

                {/* The Ghost Links: Only visible when scrolled (or always, per user request to show 3 links) */}
                <div className={`flex space-x-12 transition-opacity duration-700 ${isScrolled ? 'opacity-90' : 'opacity-0 md:opacity-0'}`}>
                    <a href="#essence" className="sans-ui text-[10px] hover:text-[#C5A059] transition-colors tracking-widest">ESSENZA</a>
                    <a href="#expertise" className="sans-ui text-[10px] hover:text-[#C5A059] transition-colors tracking-widest">PROTOCOLLI</a>
                    <a href="#access" className="sans-ui text-[10px] text-[#C5A059] tracking-widest border-b border-[#C5A059]/20 pb-1">ACCESSO PRIVATO</a>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};
