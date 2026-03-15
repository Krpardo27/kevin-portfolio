import { educationData } from "./educationData";
import { experienceData } from "./experienceData";
import { projectsData } from "./projectsData";
import { socialLinks } from "./socialLinks";

export const cvData = {
  name: "Kevin Ricardo Pardo Veas",
  title: "Full Stack Developer (React / MERN)",
  location: "Santiago, Chile",

  website: "https://kevcodesdev.cl",

  summary:
    "Desarrollador Full Stack especializado en React y stack MERN. Experiencia desarrollando plataformas web modernas, optimizando performance (LCP, CLS), integrando APIs REST y desplegando aplicaciones en entornos cloud. Enfocado en interfaces eficientes, escalables y con excelente experiencia de usuario.",

  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Framer Motion",
    "TanStack Query",
    "Cloudinary",
    "Auth0",
    "REST APIs",
    "Git",
    "Vercel",
    "Render",
  ],

  experience: experienceData,

  education: educationData,

  projects: projectsData.slice(0, 4),

  contact: socialLinks,
  
};