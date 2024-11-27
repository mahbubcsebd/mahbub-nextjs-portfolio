"use client"

// import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import blogs from '@/constant/blogs';
import { motion } from 'framer-motion';
import BlogCard from "./BlogCard";





const BlogSections = () => {
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
