import styled from "styled-components";

export const Delete = styled.span`
  display: none;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const Table = styled.table`
  background-color: white;
  border: 1px solid;

  font-family: "Archivo";
  margin-right: 60px;

  th,
  td {
    border: 1px solid;
    padding: 20px;
    max-width: 240px;

    @media (max-width: 1050px) {
      padding: 16px;
    }
  }

  td {
    word-break: break-all;
  }

  tr:hover ${Delete} {
    display: block;
  }

  td:nth-of-type(1) {
    position: relative;
    padding-right: 45px;

    @media (max-width: 1050px) {
      padding-right: 16px;
    }
  }

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
  }
`;
