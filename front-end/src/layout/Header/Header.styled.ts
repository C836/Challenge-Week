import styled from "styled-components";
import { colors } from "../../global";

export const Header = styled.header`
  height: 153px;
  background-color: ${colors.black};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h1`
  color: ${colors.yellow};
  letter-spacing: 3px;
  font-family: "Archivo";
  font-size: 34px;
  font-weight: 800;
`