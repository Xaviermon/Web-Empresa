import style from "./form.module.css";
import Nav from "../nav/nav";
import Button from "../UI/button/Button";

import { useEffect, useState } from "react";
const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    cellphone: "",
    email: "",
    subject: "",
    message: "",
  });
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [property]: value });
  };
  return (
    <>
      <Nav />
      <div className={style.containerForm}>
        <form>
          <header className={style.containerTitleForm}>
            <h1 className={style.titleForm}>Contact Us</h1>
          </header>
          <div className={style.containerInputs}>
            <input
              className={style.inputsForm}
              type="text"
              name="name"
              placeholder="Full name"
              value={contact.name}
              onChange={handlerChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="cellphone"
              placeholder="Cellphone"
              value={contact.cellphone}
              onChange={handlerChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="email"
              placeholder="your@mail.com"
              value={contact.email}
              onChange={handlerChange}
            />
            <input
              className={style.inputsForm}
              type="text"
              name="subject"
              placeholder="Query subject"
              value={contact.subject}
              onChange={handlerChange}
            />
            <div>
              <textarea
                className={style.textForm}
                name="message"
                cols="30"
                rows="10"
                placeholder="Drop us a line ..."
                value={contact.message}
                onChange={handlerChange}
              ></textarea>
            </div>
            <Button>Send Now</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
