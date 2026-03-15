import { useRef } from "react";
import { cvData } from "../data/cvData";
import { FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CV = () => {
  const cvRef = useRef(null);

  const downloadPDF = async () => {
    const { default: html2pdf } = await import("html2pdf.js");

    html2pdf()
      .set({
        margin: 0,
        filename: "Kevin-Pardo-Resume.pdf",
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(cvRef.current)
      .save();
  };

  const getContactLabel = (item) => {
    if (item.id === "github") return "github.com/Krpardo27";
    if (item.id === "linkedin") return "linkedin.com/in/kevinpardoveas";
    if (item.id === "email") return "kpardoveas@gmail.com";
    return item.url;
  };

  const getContactIcon = (id) => {
    if (id === "github") return <FaGithub />;
    if (id === "linkedin") return <FaLinkedin />;
    if (id === "email") return <FaEnvelope />;
    return null;
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      {/* botón */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-end">
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaFilePdf />
          Descargar PDF
        </button>
      </div>

      {/* CV */}
      <div
        ref={cvRef}
        className="max-w-5xl mx-auto bg-white shadow-xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 md:px-10 pt-10 pb-24">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {cvData.name}
          </h1>

          <p className="text-gray-300 mt-1 text-sm md:text-base">
            {cvData.title}
          </p>

          {/* curva */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-[100%]" />

          {/* FOTO */}
          <img
            src="/perfil.jpg"
            alt="Foto perfil"
            className="
              absolute
              -bottom-16 md:-bottom-20
              left-6 md:left-10
              w-28 h-28 md:w-40 md:h-40
              rounded-full
              border-4 border-white
              object-cover
              shadow-lg
            "
          />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 pb-12">
          {/* SIDEBAR */}
          <aside className="space-y-8 pt-20">
            {/* Contacto */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3 tracking-wide">
                Contacto
              </h2>

              <div className="space-y-3 text-sm text-gray-600">
                {cvData.contact.map((c) => (
                  <div key={c.id} className="flex items-start gap-3">
                    <span className="text-gray-700 mt-[2px]">
                      {getContactIcon(c.id)}
                    </span>

                    <div className="min-w-0">
                      <p className="font-medium text-gray-900">{c.name}</p>

                      <a
                        href={c.url}
                        target={c.id !== "email" ? "_blank" : undefined}
                        rel={
                          c.id !== "email" ? "noopener noreferrer" : undefined
                        }
                        className="text-gray-600 break-all hover:underline"
                      >
                        {getContactLabel(c)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3 tracking-wide">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs
                      bg-gray-200
                      px-2 py-1
                      rounded
                      font-medium
                      text-gray-700
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3 tracking-wide">
                Educación
              </h2>

              {cvData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {edu.title}
                  </p>

                  <p className="text-xs text-gray-500">{edu.institution}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* MAIN */}
          <main className="md:col-span-2 space-y-10">
            {/* Perfil */}
            <section>
              <h2 className="text-lg font-semibold border-b pb-2 mb-3 text-gray-900">
                Perfil
              </h2>

              <p className="text-gray-700 leading-relaxed">{cvData.summary}</p>
            </section>

            {/* Experiencia */}
            <section>
              <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-900">
                Experiencia
              </h2>

              {cvData.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>

                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{exp.company}</p>

                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Proyectos */}
            <section>
              <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-900">
                Proyectos
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cvData.projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CV;
