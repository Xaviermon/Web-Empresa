import React from "react";
import style from "./footer.module.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      href: "https://www.instagram.com/burguerbytedf/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.facebook.com/tu_perfil_de_facebook",
      icon: <FaFacebook />,
    },
    {
      href: "https://www.linkedin.com/in/tu_perfil_de_linkedin",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.github.com/tu_usuario_de_github",
      icon: <FaGithub />,
    },
  ];
 
  const renderedLinks = socialLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
    </a>
  ));

  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>{renderedLinks}</div>
      <p className={style.footerText}>
        Todos los derechos reservados. © {currentYear} BurguerByte.
      </p>
    </footer>
  );
};
export default Footer;
