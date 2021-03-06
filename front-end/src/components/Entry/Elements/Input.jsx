import Unavailable from "../EntryStyle/Img/Eye_Show_Unavailable.png";
import View from "../EntryStyle/Img/Eye_Show_View.png";
const { border } = {
  border: "1px solid red",
};
export const input = (
  type,
  placeholder,
  name,
  register,
  onFocus,
  setOnFocus,
  errors
) => {
  return (
    <>
      <div className={onFocus ? "labelShow" : "labelHiding"}>
        <label>{placeholder}</label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={register}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        style={{ border: errors && border }}
      />
    </>
  );
};

export const inputPass = (
  show,
  setShow,
  placeholder,
  name,
  register,
  onFocus,
  setOnFocus,
  errors
) => {
  return (
    <>
      <div className={onFocus ? "labelShow" : "labelHiding"}>
        <label>{placeholder}</label>
      </div>
      <div className="input_container">
        <input
          type={show ? "text" : "password"}
          className="input"
          placeholder={placeholder}
          name={name}
          ref={register}
          onFocus={() => {
            setOnFocus(true);
          }}
          onBlur={() => {
            setOnFocus(false);
          }}
          style={{ border: errors && border }}
        />
        <img
          src={show ? Unavailable : View}
          className="input_img"
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
    </>
  );
};
