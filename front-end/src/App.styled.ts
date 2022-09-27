import styled from "styled-components";

export const Main = styled.div`
  padding: 30px;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Data = styled.div`
  width: 1050px;
  max-width: calc(90% + 48px);
  margin-top: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 0;
    row-gap: 50px;
  }
`;
