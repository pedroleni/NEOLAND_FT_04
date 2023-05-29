import React, { useEffect } from "react";

const Parrafo = () => {
  useEffect(() => {
    console.log("me monto el parrofo 💖");

    return () => {
      console.log("me desmonto el parrafo💌");
    };
  }, []);

  return <p>Estas en el cuarenta</p>;
};

export default Parrafo;
