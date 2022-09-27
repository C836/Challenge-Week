import { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

import * as S from "./Table.styled";

export function Table() {
  const { students, deleteStudent } = useContext(StudentContext);

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
              <th scope="row">{item._id}</th>
              <td>{item.name}
                <S.Delete onClick={() => deleteStudent(item._id)}>X</S.Delete>
              </td>
              <td>{item.group}</td>
              <td>{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
}
