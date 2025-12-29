import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socialLinks } from "../data/data.js";

const ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

const SocialLinks = ({ className = "", iconClassName = "text-xl" }) => {
  return (
    <ul
      className={`flex items-center gap-4 ${className}`}
      aria-label="Redes sociales"
    >
      {socialLinks.map((item) => {
        const Icon = ICONS[item.icon];
        if (!Icon) return null;

        return (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
