'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import GraphemeSplitter from 'grapheme-splitter';
import { useRef } from 'react';

const splitter = new GraphemeSplitter();

const GradualSpacing = ({ text = 'Gradual Spacing' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const characters = splitter.splitGraphemes(text);

  return (
    <div className="flex flex-wrap justify-start space-x-1" ref={ref}>
      <AnimatePresence>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-16"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;
