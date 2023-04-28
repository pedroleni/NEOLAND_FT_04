import { changeColor } from "../../utils/changeColor";
import { initControler } from "../../utils/route";
import "./Header.css";

// -----> 1) Funcion de template

const template = () => `
  <img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />

    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {
  // evento de el boton de cambiar de color
  const buttonChangeColor = document.querySelector("#changeColor");
  buttonChangeColor.addEventListener("click", () => {
    const color = changeColor();
    document.body.style.background = color;
  });
  // evento de el boton de ir a home
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", () => {
    initControler("Dashboard");
  });
  // evento del boton logout
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    console.log(e);
    localStorage.removeItem("user");
    initControler("Login");
    if (!localStorage.getItem("user"))
      document.querySelector("nav").style.display = "none";
  });
};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
