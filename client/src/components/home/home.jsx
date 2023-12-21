import Nav from "../nav/nav.jsx";
import Button from "../UI/button/Button.jsx";
import style from "./home.module.css";
import logo from "../../../asset/Logo/BlancoFondo-removebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <main className={style.main}>
        <img src={logo} alt="imagen logo" />
        <div className={style.heroInfo}>
          <h1 className={style.h1}>Desarrollo FullStack</h1>
          <h4 className={style.h4}>Sabores en código, servidos a tu estilo</h4>
          <Link to="/Form">
            <Button>Get in touch</Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;

// <Footer />
