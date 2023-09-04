import style from "./MyInput.module.css";

export default function MyInput({
  register,
  name,
  valdation,
  placeholder = "Требуется внести",
}) {
  return (
    <input
      {...register(name, valdation)}
      placeholder={placeholder}
      className={style.wrapper}
    ></input>
  );
}
