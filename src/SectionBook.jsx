import { useEffect, useState } from "react";
import style from "./SectionBook.module.css";
import book from "./image/book.png";
import MyButton from "./components/MyButton/MyButton";
import FormLoadBook from "./components/FormLoadBook/FormLoadBook";
import FormThanks from "./components/FormThanks/FormThanks";

export default function SectionBook() {
  const [isOpenFormLoad, setIsOpenFormLoad] = useState(false);
  const [isOpenFormThanks, setIsOpenFormThanks] = useState(false);

  const toggleFormLoad = () => {
    setIsOpenFormLoad(!isOpenFormLoad);
  };

  const toggleFormThanks = () => {
    setIsOpenFormThanks(!isOpenFormThanks);
  };

  // Закрываем подтверждение спустя 2 секунды
  useEffect(() => {    
    if (isOpenFormThanks) {
      setTimeout(function () {
        setIsOpenFormThanks(false);
      }, 2000);
    }
  }, [isOpenFormThanks]);

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
          <MyButton onClick={toggleFormLoad} title="Скачать книгу"></MyButton>
        </div>
      </main>
      {isOpenFormLoad && (
        <FormLoadBook
          isOpen={isOpenFormLoad}
          setIsOpen={setIsOpenFormLoad}
          setIsOpenThanks={toggleFormThanks}
          toggleForm={toggleFormLoad}
        />
      )}

      {isOpenFormThanks && (
        <FormThanks toggleForm={toggleFormThanks}></FormThanks>
      )}
    </>
  );
}
