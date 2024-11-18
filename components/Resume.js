'use client';

import MahbubProfile from '@/assets/images/mahbub.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaPhoneFlip,
    FaSkype
} from 'react-icons/fa6';

const Resume = () => {
    const contactItems = [
        {
            type: 'website',
            icon: <FaGlobe />,
            value: 'Mahbubur Rahman',
            link: '#',
        },
        {
            type: 'github',
            icon: <FaGithub />,
            value: 'github.com/mahbubcsebd',
            link: 'https://github.com/mahbubcsebd',
        },
        {
            type: 'linkedin',
            icon: <FaLinkedinIn />,
            value: 'linkedin/mahbubcsebd',
            link: '#',
        },
        {
            type: 'email',
            icon: <FaEnvelope />,
            value: 'mahbub.cse.me@gmail.com',
            link: 'mailto:mahbub.cse.me@gmail.com',
        },
        {
            type: 'phone',
            icon: <FaPhoneFlip />,
            value: '+880 188622 5492',
            link: 'tel:+8801886225492',
        },
        {
            type: 'skype',
            icon: <FaSkype />,
            value: 'mahbubcsebd',
            link: 'skype:mahbubcsebd?chat',
        },
        {
            type: 'address',
            icon: <FaMapMarkerAlt />,
            value: 'Dhaka-1215, Bangladesh',
            link: 'https://www.google.com/maps/search/?api=1&query=Farmgate+Tejgaon+Dhaka+1215',
        },
    ];

const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'Material-UI',
    'Version Control (Git/GitHub)',
    'RESTful APIs',
    'Basic Node.js',
    'Express.js',
    'MongoDB & Mongoose',
    'JSON & Axios',
    'State Management (Redux, Context API)',
    'Authentication (JWT, OAuth)',
    'Basic Deployment (Vercel, Netlify, Heroku)',
    'Agile Methodology',
];

    const experiences = [
        {
            id: 1,
            company: 'UiBarn',
            role: 'Frontend Developer',
            duration: 'Dec 2022 - Present',
            url: 'https://uibarn.com',
            descriptions: [
                'Norway based software company.',
                'Working with Miros Group web application.',
            ],
        },
        {
            id: 2,
            company: 'Luminous Labs',
            role: 'Frontend Developer',
            duration: 'Dec 2020 - Nov 2022',
            url: 'https://luminouslabsbd.com',
            descriptions: [
                'Norway based software company.',
                'Working with Miros Group web application.',
                'Norway based software company.',
                'Working with Miros Group web application.',
            ],
        },
    ];

    const educations = [
        {
            id: 1,
            institution: 'Sonargaon University',
            degree: 'Bachelor of Science in Computer Science and Engineering',
            duration: '2015 - 2019',
            url: 'https://uit.ac.bd',
        },
        {
            id: 2,
            institution: 'Dr. Khandaker Mosarraf Hossain College',
            degree: 'Higher Secondary Certificate',
            duration: '2013 - 2015',
            url: 'https://uit.ac.bd',
        },
    ];

    const projects = [
        {
            id: 1,
            name: 'Portfolio Website',
            description:
                'A personal portfolio website built with Next.js and Tailwind CSS.',
            githubUrl: 'https://github.com/username/portfolio',
            liveUrl: 'https://portfolio.example.com',
        },
        {
            id: 2,
            name: 'E-commerce App',
            description:
                'A full-stack e-commerce application using MERN stack.',
            githubUrl: 'https://github.com/username/ecommerce-app',
            liveUrl: 'https://ecommerce.example.com',
        },
        {
            id: 3,
            name: 'Blog Platform',
            description:
                'A blogging platform with user authentication and rich text editing.',
            githubUrl: 'https://github.com/username/blog-platform',
        },
    ];

    return (
        <div className="max-w-[22cm] mx-auto bg-white text-black">
            <div className="grid min-h-screen grid-cols-12">
                <div className="h-full col-span-4 bg-yellow-400">
                    <div className="flex justify-center mb-10 bg-gray-400">
                        <div className="w-[200px] h-[230px]">
                            <Image
                                src={MahbubProfile}
                                alt="mahbub-profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="px-6 pb-10 space-y-6 sidebar-content">
                        <div className="contact">
                            <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold uppercase">
                                <span className="w-6 h-[2px] bg-white inline-block"></span>
                                Contact
                            </h2>
                            <ul className="grid gap-3">
                                {contactItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <div>
                                            <p className="flex items-center justify-center">
                                                {item.icon}
                                            </p>
                                        </div>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.value}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="skill">
                            <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold uppercase">
                                <span className="w-6 h-[2px] bg-white inline-block"></span>
                                Skills
                            </h2>
                            <ul className="grid gap-3">
                                {skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-full col-span-8 bg-gray-200">
                    {/* Header */}
                    <div className="px-6 pt-10 pb-5 bg-yellow-400 border-b-2 border-gray-300 resume-header">
                        <h2 className="mb-2 text-5xl font-semibold">
                            Mahbubur Rahman
                        </h2>
                        <p className="text-xl font-normal text-gray-700">
                            Frontend Developer
                        </p>
                    </div>
                    <div className="px-6 pt-5 pb-10 resume-content">
                        <div className="mb-8">
                            <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
                                Experience
                            </h2>
                            <div className="relative border-l-2 border-yellow-400">
                                {experiences.map((experience) => (
                                    <div
                                        key={experience.id}
                                        className="flex flex-col mb-10 ml-8"
                                    >
                                        <div className="absolute left-[-10px] h-4 w-4 bg-yellow-400 border-2 border-yellow-400 rounded-full"></div>
                                        <p className="text-sm text-gray-500">
                                            {experience.duration}
                                        </p>
                                        <h3 className="mt-1 text-lg font-semibold text-gray-800">
                                            {experience.role} -{' '}
                                            <Link
                                                href={experience.url}
                                                className="font-normal"
                                                target="_blank"
                                            >
                                                {experience.company}
                                            </Link>
                                        </h3>
                                        <ul className="grid gap-2 mt-2 text-gray-700 whitespace-pre-line">
                                            {experience.descriptions.map(
                                                (description, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-1 text-xs"
                                                    >
                                                        <p className="inline-block">
                                                            <span className="inline-block w-[6px] h-[6px] bg-black rounded-full"></span>
                                                        </p>
                                                        {description}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
                                Projects
                            </h2>
                            <div className="relative border-l-2 border-yellow-400">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex flex-col mb-10 ml-8"
                                    >
                                        <div className="absolute left-[-10px] h-4 w-4 bg-yellow-400 border-2 border-yellow-400 rounded-full"></div>
                                        <h3 className="mt-1 text-lg font-semibold text-gray-800">
                                            <Link
                                                href={project.githubUrl}
                                                className="font-normal text-blue-600 hover:underline"
                                                target="_blank"
                                            >
                                                {project.name}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600">
                                            {project.description}
                                        </p>
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                className="mt-2 text-sm text-blue-500 hover:underline"
                                                target="_blank"
                                            >
                                                View Live
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
                                Education
                            </h2>
                            <div className="relative border-l-2 border-yellow-400">
                                {educations.map((education) => (
                                    <div
                                        key={education.id}
                                        className="flex flex-col mb-10 ml-8"
                                    >
                                        <div className="absolute left-[-10px] h-4 w-4 bg-yellow-400 border-2 border-yellow-400 rounded-full"></div>
                                        <p className="text-sm text-gray-500">
                                            {education.duration}
                                        </p>
                                        <h3 className="mt-1 text-lg font-semibold text-gray-800">
                                            <Link
                                                href={education.url}
                                                className="font-normal"
                                                target="_blank"
                                            >
                                                {education.institution}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-600">
                                            {education.degree}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
