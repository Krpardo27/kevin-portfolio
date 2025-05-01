// src/components/NavBar.jsx
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Función para verificar si la ruta está activa
  const isActive = (path) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="px-6 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className={`flex items-center relative px-1 py-2 transition-colors group
                ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-[#F5F5F5] hover:text-blue-500"
                }`}
            >
              Inicio
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 
                ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>

            <Link
              to="/about"
              onClick={scrollToTop}
              className={`flex items-center relative px-1 py-2 transition-colors group
                ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-[#F5F5F5] hover:text-blue-500"
                }`}
            >
              Acerca
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 
                ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>

            <Link
              to="/experience"
              onClick={scrollToTop}
              className={`flex items-center relative px-1 py-2 transition-colors group
                ${
                  isActive("/experience")
                    ? "text-blue-600"
                    : "text-[#F5F5F5] hover:text-blue-500"
                }`}
            >
              Experiencia
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 
                ${
                  isActive("/experience") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              to="/projects"
              onClick={scrollToTop}
              className={`flex items-center relative px-1 py-2 transition-colors group
                ${
                  isActive("/projects")
                    ? "text-blue-600"
                    : "text-[#F5F5F5] hover:text-blue-500"
                }`}
            >
              Proyectos
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 
                ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`flex items-center relative px-3 py-2 rounded-md text-sm font-medium group
                ${
                  isActive("/contact")
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-500"
                }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0  bg-blue-500 transition-all duration-300 
                ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
