import "./CardPokemon.css";
//! ----------------------------------------------------------------
//? ------------------ COMPONENTE QUE PINTA LAS CARTAS--------------
//! ----------------------------------------------------------------
export const createAndPrintFigure = (data) => {
  //borramos primero la galleria por si hubiera algun elemento pintado de antes
  document.querySelector(".galleryPokemon").innerHTML = "";
  // mapeamos la data para crear un figure de cada elemento que mandaremos a inyectar a la galeria
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name}</h2>
      </figure>
    `;
    // una vez creado el figure se lo inyectamos a la galeria con un += para que vaya sumando a lo que ya tiene
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};
