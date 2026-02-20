export const en = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    title: 'Software Developer',
    subtitle: 'Founder of Escolaris. I build things.',
    cta_projects: 'View projects',
    cta_contact: 'Contact',
  },
  about: {
    title: 'About me',
    p1: "I'm a young software developer from Bahía Blanca, Argentina. My main experience is in API development, authentication systems, and SaaS platforms.",
    p2: {
      before: 'I founded ',
      linkText: 'Escolaris',
      after: ', a multi-tenant school management platform currently in open beta. I love solving real problems with clean, well-structured code.',
      href: 'https://escolaris.com.ar',
    },
    stack: 'Tech stack',
    photoPlaceholder: '— photo to be added —',
  },
  projects: {
    title: 'Projects',
    escolaris: {
      title: 'Escolaris',
      badge: 'Founder · In production',
      desc: 'Multi-tenant SaaS platform for academic and administrative management of educational institutions. Architecture with full data isolation per institution, RBAC for multiple roles, and production deployment with automatic backups.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'JWT', 'RBAC'],
      link: 'View project',
    },
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Programming Teacher',
        company: 'Coding Giants',
        date: 'Dec 2024 – Apr 2025',
        location: 'Spain · Remote',
        desc: 'Programming lessons for students aged 8–14. Variables, control flow, functions, and OOP.',
      },
      {
        role: 'Programming Intern',
        company: 'IADO (CONICET)',
        date: 'Jul 2024 – Dec 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Maintenance and improvement of internal production systems. Refactoring, debugging, and Git workflows.',
      },
    ],
    education: [
      {
        role: 'Information Systems Engineering',
        company: 'Universidad Nacional del Sur',
        date: 'Feb 2025 – Present',
        location: 'Bahía Blanca, Argentina',
        desc: '',
      },
      {
        role: 'Programming Technician',
        company: 'E.E.S.T. No. 1',
        date: 'Feb 2018 – Dec 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Technical high school degree in programming.',
      },
    ],
    exp_label: 'Experience',
    edu_label: 'Education',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Have a project in mind or want to chat? Drop me a line.',
    email: 'Send email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv_es: 'Download CV (ES)',
    cv_en: 'Download CV (EN)',
  },
  footer: {
    made: 'Made with',
    in: 'by Gabito',
  },
};
