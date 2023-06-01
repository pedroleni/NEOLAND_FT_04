import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const [saludo, setSaludo] = useState("Buenos dias");

  return (
    <>
      <Component1 saludo={saludo} setSaludo={setSaludo} />
    </>
  );
}

export default App;
