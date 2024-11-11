"use client"

import BlogImage1 from "@/assets/images/blog-1.png";
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
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col flex-grow">
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

const BlogSections = () => {
    const blogs = [
        {
            date: '30 Jan 2024',
            title: 'The Ultimate Guide to Responsive Web Design',
            description:
                "Responsive web design is an approach to web development that ensures a website's layout and content adapt.",
            image: BlogImage1,
        },
        {
            date: '30 Jan 2024',
            title: 'Exploring the Power of JavaScript Libraries and Frameworks',
            description:
                "Responsive web design is an approach to web development that ensures a website's layout and content adapt.",
            image: BlogImage1,
        },
    ];

    return (
        <div className="py-16">
            <div className="container">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-emerald-400">
                        My Blogs
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-lg border border-emerald-400 text-emerald-400 text-sm"
                    >
                        View More
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSections;
