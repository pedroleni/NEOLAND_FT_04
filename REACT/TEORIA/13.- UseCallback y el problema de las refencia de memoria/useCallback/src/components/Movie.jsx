import { memo } from "react";

//! ------- EL REACT MEMO:
// ------Es un hook para memoriza los componentes
// ------Solo renderiza de nuevo cuando haya una variacion en las props (en su valor) shallowCompare
// ----------1) Si las props su valor, es igual: no renderiza
// ----------2) Si el valor de las props son diferentes: renderiza
const Movie = memo(({ setState, name, cover }) => {
  console.log("me renderizo soy el componente movie");
  return (
    <figure>
      <h1>{name}</h1>
      <img src={cover} alt="" />
      <br />
      <button onClick={() => setState(1)}>
        Cambio con el boton el score de la review
      </button>
    </figure>
  );
});

export default Movie;
