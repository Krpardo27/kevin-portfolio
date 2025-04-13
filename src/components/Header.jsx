import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Navbar from "./Navbar";
import Socials from "./Socials";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-8 z-50 bg-gray-900 border-b border-gray-800 shadow-md">
      <div className=" h-full container mx-auto flex items-center justify-between w-full max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 h-full">
          <h1 className="text-white text-2xl font-primary">Kevin Pardo Veas</h1>
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
