import style from "./MyButton.module.css";

export default function MyButton({
  onClick,
  disabled,
  type = "button",
  title = "Не внесено",
}) {  
  return (
    <input
      type={type}
      className={`${style.btn} ${disabled && style.err}`}
      onClick={onClick}
      value={title}
    />
  );
}
