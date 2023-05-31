import { useEffect, useRef } from "react";
const InputCustom = () => {
  const inputRef = useRef(null);
  const parrafoRef = useRef(null);

  const viewValue = () => {
    /// el ref se accede a los elementos html pero ahora para cambiar las propiedades hay que hacerlo con el current
    console.log(inputRef.current.value);

    if (inputRef.current.value != "Pedro") {
      parrafoRef.current.style.display = "block";
      parrafoRef.current.style.color = "red";
    } else {
      parrafoRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    parrafoRef.current.style.display = "none";
  }, []);

  return (
    <>
      <input
        type="text"
        name="example"
        id="example"
        ref={inputRef}
        onChange={() => (parrafoRef.current.style.display = "none")}
      />

      <p ref={parrafoRef}>Error nombre no es correcto</p>
      <button onClick={() => viewValue()}>ENVIAR</button>
    </>
  );
};

export default InputCustom;
