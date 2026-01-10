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
    id: "restaurant-landing",
    title: "Restaurant Landing – Pizzería",
    description:
      "Landing page moderna para restaurante de pizzas, enfocada en experiencia de usuario, diseño editorial y navegación fluida. Incluye hero con slider, menú estilo carta, scroll suave y animaciones sutiles.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Swiper", "React Router"],
    github: "https://github.com/Krpardo27/restaurant-landing",
    demo: "https://restaurant-landing-one.vercel.app/",
    image: "/images/projects/restaurant.jpg",
  },
  {
    id: "coffee-landing",
    title: "Coffee Landing – Cafetería",
    description:
      "Landing page para cafetería con enfoque en identidad visual y narrativa de marca. Diseño limpio, tipografías elegantes, animaciones suaves y secciones pensadas para storytelling.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "Vite"],
    github: "https://github.com/Krpardo27/coffee-landing",
    demo: "https://coffee-landing-rho.vercel.app/",
    image: "/images/projects/coffee.jpg",
  },
  {
    id: "ecommerce-urban-mern",
    title: "Urban Ecommerce – MERN Stack",
    description:
      "Plataforma ecommerce full-stack orientada a moda urbana. Incluye catálogo dinámico, filtrado por categorías, carrito persistente, notificaciones accesibles, loader global, skeleton UI y experiencia SPA optimizada para producción. Arquitectura MERN con deploy real en Vercel y Render.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Radix UI",
      "Render",
      "Context API",
      "Vercel",
    ],
    github: "https://github.com/Krpardo27/ecommerce-mern",
    demo: "https://ecommerce-mern-theta-six.vercel.app/",
    image: "/images/projects/ecommerce.jpg",
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
  { path: "/projects", label: "Proyectos" },
  { path: "/contact", label: "Contacto" },
];
