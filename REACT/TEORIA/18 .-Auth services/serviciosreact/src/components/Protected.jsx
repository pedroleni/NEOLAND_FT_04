import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const Protected = ({ children }) => {
  // tendremos que traernos el user del contexto

  const { user } = useAuth();

  if (user == null || user?.check == false) {
    return <Navigate to="/login" />;
  }

  return children;
};
