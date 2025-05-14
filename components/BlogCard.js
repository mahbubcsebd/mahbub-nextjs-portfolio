'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = ({ date, title, description, image }) => {
    return (
        <div className="w-full overflow-hidden transition-colors border rounded-xl border-zinc-800 hover:border-emerald-400">
            <div className="flex gap-4 p-4">
                <div className="relative w-32 h-32 overflow-hidden rounded-lg shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col grow">
                    <span className="text-sm text-emerald-400">{date}</span>
                    <h2 className="mt-2 text-xl font-semibold text-white">
                        {title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                        {description}
                    </p>

                    <motion.button
                        whileHover={{ x: 5 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        className="flex items-center gap-2 mt-4 text-sm text-white"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
