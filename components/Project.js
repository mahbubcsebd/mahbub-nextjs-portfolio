'use client';

import BootstrapIcon from '@/assets/icons/bootstrap.svg';
import CssIcon from '@/assets/icons/css.svg';
import HtmlIcon from '@/assets/icons/html.svg';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import JqueryIcon from '@/assets/icons/jquery.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import NuxtjsIcon from '@/assets/icons/nuxtjs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import TailwindIcon from '@/assets/icons/tailwind.svg';
import VueIcon from '@/assets/icons/vue.svg';
import BlogImage1 from '@/assets/images/blog-1.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'SaaS Landing Page Develop',
        version: 'Laravel Version',
        description:
            "To help businesses grow faster & improve user experiences, we've created Laravel-based SaaS platforms.",
        image: BlogImage1,
        techs: ['html', 'react', 'css', 'vue', 'bootstrap'],
    },
    {
        id: 2,
        title: 'Digital Banking Platform',
        version: 'Next.js Version',
        description:
            'Modern digital banking solution with enhanced security features and seamless user experience.',
        image: BlogImage1,
        techs: ['react', 'html', 'css', 'bootstrap'],
    },
    {
        id: 3,
        title: 'E-commerce Dashboard',
        version: 'Vue Version',
        description:
            'Comprehensive e-commerce management dashboard with real-time analytics and inventory tracking.',
        image: BlogImage1,
        techs: ['vue', 'html', 'css', 'bootstrap'],
    },
];

    const getTechIcon = (tech) => {
        switch (tech) {
            case 'html':
                return HtmlIcon;
            case 'react':
                return ReactIcon;
            case 'css':
                return CssIcon;
            case 'vue':
                return VueIcon;
            case 'bootstrap':
                return BootstrapIcon;
            case 'tailwind':
                return TailwindIcon;
            case 'nextjs':
                return NextjsIcon;
            case 'nuxtjs':
                return NuxtjsIcon;
            case 'jquery':
                return JqueryIcon;
            case 'javascript':
                return JavaScriptIcon;
            default:
                return 'bg-gray-500';
        }

    return (
        <div
            className={`w-8 h-8 rounded-full ${getIconClass(
                tech
            )} flex items-center justify-center`}
        >
            <span className="text-xs text-white">
                {tech.charAt(0).toUpperCase()}
            </span>
        </div>
    );
};

const Project = () => {
    return (
        <div className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
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
                                    <p className="text-sm text-zinc-400">
                                        {project.version}
                                    </p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
