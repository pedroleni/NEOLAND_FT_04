import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

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

      {username == "pedro" && <Message />}
    </>
  );
};

export default SimpleForm;
