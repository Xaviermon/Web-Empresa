import style from "./button.module.css";

const Button = ({ children }) => {
  return <button className={style.btnPrimary}>{children}</button>;
};

export default Button;
