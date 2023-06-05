import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import {
  checkCodeConfirmationUser,
  autoLoginUser,
  resendCodeConfirmationUser,
  loginUser,
} from "../services/API_proyect/user.service";
import useCheckCodeError from "../hooks/useCheckCodeError";
import { Navigate } from "react-router-dom";
import useAutoLogin from "../hooks/useAutoLogin";

const CheckCode = () => {
  const { allUser, userlogin } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [resend, setReSend] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [okCheck, setOkCheck] = useState(false);
  const [okLogin, setOkLogin] = useState(null);

  //! -------FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-------
  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");
    if (resend) {
      /// cuando el user este en null eso quiere decir que no estas logado
      if (userLocal == null) {
        const formDataCustom = { email: allUser.data?.user?.email };
        console.log(formDataCustom);
        setSend(true);
        setResResend(await resendCodeConfirmationUser(formDataCustom));
        setSend(false);
        setReSend(false);
      } else {
        // cuando no sea nulll quiere decir que la llamada la estoy haciendo despues de logarme
        const parseUser = JSON.parse(userLocal);
        const formDataCustom = { email: parseUser.email };
        setSend(true);
        setResResend(await resendCodeConfirmationUser(formDataCustom));
        setSend(false);
        setReSend(false);
      }
    } else {
      if (userLocal == null) {
        const custFormData = {
          confirmationCode: parseInt(formData.confirmationCode),
          email: allUser.data.user.email,
        };
        setSend(true);
        setRes(await checkCodeConfirmationUser(custFormData));
        setSend(false);
      } else {
        const parseUser = JSON.parse(userLocal);
        const custFormData = {
          confirmationCode: parseInt(formData.confirmationCode),
          email: parseUser.email,
        };
        setSend(true);
        setRes(await checkCodeConfirmationUser(custFormData));
        setSend(false);
      }
    }
  };
  //! --------USE EFFECT QUE NOSC SIRVE CUANDO CAMBIA RES A LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    useCheckCodeError(res, setDeleteUser, setOkCheck);
  }, [res]);

  useEffect(() => {
    console.log(resResend);
  }, [resResend]);

  //! -------- PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)
  // if (okLogin) {
  //   return <Navigate to="/dashboard" />;
  // }

  // if (okLogin == false) {
  //   return <Navigate to="/login" />;
  // }

  if (deleteUser) {
    return <Navigate to="/register" />;
  }
  if (okCheck) {
    // setOkCheck(() => false);
    // return useAutoLogin(res);
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
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Registration code
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
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
              id="btnResend"
              className="btn"
              disabled={send}
              type="submit"
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => setReSend(() => true)}
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
