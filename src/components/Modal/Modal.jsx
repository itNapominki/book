import style from "./Modal.module.css";

export default function Modal({ children, isOpen, setIsOpen, toggleForm }) {
  return (
    <>
      <div className={style.overlay}>
        <div className={style.formContainer}>
          <button className={style.closeButton} onClick={toggleForm}></button>
          {children}
        </div>
      </div>
    </>
  );
}
