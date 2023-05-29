import React, { useEffect } from "react";

const Parrafo = () => {
  // vamos a ver cuando se monta y se desmonta en el render de la aplicacición
  useEffect(() => {
    console.log("me monto el parrofo 💖");

    return () => {
      console.log("me desmonto el parrafo💌");
    };
  }, []);

  return <p>Estas en el cuarenta</p>;
};

export default Parrafo;
