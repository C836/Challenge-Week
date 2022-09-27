import styled from "styled-components";
import { colors } from "../../global";

export const Form = styled.form`
  background-color: ${colors.black};
  padding: 35px;
  border-radius: 20px;
  width: 980px;
  max-width: 90%;
  display: flex;
  column-gap: 30px;

  @media (max-width: 820px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const Input = styled.input`
  background-color: ${colors.gray};
  border-radius: 10px;
  padding: 10px 18px;
  border: none;
  outline: 0;

  font-family: "Archivo";
  font-size: 1rem;

  ::placeholder {
    color: ${colors.black};
  }

  [type="number"] {
    width: 10px;
  }

  @media (max-width: 820px) {
    margin-bottom: 24px;
  }
`;

export const Right = styled.div`
  button {
    background-color: ${colors.yellow};
    padding: 10px 32px;
    border: none;
    border-radius: 10px;

    font-family: "Archivo";
    font-weight: 700;
    font-size: 1rem;

    @media (max-width: 820px) {
      width: 100%;
    }
  }

  @media (min-width: 821px) {
    margin-right: 0;
    margin-left: auto;
  }
`;
