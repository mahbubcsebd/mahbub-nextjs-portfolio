'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const GradualSpacing = ({ text = 'Gradual Spacing' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex space-x-1 justify-start">
            <AnimatePresence>
                {text.split('').map((char, i) => (
                    <motion.p
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        exit="hidden"
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-16"
                    >
                        {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default GradualSpacing;
