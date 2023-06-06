import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { autoLoginUser } from "../services/API_proyect/user.service";

const useAutoLogin = async () => {
  try {
    const { allUser, userlogin } = useAuth();
    const { password, email } = allUser?.data?.user;
    const custoFormData = {
      email,
      password,
    };
    const setData = await autoLoginUser(custoFormData);
    if (setData.status == 200) {
      const dataCustom = {
        token: setData.data.token,
        user: setData.data.user.name,
        email: setData.data.user.email,
        image: setData.data.user.image,
        check: setData.data.user.check,
      };

      const dataSting = JSON.stringify(dataCustom);
      userlogin(dataSting);
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error);
  }
};

export default useAutoLogin;
