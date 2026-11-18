export const en = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    title: 'Full-Stack Developer',
    subtitle: 'Founder of Mecaris. I build things.',
    cta_projects: 'View projects',
    cta_contact: 'Contact',
  },
  about: {
    title: 'About me',
    p1: "I'm a Full-Stack Developer and Operations Supervisor from Bahía Blanca, Argentina. I design, build, and deploy multi-tenant SaaS platforms in the TypeScript ecosystem (Node.js, NestJS, Next.js, React) with PostgreSQL.",
    p2: {
      before: 'I founded ',
      linkText: 'Mecaris',
      after: ', a platform for auto repair shop management. I love taking products from concept to production with clean, well-structured code.',
      href: 'https://mecaris.ar',
    },
    stack: 'Tech stack',
    photoPlaceholder: '— photo to be added —',
  },
  projects: {
    title: 'Projects',
    mecaris: {
      title: 'Mecaris',
      badge: 'Founder · In production',
      desc: 'Multi-tenant SaaS platform for auto repair shops: work orders, clients, and vehicles. REST APIs with NestJS, Next.js/React front end, MercadoPago subscription billing, and bulk data import tools to migrate shops.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'MercadoPago', 'TanStack Query'],
      link: 'View project',
    },
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Operations Supervisor',
        company: 'Redes del Sur (BVC Contractor)',
        date: 'Apr 2026 – Present',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Manage the daily operational cycle, dispatching service orders and tracking field work progress.',
          'Coordinate and assign tasks to technical crews using digital management tools.',
          'Act as the liaison between management and field teams to resolve incidents and logistical blockers.',
          'Consolidate operational data and generate daily reports on completed and pending tasks.',
        ],
      },
      {
        role: 'Founder & Full-Stack Developer',
        company: 'Mecaris.ar',
        date: 'Jan 2026 – Present',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Designed and implemented multi-tenant architecture and REST APIs using NestJS, TypeScript, PostgreSQL, and Drizzle ORM.',
          'Developed modules for work orders, clients, and vehicles with Next.js, React, and TanStack Query.',
          'Integrated MercadoPago API for automated subscription billing and access control.',
          'Optimized SQL queries and built bulk data import tools to facilitate shop migration.',
        ],
      },
      {
        role: 'Volunteer Soldier',
        company: 'Argentine Army',
        date: 'Jun 2025 – Nov 2025',
        location: 'Argentina',
        bullets: [
          'Strictly executed procedures, logistical protocols, and operational responsibilities.',
          'Demonstrated teamwork and goal achievement within highly disciplined, hierarchical environments.',
        ],
      },
      {
        role: 'Technical Intern',
        company: 'IADO (CONICET)',
        date: 'Aug 2024 – Dec 2024',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Maintained and updated legacy systems developed in Python and Object Pascal.',
          'Collaborated on technical solutions within a scientific and institutional research environment.',
        ],
      },
      {
        role: 'Programming Instructor',
        company: 'Coding Giants',
        date: 'Dec 2024 – Apr 2025',
        location: 'Spain · Remote',
        bullets: [
          'Taught programming basics and computational logic to students aged 8 to 13.',
        ],
      },
    ],
    education: [
      {
        role: 'Programming Technician',
        company: 'EEST N°1 “ARA GRAL. BELGRANO”',
        date: 'Jan 2018 – Dec 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Technical high school degree in programming.',
      },
      {
        role: 'English Level B1+',
        company: 'Instituto Británico de Villa Mitre',
        date: 'Jan 2018 – Nov 2021',
        location: 'Bahía Blanca, Argentina',
        desc: '',
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
    in: '',
  },
};
