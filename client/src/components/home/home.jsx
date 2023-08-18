import React from "react";
import Nav from "../nav/nav.jsx";
import Footer from "../footer/footer";
import Button from "../UI/button/Button.jsx";
import style from "./home.module.css";
import logo from "../home/banner.png";

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <main className={style.main}>
        <div className={style.heroInfo}>
          <h1>Sitios y Aplicaciones WEB</h1>
          <h4>Creamos sitios de calidad bla bla</h4>
          <Button>Contrata</Button>
        </div>
        <img src={logo} alt="esta es una imagen" />
      </main>
      <Footer />
    </>
  );
};

export default Home;
