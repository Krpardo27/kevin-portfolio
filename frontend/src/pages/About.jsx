import { educationData } from "../data/data.js";

const About = () => {
  return (
    <section className="lg:mt-32 mt-8 px-4 py-5 flex flex-col items-center justify-center">
      <header className="text-center mb-20 w-full">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full" />
        <p className="lg:text-lg text-[15px] text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Frontend Developer enfocado en React y JavaScript, con experiencia
          construyendo interfaces modernas, accesibles y orientadas a
          mantenibilidad. Mi foco está en código limpio y experiencias digitales
          bien pensadas.
        </p>
      </header>

      <div className="w-full relative">
        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500/30 via-blue-500/60 to-blue-500/30" />

        <ul className="space-y-16">
          {educationData.map((item) => (
            <li
              key={item.id}
              className="relative flex items-start gap-6 pl-16"
            >
              <span className="absolute left-5 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900" />
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-xl border border-gray-700 bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              {/* Contenido */}
              <div className="flex-1">
                <span className="text-xs uppercase tracking-widest text-blue-400">
                  {item.period}
                </span>

                <h3 className="text-lg font-semibold text-white mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 font-medium mt-0.5">
                  {item.institution}
                </p>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
