export const mahbubData = {
  // ============ PERSONAL INFO ============
  personal: {
    name: 'Mahbubur Rahman',
    nickname: 'Mahbub',
    title: 'Full Stack Software Engineer',
    tagline: 'Building Scalable Web Solutions with Modern Technologies',
    avatar: 'http://localhost:3000/mahbub.png',
    profilePicture: 'http://localhost:3000/mahbub.png',
    resumeUrl: '/documents/mahbub-resume.pdf',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh',
      timezone: 'Asia/Dhaka (GMT+6)',
    },
    languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Basic)'],
    availability: 'Open to freelance & full-time opportunities',
  },

  // ============ ABOUT / BIO ============
  about: {
    short:
      'Passionate full-stack developer specialized in building scalable web applications with Next.js, Node.js, and modern cloud technologies.',
    long: `I'm a software engineer with 3+ years of experience in full-stack web development.
    I specialize in building high-performance, scalable applications using the latest technologies
    like Next.js, React, Node.js, and Prisma ORM. I follow clean code principles, SOLID architecture,
    and love solving complex problems with elegant solutions.`,
    interests: [
      'Web Development',
      'System Design',
      'Cloud Architecture',
      'Open Source',
      'Teaching & Mentoring',
    ],
    hobbies: ['Coding', 'Reading Tech Blogs', 'Playing Cricket', 'Traveling'],
  },

  // ============ TECHNICAL SKILLS ============
  skills: {
    frontend: [
      { name: 'Next.js', level: 95 },
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Redux / Zustand', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'Prisma ORM', level: 95 },
      { name: 'REST API', level: 95 },
      { name: 'GraphQL', level: 75 },
    ],
    database: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 75 },
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Vercel', level: 90 },
      { name: 'AWS (Basic)', level: 70 },
    ],
    tools: ['VS Code', 'Postman', 'Figma', 'Jira', 'Notion', 'Slack'],
    concepts: [
      'Clean Architecture',
      'SOLID Principles',
      'Design Patterns',
      'Microservices',
      'RESTful Design',
      'Agile/Scrum',
    ],
  },

  // ============ WORK EXPERIENCE ============
  experience: [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Ltd.',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      duration: 'Jan 2023 - Present',
      period: '1 year 10 months',
      description:
        'Leading development of enterprise web applications using Next.js and Node.js.',
      responsibilities: [
        'Architected and developed a microservice-based e-commerce platform serving 50k+ users',
        'Implemented server-side rendering (SSR) for optimal performance',
        'Reduced page load time by 60% through optimization',
        'Mentored 3 junior developers',
      ],
      technologies: [
        'Next.js 14',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Docker',
      ],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Agency BD',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      duration: 'Jun 2021 - Dec 2022',
      period: '1 year 7 months',
      description: 'Developed custom web applications for various clients.',
      responsibilities: [
        'Built 15+ client projects using React and Node.js',
        'Designed and implemented RESTful APIs',
        'Optimized database queries by 40%',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
  ],

  // ============ PROJECTS ============
  projects: [
    {
      id: 1,
      name: 'E-Commerce Microservice Platform',
      tagline: 'Scalable multi-vendor marketplace',
      description:
        'A production-ready microservice-based e-commerce platform with separate services for products, orders, payments, and users.',
      category: 'Web Application',
      demoUrl: 'https://ecommerce-demo.mahbub.dev',
      githubUrl: 'https://github.com/mahbub/ecommerce-microservice',
      technologies: [
        'Next.js 15',
        'Prisma ORM',
        'PostgreSQL',
        'Docker',
        'Redis',
        'Stripe API',
      ],
      features: [
        'Multi-vendor support',
        'Product variant management',
        'Real-time inventory tracking',
        'Payment gateway integration',
        'Admin dashboard with analytics',
      ],
      status: 'Live',
      date: '2024',
    },
    {
      id: 2,
      name: 'POS System with Product Variants',
      tagline: 'Modern point-of-sale solution',
      description:
        'A comprehensive POS system for retail businesses with advanced product variant management and sales analytics.',
      category: 'Business Software',
      demoUrl: 'https://pos-demo.mahbub.dev',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'MongoDB',
        'TailwindCSS',
      ],
      features: [
        'Dynamic cart with variant selection',
        'SKU-based product management',
        'Discount & coupon system',
        'Invoice generation',
        'Sales analytics dashboard',
      ],
      status: 'Live',
      date: '2023',
    },
    {
      id: 3,
      name: 'Real-Time Chat Application',
      tagline: 'Instant messaging with WebSockets',
      description:
        'A real-time chat app featuring private messaging, group chats, and file sharing.',
      category: 'Web Application',
      demoUrl: 'https://chat-app.mahbub.dev',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time messaging',
        'Private & group chats',
        'File/image sharing',
        'Typing indicators',
      ],
      status: 'Completed',
      date: '2023',
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Dhaka',
      location: 'Dhaka, Bangladesh',
      duration: '2017 - 2021',
      grade: 'CGPA: 3.75/4.00',
      achievements: [
        "Dean's List (2019, 2020)",
        'Led university coding club',
        'Won 2nd place in National Hackathon 2020',
      ],
    },
  ],

  // ============ CERTIFICATIONS ============
  certifications: [
    {
      id: 1,
      name: 'Next.js Pro Developer',
      issuer: 'Vercel',
      date: 'March 2024',
    },
    {
      id: 2,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'October 2023',
    },
  ],

  // ============ ACHIEVEMENTS ============
  achievements: [
    {
      id: 1,
      title: 'Hackathon Winner - National Coding Fest 2023',
      description: 'Won 1st place building an AI-powered job matching platform',
      date: 'November 2023',
    },
    {
      id: 2,
      title: 'Open Source Contributor',
      description: 'Contributed to Next.js, Prisma, and other OSS projects',
      date: '2022 - Present',
    },
    {
      id: 3,
      title: 'Top Rated Freelancer on Upwork',
      description: 'Achieved Top Rated status with 100% job success score',
      date: '2023',
    },
  ],

  // ============ CONTACT INFO ============
  contact: {
    email: 'mahbub.cse.me@gmail.com',
    phone: '+880 1886225492',
    website: 'https://mahbub-dev.vercel.app',
    calendly: 'https://calendly.com/mahbub',
    social: {
      github: 'https://github.com/mahbubcsebd',
      linkedin: 'https://linkedin.com/in/mahbubcsebd',
      twitter: 'https://twitter.com/mahbubcsebd',
      facebook: 'https://facebook.com/mahbubcseme',
      medium: 'https://medium.com/@mahbubcsebd',
    },
  },

  // ============ SERVICES ============
  services: [
    {
      id: 1,
      title: 'Full Stack Development',
      description:
        'End-to-end web application development using Next.js, React, Node.js, and modern databases.',
      pricing: 'Starting from $50/hour',
    },
    {
      id: 2,
      title: 'E-commerce Solutions',
      description:
        'Build scalable online stores with payment integration and inventory management.',
      pricing: 'Custom quote',
    },
    {
      id: 3,
      title: 'API Development',
      description:
        'RESTful and GraphQL API development with proper authentication.',
      pricing: 'Starting from $40/hour',
    },
  ],

  // ============ STATS ============
  stats: {
    yearsOfExperience: 3,
    projectsCompleted: 50,
    happyClients: 35,
    githubStars: 250,
  },

  // ============ WORK PREFERENCES ============
  workPreferences: {
    openToWork: true,
    availableFor: [
      'Full-time positions',
      'Freelance projects',
      'Contract work',
      'Consulting',
    ],
    preferredRoles: ['Full Stack Developer', 'Senior Frontend Engineer'],
    workType: 'Remote / Hybrid / On-site',
    noticePeriod: '1 month',
  },
};
