import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {


  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/Krpardo27",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/kevinpardoveas/",
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:kevin.pardov26@email.com",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white lg:py-12 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Columna 2: Redes sociales */}
        {/* Divider */}
        <div className="lg:border-t border-gray-800 my-6"></div>

        {/* Copyright y créditos */}
        <div className="flex flex-row gap-4 justify-between items-center text-gray-500 text-sm">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center mb-4 md:mb-0"
          >
            <div className="flex items-center w-full">
            <FiHeart className="text-red-500 mx-1" />
            <span className="ml-1">
              © {new Date().getFullYear()} Kevin Pardo Veas. Todos los derechos
              reservados.
            </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
