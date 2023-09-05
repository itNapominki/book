import Modal from "../Modal/Modal";
import style from "./FormThanks.module.css";
import thanks from "../../image/check.png"

export default function FormThanks ({toggleForm}) {
    return (
        <Modal toggleForm={toggleForm} > 
        <h3>Спасибо, книга скачалась!</h3>
        <img className={style.img} src={thanks}></img>        
         </Modal>
        
    )
}