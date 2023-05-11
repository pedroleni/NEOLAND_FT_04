import { setDataGlobalRefrest } from "../../data/data";
import { refrestDataApp } from "../../utils/dataGlobal";
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
        <figure id="figureManga" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682675698/generos-de-manga-y-su-significado-1-1024x681_px62c6.jpg"
            alt="navigate to page manga"
            id="imgManga"
          />
          <h2>Manga</h2>
        </figure>
      </li>
      <li>
        <figure id="figureAnime" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682675855/animes_bqalo4.webp"
            alt="navigate to anime page"
            id="imgAnime"
          />
          <h2>Anime</h2>
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
    refrestDataApp();
  });
  const imgManga = document.getElementById("imgManga");
  imgManga.addEventListener("click", () => {
    initControler("Manga");
  });
  const imgAnime = document.getElementById("imgAnime");
  imgAnime.addEventListener("click", () => {
    initControler("Anime");
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
};
