"use client"

import hobbies from '@/constant/hobbies';
import { motion } from 'framer-motion';
import HobbyCard from './HobbyCard';



const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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
                        <HobbyCard
                            key={hobby.id}
                            hobby={hobby}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default LoveToDoSection;
