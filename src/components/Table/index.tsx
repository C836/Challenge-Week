import * as S from "./Table.styled";
import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

export function Table() {
  const { students } = useContext(StudentContext);

  return (
    <S.Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome do Estudante</th>
          <th>Turma</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
}
