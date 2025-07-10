import {
  Activity,
  Building,
  Camera,
  CarFront,
  CreditCard,
  LucideIcon,
  MessageSquare,
  Smartphone,
  UserCheck,
  UtensilsCrossed,
} from 'lucide-react';
import { carServiceProject, genAIProject } from '../assets';

export interface iProject {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  technologies: string[];
  role: string;
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: iProject[] = [
  {
    title: 'Reimatcher',
    subtitle: 'Commercial Real Estate Platform',
    description:
      'Full-stack web application for real estate matchmaking with custom algorithms to compute leasing costs and compare properties. Built scalable architecture serving thousands of users.',
    icon: Building,
    image:
      'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'NestJS', 'MongoDB', 'Neo4j', 'AWS', 'React'],
    role: 'Co-founder, Architect, Full Stack Engineer',
    highlights: [
      'Custom property matching algorithm',
      'Scalable microservices architecture',
      'Real-time property updates',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Yammer',
    subtitle: 'Enterprise Communication Platform',
    description:
      'Internal communication tool for enterprises with web and mobile applications. Features microservices architecture, CI/CD pipelines, and optimized SQL/NoSQL databases.',
    icon: MessageSquare,
    image:
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Node.js', 'NestJS', 'React', 'PostgreSQL', 'Redis', 'Nginx'],
    role: 'Senior Full Stack Developer',
    highlights: [
      'Real-time messaging system',
      'Microservices deployment',
      'Advanced security features',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Squareup',
    subtitle: 'Payment Processing Platform',
    description:
      'Smart POS system supporting card readers and mobile applications with third-party integrations for accounting and e-commerce platforms.',
    icon: CreditCard,
    image:
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'React', 'Neo4j', 'Stripe API', 'Docker', 'Kubernetes'],
    role: 'API Architect, Backend Lead',
    highlights: [
      'Secure payment processing',
      'Multi-platform integration',
      'Real-time transaction monitoring',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Happy Hour Restaurant (HHR)',
    subtitle: 'Table Booking & Food Ordering System',
    description:
      'Built a feature-rich platform for online table reservations and food ordering, streamlining restaurant operations and user experience.',
    icon: UtensilsCrossed,
    image:
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Redux', 'Django', 'PostgreSQL'],
    role: 'Full Stack Developer',
    highlights: [
      'Table booking system',
      'Order tracking & user authentication',
      'Responsive UI with Redux integration',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Snippit CRM',
    subtitle: 'Web & Mobile CRM App',
    description:
      'Streamlined customer relationship workflows with a powerful web and mobile application stack, optimized for real-time user activity and lead management.',
    icon: Smartphone,
    image:
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'Next.js', 'AWS S3', 'OAuth2'],
    role: 'Full Stack Developer',
    highlights: [
      'Cross-platform CRM features',
      'Secure authentication with OAuth2',
      'Cloud storage integration',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Awak',
    subtitle: 'Dialysis Tech Enhancement',
    description:
      'Improved patient care for kidney dialysis through a modern, efficient interface and scalable backend services.',
    icon: Activity,
    image:
      'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'TypeScript', 'Material UI', 'Node.js', 'Express'],
    role: 'Frontend Engineer',
    highlights: [
      'Modern patient UI',
      'TypeScript codebase',
      'Node.js API for medical device integration',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mas-Max',
    subtitle: 'Car Service Web & Mobile App',
    description:
      'Developed a unified automotive service application with a strong focus on user experience, team collaboration, and full deployment workflows.',
    icon: CarFront,
    image: carServiceProject,
    technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Next.js', 'Material UI'],
    role: 'Tech Lead & Full Stack Developer',
    highlights: [
      'Car service ecosystem',
      'Led frontend and backend teams',
      'Production deployment and QA management',
    ],
    demoUrl: '#',
    githubUrl: '#',
    // https://images.pexels.com/photos/4489715/pexels-photo-4489715.jpeg
  },
  {
    title: 'HRMS',
    subtitle: 'Human Resource Management System',
    description:
      'Built an in-house HRMS solution to streamline employee management, leave tracking, and internal operations.',
    icon: UserCheck,
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'TypeORM', 'Postgres', 'Firebase'],
    role: 'Full Stack Developer',
    highlights: ['Custom HR modules', 'Firebase-based backend', 'Secure login and API management'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Genesis.ai',
    subtitle: 'AI-based Image Recognition Platform',
    description:
      'Created an advanced AI/ML-powered tool for image analysis with robust security and scalable architecture.',
    icon: Camera,
    image: genAIProject,
    technologies: [
      'React.js',
      'Typescript',
      'Tailwind CSS',
      'API',
      'AWS',
      'Microsoft SSO',
      'OpenAI API',
      'Image Recognition Models',
      'Computer Vision',
      'Natural Language Processing (NLP)',
    ],
    role: 'Lead Frontend Developer',
    highlights: [
      'AI-powered image recognition',
      'SSO with enterprise providers',
      'Frontend architecture leadership',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
];
