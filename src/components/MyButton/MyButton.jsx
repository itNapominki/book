import style from "./MyButton.module.css";

export default function MyButton({
  id,
  onClick,
  disabled,
  type = "button",
  title = "Не внесено",
}) {  
  return (
    <input id={id}
      type={type}
      className={`${style.btn} ${disabled && style.err}`}
      onClick={onClick}
      value={title}
    />
  );
}
