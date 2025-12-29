import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50
      bg-gray-900/80 backdrop-blur-md
      border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-lg font-semibold tracking-tight"
          aria-label="Inicio"
        >
          Kevin<span className="text-blue-400">Dev</span>
        </Link>
        <div className="hidden md:block">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
