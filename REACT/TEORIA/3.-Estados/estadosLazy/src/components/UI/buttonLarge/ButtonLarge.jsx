import "./ButtonLarge.css";

const ButtonLarge = ({ children, cambiarEstado, estado }) => {
  return (
    <button
      onClick={() => {
        console.log(cambiarEstado(12));
      }}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;
