import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const NavMobile = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", name: "Inicio", icon: <FiHome /> },
    { path: "/about", name: "Acerca", icon: <FiUser /> },
    { path: "/experience", name: "Experiencia", icon: <FiBriefcase /> },
    { path: "/projects", name: "Proyectos", icon: <FiFolder /> },
    { path: "/contact", name: "Contacto", icon: <FiMail /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900 shadow-lg border-t border-gray-500 z-50 md:hidden"
    >
      <div className="flex justify-around items-center px-1 py-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            onClick={scrollToTop}
            to={item.path}
            className="flex flex-col items-center relative px-2 py-1"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`text-2xl p-2 rounded-full transition-colors ${
                isActive(item.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-200 hover:text-blue-500"
              }`}
            >
              {item.icon}
            </motion.div>
            <span
              className={`text-[14px] mt-1 ${
                isActive(item.path) ? "text-white" : "text-gray-500"
              }`}
            >
              {item.name}
            </span>
            {isActive(item.path) && (
              <motion.span
                layoutId="mobileNavIndicator"
                className="absolute  bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavMobile;
