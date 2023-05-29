import "./ButtonLarge.css";

const ButtonLarge = ({ children, setCount }) => {
  return (
    <button
      onClick={() => {
        /// CON LA CALLBACK INTERNA PORDEMOS COGER EL VALOR DEL ESTADO
        setCount((value) => {
          const newValue = value + 1;
          console.log(
            "🚀 ~ file: ButtonLarge.jsx:11 ~ setCount ~ newValue:",
            newValue
          );
          localStorage.setItem("count", newValue.toString());
          return newValue;
        });
      }}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;
