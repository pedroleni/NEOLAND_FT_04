import "./ButtonLarge.css";

const ButtonLarge = ({ children, cambiarEstado, estado }) => {
  return (
    <button
      onClick={() => {
        cambiarEstado(1);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;
