import Link from 'next/link';
import { FaGithubAlt, FaRegEye } from 'react-icons/fa6';
import { projects } from './_constants';
import ResumeTitle from './ResumeTitle';

const Projects = () => {
  return (
    <div className="mb-6 print:mb-10">
      <ResumeTitle className="text-slate-800">Projects</ResumeTitle>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-gray-200 pb-5">
            <div className="flex justify-between gap-4 mb-2 flex-wrap">
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-base font-semibold text-slate-700 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{project.summary}</p>
                <div className="flex flex-wrap gap-1 text-[11px] font-medium">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-2 py-[2px] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-600 text-[15px]">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-slate-800 transition-colors"
                  >
                    <FaGithubAlt />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="hover:text-slate-800 transition-colors"
                  >
                    <FaRegEye />
                  </Link>
                )}
              </div>
            </div>
            {project.responsibilities?.length > 0 && (
              <ul className="space-y-1 mt-3">
                {project.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-slate-400 text-xs mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-[13px] text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
