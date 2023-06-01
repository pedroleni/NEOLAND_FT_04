import Componente2 from "./Componente2";

const Component1 = ({ saludo, setSaludo }) => {
  console.log("me renderizo componente 1");
  return (
    <div>
      <h1>Soy el componente 1</h1>
      <Componente2 saludo={saludo} setSaludo={setSaludo} />
    </div>
  );
};

export default Component1;
