import styled from "@emotion/styled";

export const ButtonNuevaForma = styled.button`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
  background-color: white;

  width: ${({ width }) => width == "largue" && "400px"};
`;
