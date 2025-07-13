'use client';

import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

const GradualSpacing = ({ text, className = '' }) => {
  const characters = splitter.splitGraphemes(text);

  return (
    <span className={`inline-flex gap-[0.08em] ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-200 ease-in-out hover:tracking-widest"
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default GradualSpacing;
