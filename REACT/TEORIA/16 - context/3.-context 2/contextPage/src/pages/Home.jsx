import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import "./Home.css";
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <main id="homeContainer" className="containerMain">
      <h1>Esta la pagina de home</h1>
      <h2>{user}</h2>
    </main>
  );
};

export default Home;
