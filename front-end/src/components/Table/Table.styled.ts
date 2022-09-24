import styled from "styled-components";

export const Table = styled.table`
  background-color: white;
  border: 1px solid;

  font-family: "Archivo";
  margin-right: 60px;

  th, td {
    border: 1px solid;
    padding: 20px;
    max-width: 240px;
  }

  td {
    word-break: break-all;
  }
`;
