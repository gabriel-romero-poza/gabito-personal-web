/**
 * Tipos compartidos del portfolio. Una sola fuente de verdad (DRY)
 * para formas de datos usadas en varios componentes.
 */

/** Entrada de timeline: trabajo o educación (misma estructura). */
export interface TimelineEntry {
  role: string;
  company: string;
  date: string;
  location: string;
  /** Descripción corta en un párrafo (opcional). */
  desc?: string;
  /** Viñetas del CV cuando el rol tiene varios puntos. */
  bullets?: string[];
}

/** Datos de un proyecto para ProjectCard. */
export interface ProjectData {
  title: string;
  badge: string;
  desc: string;
  tags: string[];
  linkText: string;
  href: string;
  /** Texto mostrado en la barra del mockup del navegador. */
  browserTitle?: string;
  /** Captura real del producto dentro del mockup. */
  imageSrc?: string;
  imageAlt?: string;
}
