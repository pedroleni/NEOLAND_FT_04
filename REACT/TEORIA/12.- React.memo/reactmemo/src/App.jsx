import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";

const App = () => {
  const [score, setScore] = useState(0);
  return (
    <>
      <Movie
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
        onChange={(e) => setScore(e.target.value)}
      />
    </>
  );
};

export default App;
