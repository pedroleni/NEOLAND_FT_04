import "./Card.css";
const Card = ({ data }) => {
  return (
    <figure>
      <img src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
    </figure>
  );
};

export default Card;
