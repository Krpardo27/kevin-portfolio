import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";

const Home = () => {

  return (
    <PageTransition>
      <section className="min-h-screen max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <motion.div
          className="flex w-full lg:flex-row flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }}
        >
          <div className="flex-1 flex gap-5  w-full flex-col">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-bold text-[#e1e1e1] font-primary">
                Me llamo Kevin Pardo Veas
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.4,
              }}
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-secondary text-secondary text-lg leading-7 text-[#e1e1e1]"
              >
                Desarrollador Frontend con experiencia en React JS. Apasionado
                por crear interfaces intuitivas y dinámicas, con enfoque en
                rendimiento y accesibilidad.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-secondary text-secondary text-lg leading-7 text-[#e1e1e1]"
              >
                En constante aprendizaje de nuevas tecnologías...
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                to="about"
                className="flex items-center my-5 gap-8 text-[#e1e1e1] bg py-3 w-full max-w-max group"
              >
                Acerca de mí{" "}
                <FaChevronRight className="animate-slide-and-back" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Socials />
            </motion.div>
          </div>

          <motion.div
            className="flex-1 items-center justify-center lg:flex hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
          >
            <motion.img
              src="/perfil.jpg"
              alt="Kevin Pardo Veas"
              className="rounded-full lg:w-[350px] lg:h-[350px] object-cover w-[180px] h-[180px] border-2 border-[#e1e1e1] shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
