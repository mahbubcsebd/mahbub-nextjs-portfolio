'use client';

import projects from '@/constant/projects';
import useDictionary from '@/hooks/useDictionary';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const Project = () => {
  const { dictionary } = useDictionary();
  const sectionTitle = dictionary.Portfolio.sectionTitle;
  return (
    <div id="portfolio" className="pb-10 lg:py-16">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="https://github.com/mahbubcsebd?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-semibold text-center transition-all duration-300 border rounded-lg text-emerald-600 hover:text-white hover:bg-emerald-500 border-emerald-500"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
