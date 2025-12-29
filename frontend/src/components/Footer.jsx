import { FiHeart } from "react-icons/fi";
import SocialLinks from "./SocialLinks.jsx";

const Footer = () => {
  
  return (
    <footer className="bg-gray-900 text-white lg:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="lg:border-t border-gray-800 my-6"></div>
        <div className="flex flex-row gap-4 justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center w-full">
              <FiHeart className="text-red-500 mx-1" />
              <span className="ml-1">
                © {new Date().getFullYear()} Kevin Pardo Veas. Todos los
                derechos reservados.
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
