import style from "./FormLoadBook.module.css";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import bookPDF from "../../image/Instruction.pdf";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { postContactToMail } from "../../utils/fetch";

export default function FormLoadBook({
  setIsOpenThanks,
  isOpen,
  setIsOpen,
  toggleForm,
}) {
  // https://napominki.ru/wp-content/themes/theme/assets/img/book.pdf

  const {
    register,
    handleSubmit,    
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    // отправляем сообщение по почте
    const values = getValues(); // Получаем значения полей формы    
    postContactToMail(values);
    // закрываем popup
    setIsOpen(false);
    // Создаем ссылку на файл PDF
    const link = document.createElement("a");
    link.href = bookPDF;
    link.download = "Инстркция по организации поминального обеда.pdf";
    // Добавляем ссылку на страницу и эмулируем клик для скачивания файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // открываем подтверждение спустя 3 секунды
    setTimeout(function () {
      setIsOpenThanks(false);
    }, 1000);
  };

  const validationData = {
    name: {
      required: "Поле 'Введите имя' должно быть заполнено",
      minLength: {
        value: 2,
        message: "Имя слишком короткое",
      },
    },
    phone: {
      required: "Поле 'Введите телефон' должно быть заполнено",
      pattern: /^[+8]/,
      minLength: {
        value: 10,
        message: "Номер телефона слишком короткий",
      },
      maxLength: {
        value: 20,
        message: "Номер телефона слишком длинный",
      },
    },
  };

  const isErrors = errors.phone || errors.name ? true : false;

  return (
    <>
      <Modal toggleForm={toggleForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.wrapper}>
            <h3>
              Получить инструкцию <br></br>
              <span>по организации поминок</span>
            </h3>
            <p>В случае ошибки скачивания мы отправим вам книгу по WhatsApp</p>
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
      </Modal>
    </>
  );
}
