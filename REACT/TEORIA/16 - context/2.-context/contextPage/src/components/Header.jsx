import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
const Header = () => {
  const { user } = useContext(UserContext);
  return <header>Buenos dias {user}</header>;
};

export default Header;
