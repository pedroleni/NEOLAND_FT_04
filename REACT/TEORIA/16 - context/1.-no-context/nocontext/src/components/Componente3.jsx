const Componente3 = ({ saludo, setSaludo }) => {
  console.log("me renderizo componente 3");
  return (
    <div>
      <h1>{saludo}</h1>
      <h3>Soy el componente 3</h3>
      <button onClick={() => setSaludo((value) => value + 1)}>
        CAMBIAR ESTADO
      </button>
    </div>
  );
};

export default Componente3;
