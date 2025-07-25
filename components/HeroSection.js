/* eslint-disable react/no-unescaped-entities */
'use client';

import useDictionary from '@/hooks/useDictionary';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import TypewriterComponent from './TypewriterComponent';
import GradualSpacing from './ui/gradual-spacing';

// ⏬ Lazy load heavy visual components
const CodePreview = dynamic(() => import('./CodePreview'), {
  ssr: false,
  loading: () => <div className="h-96" />, // or a simple skeleton
});

const HeroSection = () => {
  const { dictionary } = useDictionary();

  const {
    hello,
    iAm,
    name,
    words,
    react,
    nextjs,
    nodejs,
    mern,
    frontend,
    resume,
    aboutMe,
  } = dictionary.HeroSection;

  return (
    <section className="mb-14 bg-[#f4f4f4] dark:bg-transparent">
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
                  className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
                >
                  <span className="block mb-2 text-4xl text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                    {hello}!
                  </span>
                  <span className="inline-block px-2 text-2xl text-white bg-pink-500 lg:ml-2 md:text-3xl lg:text-4xl">
                    {iAm}
                  </span>
                  <span className="text-2xl text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                    ,
                  </span>
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <GradualSpacing text={name} />
                  </span>
                </motion.h1>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
                  {/* <TextGenerateEffect words={words} /> */}
                  {words}
                </p>

                <TypewriterComponent />

                {/* Buttons */}
                <div className="flex items-start gap-4 sm:flex-row sm:items-center">
                  {/* <HoverBorderGradient
                    containerClassName="rounded-full sm:w-auto"
                    as="button"
                    className="px-6 py-2 text-gray-900 transition-colors bg-white border border-gray-300 shadow-sm sm:w-auto dark:bg-black dark:text-white dark:border-zinc-800 hover:bg-gray-100 hover:border-gray-400 dark:hover:bg-zinc-900"
                  >
                    <Link href="/resume" className="block text-center">
                      {resume}
                    </Link>
                  </HoverBorderGradient> */}
                  <div className="relative overflow-hidden rounded-full bg-zinc-900 shadow-md border border-zinc-800 group hover:shadow-lg transition-shadow p-0.5">
                    <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] group-hover:bg-none" />
                    <Link
                      href="/resume"
                      className="inline-block w-full px-8 py-2 font-semibold capitalize transition-colors rounded-full text-zinc-200 backdrop-blur-xl bg-zinc-900 hover:bg-zinc-800"
                    >
                      {resume}
                    </Link>
                  </div>

                  <div className="relative overflow-hidden rounded-full bg-zinc-900 shadow-md border border-zinc-800 group hover:shadow-lg transition-shadow p-0.5">
                    <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] group-hover:bg-none" />
                    <Link
                      href="#about"
                      className="inline-block w-full px-8 py-2 font-semibold capitalize transition-colors rounded-full text-zinc-200 backdrop-blur-xl bg-zinc-900 hover:bg-zinc-800"
                    >
                      {aboutMe}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Lazy CodePreview */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/15 via-emerald-500/15 to-blue-500/15 blur-2xl dark:from-purple-600/30 dark:to-emerald-500/30" />
              <div className="relative z-10">
                <CodePreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
