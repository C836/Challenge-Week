import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 42px;

  h2,
  span {
    font-family: "Archivo";
    font-weight: 700;
    font-size: 32px;
    padding-top: 30px;
    margin-bottom: 26px;

    @keyframes blink {
      50% {
        color: transparent;
      }
    }

    span {
      animation: 1s blink infinite;
    }

    :nth-child(2) {
      animation-delay: 250ms;
    }
    :nth-child(3) {
      animation-delay: 500ms;
    }
  }
`;
