import { useState } from "react";

import "./App.css";
import CounterWithCustomHook from "./components/CounterWithCustomHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterWithCustomHook />
    </>
  );
}

export default App;
