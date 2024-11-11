/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import TypewriterComponent from './TypewriterComponent';

const CodePreview = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative overflow-hidden bg-gray-900 rounded-lg shadow-2xl"
    >
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-gray-800/50">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="text-gray-400">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-white">coder</span> ={' '}
                <span className="text-yellow-300">{'{'}</span>
            </div>
            <div className="pl-4">
                <span className="text-cyan-300">name:</span>{' '}
                <span className="text-orange-300">'Mahbubur Rahman'</span>,
            </div>
            <div className="pl-4">
                <span className="text-cyan-300">skills:</span>{' '}
                <span className="text-yellow-300">{'['}</span>
                <span className="text-orange-300">'React'</span>,{' '}
                <span className="text-orange-300">'Node'</span>
                <span className="text-yellow-300">{']'}</span>,
            </div>
            <div className="pl-4">
                <span className="text-cyan-300">hardWorker:</span>{' '}
                <span className="text-purple-400">true</span>,
            </div>
            <div className="pl-4">
                <span className="text-cyan-300">problemSolver:</span>{' '}
                <span className="text-purple-400">true</span>,
            </div>
            <div className="pl-4">
                <span className="text-emerald-400">hireable:</span>{' '}
                <span className="text-purple-400">function</span>() {'{'}
            </div>
            <div className="pl-8">
                <span className="text-purple-400">return</span> (
            </div>
            <div className="pl-12">
                <span className="text-cyan-300">this</span>.hardWorker &&
            </div>
            <div className="pl-12">
                <span className="text-cyan-300">this</span>.problemSolver &&
            </div>
            <div className="pl-12">
                <span className="text-cyan-300">this</span> .skills. length 5
            </div>
            <div className="pl-8">);</div>
            <div className="pl-4">{'}'}</div>
            <div className="text-yellow-300">{'}'}</div>
        </div>
    </motion.div>
);

const HeroSection = () => {
    return (
        <div className="">
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
                                <span className="text-3xl md:text-4xl">
                                    ,
                                </span>
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
                        </motion.div>

                        {/* Right Column - Code Preview */}
                        <div className="relative">
                            {/* Add subtle gradient effect behind the code window */}
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
