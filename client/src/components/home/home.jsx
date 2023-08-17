import React from "react";
import Nav from "../nav/nav.jsx";
import Footer from "../footer/footer";
import style from "./home.module.css";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Nav />
      <main className={style.homeMain}>
        <h1>Contenido del Home</h1>
      </main>
      <Footer className={style.homeFooter} />
    </div>
  );
};

export default Home;
