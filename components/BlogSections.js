'use client';

import blogs from '@/constant/blogs';
import Link from 'next/link';
import BlogCard from './BlogCard';

const BlogSections = () => {
  return (
    <section className="mb-14 lg:my-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-linear-to-r from-teal-500 to-blue-600 bg-clip-text md:text-5xl">
            My Blogs
          </h1>

          <Link href="/blogs" aria-label="View more blog posts">
            <button className="px-4 py-2 text-sm transition duration-200 border rounded-lg border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white">
              View More
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id || index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSections;
