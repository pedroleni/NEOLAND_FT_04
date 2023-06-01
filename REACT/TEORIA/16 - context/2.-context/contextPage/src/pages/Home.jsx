import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import "./Home.css";
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <main id="homeContainer">
      <h1>Esta la pagina de home</h1>
      <h2>{user}</h2>
      <input
        type="text"
        name="user"
        id="user"
        onChange={(e) => setUser(e.target.value)}
      />
    </main>
  );
};

export default Home;
