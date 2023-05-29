import { useState } from "react";
import { useEffect } from "react";

const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    console.log("me monto mensaje");
    const onMouseMove = ({ x, y }) => {
      for (let i = 0; i < 2000; i++) {
        console.log("hola");
      }
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
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
