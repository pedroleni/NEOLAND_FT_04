import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header>
      {user == null ? (
        <h1 className="titleHeader">Logueate</h1>
      ) : (
        <h1 className="titleHeader">Bienvenido de nuevo {user}</h1>
      )}
      <nav>
        {user == null && <NavLink to="/login">Login</NavLink>}
        {user !== null && <NavLink to="/content">Contenido</NavLink>}
        <NavLink to="/">Home</NavLink>
        {user !== null && <button onClick={() => logout()}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
