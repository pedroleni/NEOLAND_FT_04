import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { checkCodeConfirmationUser } from "../services/API_proyect/user.service";
import useCheckCodeError from "../hooks/useCheckCodeError";
import { Navigate } from "react-router-dom";

const CheckCode = () => {
  const { allUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  //! -------FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-------
  const formSubmit = async (formData) => {
    const custFormData = {
      confirmationCode: parseInt(formData.confirmationCode),
      email: allUser.data.user.email,
    };
    setSend(true);
    setRes(await checkCodeConfirmationUser(custFormData));
    setSend(false);
  };

  //! --------USE EFFECT QUE NOSC SIRVE CUANDO CAMBIA RES A LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    useCheckCodeError(res, setDeleteUser, setOkCheck);
  }, [res]);

  useEffect(() => {
    console.log(allUser);
  }, [allUser]);

  //! -------- PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)
  if (deleteUser) {
    return <Navigate to="/register" />;
  }

  if (okCheck) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Verify your code 👌</h1>
        <p>Write the code sent to your email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Registration code
            </label>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Verify Code
            </button>
          </div>
          <div className="btn_container">
            <button
              className="btn"
              disabled={send}
              type="submit"
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => {
                handleResend();
              }}
            >
              Resend Code
            </button>
          </div>

          <p className="bottom-text">
            <small>
              If the code is not correct ❌, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </form>
      </div>
    </>
  );
};

export default CheckCode;
