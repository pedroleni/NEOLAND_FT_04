import { useState } from "react";

const useCounter = (initialValue = 10) => {
  // el estado lo va a gestionar este customHook
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    setCounter(counter - value);
  };

  // este lo que hace es setear el estado a su valor inicial
  const reset = () => {
    setCounter(initialValue);
  };

  const resetCustom = (value = 20) => {
    setCounter(value);
  };
  // DEVOLVEMOS EL COUNTER Y LAS FUNCIONES QUE MODIFICAN EL ESTADO
  return {
    counter,
    increment,
    decrement,
    reset,
    resetCustom,
  };
};

export default useCounter;
