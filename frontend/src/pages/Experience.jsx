import { FiCalendar, FiMapPin } from "react-icons/fi";
import React from "react";
import { experienceData } from "../data/data.js";
import { useSEO } from "../hooks/useSEO.js";

const Experience = () => {
  useSEO({
    title: "Experiencia | Kevin Pardo – Frontend & Full Stack Developer",
    description:
      "Experiencia en desarrollo frontend con React y Tailwind CSS, integración de APIs REST, manejo de estado y proyectos Full Stack MERN.",
    canonical: "https://kevcodesdev.cl/experience",
  });

  return (
    <section className="lg:mt-32 mt-8 px-4 py-5 flex flex-col items-center justify-center">
      <div className="lg:w-[950px] mx-auto">
        {/* Título */}
        <div className="text-center mb-20 w-full">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Experiencia Laboral
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
          <p className="lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Frontend con experiencia en React JS, enfocado en
            crear interfaces modernas, accesibles y orientadas al rendimiento.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central */}
          <div className="lg:absolute left-6 lg:left-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500/30 via-blue-500/60 to-blue-500/30 -z-10 rounded-full" />
          {experienceData.map((job, index) => (
            <div
              key={job.id}
              className={`mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Fecha mobile */}
              <div className="lg:hidden flex items-center mb-4 gap-5 text-gray-400">
                <FiCalendar className="text-blue-400" />
                <span className="text-sm">{job.period}</span>
              </div>

              {/* Card */}
              <div
                className={`group p-7 rounded-2xl border border-gray-700/60 
                bg-gray-900/90 backdrop-blur-sm
                shadow-sm hover:shadow-2xl transition-all duration-300
                hover:-translate-y-1
                flex-1 mx-4
                ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                {/* Header card */}
                <div className="flex flex-col lg:flex-row items-start gap-4 mb-5">
                  <div className="border border-gray-700 rounded-full bg-gray-800">
                    <img
                      src={job.logo}
                      alt={job.company}
                      loading="lazy"
                      className="lg:w-20 lg:h-20 w-[64px] h-[64px] object-contain rounded-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {job.position}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {job.company}
                    </p>

                    <div className="flex items-center mt-2 gap-3 text-gray-500 text-xs">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-white text-sm leading-relaxed">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((technology, techIndex) => (
                    <span
                      key={`${job.id}-tech-${techIndex}`}
                      className="px-3 py-1 rounded-full text-xs font-medium
                      bg-blue-500/10 text-blue-400
                      border border-blue-500/20
                      transition-colors group-hover:bg-blue-500/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fecha desktop */}
              <div className="hidden md:flex items-center justify-center w-32">
                <div className="text-center text-gray-400">
                  <FiCalendar className="mx-auto mb-1 text-blue-400" />
                  <span className="text-sm">{job.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
