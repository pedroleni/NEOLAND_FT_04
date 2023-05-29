import { useState } from "react";
import "./App.css";
import ButtonLarge from "./components/UI/buttonLarge/ButtonLarge";

export const App = () => {
  //! estado en lazy --> coge el estado del localstorage
  const [count, setCount] = useState(() => {
    return !localStorage.getItem("count")
      ? 0
      : parseInt(localStorage.getItem("count"));
  });

  return (
    <>
      <h1>Contador de nuestro primera APP</h1>
      <p>El valor del contador es {count}</p>
      {/* madamons el setcount para el hijo cambie el estado al padre */}
      <ButtonLarge setCount={setCount}>
        Cambiar el estado del contador
      </ButtonLarge>
    </>
  );
};
