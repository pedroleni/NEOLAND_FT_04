import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";

// -----> 1) Funcion de template

const template = () => ` <div class="galleryPokemon"></div>`;

// ----> 2) Eventos de nuestros elementos html
const dataService = async () => {
  const getData = await dataPokemon();
  getData.map((pokemon) => {
    const templateFigure = `
      <figure class="figurePokemon">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
      </figure>
    `;

    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};
