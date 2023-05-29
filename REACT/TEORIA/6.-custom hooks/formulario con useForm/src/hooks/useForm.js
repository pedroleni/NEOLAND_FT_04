import { useState } from "react";
// el initialstate nos permite que nuestro formulario pueda tener un objeto diferente dependiendo de donde se llame

// es un hook desacoplado para que sea lo mas versatil y reutilizable posible
const useForm = (initialState = {}) => {
  /// toda la logica habia en el proyecto anterior en el componete del formulario, ahora esta en el hook
  const [formState, setFormState] = useState(initialState);

  // esta sera la funcion que recibira el target del input del onChange
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    // ya sabeis copiar el estado, y modifcar las propiedades segun en que input con su name se llame en el onChange
    setFormState({ ...formState, [name]: value });
  };
  // hacemos una funcion para volver al formulario a su estado incial con el initialstate que recibimos al llamar al hook el componente
  const onResetForm = () => {
    setFormState(initialState);
  };
  // enviamos una copia del estaod y añadimos las funciones siguientes
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
