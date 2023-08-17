import React from 'react';
import styles from './Nav.module.css';
import logo from "./icon-name.jpeg"

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.menu}>
        <a href="/home">Home</a>
        <a href="/our-bikes">Our Bikes</a>
        <a href="/blog">Blog</a>
        <a href="/get-in-touch">Get in Touch</a>
      </div>
      <div className={styles.rightSection}>
        <a href="/my-account">My Account</a>
        <div className={styles.cart}>
          <a href="/my-cart">My Cart</a>
        </div>
        <div className={styles.search}>
          <button onClick={() => {/* Función de búsqueda */ }}>🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;