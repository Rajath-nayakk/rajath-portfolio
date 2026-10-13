import { Project, SkillItem, TimelineMilestone, CertificateItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Rajath Nayak',
  title: 'Full-Stack Developer · Creative Thinker · Engineering Student',
  heroTagline: 'Building ideas into experiences.',
  role: 'Computer Science Engineering Undergraduate',
  college: 'Sahyadri College of Engineering and Management, Mangaluru',
  location: 'Mangaluru, Karnataka, India',
  coordinates: '12.87° N, 74.88° E',
  // Verified User Information
  email: 'rajathnayk2006@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rajath-nayak-601678335/',
  github: 'https://github.com/Rajath-nayakk',
  status: 'Open for engineering roles, fellowships & hackathons',
  currentYear: 'Third Year (B.E. Computer Science & Engineering)',
  bioShort:
    "I'm Rajath Nayak, a Computer Science Engineering undergraduate at Sahyadri College of Engineering and Management, Mangaluru. I enjoy turning ideas into functional, meaningful digital experiences through full-stack development and emerging technologies.",
  formalPhoto: '/images/rajath-formal.jpg',
  casualPhoto: '/images/rajath-casual.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: 'hackhub',
    number: '01',
    title: 'HackHub',
    tagline: 'Hackathon Discovery & AI-Powered Team Collaboration Platform',
    category: 'Full-Stack Web & AI Systems',
    role: 'Lead Architect & Full-Stack Developer',
    description:
      'A comprehensive hackathon discovery and collaboration platform helping students explore global hackathons, discover projects, match with teammates, and accelerate project preparation with AI tools.',
    longDescription:
      'HackHub addresses the fragmented hackathon preparation lifecycle by combining intelligent discovery algorithms with community-driven matchmaking and AI-assisted prep modules. Students can discover upcoming competitions, form multi-disciplinary squads based on complementary skill sets, and prototype concepts rapidly.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'AI Integration',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/Rajath-nayakk/hackhub',
    highlights: [
      'Multi-tenant hackathon discovery with smart filtering by domain, timeline, and prize tracks.',
      'AI-powered teammate recommendations matching developers, designers, and domain experts.',
      'Interactive squad workspace for pitch ideation, task management, and submission prep.',
      'Scalable Supabase & PostgreSQL architecture with secure row-level authentication.',
    ],
    previewType: 'hackhub',
  },
  {
    id: 'fin-pilot',
    number: '02',
    title: 'Fin Pilot',
    tagline: 'Intelligent Personal Finance & Automated Categorization Coach',
    category: 'Financial Tech & Machine Learning',
    role: 'Full-Stack Engineer & AI Logic Integration',
    description:
      'An AI-assisted personal finance management application featuring real-time transaction tracking, predictive budget modeling, and automated contextual expense categorization.',
    longDescription:
      'Fin Pilot transforms mundane money tracking into proactive financial wellness. By applying machine learning categorization logic to raw transaction logs, the application eliminates manual receipt sorting while providing actionable, natural-language insights into spending patterns.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Python',
      'AI Categorization',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/Ujwalushettigar/AI-Personal-Finance-Coach',
    highlights: [
      'Automated semantic categorisation of unstructured bank transaction strings.',
      'Predictive burn-rate analysis with contextual smart budget thresholds.',
      'Visual breakdown of recurring obligations, savings velocity, and discretionary outflows.',
      'Responsive, high-density dashboard engineered for rapid transaction logging.',
    ],
    previewType: 'finpilot',
  },
  {
    id: 'movie-booking',
    number: '03',
    title: 'Movie Booking Application',
    tagline: 'Real-Time Cinematic Ticketing & Seat Reservation Experience',
    category: 'Interactive Web Application',
    role: 'Full-Stack Developer & UI Engineer',
    description:
      'A high-performance movie browsing and booking application featuring real-time showtime scheduling, interactive theater seat selection, and streamlined checkout workflows.',
    longDescription:
      'Engineered to deliver an effortless cinema ticketing experience. Features dynamic cinema hall visualization, instantaneous seat reservation lock-ins to prevent double booking, and rich media exploration for current releases and upcoming trailers.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Tailwind CSS',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/Rajath-nayakk',
    highlights: [
      'Interactive SVG theatre seat selector with tiered pricing zones and accessibility accommodation.',
      'Optimized schedule browser displaying screening times across theater locations.',
      'Frictionless multi-step checkout flow with simulated ticket generation and QR verification.',
      'Responsive mobile-first interface optimized for touch devices.',
    ],
    previewType: 'movie',
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    description: 'Component architecture, custom hooks, state synchronization, and reactive UI patterns.',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'App Router, Server-Side Rendering (SSR), Static Site Generation, and API route optimization.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    description: 'Modern asynchronous programming, closures, event-driven architectures, and DOM manipulation.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first responsive layouts, design tokens, micro-interactions, and dark mode theming.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    description: 'Semantic markup, accessibility standards, CSS Grid/Flexbox, and hardware-accelerated animations.',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Event-driven server runtime, asynchronous microservices, RESTful APIs, and stream handling.',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    description: 'Middleware pipelines, routing architecture, JWT authentication, and request sanitization.',
  },
  {
    name: 'Python',
    category: 'Backend',
    description: 'Scripting, backend services, algorithmic problem solving, and AI pipeline orchestration.',
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Relational schema design, complex joins, indexing strategies, and ACID transaction safety.',
  },
  {
    name: 'Supabase',
    category: 'Database',
    description: 'Real-time database subscriptions, Row Level Security (RLS) policies, and auth integration.',
  },
  {
    name: 'SQL',
    category: 'Database',
    description: 'Data manipulation language, schema migrations, query performance tuning, and aggregation logic.',
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    description: 'Distributed version control, branching strategies, merge conflict resolution, and commit hygiene.',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    description: 'Collaboration workflows, pull requests, issue tracking, and repository maintenance.',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    description: 'Debugging environments, productivity tooling, profiling, and extensions workflow.',
  },

  // Interests
  {
    name: 'AI Integration',
    category: 'Interests',
    description: 'Infusing LLMs, multimodal APIs, and intelligent inference directly into web applications.',
  },
  {
    name: 'Cloud Computing',
    category: 'Interests',
    description: 'Serverless deployments, modern edge execution, container basics, and distributed hosting.',
  },
  {
    name: 'Full-Stack Engineering',
    category: 'Interests',
    description: 'End-to-end software development from database modeling to fluid, cinematic user interfaces.',
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '2023 — 2027',
    period: 'PRESENT · 3RD YEAR',
    title: 'Bachelor of Engineering in Computer Science & Engineering',
    organization: 'Sahyadri College of Engineering and Management',
    location: 'Mangaluru, Karnataka, India',
    status: 'CURRENT',
    description:
      'Pursuing full-time undergraduate engineering studies with a focus on core computer science foundations: Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Database Management, Computer Networks, and Software Engineering methodologies.',
    tags: ['CSE', 'Undergraduate', 'Algorithms', 'Full-Stack Development'],
  },
  {
    year: '2024 — PRESENT',
    period: 'ACTIVE BUILDING',
    title: 'Full-Stack Project Development & Hackathon Exploration',
    organization: 'Independent Engineering & Collaborative Teams',
    location: 'Mangaluru / Hybrid',
    status: 'ACTIVE',
    description:
      'Architecting and shipping practical applications including HackHub (hackathon discovery & AI matching) and Fin Pilot (AI-assisted personal finance coach). Regularly collaborating with fellow student engineers to solve real user problems.',
    tags: ['Next.js', 'Supabase', 'AI Tools', 'Open Source', 'Hackathons'],
  },
  {
    year: '2025 & BEYOND',
    period: 'FORWARD ROADMAP',
    title: 'Emerging Technologies & Advanced Systems Engineering',
    organization: 'Future Milestones & Industry Collaborations',
    location: 'Global',
    status: 'UPCOMING',
    description:
      'Expanding domain expertise into distributed cloud systems, high-scale backend architectures, and fine-tuned AI workflows. Actively seeking software engineering internships, technical fellowships, and impactful project partnerships.',
    tags: ['Cloud Architecture', 'Distributed Systems', 'Applied AI', 'Internships'],
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    index: '01',
    title: 'Engineering Rigor',
    description:
      'Writing type-safe, maintainable code with solid computational foundations and clean design patterns.',
  },
  {
    index: '02',
    title: 'User-Centric Motion',
    description:
      'Building interfaces that feel responsive and alive through intentional micro-animations and spatial depth.',
  },
  {
    index: '03',
    title: 'Applied Intelligence',
    description:
      'Embedding modern AI capabilities pragmatically into workflows to solve tangible, real-world friction.',
  },
  {
    index: '04',
    title: 'Continuous Curiosity',
    description:
      'Balancing student-driven academic exploration with real production-grade building and shipping.',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'intro-unix',
    number: '01',
    title: 'Introduction to Unix',
    issuer: 'Infosys Springboard',
    issueDate: 'November 30, 2025',
    verified: true,
    verificationUrl: 'https://verify.onwingspan.com',
    imagePreview: '/certificates/intro-to-unix.png',
    category: 'System Architecture & OS Foundations',
    description:
      'Verified mastery of Unix operating system principles, file system hierarchies, process scheduling, POSIX standard pipelines, security permissions, and production automation scripting.',
    skills: ['Unix Architecture', 'POSIX Shell', 'Process Signals', 'File Permissions', 'CLI Automation'],
  },
  {
    id: 'windows-forensics',
    number: '02',
    title: 'Windows OS Forensics',
    issuer: 'Coursera / Infosec',
    issueDate: 'Verified Credential',
    verified: true,
    verificationUrl: 'https://www.coursera.org/',
    imagePreview: '/certificates/windows-forensics.png',
    category: 'Digital Forensics & Security',
    description:
      'Specialized curriculum focused on Windows low-level operating system artifact extraction, Windows Registry analysis, Event Log timeline reconstruction, and NTFS Master File Table (MFT) forensic investigation.',
    skills: ['Windows Registry', 'Event Log Analysis', 'NTFS MFT Carving', 'Digital Artifacts', 'Incident Response'],
  },
  {
    id: 'python-foundation',
    number: '03',
    title: 'Associate in IT Foundation Skills (Python)',
    issuer: 'Infosys Springboard',
    issueDate: 'April 27, 2026',
    verified: true,
    verificationUrl: 'https://verify.onwingspan.com',
    imagePreview: '/certificates/python-foundation.png',
    documentPdf: '/certificates/python-foundation.pdf',
    category: 'Software Engineering & Algorithms',
    description:
      'Demonstrated excellence in core computer science foundations using Python, algorithmic complexity, object-oriented design patterns, modular architecture, and structured unit testing.',
    skills: ['Python 3', 'Data Structures', 'Algorithms', 'OOP Architecture', 'Modular Engineering'],
  },
  {
    id: 'applied-genai',
    number: '04',
    title: 'Applied Generative AI Certification',
    issuer: 'Infosys Springboard',
    issueDate: 'April 25, 2026',
    verified: true,
    verificationUrl: 'https://verify.onwingspan.com',
    imagePreview: '/certificates/applied-genai.png',
    documentPdf: '/certificates/applied-genai.pdf',
    category: 'Applied AI & Foundation Models',
    description:
      'Comprehensive certification evaluating real-world generative AI application architecture, LLM prompt orchestration, vector embeddings, multimodal pipelines, and safe production deployment.',
    skills: ['Generative AI', 'LLM Architectures', 'Vector Embeddings', 'Prompt Systems', 'AI Integration'],
  },
];
