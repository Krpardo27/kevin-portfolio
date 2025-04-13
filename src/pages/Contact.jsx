import React from "react";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center h-screen">
        <div>
          <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
              Me llamo Kevin Pardo Veas
            </h1>
          </div>
          <div>
            <p>
              Apasionado por crear experiencias digitales atractivas y
              funcionales con código limpio y buenas prácticas. Con formación en
              desarrollo web y experiencia práctica en proyectos personales con
              React, JavaScript y Tailwind CSS. Busco mi primera oportunidad
              profesional para aportar ideas frescas, aprender de equipos
              experimentados y crecer como desarrollador.
            </p>
            <p>
              En constante aprendizaje de nuevas tecnologías y mejorando mis
              habilidades en UI/UX. Abierto a oportunidades que me permitan
              evolucionar en el mundo del desarrollo frontend.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
