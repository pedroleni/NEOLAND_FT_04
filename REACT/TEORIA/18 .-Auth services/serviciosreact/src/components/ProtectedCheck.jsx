import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

const ProtectedCheck = ({ children }) => {
  //allUser.data.user.check = true

  // user.check = true

  // cuando sea true lo mandamos a la dashboard y no le dejamos entrar en la pagina

  const { user, allUser } = useAuth();

  useEffect(() => {
    console.log(
      "🚀 ~ file: ProtectedCheck.jsx:12 ~ ProtectedCheck ~ user:",
      user
    );
  }, [user]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: ProtectedCheck.jsx:12 ~ ProtectedCheck ~ allUser:",
      allUser
    );
  }, [allUser]);

  if (allUser?.data?.user?.check == true || user?.check == true) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedCheck;
