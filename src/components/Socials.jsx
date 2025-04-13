import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Socials = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin className="text-2xl" />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
          <MdMail className="text-2xl" />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
          Whatsapp
        </a>
      </li>
    </ul>
  );
};

export default Socials;
