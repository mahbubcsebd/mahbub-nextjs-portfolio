import { projects } from '../_constants'

const Projects = () => {
  return (
    <div className="mb-8">
        <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
            Projects
        </h2>
        <ul>
            {projects.map((project) => (
                <li
                    key={project.id}
                    className="mb-4"
                >
                    <div className="flex justify-between gap-4">
                        <div className="">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {project.name}
                            </h3>
                            <p className="text-xs font-normal text-gray-600">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex justify-end gap-2 min-w-12">
                            <Link
                                href={`${project.githubUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithubAlt />
                            </Link>
                            <Link
                                href={`${project.githubUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaRegEye />
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Projects