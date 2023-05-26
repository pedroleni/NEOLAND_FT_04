import React from "react";

const Image = ({ source, description }) => {
  // recibe la source de la imagen y el alt y lo devuelve
  return <img src={source} alt={description} />;
};

export default Image;
