import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import getTechIcon from '@/utils/techIcon';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <Card className="flex flex-col h-full overflow-hidden text-white transition-all duration-300 bg-white border-gray-300 hover:border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-700">
        {/* Clickable Image */}
        <Link
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden aspect-video"
        >
          <motion.div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-full h-full duration-300 ransition-all hover:scale-105"
            />
          </motion.div>
        </Link>

        <div className="flex flex-col flex-grow">
          <CardHeader>
            {/* <p className="text-sm text-zinc-400">{project.version}</p> */}
            {/* Clickable Title */}
            <CardTitle className="text-xl font-bold text-gray-800 hover:text-gray-900 dark:text-zinc-300 dark:hover:text-zinc-900">
              <Link
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </Link>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col justify-between flex-grow">
            <p className="flex-grow mb-4 text-sm text-gray-600 dark:text-zinc-400">
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center w-8 h-8 p-1 border border-gray-100 rounded-sm shadow-sm dark:border-zinc-700 backdrop-sepia bg-white/10"
                    title={tech}
                  >
                    <Image
                      src={getTechIcon(tech)}
                      alt={tech}
                      width={24}
                      height={24}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* GitHub Icon if link exists */}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-600 transition-colors hover:text-gray-800 dark:text-zinc-400 dark:hover:text-white"
                  />
                </Link>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
