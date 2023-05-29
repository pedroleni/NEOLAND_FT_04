import { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import Parrafo from "./Parrafo";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset, resetCustom } = useCounter();
  useEffect(() => {
    console.log(" me monto");

    return () => {
      console.log("me desmonto");
    };
  }, []);

  return (
    <>
      {counter === 40 && <Parrafo />}
      <h1>Counter value: {counter}</h1>
      <hr />
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
