import { filterPokemon } from "../../utils/dataPokemon";
import "./ButtonPokemon.css";

//! ----------------------------------------------------------------
//?--------------- PINTAR LOS BOTONES DE LOS TYPES------------------
//! ----------------------------------------------------------------

export const printButtons = (types) => {
  types.forEach((type) => {
    const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
    const buttonType = `<button class="buttonFilter ${type}" id=>${type}</button>`;
    const filterButton = document.getElementById("filterButton");
    filterButton.innerHTML += buttonType;
  });
  /// me llamo a meter los escuchadores de eventos porque ya tengo los elementos html disponibles
  addListeners(types);
};

//! ----------------------------------------------------------------
//?--------------- EVENTOS DE LOS ELEMENTOS HTML -------------------
//! ----------------------------------------------------------------

//TODO --> Añadimos los escuchadores de eventos
const addListeners = (types) => {
  /// ------Meter los eventos de los botones

  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);

    buttonType.addEventListener("click", (e) => {
      filterPokemon(type, "type");
    });
  });
};
