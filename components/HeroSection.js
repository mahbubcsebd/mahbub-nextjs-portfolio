/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CodePreview from './CodePreview';
import TypewriterComponent from './TypewriterComponent';
import GradualSpacing from './ui/gradual-spacing';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';

const HeroSection = () => {
    const words = `Transforming ideas into elegant web solutions with React, Next.js, and Node.js. Passionate about intuitive user experiences and optimized performance.`;
    return (
        <div className="bg-[#F8F9FA] dark:bg-[#0a0e1f]">
            <div className="container">
                <div className="flex items-center lg:min-h-screen">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Left Column - Text Content */}
                        <div className="grid items-center min-h-screen lg:min-h-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4 sm:space-y-6 lg:grid-cols-2"
                            >
                                <h1 className="text-4xl font-bold leading-tight text-gray-800 dark:text-white md:text-5xl lg:text-6xl">
                                    <span className="text-2xl md:text-3xl lg:text-4xl">
                                        Hello!
                                    </span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.6,
                                        }}
                                        className="inline-block px-2 ml-2 text-2xl bg-pink-500 md:text-3xl lg:text-4xl"
                                    >
                                        I'm
                                    </motion.span>
                                    <span className="text-2xl md:text-3xl lg:text-4xl">
                                        ,
                                    </span>
                                    <br />
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 0.6,
                                        }}
                                        className="text-emerald-600 dark:text-emerald-400"
                                    >
                                        <GradualSpacing text="Mahbubur Rahman" />
                                    </motion.span>
                                </h1>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl lg:text-2xl"
                                >
                                    <TextGenerateEffect words={words} />
                                </motion.div>
                                <TypewriterComponent />
                                <div className="flex items-start gap-4 sm:flex-row sm:items-center">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full sm:w-auto"
                                        as="button"
                                        className="px-6 py-2 text-gray-800 transition-colors bg-white border border-gray-200 sm:w-auto dark:bg-black dark:text-white dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900"
                                    >
                                        <Link
                                            href="/resume"
                                            className="block text-center"
                                        >
                                            Resume
                                        </Link>
                                    </HoverBorderGradient>
                                    <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
                                        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
                                        <button className="w-full px-8 py-2 font-semibold capitalize rounded-full text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
                                            About Me
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="relative mt-8 lg:mt-0">
                            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600/20 to-emerald-500/20 blur-xl dark:from-purple-600/30 dark:to-emerald-500/30" />
                            <CodePreview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
