export const Quote = ({ author, quote }) => {
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    </>
  );
};
