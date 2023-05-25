import { useEffect, useState } from "react";
import "./App.css";
import ButtonLarge from "./components/UI/ButtonLarge/ButtonLarge";

function App() {
  const [count, setCount] = useState(() => {
    return !localStorage.getItem("count")
      ? 0
      : parseInt(localStorage.getItem("count"));
  });

  const setCountState = (data) => {
    console.log(data);
    setCount(count + data);
  };

  const getCountState = () => {
    return count;
  };

  return (
    <>
      <h1>Contador de nuestro primera APP</h1>
      <p>El valor del contador es {count}</p>
      {console.log(count)}
      <ButtonLarge cambiarEstado={setCountState} estado={getCountState}>
        Cambiar el estado del contador
      </ButtonLarge>
    </>
  );
}

export default App;
