import React from "react";
import Card from "./Card";

const Seccion = ({ characters }) => {
  console.log("🚀 ~ file: Seccion.jsx:5 ~ Seccion ~ characters:", characters);

  if (characters.error) {
    return <p>Este elemento no se encuentra</p>;
  }
  return (
    <section>
      {characters.results?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Seccion;
