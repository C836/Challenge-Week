import { FormEvent, useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

import * as S from "./Form.styled";
import { Class } from "../../types/Student";

type Props = {
  disabled: boolean;
};

export function Form({ disabled }: Props) {
  const { students, createStudent } = useContext(StudentContext);

  const classes = Object.values(Class)
    .filter((v) => isNaN(Number(v)))
    .map((item) => {
      return item;
    });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;

    const { studentName, group, age } = target;

    createStudent({
      _id: students.length + 1,
      name: studentName.value,
      group: group.value,
      age: age.value,
    });
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input
        disabled={disabled}
        type={"text"}
        name={"studentName"}
        placeholder="Nome do Estudante"
        size={24}
      />

      <S.Input
        disabled={disabled}
        as={"select"} 
        name={"group"}
      >
        <option selected disabled={true}>
          Turma
        </option>
        {classes.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </S.Input>

      <S.Input
        disabled={disabled}
        type={"number"}
        name={"age"}
        placeholder="Idade"
        min={18}
        max={100}
      />

      <S.Right>
        <button disabled={disabled}>ENVIAR</button>
      </S.Right>
    </S.Form>
  );
}
