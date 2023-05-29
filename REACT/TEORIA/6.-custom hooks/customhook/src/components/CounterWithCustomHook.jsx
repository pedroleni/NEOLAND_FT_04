import { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import Parrafo from "./Parrafo";

const CounterWithCustomHook = () => {
  // nos traemos el counter con sus funciones correspondientes del useCounter
  const { counter, increment, decrement, reset, resetCustom } = useCounter();

  // aqui podemos ver cuando se monta y se desmonta
  useEffect(() => {
    console.log(" me monto");
    // este return nos devuelve cuando el componente se ha desmontado del viewport
    return () => {
      console.log("me desmonto");
    };
  }, []);

  return (
    <>
      {/* si counter es mas que 40 sacamos el componente parrafo para ver cuando see desmonta y monta */}
      {counter === 40 && <Parrafo />}
      <h1>Counter value: {counter}</h1>
      <hr />

      {/* Ponemos los diferente botones para ver que el customHook funciona  */}
      <button onClick={() => increment(1)} className="btn btn-primary">
        INCREMENT
      </button>
      <button onClick={() => reset()} className="btn btn-primary">
        RESET
      </button>
      <button onClick={() => decrement(1)} className="btn btn-primary">
        DECREMENT
      </button>
      <button onClick={() => resetCustom(40)} className="btn btn-primary">
        RESET CUSTOM
      </button>
    </>
  );
};

export default CounterWithCustomHook;
