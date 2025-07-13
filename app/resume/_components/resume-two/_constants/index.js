import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaPhoneFlip,
} from 'react-icons/fa6';

const contactItems = [
  {
    type: 'website',
    icon: <FaGlobe />,
    value: 'Portfolio',
    link: 'https://mahbub-dev.vercel.app',
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
    link: 'https://www.linkedin.com/in/mahbubcseme/',
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
  {
    category: 'Frontend',
    items: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'Vue', 'Nuxt'],
  },
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
      'Led the entire frontend architecture and development for high-impact projects such as UiBarn (Vue/Nuxt), Karbar and Abaya (React/Next. js), delivering scalable, performance-optimized solutions',
      'Created modular, scalable UI Systems designed to perform, be maintainable and reusable.',

      'Launched production-ready React and HTML templates on ThemeForest that went through the approval process and got released.',
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
      'Droptienda, custom CRM system, Layouts modules, UI fixes.',
      'Created and sent production ready frontend templates to ThemeForest (HTML, CSS, JS).',
      'Created responsive interfaces for a number of client projects with an emphasis on performance and usability.',
    ],
  },
];

const educations = [
  {
    id: 1,
    institution: 'Sonargaon University',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    duration: '2018 - 2022',
    url: 'https://sonargaon.edu.bd',
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
    name: 'Karbar',
    techStack: ['React 19', 'Next.js 15', 'Tailwind CSS', 'shadcn/ui'],
    liveUrl: 'https://karbar.shop',
    githubUrl:
      'https://gitlab.com/karbar-shop/theme/grocery-food-delivery/template-one',
    summary:
      'A theme platform (on subscription-based eCommerce) that comes with theme management and POS integration, powerful analytics, team and agency management and enterprise-grade features.',

    responsibilities: [
      'Designed and Developed Entire Frontend structure using (React 19) and (Next. js 1 5 and shadcn/ui — making sure your code is scalable, maintainable, and modern.',
      'Developed extensible multi-theme system allows users to change storefront themes on the fly.',
      'Created a dynamic POS interface with multiple card layouts such as image-only, text-only, and hybrid views.',
      'Implemented real-time language switch(i18n) to make it go global.',
      'Realized the infinite scroll and virtualized lists to navigate through products without any latency issues.',
      'Created Tally integration to log every transaction in real-time and get business insights.',
      'Embedded dynamic analytics integrations: Google Tag Manager (GTM), Google Analytics, Facebook Pixel & Facebook Conversion API.',
      'Crafted a reusable and scalable component system to streamline UI consistency and development velocity.',
      'Obtained perfect Lighthouse scores (100/100) for SEO, performance & accessibility by conducting in-depth audits & optimizations.',
    ],
  },
  {
    id: 2,

    name: 'UiBarn',

    techStack: ['Vue. js', 'Nuxt. js', 'Tailwind CSS', 'Headless UI'],

    liveUrl: 'https://uibarn.com/',

    summary:
      'A new-age digital asset marketplace for creators to sell and collaborate on templates, UI kits and more.',

    responsibilities: [
      'Built the frontend architecture in Vue. js and Nuxt. js with practical server-side features (SSR) and the best API; without compromising on performance.',

      'Used Tailwind CSS and Headless UI to develop page layouts that are accessible and responsive.',

      'Authored and improved authentication & authorization systems to control user access and security successes.',

      'Features include- “Apply to Develop”, allowing for collaboration between designers and developers during feature creation.',

      'Optimized the platform for scalability to add new digital asset categories and functionalities',
    ],
  },
  {
    id: 3,
    name: 'Abaya',
    techStack: ['React.js', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://abayaa.shop',
    githubUrl: 'https://gitlab.com/barn-client-project/abaya-avenue-shop-next',
    summary:
      'A fast niche eCommerce platform for abaya and modest fashion meant to deliver high performance and user experience.',

    responsibilities: [
      'Built the entire frontend in React. js and Next. js, with an emphasis on performance, responsiveness, and SEO.',

      'Built-in RESTful APIs to manage dynamic content such as products, cart, and checkout flows.',

      'Built custom reviews with form handling and user contributed content moderation.',

      'Ensured high performance metrics (100/100 on PageSpeed) and accessibility compliance on all devices.',

      'Worked closely with stakeholders to develop a pixel-perfect, production-ready storefront serving as a platform for continued business expansion.',
    ],
  },
];

export { contactItems, educations, experiences, projects, skills };
