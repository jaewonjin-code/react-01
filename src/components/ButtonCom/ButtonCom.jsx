import style from "./ButtonCom.module.css";

const ButtonCom = () => {
  return (
    <>
      <h1 className={style.title}>ButtonCom Component With CSS Module</h1>
      <nav className={style.navBar}>
        <button className={style.myButton}>button1</button>
        <button className={style.myButton}>button2</button>
      </nav>
    </>
  );
};

export default ButtonCom;
