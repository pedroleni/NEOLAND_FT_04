import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import H1 from "./components/h1/H1";

function App() {
  const [count, setCount] = useState(0);

  const init = () => {
    setCount(13);
    initTwo();
  };

  const initTwo = () => {
    // aqui sigue siendo 0, porque esto es asincrono
    console.log("🚀 ~ file: App.jsx:16 ~ App ~ count:", count);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div>
        {console.log("🚀 ~ file: App.jsx:26 ~ App ~ count:", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {
        // Para meter codigo de javascript en el return hay que abrir y  cerrar llaves
        // Abajo estamos metiendo un componen al cual le pasamos una prop la cual se llama title
        // este title este recibiendo el valor del estado contador
      }
      <H1 title={setCount} count={count}></H1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
