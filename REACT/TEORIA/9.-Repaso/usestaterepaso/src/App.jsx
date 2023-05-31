import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalstorage from "./hooks/useLocalstorage";
import H2custom from "./components/H2custom";

function App() {
  // 1) ---> Inicializacion lazy: podemos inicializar el componente con una callback en la parte del state incial
  const [count, setCount] = useState(() => 0);

  //! ----> Si no tiene array de dependencias siempre se senderice se lanza el useEffect

  // useEffect(() => {
  //   console.log("llamo a la api");

  //   return () => {
  //     console.log("me desmonto");
  //   };
  // });

  //!-----> Siempre que tenga array de dependencias se ejecuta la primera vez del renderizado y si
  //! ----... un elemento en el array cuando este elemnento se modifique

  // useEffect(() => {
  //   console.log("me monto");

  //   return () => {
  //     console.log(" me desmonto");
  //   };
  // }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            setCount((count) => {
              useLocalstorage("count", count + 1, "settear");
              return count + 1;
            })
          }
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {count == 10 && <H2custom />}
    </>
  );
}

export default App;
