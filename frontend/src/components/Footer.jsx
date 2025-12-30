import { FiHeart } from "react-icons/fi";
import SocialLinks from "./SocialLinks.jsx";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8 lg:py-12 mb-20 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="border-t border-gray-800 mb-6" />

        <div
          className="
            flex flex-col gap-6
            sm:flex-row sm:justify-center sm:items-center
            text-gray-400 text-sm w-full
          "
        >
          {/* Texto */}
          <div className="flex flex-col lg:flex-row items-center gap-2 text-center sm:text-left">
            <span className="leading-relaxed">
              © {new Date().getFullYear()} Kevin Pardo Veas.  
              <br className="sm:hidden" />
              Todos los derechos reservados.
            </span>
          </div>

          {/* Redes */}
          <div className="flex justify-center sm:justify-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
