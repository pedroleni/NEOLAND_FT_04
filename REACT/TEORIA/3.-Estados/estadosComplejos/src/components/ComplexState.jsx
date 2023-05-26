import { useState } from "react";

const ComplexState = () => {
  const [alum, setAlum] = useState({
    name: "",
    surname: "",
  });

  return (
    <div>
      <h2>
        {alum.name} | {alum.surname}
      </h2>

      {/*vamos a hacer dos input para cambiar el nombre y el apellido de forma dinamica*/}
      <input
        type="text"
        value={alum.name}
        onChange={(e) => {
          setAlum({
            ...alum,
            name: e.target.value,
          });
        }}
      />
      <input
        type="text"
        value={alum.surname}
        onChange={(e) => {
          setAlum({
            ...alum,
            surname: e.target.value,
          });
        }}
      />

      <button onClick={() => console.log(alum)}>Register</button>
    </div>
  );
};

export default ComplexState;
