import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect, useState } from "react";

const useAutoLogin = (res, setOkCheck) => {
  const [resLogin, setResLogin] = useState({
    status: null,
  });
  const { allUser } = useAuth();
  useEffect(async () => {
    const { password, email } = allUser?.data?.user;
    const custoFormData = {
      email,
      password,
    };
    async(setResLogin(await autoLoginUser(custoFormData)))();
  }, []);

  if (resLogin.status == 200) {
    setOkCheck(() => true);
  }

  if (resLogin.stutus !== 200 && res.status !== null) {
    setOkCheck(() => false);
  }
};

export default useAutoLogin;
