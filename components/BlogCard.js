'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = ({ date, title, description, image }) => {
  return (
    <motion.div
      className="w-full overflow-hidden transition-all duration-300 border rounded-xl border-zinc-800 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/10"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col gap-4 p-4 sm:flex-row">
        {/* Image Container - Full width on mobile, fixed width on desktop */}
        <div className="relative w-full h-48 overflow-hidden rounded-lg sm:w-32 sm:h-32">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1">
          <span className="text-xs sm:text-sm text-emerald-400">{date}</span>
          <h2 className="mt-1 text-lg font-semibold text-white sm:mt-2 sm:text-xl line-clamp-2">
            {title}
          </h2>
          <p className="mt-2 text-xs text-gray-400 sm:text-sm line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 mt-3 text-xs text-white sm:mt-4 sm:text-sm w-fit"
          >
            Read More
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
