'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const HobbyCard = ({ hobby }) => {
    return (
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
    );
};

export default HobbyCard;
