import { initControler } from "../../utils/route";
import "./Dashboard.css";

// -----> 1) Funcion de template
const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="figurePokemon" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682692347/720x540_nudu1z.jpg"
            alt="navigate to page pokemon"
            id="imgPokemon"
          />
          <h2>Pokemon</h2>
        </figure>
      </li>

      <li>
        <figure id="figureWacka" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/dh9z8mk2j/image/upload/v1683567229/Bootcamp/B.Abril2023/wakatopo_uree9x.jpg"
            alt="navigate to page Wacka"
            id="imgWacka"
          />
          <h2>Wacka</h2>
        </figure>
      </li>
      <li>
        <figure id="figureMemory" class="figureDashboard">
          <img
            src="https://i.etsystatic.com/27759810/r/il/f178f4/3661501502/il_1588xN.3661501502_3dzo.jpg"
            alt="navigate to memory page"
            id="imgMemory"
          />
          <h2>Memory game</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const imgPokemon = document.getElementById("imgPokemon");
  imgPokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const imgManga = document.getElementById("imgWacka");
  imgManga.addEventListener("click", () => {
    initControler("Wacka");
  });
  const imgAnime = document.getElementById("imgMemory");
  imgAnime.addEventListener("click", () => {
    initControler("Memory");
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
