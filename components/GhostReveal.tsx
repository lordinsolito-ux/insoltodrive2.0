
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
        const words = children.split(" ");

        return (
            <div ref={ref} className={`inline-block ${className}`}>
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                        animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
                        transition={{
                            duration: 1.2,
                            delay: delay + (i * stagger),
                            ease: [0.16, 1, 0.3, 1] // The "Luxury" Ease
                        }}
                        className="inline-block mr-[0.25em] last:mr-0"
                    >
                        {word}
                    </motion.span>
                ))}
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
