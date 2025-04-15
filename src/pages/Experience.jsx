import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCode, FiMapPin } from "react-icons/fi";
import PageTransition from "../components/PageTransition";

const Experience = () => {
  const jobs = [
    {
      id: 1,
      company: "Prisa Media Chile",
      logo: "/images/experience/prisamedia.jpg",
      position: "Desarrollador Digital",
      period: "2025 - Presente",
      location: "Eliodoro Yáñez 1783, Providencia, Región Metropolitana",
      description: [
        "Liderazgo del equipo frontend en proyectos con React y TypeScript",
        "Implementación de arquitectura micro-frontend",
        "Optimización de performance (reducción de LCP en 40%)",
      ],
      tech: ["React", "HTML", "CSS", "SASS", "Docker", "Node.js", "Github"],
    },
    {
      id: 2,
      company: "Smart Device / Heliboss",
      logo: "/images/experience/heliboss.jpg",
      position: "Desarrollador Web",
      period: "2023 - 2024",
      location:
        "Pedro de Valdivia Nte. 0121, Providencia, Región Metropolitana",
      description: [
        "Desarrollo de 15+ aplicaciones web con React",
        "Integración con APIs REST y Firebase",
        "Mentoría a desarrolladores junior",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PrestaShop"],
    },
    {
      id: 3,
      company: "Fusion Agency",
      logo: "/images/experience/fusion.jpg",
      position: "Desarrollador Junior",
      period: "2021 - 2022",
      location: "Remoto",
      description: [
        "Maquetación de interfaces con HTML/CSS",
        "Implementación de componentes React",
        "Participación en sprints ágiles",
      ],
      tech: ["HTML", "JavaScript", "CSS", "Boostrap", "Wordpress"],
    },
  ];

  return (
    <PageTransition>
      <section className="min-h-screen lg:mt-32 mt-20 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <div className="lg:w-[950px] mx-auto">
          {/* Título */ }
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 w-full"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Experiencia Laboral
            </h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Desarrollador Frontend con experiencia en React JS. Apasionado por
              crear interfaces intuitivas y dinámicas, con enfoque en
              rendimiento y accesibilidad.
            </p>
          </motion.div>

          {/* Timeline de Experiencia */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 -z-10"></div>

            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Fecha (mobile) */}
                <div className="md:hidden flex items-center mb-4 gap-4">
                  <FiCalendar className="text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-500">
                    {job.period}
                  </span>
                </div>

                {/* Tarjeta */}
                <div
                  className={`p-6 rounded-xl shadow-md border border-gray-200 flex-1 mx-4 bg-white ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-start mb-4">
                    {/* Logo de la empresa */}
                    <div className="rounded-lg p-2 border mr-2 border-gray-200 lg:mr-4 overflow-hidden rounded-full">
                      <img
                        src={job.logo}
                        alt=""
                        className="lg:w-28 lg:h-28 w-[70px] h-[70px]"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {job.position}
                      </h3>
                      <p className="text-lg text-gray-400 font-medium">
                        {job.company}
                      </p>
                      <div className="flex items-center mt-1 text-gray-500">
                        <FiMapPin className="mr-1" size={14} />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fecha (desktop) */}
                <div className="hidden md:flex items-center justify-center w-32">
                  <div className="text-center">
                    <FiCalendar className="text-blue-500 mx-auto mb-1" />
                    <span className="text-sm font-medium text-white">
                      {job.period}
                    </span>
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

export default Experience;
