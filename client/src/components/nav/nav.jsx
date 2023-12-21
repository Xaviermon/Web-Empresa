import { FaBars } from "react-icons/fa"; // Importa el icono que desees utilizar
import styles from "./nav.module.css";
import logo from "../../../asset/Logo/BlancoFondo-removebg-preview.png";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 781);

const toggleSidebar = () => {
  setIsOpen(prevIsOpen => !prevIsOpen);
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 781);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <>
      <div className={styles.topBar}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </a>
        <button onClick={toggleSidebar} className={styles.menuButton}>
          <FaBars /> {/* Icono de menú */}
        </button>
      </div>
      <nav className={isOpen ? styles.sidebarOpen : styles.sidebar}>
        <div className={styles.menu}>
          <a href="/">Home</a>
          <a href="/About">Quienes somos</a>
          <a href="/Form">Contacto</a>
        </div>
      </nav>
    </>
  ) : (
    <nav className={styles.navbar2}>
      <div className={styles.logo2}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.menu2}>
        <a href="/">Home</a>
        <a href="/About">Quienes somos</a>
        <a href="/Form">Contacto</a>
      </div>
    </nav>
  );
};

export default Nav;

/**!SECTION
 * 
 * 

<div className={styles.rightSection2}>
<a href="/my-account">My Account</a>
<div className={styles.cart2}>
  <a href="/my-cart">My Cart</a>
</div>
<div className={styles.search2}>
  <button
    onClick={() => {
       Función de búsqueda 
    }}
  >
    🔍
  </button>
</div>
</div>
  */
