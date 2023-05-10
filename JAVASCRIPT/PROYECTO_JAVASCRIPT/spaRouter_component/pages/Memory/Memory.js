import "./Memory.css";
import { cardMemory } from "../../components/cardMemory/cardMemory";
// -----> 1) Funcion de template

const template = () => `
<div class="gameMemory">
<section></section>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  cardMemory();
};
