import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import getTechIcon from '@/utils/techIcon';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({project}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
        >
            <Card className="overflow-hidden bg-zinc-900 text-white border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <CardHeader>
                    <p className="text-sm text-zinc-400">{project.version}</p>
                    <CardTitle className="text-xl font-bold mt-1">
                        {project.title}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                        {project.description}
                    </p>
                    <div className="flex items-center flex-wrap gap-2">
                        {project.techs.map((tech) => (
                            <div
                                key={tech}
                                className="w-8 h-8 flex items-center justify-center p-1 border border-zinc-700 rounded-sm backdrop-sepia bg-white/10"
                                title={tech}
                            >
                                <Image
                                    src={getTechIcon(tech)}
                                    alt={tech}
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
