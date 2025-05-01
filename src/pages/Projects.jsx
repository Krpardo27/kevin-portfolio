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
    image: "images/projects/hospital.jpg",
  },

  {
    id: 2,
    title: "Aplicación de Notas",
    description:
      "Crea notas, edítalas y elimínalas. Esta aplicación de notas es un proyecto de React. Los usuarios pueden crear, editar y eliminar notas fácilmente.",
    tags: ["React", "Tailwind CSS", "Axios"],
    github: "https://github.com/Krpardo27/task-manager",
    demo: "https://task-manager-coral-seven.vercel.app/",
    image: "images/projects/task-manager.jpg",
  },
  {
    id: 3,
    title: "Weather APP",
    description:
      "Este proyecto es una aplicación web para consultar condiciones meteorológicas, desarrollada con React, Vite, Tailwind CSS, FramerMotion. Permite a los usuarios buscar y visualizar el clima actual de cualquier ciudad del mundo.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Krpardo27/weather-app",
    demo: "https://weather-app-xi-pink-14.vercel.app/",
    image: "images/projects/weather.jpg",
  },
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
                className="border-[1px] border-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                {/* Contenedor de imagen con altura fija */}
                <div className="w-full h-64 overflow-hidden"> {/* Ajusta h-48 según necesites */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="lg:w-full lg:h-full object-cover transition-transform hover:scale-105"
                  />
                </div>

                {/* Contenido de la card - flex-grow para ocupar el espacio restante */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1"> {/* line-clamp para texto largo */}
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2"> {/* Ajusta line-clamp según necesites */}
                    {project.description}
                  </p>

                  {/* Tags - mt-auto para pegarlo abajo si el contenido es variable */}
                  <div className="mt-auto">
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
