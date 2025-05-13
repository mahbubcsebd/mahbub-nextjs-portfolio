'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = ({ date, title, description, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full rounded-xl overflow-hidden border border-zinc-800 transition-colors"
        >
            <div className="p-4 flex gap-4">
                <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col grow">
                    <span className="text-emerald-400 text-sm">{date}</span>
                    <h2 className="text-xl font-semibold text-white mt-2">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                        {description}
                    </p>

                    <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-white mt-4 text-sm"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
