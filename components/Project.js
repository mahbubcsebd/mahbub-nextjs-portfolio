'use client';

import projects from '@/constant/projects';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
