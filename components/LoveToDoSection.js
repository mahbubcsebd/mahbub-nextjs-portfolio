"use client"

import MountainHiking from "@/assets/icons/mountain-hiking.svg";
import MovieWatching from "@/assets/icons/movie-watching.svg";
import Photography from '@/assets/icons/photography.svg';
import Travelling from "@/assets/icons/travelling.svg";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const hobbies = [
    {
        image: Travelling,
        title: 'Travelling',
        description: 'Exploring new places',
    },
    {
        image: MountainHiking,
        title: 'Mountain Hiking',
        description: 'Conquering peaks',
    },
    {
        image: Photography,
        title: 'Photography',
        description: 'Capturing moments',
    },
    {
        image: MovieWatching,
        title: 'Movie Watching',
        description: 'Enjoying stories',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const LoveToDoSection = () => {
    return (
        <div className="py-16">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        <span className="text-transparent bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text">
                            Love To Do
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.title}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className="h-full"
                        >
                            <Card
                                className="h-full overflow-hidden border group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)', // For Safari support
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                                    <div className="mb-4 text-4xl transition-transform duration-300 transform group-hover:scale-110">
                                        <Image
                                            src={hobby.image}
                                            alt={hobby.title}
                                            className=""
                                        />
                                    </div>
                                    <h3 className="inline-block text-2xl font-semibold text-transparent bg-gradient-to-t from-gray-800 to-gray-400 bg-clip-text">
                                        {hobby.title}
                                    </h3>
                                    {/* <p className="text-gray-400">
                                        {hobby.description}
                                    </p> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LoveToDoSection;
