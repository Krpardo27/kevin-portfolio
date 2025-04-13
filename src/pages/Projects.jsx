import React from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "Hospital Proyecto",
    description:
      "Proyecto realizado por curso de capacitación de React, donde se desarrolló una aplicación de gestión hospitalaria con funcionalidades como registro de pacientes, citas médicas y gestión de médicos.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "React Router DOM"],
    github: "https://github.com/Krpardo27/proyecto-hospital",
    demo: "https://proyecto-hospital-git-main-kevin-pardo-veas-projects.vercel.app/",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww", 
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Panel de administración con gráficos interactivos y gestión de usuarios.",
    tags: ["Next.js", "TypeScript", "D3.js"],
    github: "#",
    demo: "#",
    image: "/projects/dashboard.jpg",
  },
  {
    id: 3,
    title: "App de Tareas",
    description:
      "Organizador de tareas con arrastrar y soltar, categorías y recordatorios.",
    tags: ["React", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    image: "/projects/todoapp.jpg",
  },
  {
    id: 4,
    title: "App de Tareas",
    description:
      "Organizador de tareas con arrastrar y soltar, categorías y recordatorios.",
    tags: ["React", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    image: "/projects/todoapp.jpg",
  },
  {
    id: 5,
    title: "App de Tareas",
    description:
      "Organizador de tareas con arrastrar y soltar, categorías y recordatorios.",
    tags: ["React", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    image: "/projects/todoapp.jpg",
  },
  // Agrega más proyectos según necesites
];

const Projects = () => {
  return (
    <PageTransition>
      <section className="py-16 px-4 min-h-screen lg:mt-32 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Algunos de mis trabajos recientes donde aplico las mejores
              prácticas de desarrollo.
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-[1px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Imagen del proyecto */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido de la card */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 text-white" /> Github
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
