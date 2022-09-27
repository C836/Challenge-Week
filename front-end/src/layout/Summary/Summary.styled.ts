import styled from "styled-components";

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px;

  h1 {
    font-family: "Archivo";
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 16px;

    @media (max-width: 820px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: "Archivo";
    font-size: 1rem;
    text-align: center;
  }
`;
