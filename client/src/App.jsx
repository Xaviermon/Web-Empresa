import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Form from "./components/form/form";
import Nav from "./components/nav/nav";
import Footer from './components/footer/footer'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
