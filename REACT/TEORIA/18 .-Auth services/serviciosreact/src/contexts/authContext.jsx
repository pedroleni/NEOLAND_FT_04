import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  /// ESTADO DEL ESTADO

  const [user, setUser] = useState(() => {
    if (localStorage.getItem("user")) {
      return localStorage.getItem("user");
    } else {
      return null;
    }
  });

  const [allUser, setAllUser] = useState({});

  const bridgeData = (state) => {
    const data = localStorage.getItem("data");
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    switch (state) {
      case "ALLUSER":
        setAllUser(dataJson);
        localStorage.removeItem("data");
        break;

      default:
        break;
    }
  };

  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/home", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      allUser,
      setAllUser,
      bridgeData,
    }),
    [user, allUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook que nos provee del contexto

export const useAuth = () => {
  return useContext(AuthContext);
};
