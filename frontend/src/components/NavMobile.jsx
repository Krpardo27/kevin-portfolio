import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from "react-icons/fi";

const NavMobile = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", name: "Inicio", icon: FiHome },
    { path: "/about", name: "Acerca", icon: FiUser },
    { path: "/experience", name: "Experiencia", icon: FiBriefcase },
    { path: "/projects", name: "Proyectos", icon: FiFolder },
    { path: "/contact", name: "Contacto", icon: FiMail },
  ];
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        bg-gray-900/90 backdrop-blur
        border-t border-white/10
        shadow-[0_-10px_30px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={scrollToTop}
              className="relative flex flex-col items-center gap-1 px-3 py-2"
            >
              <div
                className={`
                  relative z-10
                  flex items-center justify-center
                  text-xl
                  transition-all duration-200
                  ${
                    active
                      ? "text-cyan-400 scale-110 -translate-y-0.5"
                      : "text-gray-400 hover:text-blue-400"
                  }
                `}
              >
                <Icon />
              </div>
              <span
                className={`
                  relative z-10
                  text-[11px] font-medium
                  transition-colors
                  ${active ? "text-cyan-300" : "text-gray-500"}
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavMobile;
