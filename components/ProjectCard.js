import { Card } from '@/components/ui/card';
import getTechIcon from '@/utils/techIcon';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border-gray-200 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-primary/40 rounded-xl">
        {/* Clickable Image */}
        <Link
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden bg-gray-100 aspect-video dark:bg-zinc-800"
        >
          <div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:opacity-100" />
          </div>
        </Link>

        <div className="flex flex-col flex-grow p-6 space-y-4">
          <div className="space-y-2">
            {/* Clickable Title */}
            <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-zinc-100 group-hover:text-primary">
              <Link
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-primary decoration-2 underline-offset-4"
              >
                {project.title}
              </Link>
            </h3>
            {/*
            {project.version && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                v{project.version}
              </span>
            )} */}
          </div>

          <p className="flex-grow text-sm leading-relaxed text-gray-600 dark:text-zinc-400 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.techs.map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center w-8 h-8 p-1.5 border border-gray-200 rounded-md dark:border-zinc-700 bg-white dark:bg-zinc-800"
                title={tech}
              >
                <Image
                  src={getTechIcon(tech)}
                  alt={tech}
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-zinc-800">
            {/* Live Preview Button */}
            <Link
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center flex-1 h-10 gap-2 px-4 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600"
            >
              <FaExternalLinkAlt size={14} /> Live Preview
            </Link>

            {/* GitHub Button */}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 px-4 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-300 rounded-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600"
                title="View on GitHub"
              >
                <FaGithub size={16} />
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
