import React from "react";
import { FiAward, FiBook, FiCode, FiBriefcase } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const About = () => {
  const timelineData = [
    {
      year: "2024 - 2025",
      title: "Especialización en Desarrollo de Aplicaciones Front-End",
      institution: "Especialización en Desarrollo de Aplicaciones Front-End",
      image: "/images/education/adalid.png",
      description:
        "Formación en fundamentos de programación web y diseño frontend",
    },
    {
      year: "2023",
      title: "Certificado React JS",
      institution: "CoderHouse",
      image: "/images/education/coderhouse.png",
      description:
        "Curso de React.js: desde configuración y JSX hasta componentes, hooks, API calls, routing, Context API, Firebase y workshop final.",
    },
    {
      year: "2022",
      title: "Certificado JavaScript",
      institution: "CoderHouse",
      image: "/images/education/coderhouse.png",
      description: "JavaScript desde cero: fundamentos, DOM, jQuery, AJAX, JSON y workshops prácticos.",
    },
    {
      year: "2019 - 2022",
      title: "Técnico en Programación y Análisis de Sistemas",
      institution: "Instituto Profesional AIEP",
      image: "/images/education/aiep.svg",
      description:
        "Arquitectura de soluciones en la nube para aplicaciones frontend",
    },
  ];

  // const skills = [
  //   { name: "React", level: 90 },
  //   { name: "TypeScript", level: 85 },
  //   { name: "Next.js", level: 80 },
  //   { name: "Tailwind CSS", level: 95 },
  //   { name: "Node.js", level: 70 },
  // ];

  return (
    <PageTransition>
      <section className="min-h-screen lg:mt-32 mt-20 max-w-3xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        {/* Sección Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="lg:text-xl text-[16px] text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Frontend con más de 4 años de experiencia creando
            interfaces modernas y accesibles. Especializado en React y
            apasionado por el diseño de UX/UI. Me enfoco en construir
            aplicaciones escalables con código limpio y buenas prácticas.
          </p>
        </motion.div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 gap-12 ">
          {/* Timeline animada */}
          <div className="relative">
            <div className="absolute left-8 top-4 h-full w-0.5 bg-gray-200 -z-10"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-8 flex group max-w-5xl mx-auto py-4"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:bg-blue-50 transition-colors shadow-sm">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>
                <div className="ml-6 w-full">
                  <span className="text-sm font-semibold text-blue-600">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-600">
                    {item.title}
                  </h3>
                  <p className="font-medium text-gray-200">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills animada */}
          {/* <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Mis Habilidades
                  </h3>
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Experiencia
                </h3>
                <div className="flex items-start">
                  <div className="text-5xl font-bold text-blue-500 mr-4">
                    4+
                  </div>
                  <p className="text-gray-200 mt-2">
                    Años de experiencia trabajando en proyectos complejos para
                    clientes internacionales
                  </p>
                </div>
              </motion.div>
            </div> */}
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
