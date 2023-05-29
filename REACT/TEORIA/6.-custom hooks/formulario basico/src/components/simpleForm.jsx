import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  // creamos un estado para setear los datos del formulario
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  // DESENTRUCTURAMMOS LOS ELEMENTOS DEL ESTADO PARA UTLIZARLOS EN EL VALUE DE LOS INPUT
  const { username, email } = formState;
  // FUNCION QUE AFECTA CUANDO CAMBIA UN INPUT
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // HACEMOS UNA COPIA DEL ESTADO Y MODIFICAMOS EL VALOR DEL INPUT QUE CORRESPONDA
    // importante poner el name entre corchete para que coja su valor sino se quedaria como name: ---
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // cada vez que el formulario cambie quiero sacar un console con su valor del estado de los value del input
    console.log(formState);
  }, [formState]);
  return (
    <>
      <h1> SIMPLE FORM</h1>
      <hr />

      <input
        type="text"
        name="username"
        id="username"
        value={username}
        className="form-control"
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        className="form-control mt-2"
        onChange={onInputChange}
      />
      {/* tenemos este componente dde prueba para ver cuando se monta y se desmonta y la inclusion del evento */}
      {username == "pedro" && <Message />}
    </>
  );
};

export default SimpleForm;
