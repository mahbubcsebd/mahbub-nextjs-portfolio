/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import TypewriterComponent from './TypewriterComponent';
import GradualSpacing from './ui/gradual-spacing';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';

// ⏬ Lazy load heavy visual components
const CodePreview = dynamic(() => import('./CodePreview'), {
  ssr: false,
  loading: () => <div className="h-96" />, // or a simple skeleton
});

const HeroSection = () => {
  const words = `Transforming ideas into elegant web solutions with React, Next.js, and Node.js. Passionate about intuitive user experiences and optimized performance.`;

  return (
    <section className="bg-[#F8F9FA] dark:bg-[#0a0e1f]">
      <div className="container">
        <div className="flex items-center lg:min-h-screen">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="grid items-center min-h-screen lg:min-h-auto">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold leading-tight text-gray-800 dark:text-white md:text-5xl lg:text-6xl"
                >
                  <span className="block text-2xl md:text-3xl lg:text-4xl">Hello!</span>
                  <span className="inline-block px-2 ml-2 text-2xl bg-pink-500 md:text-3xl lg:text-4xl">
                    I'm
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl">,</span>
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <GradualSpacing text="Mahbubur Rahman" />
                  </span>
                </motion.h1>

                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
                  <TextGenerateEffect words={words} />
                </p>

                <TypewriterComponent />

                {/* Buttons */}
                <div className="flex items-start gap-4 sm:flex-row sm:items-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full sm:w-auto"
                    as="button"
                    className="px-6 py-2 text-gray-800 transition-colors bg-white border border-gray-200 sm:w-auto dark:bg-black dark:text-white dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900"
                  >
                    <Link href="/resume" className="block text-center">Resume</Link>
                  </HoverBorderGradient>

                  <div className="relative overflow-hidden rounded-full bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
                    <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] group-hover:bg-none" />
                    <button className="w-full px-8 py-2 font-semibold capitalize rounded-full text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
                      About Me
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Lazy CodePreview */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600/20 to-emerald-500/20 blur-xl dark:from-purple-600/30 dark:to-emerald-500/30" />
              <CodePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
