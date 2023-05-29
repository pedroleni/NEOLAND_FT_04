import { useState } from "react";
import { useEffect } from "react";

const Message = () => {
  // en este componente vamos a ver un ejemplo con las coordenadas de donde esta el mouse
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  // en el use useEffect cuando se monta, creamos un evento al window y cuando se desmonte importa es que quitemos ese evento
  useEffect(() => {
    console.log("me monto mensaje");
    const onMouseMove = ({ x, y }) => {
      /// EJEMPLO CON UN BUCLE PORQUE ES IMPORTANTE SACAR EL EVENTO EN EL RETURN DEL useEffects
      for (let i = 0; i < 2000; i++) {
        console.log("hola");
      }
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // cuando se desmonta quitamos el evento para que no se acumulen
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};

export default Message;
