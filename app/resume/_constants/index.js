import { FaMapMarkerAlt } from 'react-icons/fa';
import {
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaPhoneFlip,
    FaSkype
} from 'react-icons/fa6';

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
        'Tailwind CSS, Bootstrap, Material-UI',
        'Version Control (Git/GitHub)',
        'RESTful APIs',
        'Basic Node.js, Express.js,',
        'MongoDB & Mongoose',
        'Authentication (JWT, OAuth)',
        'JSON & Axios',
        'Redux, Context API',
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
        {
            id: 4,
            name: 'Todo Application',
            description:
                'A blogging platform with user authentication and rich text editing.',
            githubUrl: 'https://github.com/username/blog-platform',
        },
    ];

export { contactItems, educations, experiences, projects, skills };
