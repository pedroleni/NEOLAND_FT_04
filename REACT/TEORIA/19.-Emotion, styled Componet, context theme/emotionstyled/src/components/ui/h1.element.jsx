import styled from "@emotion/styled";

const H1Custom = styled.h1`
  background-color: blue;
  width: ${({ widthVariant }) =>
    widthVariant == "largo"
      ? "200px"
      : "medio"
      ? "100px"
      : "pequeño" && "50px"};
`;

export const H1C = ({ text, width }) => {
  return <H1Custom widthVariant={width}>{text}</H1Custom>;
};
