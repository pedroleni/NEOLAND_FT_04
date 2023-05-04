import axios from "axios";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <input type="text" />
  </div>
`;

export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

const api = axios.create({
  baseURL: "https://backgamenodejs-production.up.railway.app/api/v1",
  timeout: 10000,
  headers: APIHeaders,
});

api.get("/articulo").then((res) => console.log(res.data.data));

document.querySelector("input").addEventListener("input", (e) => {
  console.log(e.target.value);
});
