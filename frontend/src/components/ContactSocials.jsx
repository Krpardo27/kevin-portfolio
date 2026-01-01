import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSocials = () => {
  return (
    <div className="mt-8 border-t border-gray-700 pt-6">
      <p className="text-sm text-gray-400 mb-4 text-center">
        También puedes contactarme en
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/tu-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/tu-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/tu-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:contacto@kevcodesdev.cl"
          className="text-gray-400 hover:text-green-400 transition text-2xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default ContactSocials;
