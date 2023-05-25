import { useEffect, useState } from "react";
import "./App.css";
import ButtonLarge from "./components/UI/buttonLarge/ButtonLarge";

function App() {
  //! estado en lazy --> coge el estado del localstorage
  const [count, setCount] = useState(() => {
    return !localStorage.getItem("count")
      ? 0
      : parseInt(localStorage.getItem("count"));
  });
  //! funcion seteadora del estado que se encuentra en el padre aunque la utilice el hijo
  const setCountState = (data) => {
    // me hago una constante y sumo el valor del estado actual a lo que recibo por la funcion
    const updateCount = count + data;

    // lo seteo en el localstorage
    localStorage.setItem("count", updateCount);

    // lo saco por consola para comprobar que este correcto

    console.log(updateCount);

    // seteo el estado lo que hace que haya un render de la parte que utilice le estado.
    setCount(updateCount);
  };

  return (
    <>
      <h1>Contador de nuestro primera APP</h1>
      <p>El valor del contador es {count}</p>

      <ButtonLarge cambiarEstado={setCountState} estado={getCountState}>
        Cambiar el estado del contador
      </ButtonLarge>
    </>
  );
}

export default App;
