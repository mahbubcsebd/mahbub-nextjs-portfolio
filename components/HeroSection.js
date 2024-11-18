/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CodePreview from './CodePreview';
import TypewriterComponent from './TypewriterComponent';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="flex items-center min-h-screen text-white">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                                <span className="text-3xl md:text-4xl">
                                    Hello!
                                </span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="inline-block px-2 ml-2 text-3xl bg-pink-500 md:text-4xl"
                                >
                                    I'm
                                </motion.span>
                                <span className="text-3xl md:text-4xl">,</span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="text-emerald-400"
                                >
                                    Mahbubur Rahman
                                </motion.span>
                                .
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-lg leading-relaxed text-gray-400 md:text-2xl"
                            >
                                Transforming ideas into elegant web solutions
                                with React, Next.js, and Node.js. Passionate
                                about intuitive user experiences and optimized
                                performance.
                            </motion.p>
                            <TypewriterComponent />
                            <div className="flex items-center gap-4">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="flex items-center text-black bg-white dark:bg-black dark:text-white"
                                >
                                    <Link href="/resume">Resume</Link>
                                </HoverBorderGradient>
                                <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
                                    <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
                                    <button className="w-full px-8 py-2 font-semibold rounded-full text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
                                        Hello
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-emerald-500/30 blur-xl" />
                            <CodePreview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
