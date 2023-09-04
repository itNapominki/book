import { useState } from "react";
import style from "./SectionBook.module.css";
import Modal from "./components/Modal/Modal";
import book from "./image/book.png";
import MyButton from "./components/MyButton/MyButton";

export default function SectionBook() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className={style.wrapper}>
        <img className={style.imgDesctop} src={book} />
        <div className={style.content}>
          <h3 className={style.title}>
            Инструкция <br></br> по организации поминального обеда
          </h3>

          <p className={`${style.title} ${style.titleDescription}`}>
            Получите бесплатно <br></br> "7 полезных советов по организации
            поминок"
          </p>
          <img className={style.imgMobile} src={book} />
          <MyButton onClick={toggleForm} title="Скачать книгу"></MyButton>
        </div>
      </main>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} toggleForm={toggleForm} />
      )}
    </>
  );
}
