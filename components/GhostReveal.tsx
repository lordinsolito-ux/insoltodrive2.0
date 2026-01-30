
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface GhostRevealProps {
    children: string | React.ReactNode;
    className?: string;
    delay?: number;
    mode?: 'char' | 'word' | 'lines';
    speed?: 'slow' | 'medium' | 'fast';
}

/**
 * GHOST REVEAL ENGINE
 * The typography doesn't just appear; it manifests from the ether.
 * Used for high-impact philosophical statements.
 */
export const GhostReveal: React.FC<GhostRevealProps> = ({
    children,
    className = "",
    delay = 0,
    mode = 'word',
    speed = 'medium'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const speeds = {
        slow: 0.08,
        medium: 0.04,
        fast: 0.02
    };

    const stagger = speeds[speed];

    if (typeof children === 'string') {
        // Split by whitespace but keep the delimiters (spaces) to preserve natural spacing
        // This avoids the 'margin-right' hack which causes layout shifts
        const words = children.split(/(\s+)/);

        return (
            <div ref={ref} className={`inline-block ${className}`}>
                {words.map((word, i) => {
                    if (word.match(/\s+/)) {
                        return <span key={i} className="inline-block whitespace-pre">{word}</span>;
                    }
                    return (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
                            transition={{
                                duration: 1.2,
                                delay: delay + (i * 0.05 * (speed === 'fast' ? 0.5 : 1)), // smoother stagger
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="inline-block whitespace-nowrap"
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
