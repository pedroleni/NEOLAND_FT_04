import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import useForm from "../hooks/useForm";

const SimpleForm = () => {
  /// nos traemos todo lo que necesitamos del hook, lo mas importante sera el estado y la funcion que se ejecuta en el onChange
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  // en el useEffect de nuevo sacamos el valor del estado cuando este valor cambie por eso esta en el array de dependencias

  useEffect(() => {
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
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        className="form-control mt-2"
        onChange={onInputChange}
      />

      {username == "pedro" && <Message />}
    </>
  );
};

export default SimpleForm;
