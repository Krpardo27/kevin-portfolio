export const educationData = [
  {
    id: "adalid-frontend",
    period: "2024 – 2025",
    title: "Especialización en Desarrollo de Aplicaciones Frontend",
    institution: "Adalid",
    image: "/images/education/adalid.png",
    description:
      "Especialización enfocada en fundamentos de programación web, arquitectura frontend y diseño de interfaces.",
  },
  {
    id: "coderhouse-react",
    period: "2023",
    title: "Certificación React.js",
    institution: "CoderHouse",
    image: "/images/education/coderhouse.png",
    description:
      "Curso avanzado de React: componentes, hooks, routing, consumo de APIs, Context API y proyecto final.",
  },
  {
    id: "coderhouse-js",
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    image: "/images/education/coderhouse.png",
    description:
      "Fundamentos de JavaScript moderno: DOM, AJAX, JSON y prácticas aplicadas.",
  },
  {
    id: "aiep-programacion",
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    image: "/images/education/aiep.svg",
    description:
      "Formación técnica en análisis, diseño, desarrollo e implementación de sistemas de software, cubriendo el ciclo completo del desarrollo.",
  },
];

export const experienceData = [
  {
    id: "prisa-media",
    company: "Prisa Media Chile",
    logo: "/images/experience/prisamedia.jpg",
    position: "Desarrollador Digital",
    period: "2024 - Presente",
    location: "Providencia, Región Metropolitana, Chile",
    description: [
      "Creación y mantenimiento de componentes en React.",
      "Desarrollo de nuevas funcionalidades para el sitio web de Radio ADN.",
      "Optimización de performance (reducción de LCP y CLS).",
      "Participación activa en sprints ágiles.",
      "Consumo e integración de APIs REST.",
      "Desarrollo de nuevas secciones y mejoras continuas.",
      "Corrección de bugs y mejoras de estabilidad.",
    ],
    tech: ["React", "HTML", "CSS", "SASS", "Docker", "Node.js", "GitHub"],
  },
  {
    id: "smart-device-heliboss",
    company: "Smart Device / Heliboss",
    logo: "/images/experience/heliboss.jpg",
    position: "Desarrollador Web",
    period: "2023 - 2024",
    location: "Providencia, Región Metropolitana, Chile",
    description: [
      "Optimización SEO y mejora del rendimiento de sitios existentes.",
      "Desarrollo y mantención de secciones principales.",
      "Gestión y creación de productos en PrestaShop.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PrestaShop"],
  },
  {
    id: "fusion-agency",
    company: "Fusion Agency",
    logo: "/images/experience/fusion.jpg",
    position: "Desarrollador Web Junior",
    period: "2021 - 2022",
    location: "Remoto",
    description: [
      "Desarrollo y mantención de sitios web, ecommerce y landing pages.",
      "Implementación de soluciones para clientes en Chile y Perú.",
      "Construcción de sitios en WordPress y soluciones personalizadas.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "WordPress",
      "Elementor",
      "WooCommerce",
    ],
  },
];

export const projectsData = [
  {
    id: "hospital-project",
    title: "Sistema de Gestión Hospitalaria",
    description:
      "Aplicación desarrollada en React para la gestión hospitalaria, incluyendo registro de pacientes, manejo de citas médicas y administración de profesionales de la salud.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "React Router"],
    github: "https://github.com/Krpardo27/proyecto-hospital",
    demo: "https://proyecto-hospital-git-main-kevin-pardo-veas-projects.vercel.app/",
    image: "/images/projects/hospital.jpg",
  },
  {
    id: "notes-app",
    title: "Aplicación de Notas",
    description:
      "Aplicación web para crear, editar y eliminar notas de forma simple e intuitiva, enfocada en la gestión básica de información personal.",
    tags: ["React", "Tailwind CSS", "Axios"],
    github: "https://github.com/Krpardo27/task-manager",
    demo: "https://task-manager-coral-seven.vercel.app/",
    image: "/images/projects/task-manager.jpg",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Aplicación web para consultar condiciones meteorológicas en tiempo real, desarrollada con React y Vite. Permite buscar y visualizar el clima actual de cualquier ciudad del mundo.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Krpardo27/weather-app",
    demo: "https://weather-app-xi-pink-14.vercel.app/",
    image: "/images/projects/weather.jpg",
  },
];

export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Krpardo27",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kevinpardoveas/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:kpardoveas@gmail.com",
    icon: "email",
  },
];

export const navigation = [
  { path: "/", label: "Inicio" },
  { path: "/about", label: "Acerca" },
  { path: "/experience", label: "Experiencia" },
  // { path: "/projects", label: "Proyectos" },
  { path: "/contact", label: "Contacto" },
];
