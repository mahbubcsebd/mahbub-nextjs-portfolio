import { FaMapMarkerAlt } from 'react-icons/fa';
import {
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaPhoneFlip
} from 'react-icons/fa6';

 const contactItems = [
        {
            type: 'website',
            icon: <FaGlobe />,
            value: 'Portfolio',
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
            type: 'address',
            icon: <FaMapMarkerAlt />,
            value: 'Dhaka-1215, Bangladesh',
            link: 'https://www.google.com/maps/search/?api=1&query=Farmgate+Tejgaon+Dhaka+1215',
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
    ];

    const skills = [
        { category: 'Frontend', items: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'Vue', 'Nuxt'] },
        { category: 'State Management', items: ['Redux', 'Context API'] },
        { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'Material-UI'] },
        { category: 'Backend', items: ['Node.js (Basic)', 'Express.js'] },
        { category: 'Database', items: ['MongoDB'] },
        { category: 'Version Control', items: ['Git'] },
      ];

    const experiences = [
        {
            id: 1,
            company: 'UiBarn',
            role: 'Frontend Developer',
            duration: 'Dec 2022 - Present',
            url: 'https://uibarn.com',
            descriptions: [
                'Led complete frontend architecture and development for high-impact projects like UiBarn (Vue/Nuxt), Karbar, and Abaya (React/Next.js), delivering scalable, performance-optimized solutions',
                'Engineered modular, scalable UI systems with a strong focus on performance, maintainability, and reusability.',
                'Developed and published production-ready React and HTML templates on ThemeForest, successfully approved and released.',
            ],
            // Engineered dynamic, modular UI systems with a focus on performance, scalability, and maintainability.
        },
        {
            id: 2,
            company: 'Luminous Labs',
            role: 'Frontend Developer',
            duration: 'Dec 2020 - Nov 2022',
            url: 'https://luminouslabsbd.com',
            descriptions: [
                'Worked on Droptienda, a custom-built CRM system — created layouts, modules, and fixed UI issues.',
                'Designed and shipped production-ready frontend templates for ThemeForest (HTML, CSS, JS).',
                'Developed responsive interfaces for multiple client projects, focusing on performance and usability.',
            ],
        },
    ];

    const educations = [
        {
            id: 1,
            institution: 'Sonargaon University',
            degree: 'Bachelor of Science in Computer Science and Engineering',
            duration: 'continuing',
            url: 'https://sonargaon.edu.bd',
        },
        // {
        //     id: 2,
        //     institution: 'Dr. Khandaker Mosarraf Hossain College',
        //     degree: 'Higher Secondary Certificate',
        //     duration: '2013 - 2015',
        //     url: 'https://uit.ac.bd',
        // },
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
        {
            id: 4,
            name: 'Todo Application',
            description:
                'A blogging platform with user authentication and rich text editing.',
            githubUrl: 'https://github.com/username/blog-platform',
        },
    ];

export { contactItems, educations, experiences, projects, skills };
