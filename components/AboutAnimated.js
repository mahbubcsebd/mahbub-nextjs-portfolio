'use client';

import MahbubImage from '@/assets/images/mahbub.jpg';
import useDictionary from '@/hooks/useDictionary';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutAnimated = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { dictionary } = useDictionary();

  const {
    title,
    sectionTitle,
    myPassion,
    coding,
    creating,
    innovating,
    description,
    contactMe,
  } = dictionary.AboutMe;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="relative grid items-center grid-cols-1 gap-16 xl:gap-0 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="relative flex items-center justify-center group"
        >
          {/* Background card */}
          <div className="absolute bg-purple-400 rounded-xl w-[260px] h-[360px] shadow-lg" />

          {/* Foreground image card */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105 bg-white w-[260px] h-[360px] rotate-[-8deg]">
            <Image
              src={MahbubImage}
              alt="Profile"
              fill
              priority
              placeholder="blur"
              className="object-cover transition-transform duration-500 rounded-xl group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="relative space-y-6 lg:pl-12">
          <div className="absolute top-0 left-0 hidden w-1 h-full bg-emerald-600 lg:block"></div>
          <motion.div variants={itemVariants}>
            <p className="mb-2 text-lg font-medium text-emerald-600">{title}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-4xl font-bold text-gray-800 lg:text-5xl dark:text-white">
              {myPassion} <span className="text-blue-600">{coding}</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                {creating}{' '}
              </span>{' '}
              <span className="text-blue-500 dark:text-blue-400">
                {innovating}
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="leading-relaxed text-gray-700 dark:text-gray-300"
          >
            <p>{description}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button className="px-8 py-3 font-medium text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
              {contactMe}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutAnimated;
