import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData } from "../data/data.js";

const Projects = () => {
  return (
    <section className="min-h-screen lg:mt-32 mt-20 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Una selección de proyectos donde aplico buenas prácticas de
            frontend, arquitectura de componentes y enfoque en experiencia de
            usuario.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden
              border border-gray-700/60 bg-gray-900/90
              shadow-sm hover:shadow-2xl transition-all duration-300
              flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-tag-${index}`}
                      className="px-3 py-1 rounded-full text-xs
                      bg-blue-500/10 text-blue-400
                      border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-5 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400
                    hover:text-white transition-colors"
                  >
                    <FiGithub />
                    Código
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400
                    hover:text-blue-300 transition-colors"
                  >
                    <FiExternalLink />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
