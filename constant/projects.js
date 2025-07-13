// const projects = [
//     {
//         id: 1,
//         title: 'SaaS Landing Page Develop',
//         version: 'Laravel Version',
//         description:
//             "To help businesses grow faster & improve user experiences, we've created Laravel-based SaaS platforms.",
//         image: BlogImage1,
//         techs: ['html', 'react', 'css', 'vue', 'bootstrap'],
//     },
//     {
//         id: 2,
//         title: 'Digital Banking Platform',
//         version: 'Next.js Version',
//         description:
//             'Modern digital banking solution with enhanced security features and seamless user experience.',
//         image: BlogImage1,
//         techs: ['react', 'html', 'css', 'bootstrap'],
//     },
//     {
//         id: 3,
//         title: 'E-commerce Dashboard',
//         version: 'Vue Version',
//         description:
//             'Comprehensive e-commerce management dashboard with real-time analytics and inventory tracking.',
//         image: BlogImage1,
//         techs: ['vue', 'html', 'css', 'bootstrap'],
//     },
// ];

import ajux from '@/assets/images/ajux.png';
import berfey from '@/assets/images/berfey.png';
import cargopoint from '@/assets/images/cargopoint.png';
import ilearning from '@/assets/images/ilearning.png';
import policyhut from '@/assets/images/policyhut.png';
import uibarn from '@/assets/images/uibarn.png';
// import shuttr from '@/assets/images/shuttr.png';
// import eprovent from '@/assets/images/eprovent.png';
// import luminux from '@/assets/images/luminux.png';

const projects = [
  {
    id: 1,
    title: 'Ui Barn Marketplace',
    version: '',
    description:
      'Ui Barn is a digital marketplace for UI/UX design resources, assets, templates, and more...',
    image: uibarn,
    techs: ['nuxtjs', 'vue', 'tailwind'], // cleaned up
    link: 'https://uibarn.com/',
    github: '',
  },
  {
    id: 2,
    title: 'Policyhut Next JS',
    version: '',
    description:
      'Policyhut is a modern and professional insurance agency Next Js template...',
    image: policyhut,
    techs: ['nextjs', 'react', 'bootstrap'], // cleaned up
    link: 'https://policyhutt.vercel.app/',
    github: 'https://github.com/mahbubcsebd/policyhut',
  },
  {
    id: 3,
    title: 'iLearning',
    version: '',
    description:
      'iLearning is a modern and professional e-learning platform HTML5 template...',
    image: ilearning,
    techs: ['html', 'css', 'bootstrap', 'jquery'],
    link: 'https://policyhutt.vercel.app/',
    github: 'https://github.com/mahbubcsebd/ilearning',
  },
  {
    id: 4,
    title: 'Cargopoint Next Js',
    version: '',
    description:
      'Cargopoint is a modern and professional cargo and logistics Next Js template...',
    image: cargopoint,
    techs: ['nextjs', 'react', 'bootstrap'],
    link: 'https://cargopoint.vercel.app/',
    github: 'https://github.com/mahbubcsebd/cargopoint',
  },
  {
    id: 5,
    title: 'Ajux React Template',
    version: '',
    description: 'Ajux is a Creative Agency React Template...',
    image: ajux,
    techs: ['react', 'bootstrap'],
    link: 'https://themeforest.net/item/ajux-creative-agency-react-template/44952845?s_rank=8',
    github: 'https://github.com/mahbubcsebd/ajux-react',
  },
  {
    id: 6,
    title: 'Shuttr',
    version: '',
    description: 'Shuttr - Fashion eCommerce HTML Template...',
    image: berfey,
    techs: ['html', 'css', 'bootstrap', 'javascript', 'jquery'],
    link: 'https://themeforest.net/item/berfey-beauty-cosmetics-ecommerce-html5-template/36947322?s_rank=1',
    github: 'https://github.com/mahbubcsebd/shuttr',
  },
];

// export default portfolioProjects;

export default projects;
