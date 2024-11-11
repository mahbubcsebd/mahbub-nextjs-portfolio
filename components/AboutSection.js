/* eslint-disable react/no-unescaped-entities */
'use client';

import AboutImage from "@/assets/images/about-me.png";
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
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const experienceVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: 'backOut',
            },
        },
    };

    return (
        <div className="relative py-16">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className=""
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Image Section */}
                        <motion.div
                            variants={imageVariants}
                            className="relative"
                        >
                            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-purple-100">
                                <Image
                                    src={AboutImage}
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                                {/* Experience Badge */}
                                <motion.div
                                    variants={experienceVariants}
                                    className="absolute bottom-10 -right-4 bg-white rounded-2xl shadow-lg px-6 py-3"
                                >
                                    <p className="text-4xl font-bold text-indigo-600">
                                        2+
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Year's Experience
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <motion.div variants={itemVariants}>
                                <p className="text-emerald-500 font-medium text-lg mb-2">
                                    About Me
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                                    My passions are{' '}
                                    <span className="text-blue-600">
                                        coding
                                    </span>
                                    ,{' '}
                                    <span className="text-emerald-500">
                                        creating
                                    </span>{' '}
                                    &{' '}
                                    <span className="text-blue-400">
                                        innovating
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="prose prose-lg text-gray-600 max-w-none"
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
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
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
