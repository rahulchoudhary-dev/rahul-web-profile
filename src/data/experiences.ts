interface iExperiences {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
[];

export const experiences: iExperiences[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'GAMMASTACK',
    location: 'Remote',
    period: 'Aug-2024 - Present',
    duration: '2+ years',
    description:
      'Leading development of enterprise-level applications and AI automation workflows. Architected scalable systems serving 10,000+ users with 99.9% uptime.',
    achievements: [
      'Built 3 major commercial products from concept to production',
      'Implemented n8n automation workflows reducing manual tasks by 80%',
      'Led team of 5 developers using agile methodologies',
      'Optimized database queries improving performance by 60%',
    ],
    technologies: [
      'Frontend Development',
      'Backend Development',
      'N8N Automation',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Agile Methodologies',
      'Microservices Architecture',
      'GraphQL',
      'REST APIs',
      'webSockets',
      'AWS S3 EC2 RDS Route53 CloudFront',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Encred Analytics PVT LTD',
    location: 'Remote',
    period: 'Oct-2023 - Aug-2024',
    duration: '1 years',
    description:
      'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems. Focused on creating robust backend APIs and intuitive user interfaces.',
    achievements: [
      'Delivered successful project on time and within budget',
      'Integrated 3rd party APIs for payment processing and analytics',
      'Implemented CI/CD pipelines reducing deployment time by 50%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['Frontend Development', 'Backend Development', 'AI ML'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Santophy Infotech PVT LTD',
    location: 'Hybrid',
    period: 'Jan-2021 - Aug-2023',
    duration: '2 years',
    description:
      'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems. Focused on creating robust backend APIs and intuitive user interfaces.',
    achievements: [
      'Delivered 4+ successful projects on time and within budget',
      'Integrated 3rd party APIs for payment processing and analytics',
      'Implemented CI/CD pipelines reducing deployment time by 50%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'API',
      'AWS',
      'Microsoft SSO',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Sequelize',
      'Firebase',
      'Database Management',
      'Frontend Development',
      'Backend Development',
    ],
  },
];
