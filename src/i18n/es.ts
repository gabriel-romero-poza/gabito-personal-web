export const es = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    title: 'Desarrollador Full-Stack',
    subtitle: 'Fundador de Mecaris. Construyo cosas.',
    cta_projects: 'Ver proyectos',
    cta_contact: 'Contacto',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy desarrollador Full-Stack y supervisor de operaciones, de Bahía Blanca, Argentina. Diseño, construyo y despliego plataformas SaaS multi-tenant en el ecosistema TypeScript (Node.js, NestJS, Next.js, React) con PostgreSQL.',
    p2: {
      before: 'Fundé ',
      linkText: 'Mecaris',
      after: ', una plataforma para la gestión de talleres mecánicos. Me apasiona llevar productos desde la concepción hasta producción, con código limpio y bien estructurado.',
      href: 'https://mecaris.ar',
    },
    stack: 'Stack tecnológico',
    photoPlaceholder: '— foto por agregar —',
  },
  projects: {
    title: 'Proyectos',
    mecaris: {
      title: 'Mecaris',
      badge: 'Fundador · En producción',
      desc: 'Plataforma SaaS multi-tenant para la gestión de talleres mecánicos: órdenes de trabajo, clientes y vehículos. APIs REST con NestJS, front con Next.js/React, facturación automatizada con MercadoPago e importación masiva de datos para migrar talleres.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Drizzle', 'MercadoPago', 'TanStack Query'],
      link: 'Ver proyecto',
    },
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        role: 'Supervisor de Operaciones',
        company: 'Redes del Sur (contratista para BVC)',
        date: 'Abr 2026 – Actual',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Gestión del ciclo operativo diario, despacho de órdenes de servicio y seguimiento del trabajo de campo.',
          'Coordinación y asignación de tareas a cuadrillas técnicas mediante herramientas digitales.',
          'Articulación entre dirección y equipos de campo para la resolución de incidencias.',
          'Consolidación de información operativa y reportes diarios de trabajos ejecutados y pendientes.',
        ],
      },
      {
        role: 'Fundador y Desarrollador Full-Stack',
        company: 'Mecaris.ar',
        date: 'Ene 2026 – Actual',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Diseño e implementación de arquitectura multi-tenant y APIs REST con NestJS, TypeScript, PostgreSQL y Drizzle ORM.',
          'Módulos de órdenes de trabajo, clientes y vehículos con Next.js, React y TanStack Query.',
          'Integración de MercadoPago para suscripciones y control de acceso.',
          'Optimización de consultas SQL y herramientas de importación masiva para migrar talleres.',
        ],
      },
      {
        role: 'Soldado Voluntario',
        company: 'Ejército Argentino',
        date: 'Jun 2025 – Nov 2025',
        location: 'Argentina',
        bullets: [
          'Cumplimiento estricto de procedimientos, protocolos logísticos y responsabilidades operativas.',
          'Trabajo en equipo y cumplimiento de objetivos bajo estructuras jerárquicas y de alta disciplina.',
        ],
      },
      {
        role: 'Pasante Técnico',
        company: 'IADO (CONICET)',
        date: 'Ago 2024 – Dic 2024',
        location: 'Bahía Blanca, Argentina',
        bullets: [
          'Mantenimiento y soporte de sistemas legacy en Python y Object Pascal.',
          'Colaboración técnica en entornos orientados a la investigación científica e institucional.',
        ],
      },
      {
        role: 'Profesor de Programación',
        company: 'Coding Giants',
        date: 'Dic 2024 – Abr 2025',
        location: 'España · Remoto',
        bullets: [
          'Dictado de clases de programación y lógica computacional a estudiantes de 8 a 13 años.',
        ],
      },
    ],
    education: [
      {
        role: 'Técnico en Programación',
        company: 'EEST N°1 “ARA GRAL. BELGRANO”',
        date: 'Ene 2018 – Dic 2024',
        location: 'Bahía Blanca, Argentina',
        desc: 'Título técnico de nivel secundario en programación.',
      },
      {
        role: 'Inglés Nivel B1+',
        company: 'Instituto Británico de Villa Mitre',
        date: 'Ene 2018 – Nov 2021',
        location: 'Bahía Blanca, Argentina',
        desc: '',
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
    in: '',
  },
};
