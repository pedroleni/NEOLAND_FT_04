import { useEffect } from "react";

const H2custom = () => {
  useEffect(() => {
    console.log("me monton");

    return () => {
      console.log("me desmonto");
    };
  }, []);

  return <h2>El contador vale actualmente 10</h2>;
};

export default H2custom;
