import "./Manga.css";

// -----> 1) Funcion de template

const template = () => `Esto en manga`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
