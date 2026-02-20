export const es = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    title: 'Desarrollador de Software',
    subtitle: 'Founder de Escolaris. Contruyo cosas.',
    cta_projects: 'Ver proyectos',
    cta_contact: 'Contacto',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy un joven desarrollador de software, originario de Bahía Blanca, Argentina. Mi principal experiencia es en el desarrollo de APIs, sistemas de autenticación y plataformas SaaS.',
    p2: {
      before: 'Fundé ',
      linkText: 'Escolaris',
      after: ', una plataforma de gestión escolar multi-tenant actualmente en beta abierta. Me apasiona resolver problemas reales con código limpio y bien estructurado.',
      href: 'https://escolaris.com.ar',
    },
    stack: 'Stack tecnológico',
    photoPlaceholder: '— foto por agregar —',
  },
  projects: {
    title: 'Proyectos',
    escolaris: {
      title: 'Escolaris',
      badge: 'Fundador · En producción',
      desc: 'Plataforma SaaS multi-tenant para gestión académica y administrativa de instituciones educativas. Arquitectura con aislamiento total de datos por institución, RBAC para múltiples roles y despliegue en producción con backups automáticos.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'JWT', 'RBAC'],
      link: 'Ver proyecto',
    },
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        role: 'Docente de Programación',
        company: 'Coding Giants',
        date: 'Dic 2024 – Abr 2025',
        location: 'España · Remoto',
        desc: 'Clases de programación a estudiantes de 8–14 años. Variables, control de flujo, funciones y POO.',
      },
      {
        role: 'Pasante de Programación',
        company: 'IADO (CONICET)',
        date: 'Jul 2024 – Dic 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Mantenimiento y mejora de sistemas internos en producción. Refactoring, debugging y flujos Git.',
      },
    ],
    education: [
      {
        role: 'Ingeniería en Sistemas de Información',
        company: 'Universidad Nacional del Sur',
        date: 'Feb 2025 – Presente',
        location: 'Bahía Blanca, Argentina',
        desc: '',
      },
      {
        role: 'Técnico en Programación',
        company: 'E.E.S.T. No. 1',
        date: 'Feb 2018 – Dic 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Título técnico de nivel secundario en programación.',
      },
    ],
    exp_label: 'Experiencia',
    edu_label: 'Educación',
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tenés un proyecto en mente o querés charlar? Escribime.',
    email: 'Enviar email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv_es: 'Descargar CV (ES)',
    cv_en: 'Descargar CV (EN)',
  },
  footer: {
    made: 'Hecho con',
    in: 'por Gabito',
  }
};
