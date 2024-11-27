/* eslint-disable react/no-unescaped-entities */
'use client';

import MahbubImage from '@/assets/images/mahbub.jpg';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const experienceVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
                delay: 0.4,
            },
        },
    };

    return (
        <div className="relative py-16 bg-[#F8F9FA] dark:bg-[#0a0e1f]">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={imageVariants}
                            className="relative group flex justify-center items-center"
                        >
                            {/* Background Card */}
                            <div className="absolute bg-purple-400 rounded-xl rotate-[0deg] w-[260px] h-[360px] shadow-lg"></div>

                            {/* Foreground Image Card */}
                            <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105 bg-white w-[260px] h-[360px] rotate-[-8deg]">
                                <Image
                                    src={MahbubImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <p className="text-emerald-600 font-medium text-lg mb-2">
                                    About Me
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
                                    My passions are{' '}
                                    <span className="text-blue-600">
                                        coding
                                    </span>
                                    ,{' '}
                                    <span className="text-emerald-600 dark:text-emerald-400">
                                        creating
                                    </span>{' '}
                                    &{' '}
                                    <span className="text-blue-500 dark:text-blue-400">
                                        innovating
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                                <p>
                                    Professional Front End Web Developer.
                                    Passionate and devoted to my job. With 2+
                                    years of professional Front End Web
                                    Development experience, I have the abilities
                                    and expertise to succeed on any project.
                                    I've helped numerous companies enhance their
                                    online presence and aim to assist you create
                                    a great company website. Learning new
                                    technology and improving my skills is my
                                    passion. I'm passionate about programming.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 dark:bg-emerald-500 dark:hover:bg-emerald-600">
                                    Contact Me
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSection;
