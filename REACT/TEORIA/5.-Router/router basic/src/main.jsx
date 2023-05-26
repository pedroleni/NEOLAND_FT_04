import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import About from "./pages/About/About.jsx";
import NoFound from "./components/NoFound/NoFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/** Le indicamos que la base nuestro enrutado empieza por un / vacio */}
    <BrowserRouter basename="/">
      <Routes>
        {/** Vamos a inicializar la familia de routas y generar las routas singulares de nuestra app */}
        <Route path="/" element={<App />}>
          {/** Vamos a hacer estas routas hijas de app porque queremos utilizar la nueva etiqueta outlet */}
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
