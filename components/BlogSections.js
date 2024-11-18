"use client"

// import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import blogs from '@/constant/blogs';
import { motion } from 'framer-motion';
import BlogCard from "./BlogCard";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { DirectionAwareHover } from './ui/direction-aware-hover';

export function CardDemo() {
    return (
        <div className="max-w-xs w-full group/card">
            <div
                className={cn(
                    ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
                    'bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover'
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/manu.png"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                            Manu Arora
                        </p>
                        <p className="text-sm text-gray-400">2 min read</p>
                    </div>
                </div>
                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        Author Card
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        Card with Author avatar, complete name and time to read
                        - most suitable for blogs.
                    </p>
                </div>
            </div>
        </div>
    );
}



export function DirectionAwareHoverDemo() {
    const imageUrl =
        'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className="h-[40rem] relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">In the mountains</p>
                <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
        </div>
    );
}



const BlogSections = () => {
    return (
        <div className="py-16">
        <CardDemo />
        <DirectionAwareHoverDemo />
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
