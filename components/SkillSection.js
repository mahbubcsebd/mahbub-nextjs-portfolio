"use client"

import Bootstrap from "@/assets/icons/bootstrap.svg";
import Css from "@/assets/icons/css.svg";
import Html from "@/assets/icons/html.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Jquery from "@/assets/icons/jquery.svg";
import Nextjs from '@/assets/icons/nextjs.svg';
import Nuxtjs from "@/assets/icons/nuxtjs.svg";
import React from "@/assets/icons/react.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import Vue from "@/assets/icons/vue.svg";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const skills = [
    {
        name: 'HTML',
        icon: Html,
        color: 'from-orange-500/20 to-orange-500/0',
    },
    {
        name: 'CSS',
        icon: Css,
        color: 'from-blue-500/20 to-blue-500/0',
    },
    {
        name: 'Bootstrap',
        icon: Bootstrap,
        color: 'from-purple-500/20 to-purple-500/0',
    },
    {
        name: 'Tailwind',
        icon: Tailwind,
        color: 'from-cyan-500/20 to-cyan-500/0',
    },
    {
        name: 'jQuery',
        icon: Jquery,
        color: 'from-blue-400/20 to-blue-400/0',
    },
    {
        name: 'React.js',
        icon: React,
        color: 'from-cyan-400/20 to-cyan-400/0',
    },
    {
        name: 'JavaScript',
        icon: Javascript,
        color: 'from-yellow-500/20 to-yellow-500/0',
    },
    {
        name: 'Vue.js',
        icon: Vue,
        color: 'from-emerald-500/20 to-emerald-500/0',
    },
    {
        name: 'Nuxt.js',
        icon: Nuxtjs,
        color: 'from-green-500/20 to-green-500/0',
    },
    {
        name: 'Next.js',
        icon: Nextjs,
        color: 'from-gray-500/20 to-gray-500/0',
    },
];

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
            }}
            className="relative group"
        >
            <div
                className={`absolute inset-0 bg-gradient-to-tl ${skill.color} rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-300`}
            />
            <div
                className={`absolute inset-0 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-300`}
                style={{
                    background: `radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))`,
                }}
            />

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center justify-center p-8 transition-colors border border-gray-800 rounded-3xl aspect-square hover:border-gray-700"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)', // Semi-transparent white background
                    backdropFilter: 'blur(50px)', // Glass blur effect
                    WebkitBackdropFilter: 'blur(50px)', // For Safari support
                }}
            >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800/50">
                    <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-8 h-8"
                    />
                </div>
                <h3 className="text-xl font-semibold text-white">
                    {skill.name}
                </h3>
            </motion.div>
        </motion.div>
    );
};

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div
            ref={sectionRef}
            className="py-16"
        >
            <div className="container">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-2 text-2xl font-medium text-emerald-400">
                            My Expertise & Skills
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full bg-emerald-400" />
                    </motion.div>

                    <motion.div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
