import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import style from "./Modal.module.css";
import bookPDF from "../../image/Instruction.pdf";

import { useForm } from "react-hook-form";

export default function Modal({ isOpen, setIsOpen, toggleForm }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsOpen(false);
    // Создаем ссылку на файл PDF
    const link = document.createElement("a");
    link.href = bookPDF;
    link.download = "Инстркция по организации поминального обеда.pdf";
    // Добавляем ссылку на страницу и эмулируем клик для скачивания файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validationData = {
    name: {
      required: "Поле 'Введите имя' должно быть заполнено",
      minLength: 2,
      message: "Please, add your last name",
    },
    phone: {
      required: "Поле 'Введите летефон' должно быть заполнено",
      pattern: /^[+8]/,
      minLength: 10,
      maxLength: 20,
      message: "Please, add your last name",
    },
  };

  const isErrors = errors.phone || errors.name ? true : false;

  return (
    <>
      <div className={style.overlay}>
        <div className={style.formContainer}>
          <button className={style.closeButton} onClick={toggleForm}></button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.wrapper}>
              <h3>
                Получить инструкцию <br></br>
                <span>по организации поминок</span>
              </h3>
              <p>
                В случае ошибки скачивания мы отправим вам книгу по WhatsApp{" "}
              </p>
              <MyInput
                register={register}
                valdation={validationData.name}
                name="name"
                placeholder="Введите имя"
              ></MyInput>

              <p className={style.errors}>{errors.name?.message}</p>
              <MyInput
                register={register}
                valdation={validationData.phone}
                name="phone"
                placeholder="Введите телефон"
              ></MyInput>
              <p className={style.errors}>{errors.phone?.message}</p>
              <MyButton
                disabled={isErrors}
                type="submit"
                title="Получить книгу"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
