import "./ButtonLarge.css";

const ButtonLarge = ({ setCount }) => {
  return (
    <button
      onClick={() => {
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
