import style from "./form.module.css";
const Form = () => {
  return (
    <div className={style.containerForm}>
      <form>
        <header className={style.containerTitleForm}>
          <h1 className={style.titleForm}>Contact Us</h1>
        </header>
        <div className={style.containerInputs}>
          <input className={style.inputsForm} type="text" placeholder="Full name"/>
          <input className={style.inputsForm} type="text" placeholder="Cellphone"/>
          <input className={style.inputsForm} type="text" placeholder="your@mail.com"/>
          <input className={style.inputsForm} type="text" placeholder="query subject"/>
          <div>
            <textarea className={style.textForm} name="" id="" cols="30" rows="10" placeholder="Drop us a line ..."></textarea>
          </div>
        <button className={style.btnForm}>SEND NOW</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
