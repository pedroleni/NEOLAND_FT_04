import { initControler } from "../../utils/route";
import "./Login.css";

// -----> 1) Funcion de template

const template = () => `
  <input type="text" name="" id="" />
  <button id="buttonLogin">LOGIN</button>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", () => {
    const inputLogin = document.querySelector("input");
    localStorage.setItem("user", inputLogin.value);
    if (localStorage.getItem("user"))
      document.querySelector("nav").style.display = "flex";
    initControler();
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addListeners();
};
