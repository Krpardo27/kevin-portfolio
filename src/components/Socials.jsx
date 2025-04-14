import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Socials = () => {
  return (
    <ul className="flex gap-3 items-center">
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-all duration-300">
          <FaLinkedin className="text-2xl" />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-all duration-300">
          <IoMail className="text-2xl" />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition-all duration-300">
          <FaWhatsapp className="text-2xl" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
