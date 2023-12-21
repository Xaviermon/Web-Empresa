import style from "./form.module.css";
import Nav from "../nav/nav";
import axios from "axios";
import { useState } from "react";
import Button from "../UI/button/Button";
import imgForm from "./imagenForm.jpg";

const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    cellphone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [property]: value });
  };

  const handleSubmit = () => {
    alert('Mensaje enviado');
    axios.post('http://localhost:3001/form', contact);
  };

  return (
    <>
      <Nav />
      <div className={style.containerForm}>
        <form>
          <header className={style.containerTitleForm}>
            <h1 className={style.titleForm}>Contacto</h1>
          </header>
          <div className={style.containerInputs}>
            <input
              className={style.inputsForm}
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={contact.name}
              onChange={handleChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="cellphone"
              placeholder="Teléfono"
              value={contact.cellphone}
              onChange={handleChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="email"
              placeholder="correo@correo.com"
              value={contact.email}
              onChange={handleChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="subject"
              placeholder="Asunto de la consulta"
              value={contact.subject}
              onChange={handleChange}
            />
            <div>
              <textarea
                className={style.textForm}
                name="message"
                cols="30"
                rows="10"
                placeholder="Déjanos un mensaje"
                value={contact.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <Button onClick={handleSubmit}>ENVIAR AHORA</Button>
          </div>
        </form>
        <div className={style.containerImagForm}>
          <img src={imgForm} alt="" />
        </div>
      </div>
    </>
  );
};

export default Form;
