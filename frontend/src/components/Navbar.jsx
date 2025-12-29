import { NavLink } from "react-router-dom";
import { navigation } from "../data/data.js";

const linkBase = "relative text-sm font-medium transition-colors group";

const Navbar = () => {
  return (
    <nav aria-label="Navegación principal">
      <ul className="flex gap-8">
        {navigation.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-400
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
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

export default Navbar;
