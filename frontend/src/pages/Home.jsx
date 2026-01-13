import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Kevin Pardo | Desarrollador Frontend React & MERN",
    description:
      "Portafolio de Kevin Pardo, desarrollador frontend especializado en React, Tailwind CSS y animaciones modernas.",
    canonical: "https://kevcodesdev.cl/",
  });

  return (
    <section className="lg:mt-32 mt-8 px-4 py-5 flex flex-col items-center justify-center">
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
              Desarrollador Frontend · React
            </p>
          </header>
          <div className="flex flex-col gap-5 max-w-xl">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Desarrollo interfaces web funcionales, claras y orientadas al
              rendimiento, priorizando buenas prácticas y una experiencia de
              usuario sólida.
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
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative">
            <img
              src="/perfil.jpg"
              alt="Kevin Pardo Veas"
              loading="lazy"
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
