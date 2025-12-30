import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../data/data.js";

const NavMobile = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Navegación móvil"
      className="
        fixed bottom-0 left-0 right-0 z-50 md:hidden
        bg-gray-900/90 backdrop-blur
        border-t border-white/10
        shadow-[0_-10px_30px_rgba(0,0,0,0.35)]
      "
    >
      <ul className="flex justify-around items-center py-2">
        {navigation.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `
                  flex flex-col items-center gap-1 px-3 py-2
                  text-[11px] font-medium transition-all
                  ${
                    isActive
                      ? "text-cyan-400 scale-110 -translate-y-0.5"
                      : "text-gray-400 hover:text-blue-400"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>

                  {/* indicador */}
                  <span
                    className={`
                      h-[2px] rounded-full bg-cyan-400 transition-all duration-300
                      ${isActive ? "w-4" : "w-0"}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
