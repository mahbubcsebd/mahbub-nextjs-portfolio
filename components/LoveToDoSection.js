'use client';

import MountainHiking from '@/assets/icons/mountain-hiking.svg';
import MovieWatching from '@/assets/icons/movie-watching.svg';
import Photography from '@/assets/icons/photography.svg';
import Travelling from '@/assets/icons/travelling.svg';
import useDictionary from '@/hooks/useDictionary';
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
  const { dictionary } = useDictionary();

  const {
    sectionTitle,
    travelling,
    mountainHiking,
    photography,
    movieWatching,
  } = dictionary.Love;

  const hobbies = [
    {
      id: 1,
      image: Travelling,
      title: travelling,
      description: 'Exploring new places',
    },
    {
      id: 2,
      image: MountainHiking,
      title: mountainHiking,
      description: 'Conquering peaks',
    },
    {
      id: 3,
      image: Photography,
      title: photography,
      description: 'Capturing moments',
    },
    {
      id: 4,
      image: MovieWatching,
      title: movieWatching,
      description: 'Enjoying stories',
    },
  ];

  return (
    <div className="mb-14 lg:my-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-linear-to-r from-teal-500 to-blue-600 bg-clip-text">
              {sectionTitle}
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
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveToDoSection;
