import "./H1.css";

import React from "react";
/// ----> rafce
// con este snippe se os crea directamente un componente con la estructura deel componente
const H1 = (props) => {
  // hacemos destructuring de las prop
  // tenemos que hacer destrructuring del objeto de las props const H1 = ({title})
  // abajo cuando hacemos destructuring se meteria directamente en el h1 el title
  return <div>El contado vale este valor: {props.title}</div>;
};

export default H1;
