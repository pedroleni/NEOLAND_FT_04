import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";
import { useCallback } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  /// --------> LAS FUNCION SON REFERENCIAS DE MEMORIA O POSICIONES DE MORIA
  /// --------> cuando se renderiza el componente de nuevo esta funcion cambia de posicion de memoria
  /// --------> por eso el memo reconoce que hay un cambio en las props y por eso vuelve a renderizar

  const setState = (data) => {
    setScore((value) => {
      console.log(value);
      return value + data;
    });
  };
  /// ----> vamos a memorizar la funcion para que guardemos la posicion de memorio y el react.memo...
  // ... no reconozco que hay un cambio en las props del componente memorizado---> Movie
  const arrowUseCallBack = useCallback(setState, []);

  return (
    <>
      <Movie
        setState={arrowUseCallBack}
        name={"Harry Potter"}
        cover={"https://m.media-amazon.com/images/I/51-g28vUNDL.jpg"}
      />
      <Review score={score} />
      <label htmlFor="score">Por favor introduzca la puntuacion</label>
      <br />
      <input
        type="text"
        name="score"
        id="score"
        onChange={(e) => setScore(parseInt(e.target.value))}
      />
    </>
  );
};

export default App;
