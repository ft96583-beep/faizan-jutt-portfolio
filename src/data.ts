import { ServiceItem, ProjectItem, ProcessStep, AwardItem, TestimonialItem, FAQItem, WhyWorkItem, TechItem } from './types';

export const HERO_DATA = {
  name: 'Faizan Jutt',
  brand: 'Faizan Evolution',
  role: 'Full-Stack Web Developer • SEO Expert',
  tagline: "HELLO, I'M",
  bio: 'Building modern websites, online stores, booking systems and SEO-ranked digital products. Fast, clean and production-ready — We Build. You Evolve.',
  portraitUrl: '/faizan-cutout.png',
  portraitFallback: '/faizan-cutout.png',
  age: '2+ Years',
  ageBadge: 'Web Developer & SEO',
  location: 'Sialkot, Punjab, Pakistan',
  experienceYears: '2+',
  impactMetric: '+100%',
  email: 'faizanjutt272272@gmail.com',
  phone: '+92 322 6470149',
  website: 'https://faizanjutt272.pages.dev',
  motto: 'Faizan Evolution — We Build. You Evolve.',
};

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/923226470149',
  instagram: 'https://faizanjutt272.pages.dev',
  tiktok: 'https://faizanjutt272.pages.dev',
  facebook: 'https://faizanjutt272.pages.dev',
  snapchat: 'https://faizanjutt272.pages.dev',
  website: 'https://faizanjutt272.pages.dev',
  email: 'mailto:faizanjutt272272@gmail.com',
  github: 'https://github.com/ft96583-beep',
};

export const ABOUT_DATA = {
  heading: 'Who I Am — Engineering with Precision & Clean Architecture',
  stats: [
    { label: 'Experience', value: '2+ Years' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Code Quality & Uptime', value: '99.9%' },
  ],
  narrative:
    "Hi! I'm Faizan Jutt, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content.",
  mission: 'Turn ideas into professional digital products that make an impact.',
  missionQuote:
    '“Great software combines rigorous system architecture, clean modular code, and sub-second performance. I build digital products engineered to scale effortlessly into the future.”',
  brandName: 'Faizan Evolution',
  location: 'Sialkot, Punjab, Pakistan',
  philosophy: 'High-Performance Engineering Meets Intuitive Software Design',
  extendedBio: [
    "Specialized in business websites, online stores, booking systems, admin dashboards and SEO.",
    "Proven expertise building fast, responsive websites with clean code, Supabase live data and WhatsApp order flows.",
    "Focused on Google ranking with technical SEO, sitemaps, schema and speed optimization."
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Fast, modern business websites that turn visitors into customers — with clean design, mobile-first layout and clear calls to action.',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200/60',
    iconColor: 'text-blue-600',
    iconEmoji: '🌐',
    tagline: 'Business Websites',
    detailedScope: [
      'Multi-page business websites with per-page SEO',
      'Mobile-first responsive design',
      'Contact / quote lead forms',
      'Speed optimization and deployment',
    ],
    deliverables: ['Production Business Website', 'SEO-ready Pages & Sitemap', 'Lead / Quote Form', 'Deployment Guide'],
  },
  {
    id: 'online-stores',
    title: 'Online Stores',
    description: 'Complete online stores with products, cart, checkout and WhatsApp orders — plus a live admin panel to manage everything.',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200/60',
    iconColor: 'text-emerald-600',
    iconEmoji: '🛍️',
    tagline: 'E-commerce Stores',
    detailedScope: [
      'Product catalog, cart and checkout',
      'WhatsApp order flow and order tracking',
      'Admin panel for products, orders and settings',
      'Live database with Supabase',
    ],
    deliverables: ['Live Online Store', 'Admin Panel', 'Order Management', 'Product Catalog Setup'],
  },
  {
    id: 'booking-systems',
    title: 'Booking & Appointment Systems',
    description: 'Appointment booking systems for clinics and services — customers book online, you manage slots and appointments in one place.',
    bgLight: 'bg-sky-50',
    borderColor: 'border-sky-200/60',
    iconColor: 'text-sky-600',
    iconEmoji: '📅',
    tagline: 'Booking Systems',
    detailedScope: [
      'Online appointment booking form',
      'Slot and schedule management',
      'Booking confirmation and admin view',
      'Service pages with SEO',
    ],
    deliverables: ['Booking Website', 'Appointment Admin View', 'Service Pages', 'Confirmation Flow'],
  },
  {
    id: 'seo-ranking',
    title: 'SEO & Google Ranking',
    description: 'Technical SEO and Google ranking work — sitemaps, schema, speed fixes and on-page SEO so customers find you on Google.',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-200/60',
    iconColor: 'text-teal-600',
    iconEmoji: '🚀',
    tagline: 'SEO & Ranking',
    detailedScope: [
      'Technical SEO audit and fixes',
      'Sitemap, robots and JSON-LD schema',
      'On-page SEO: titles, descriptions, headings',
      'Speed and Core Web Vitals improvements',
    ],
    deliverables: ['SEO Audit Report', 'Sitemap & Schema Setup', 'On-page SEO Updates', 'Search Console Guidance'],
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Panels & Dashboards',
    description: 'Custom admin panels and dashboards — manage products, orders, users and content without touching code.',
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-200/60',
    iconColor: 'text-indigo-600',
    iconEmoji: '📊',
    tagline: 'Admin & Dashboards',
    detailedScope: [
      'Role-based admin panels',
      'Products, orders and content management',
      'Activity logs and user management',
      'Live database connection',
    ],
    deliverables: ['Admin Panel', 'Dashboard Views', 'Roles & Logs', 'Live Database Setup'],
  },
  {
    id: 'redesign-speed',
    title: 'Website Redesign & Speed Fix',
    description: 'Redesign of slow or outdated websites into modern, fast experiences — with the same content, better design and better speed.',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200/60',
    iconColor: 'text-amber-600',
    iconEmoji: '⚡',
    tagline: 'Redesign & Speed',
    detailedScope: [
      'Modern redesign with existing content',
      'Speed, image and bundle optimization',
      'Mobile layout and UX fixes',
      'SEO preservation during redesign',
    ],
    deliverables: ['Redesigned Website', 'Speed Optimization Report', 'Mobile UX Fixes', 'SEO-safe Migration'],
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    id: 'responsive-design',
    title: 'Modern & Responsive Design',
    description: 'Pixel-perfect clarity across smartphones, foldables, tablets, laptop screens, and ultra-wide desktop monitors without breaking layout.',
  },
  {
    id: 'fast-performance',
    title: 'Fast Performance',
    description: 'Optimized asset delivery, zero bloated libraries, and lightning load speeds that elevate Google Lighthouse scores and user retention.',
  },
  {
    id: 'clean-code',
    title: 'Clean & Maintainable Code',
    description: 'Readable, modular, semantic, production-ready codebases with clean structure designed for effortless scaling and future handover.',
  },
  {
    id: 'creative-uiux',
    title: 'Creative UI/UX',
    description: 'Distinctive visual flair, glassmorphism aesthetics, fluid micro-interactions, and engaging designs that command instant attention.',
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    description: 'Harnessing generative AI tools, prompt engineering, and intelligent algorithms to accelerate business workflows and customer value.',
  },
  {
    id: 'communication',
    title: 'Professional Communication',
    description: 'Transparent milestone updates, quick turnaround times, proactive problem solving, and completely frictionless collaboration.',
  },
  {
    id: 'support',
    title: 'Reliable Support',
    description: 'Long-term assistance, rapid bug fixes, security audits, and post-launch maintenance to guarantee your digital presence never skips a beat.',
  },
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', level: '18 & 19 Ecosystem', iconName: 'SiReact' },
  { name: 'Next.js', category: 'Frontend', level: 'App Router & SSR', iconName: 'SiNextdotjs' },
  { name: 'TypeScript', category: 'Frontend', level: 'Strict Type Systems', iconName: 'SiTypescript' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Utility-first v4', iconName: 'SiTailwindcss' },
  { name: 'JavaScript', category: 'Frontend', level: 'Modern ES2024+', iconName: 'SiJavascript' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Semantic & A11y', iconName: 'SiHtml5' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', level: 'Async Event Runtime', iconName: 'SiNodedotjs' },
  { name: 'Express.js', category: 'Backend & APIs', level: 'REST APIs & Middleware', iconName: 'SiExpress' },
  { name: 'Python', category: 'Backend & APIs', level: 'FastAPI & Scripting', iconName: 'SiPython' },
  { name: 'RESTful APIs', category: 'Backend & APIs', level: 'CRUD & Microservices', iconName: 'TbApi' },
  { name: 'GraphQL', category: 'Backend & APIs', level: 'Schemas & Resolvers', iconName: 'SiGraphql' },

  // Databases & AI
  { name: 'PostgreSQL', category: 'Databases & AI', level: 'Relational Schemas', iconName: 'SiPostgresql' },
  { name: 'MongoDB', category: 'Databases & AI', level: 'NoSQL & Aggregations', iconName: 'SiMongodb' },
  { name: 'Redis', category: 'Databases & AI', level: 'In-Memory Caching', iconName: 'SiRedis' },
  { name: 'Firebase', category: 'Databases & AI', level: 'Realtime DB & Auth', iconName: 'SiFirebase' },
  { name: 'Gemini AI SDK', category: 'Databases & AI', level: 'LLM & Agent Pipelines', iconName: 'SiGoogle' },

  // DevOps & Tools
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 'Version Control & PRs', iconName: 'SiGit' },
  { name: 'Docker', category: 'DevOps & Tools', level: 'Containerization', iconName: 'SiDocker' },
  { name: 'Vercel', category: 'DevOps & Tools', level: 'Edge Deployment', iconName: 'SiVercel' },
  { name: 'Linux / Bash', category: 'DevOps & Tools', level: 'Server Administration', iconName: 'SiLinux' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'digitalbazaar',
    title: 'DigitalBazaar — Digital Tools Store',
    category: 'Full-Stack App',
    subtitle: 'Live Online Store + Admin',
    summary: 'A live digital tools store with WhatsApp orders, product catalog, live Supabase data and a full admin panel for orders, products and settings.',
    role: 'Full-Stack Web Developer',
    timeline: 'Live Project',
    impactMetric: 'Live Store',
    tags: ['React', 'Supabase', 'Tailwind CSS', 'WhatsApp Orders', 'Admin Panel'],
    gradient: 'from-indigo-100 via-purple-50 to-pink-50',
    type: 'dashboard',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript'],
    architectureSummary: 'Storefront with live Supabase data, WhatsApp order flow and an admin panel for products, orders, roles and activity logs.',
  },
  {
    id: 'faizan-evolution-agency',
    title: 'Faizan Evolution Agency Website',
    category: 'Web Application',
    subtitle: 'Agency Website — We Build. You Evolve.',
    summary: 'Multi-page agency website with 6 services, blog, quote leads, cookie banner and per-page SEO, built under the Faizan Evolution brand.',
    role: 'Web Developer & SEO Expert',
    timeline: 'Live Project',
    impactMetric: '6 Services',
    tags: ['React', 'SEO', 'Blog', 'Quote Leads', 'Admin Panel'],
    gradient: 'from-blue-50 via-indigo-50 to-slate-100',
    type: 'landing',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['React', 'Tailwind CSS', 'SEO', 'JavaScript'],
    architectureSummary: 'Multi-page site with service pages, blog publishing, quote leads and per-page SEO metadata.',
  },
  {
    id: 'zynixstore',
    title: 'ZynixStore — Online Store',
    category: 'Web Application',
    subtitle: 'Digital Store',
    summary: 'An online digital store with product listings, cart and checkout flow, designed for fast browsing and easy ordering.',
    role: 'Web Developer',
    timeline: 'Live Project',
    impactMetric: 'Online Store',
    tags: ['React', 'E-commerce', 'Cart', 'Checkout'],
    gradient: 'from-slate-100 via-sky-50 to-purple-100',
    type: 'dashboard',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    architectureSummary: 'Storefront with product catalog, cart state and a simple checkout flow.',
  },
  {
    id: 'dental-booking',
    title: 'Dental Clinic Appointment Booking System',
    category: 'Web Application',
    subtitle: 'Booking & Appointment System',
    summary: 'A booking system for a dental clinic — patients book appointments online and the clinic manages bookings in one place.',
    role: 'Web Developer',
    timeline: 'Live Project',
    impactMetric: 'Booking System',
    tags: ['React', 'Booking', 'Appointments', 'Admin View'],
    gradient: 'from-emerald-50 via-teal-50 to-slate-100',
    type: 'landing',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    architectureSummary: 'Booking form, appointment list and service pages for a clinic workflow.',
  },
  {
    id: 'xenics-ai',
    title: 'Xenics AI Desktop Assistant',
    category: 'AI Solution',
    subtitle: 'Desktop AI Assistant',
    summary: 'A desktop AI assistant with voice and chat, built as a Python/Eel desktop app with an AI assistant workflow.',
    role: 'Developer',
    timeline: 'Live Project',
    impactMetric: 'AI Assistant',
    tags: ['Python', 'Eel', 'AI', 'Desktop App'],
    gradient: 'from-purple-50 via-indigo-50 to-slate-100',
    type: 'dashboard',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['Python', 'Eel', 'JavaScript', 'AI'],
    architectureSummary: 'Desktop app packaging a chat/voice AI assistant with a local desktop interface.',
  },
  {
    id: 'menswear-store',
    title: 'Premium Menswear Clothing Store',
    category: 'Web Application',
    subtitle: 'Premium Clothing Store Website',
    summary: 'A premium menswear clothing store website with product showcases, categories and a modern storefront design.',
    role: 'Web Developer',
    timeline: 'Live Project',
    impactMetric: 'Clothing Store',
    tags: ['React', 'E-commerce', 'Storefront', 'Design'],
    gradient: 'from-amber-50 via-orange-50 to-slate-100',
    type: 'landing',
    githubUrl: 'https://github.com/ft96583-beep',
    liveUrl: 'https://faizanjutt272.pages.dev',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    architectureSummary: 'Storefront with product categories, product views and a premium layout.',
  },
];

export const SPOTLIGHT_CASE_STUDY = {
  title: 'DigitalBazaar: Building a Live Digital Store with WhatsApp Orders',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Q2f6uYDjwUB--PRO9EMTFkxKjUdygPoSAaGD06mxDYP_EyXjxkAUSb1HXVLVKsKsYtWkpLa1nGTAAReWnXVHV4Pb78zCXYaku8-eZ5nYVN41z4dIGk5RjsZUnhVZ--e1bhg4JB4x5od-CeAbBiiMtbfFe_iVG0gR2Y9a21K8SpYAqr0efTS4zM3HFqE6URWBhOf3WMeyf4u6aQJ-_cvjZXW8bPOuUyUHA1PjFk904JcSfNm5JRMP',
  tags: ['Online Store', 'React & Supabase', 'WhatsApp Orders', 'Admin Panel'],
  description:
    'DigitalBazaar needed a complete live store — product catalog, WhatsApp ordering and an admin panel to manage products and orders from one place.',
  challenge: 'Manual order handling, no live storefront and no single place to manage products, orders and settings.',
  solution: 'A React storefront with live Supabase data, WhatsApp order flow and an admin panel with roles, logs and settings.',
  metrics: [
    { value: 'Live', label: 'Store & Admin' },
    { value: 'WhatsApp', label: 'Order Flow' },
    { value: 'Supabase', label: 'Live Database' },
  ],
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'System Architecture & Tech Specs',
    description: 'Analyzing technical requirements, data models, and API contracts.',
    activities: ['Database schema design (ERDs)', 'REST / GraphQL endpoint contracts', 'Tech stack & dependency selection', 'Security & auth threat modeling'],
  },
  {
    step: '02',
    title: 'Frontend & UI Engineering',
    description: 'Building modular, type-safe React/Next.js user interfaces.',
    activities: ['Modular component hierarchy', 'Strict TypeScript type definitions', 'State machines & responsive layouts', 'Performance & zero-layout-shift audits'],
  },
  {
    step: '03',
    title: 'Backend, APIs & Database',
    description: 'Developing high-throughput endpoints and resilient databases.',
    activities: ['RESTful CRUD & GraphQL resolvers', 'JWT auth & RBAC middleware', 'PostgreSQL / MongoDB migrations', 'Redis caching & rate limiting'],
  },
  {
    step: '04',
    title: 'AI Integration & Optimization',
    description: 'Embedding intelligent LLM pipelines and performance tuning.',
    activities: ['Gemini / OpenAI API orchestration', 'Prompt engineering & streaming responses', 'Core Web Vitals & bundle minimization', 'Lighthouse 98+ optimizations'],
  },
  {
    step: '05',
    title: 'Testing, CI/CD & Deployment',
    description: 'Automated testing and production-grade cloud release.',
    activities: ['Unit, integration & E2E testing', 'Docker containerization', 'GitHub Actions automated CI/CD', 'Zero-downtime Vercel/Cloud deployment'],
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'faizan-evolution-launch',
    title: 'Faizan Evolution Agency Launch',
    badge: 'Agency',
    badgeType: 'product',
    description: 'Multi-page agency website launched with 6 services, blog, quote leads and per-page SEO under the Faizan Evolution brand.',
    year: '2026',
    symbol: '★',
    colorClass: 'bg-purple-100 text-[#6C5CE7]',
  },
  {
    id: 'digitalbazaar-live',
    title: 'DigitalBazaar Store Live',
    badge: 'Live Store',
    badgeType: 'winner',
    description: 'Live digital tools store with WhatsApp orders, live Supabase data and a full admin panel.',
    year: '2026',
    symbol: '✦',
    colorClass: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'projects-delivered',
    title: '30+ Websites & Stores Delivered',
    badge: 'Projects',
    badgeType: 'trophy',
    description: 'Business websites, online stores, booking systems, admin panels and SEO projects delivered for clients.',
    year: '2026',
    symbol: '●',
    colorClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'seo-work',
    title: 'SEO & Google Ranking Work',
    badge: 'SEO',
    badgeType: 'interface',
    description: 'Technical SEO, sitemaps, schema and speed work for portfolios and stores to improve Google visibility.',
    year: '2026',
    symbol: '◈',
    colorClass: 'bg-amber-100 text-amber-700',
  },
];

export const AWARDS_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAblYT9lP7g-iBtVEuq4NJAo068DrKsjVQS4dLgsnFFTIfElbtiE0Ahf2lgUIlZXjNzp3hEu9Hl4JkVI4J2q26s1h9Fhp7zButhOiKtfvVyYCST6F8CHGmcbJfBHB2ABdaDW6MmmnNK6f4iDNDvy3hEg7wn0eM2fdKoIQUCHIEvQ3WJyqRsCqE-PSH9lKc9RLqcu60PGi5B9yq2i9IUGL-u1yU5bj4lZE4G3Pgrwro6LryHiwdrj4YY';

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rohit',
    quote: 'Faizan Jutt is an outstanding full-stack software engineer. He delivers clean, type-safe architecture, lightning-fast APIs, and scalable web solutions.',
    author: 'Rohit Sharma',
    role: 'Lead Engineering Manager',
    avatarText: 'RS',
    avatarBg: 'bg-slate-200 text-slate-800',
  },
  {
    id: 'neha',
    quote: 'Working with Faizan Evolution on our Next.js migration was seamless. His mastery of TypeScript, state management, and edge deployments is second to none.',
    author: 'Neha Verma',
    role: 'CTO & Tech Founder',
    avatarText: 'NV',
    avatarBg: 'bg-purple-100 text-purple-800',
  },
  {
    id: 'karan',
    quote: "Faizan's full-stack applications run with zero lag and exceptional reliability. His database schemas and API designs solved our scaling bottlenecks.",
    author: 'Karan Malhotra',
    role: 'Principal Architect, StartupX',
    avatarText: 'KM',
    avatarBg: 'bg-indigo-100 text-indigo-800',
  },
  {
    id: 'sophia',
    quote: 'The AI workflows and custom LLM microservices Faizan engineered accelerated our production pipeline by 4x. A truly gifted developer.',
    author: 'Sophia Zhang',
    role: 'VP Technology & AI',
    avatarText: 'SZ',
    avatarBg: 'bg-emerald-100 text-emerald-800',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'tech-stack',
    number: '01',
    question: 'What is your primary development tech stack?',
    answer: 'My primary stack consists of React 19 and Next.js 14 for frontend engineering, TypeScript for strict type safety, Node.js/Express and Python for backend APIs, and PostgreSQL or MongoDB with Prisma/Drizzle for database persistence.',
  },
  {
    id: 'fullstack-workflow',
    number: '02',
    question: 'Can you build both frontend and backend from scratch?',
    answer: 'Yes! As a full-stack engineer, I architect the entire software lifecycle: database modeling, RESTful & GraphQL APIs, secure authentication, reactive UI components, and automated cloud deployments.',
  },
  {
    id: 'ai-integrations',
    number: '03',
    question: 'How do you integrate AI capabilities into web applications?',
    answer: 'I integrate Gemini API, OpenAI SDKs, structured function calling, vector embeddings for RAG, and automated background jobs to embed generative intelligence directly into web applications.',
  },
  {
    id: 'code-quality-cicd',
    number: '04',
    question: 'Do you provide clean source code, documentation, and CI/CD pipelines?',
    answer: 'Every project is delivered with a modular Git repository, comprehensive README documentation, TypeScript type schemas, Docker configs, and automated GitHub Actions CI/CD for zero-downtime deployment.',
  },
];
