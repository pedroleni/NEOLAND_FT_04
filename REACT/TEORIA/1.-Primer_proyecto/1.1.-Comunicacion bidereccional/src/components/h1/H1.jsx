import "./H1.css";

import React from "react";
/// ----> rafce
// con este snippe se os crea directamente un componente con la estructura deel componente
const H1 = (props) => {
  // hacemos destructuring de las prop
  // tenemos que hacer destrructuring del objeto de las props const H1 = ({title})
  // abajo cuando hacemos destructuring se meteria directamente en el h1 el title
  // esta etiqueta vacia <> es un fragment esto es porque siempre en el return necesitamos un elemento padre
  return (
    <>
      <h1>El contado vale este valor: {props.count}</h1>

      {/* el button controla el cambio de estado del padre */}
      <button onClick={() => props.title(props.count + 1)}>
        {" "}
        Este es el boton del hijo
      </button>
    </>
  );
};

export default H1;
