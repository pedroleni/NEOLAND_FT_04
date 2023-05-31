import { memo } from "react";

const Movie = memo(({ name, cover }) => {
  console.log("me renderizo soy el componente movie");
  return (
    <figure>
      <h1>{name}</h1>
      <img src={cover} alt="" />
    </figure>
  );
});

export default Movie;
