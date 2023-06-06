import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const Protected = ({ children }) => {
  // tendremos que traernos el user del contexto

  const { user, allUser } = useAuth();

  if (
    user == null ||
    allUser?.data?.user?.check == false ||
    user?.check == false
  ) {
    return <Navigate to="/login" />;
  }

  return children;
};
