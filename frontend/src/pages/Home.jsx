import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="lg:mt-32 mt-8 px-4 py-16 flex flex-col items-center justify-center">
      <div className="flex w-full flex-col lg:flex-row items-center gap-16">
        {/* Texto */}
        <div className="flex-1 w-full flex flex-col gap-8">
          <header className="relative">
            <h1
              className="
        text-4xl md:text-6xl font-semibold text-white tracking-tight
        mb-3
      "
            >
              Kevin Pardo Veas
            </h1>

            {/* Subrayado decorativo */}
            <div className="h-[2px] w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mb-4" />

            <p
              className="
        text-lg md:text-xl
        font-medium
        bg-gradient-to-r from-blue-400 to-cyan-300
        bg-clip-text text-transparent
      "
            >
              Frontend Engineer · React & UI Architecture
            </p>
          </header>
          <div className="flex flex-col gap-5 max-w-xl">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Diseño y desarrollo interfaces modernas, accesibles y orientadas
              al rendimiento, con foco en experiencia de usuario y calidad de
              producto.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Trabajo principalmente con React, JavaScript y CSS moderno,
              aplicando buenas prácticas de arquitectura frontend, optimización
              y código mantenible en proyectos reales.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4">
            <Link
              to="/about"
              className="
        inline-flex items-center gap-3
        text-blue-400 font-medium
        relative
        after:absolute after:bottom-0 after:left-0 after:h-[1px]
        after:w-0 after:bg-blue-400
        hover:after:w-full after:transition-all
        hover:text-blue-300 transition-colors
        group
      "
            >
              Conocer más sobre mí
              <FaChevronRight
                className="
          transition-transform
          group-hover:translate-x-1
        "
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img
              src="/perfil.jpg"
              alt="Kevin Pardo Veas"
              className="rounded-full w-[220px] h-[220px] lg:w-[320px] lg:h-[320px]
              object-cover border border-gray-700 shadow-xl"
            />
            <span
              className="absolute inset-0 rounded-full border border-blue-500/30"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
